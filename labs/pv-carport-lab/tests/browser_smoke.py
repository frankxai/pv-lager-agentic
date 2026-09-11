#!/usr/bin/env python3
"""Dependency-free CDP smoke proof for the PV Carport Lab prototype.

This starts only a loopback HTTP server and a fresh headless Chrome profile owned by
this process. It exercises the prototype at desktop and mobile viewports, requires a
safe educational route for a prohibited structural connector, fails on browser console
errors or horizontal overflow, and removes its exact server/browser/profile resources.
"""

from __future__ import annotations

import base64
import hashlib
import http.client
import json
import os
import secrets
import shutil
import socket
import struct
import subprocess
import sys
import time
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import urlparse

LAB_ROOT = Path(__file__).resolve().parents[1]
PROTOTYPE_ROOT = LAB_ROOT / "prototype"
CHROME_CANDIDATES = (
    Path(os.environ.get("PROGRAMFILES", r"C:\\Program Files")) / "Google/Chrome/Application/chrome.exe",
    Path(os.environ.get("PROGRAMFILES(X86)", r"C:\\Program Files (x86)")) / "Google/Chrome/Application/chrome.exe",
)


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, _format: str, *_args: object) -> None:
        pass

    def handle(self) -> None:
        try:
            super().handle()
        except ConnectionResetError:
            # Chrome may cancel speculative loopback requests during navigation.
            pass


def free_loopback_port() -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
        probe.bind(("127.0.0.1", 0))
        return int(probe.getsockname()[1])


def start_server() -> tuple[ThreadingHTTPServer, Thread, int]:
    handler = lambda *args, **kwargs: QuietHandler(*args, directory=str(PROTOTYPE_ROOT), **kwargs)
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    worker = Thread(target=server.serve_forever, name="pv-carport-browser-smoke-http", daemon=True)
    worker.start()
    return server, worker, int(server.server_address[1])


def chrome_path() -> Path:
    for candidate in CHROME_CANDIDATES:
        if candidate.is_file():
            return candidate
    raise RuntimeError("Chrome was not found at the supported Windows locations")


def chrome_targets(port: int) -> list[dict[str, object]]:
    connection = http.client.HTTPConnection("127.0.0.1", port, timeout=1)
    try:
        connection.request("GET", "/json")
        response = connection.getresponse()
        if response.status != 200:
            raise RuntimeError(f"CDP endpoint returned HTTP {response.status}")
        return json.loads(response.read().decode("utf-8"))
    finally:
        connection.close()


def wait_for_targets(port: int, timeout: float = 12) -> list[dict[str, object]]:
    deadline = time.monotonic() + timeout
    last_error: Exception | None = None
    while time.monotonic() < deadline:
        try:
            targets = chrome_targets(port)
            if targets:
                return targets
        except (OSError, RuntimeError, json.JSONDecodeError) as error:
            last_error = error
        time.sleep(0.15)
    raise RuntimeError(f"Chrome CDP did not become ready: {last_error}")


class CdpSocket:
    def __init__(self, endpoint: str) -> None:
        parsed = urlparse(endpoint)
        if parsed.scheme != "ws" or not parsed.hostname or not parsed.port:
            raise RuntimeError(f"unexpected CDP websocket endpoint: {endpoint}")
        self.socket = socket.create_connection((parsed.hostname, parsed.port), timeout=8)
        key = base64.b64encode(secrets.token_bytes(16)).decode("ascii")
        request = (
            f"GET {parsed.path or '/'}{('?' + parsed.query) if parsed.query else ''} HTTP/1.1\r\n"
            f"Host: {parsed.hostname}:{parsed.port}\r\n"
            "Upgrade: websocket\r\nConnection: Upgrade\r\n"
            f"Sec-WebSocket-Key: {key}\r\nSec-WebSocket-Version: 13\r\n\r\n"
        ).encode("ascii")
        self.socket.sendall(request)
        response = self._read_http_headers()
        expected = base64.b64encode(hashlib.sha1((key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11").encode("ascii")).digest()).decode("ascii")
        if " 101 " not in response.split("\r\n", 1)[0] or f"sec-websocket-accept: {expected.lower()}" not in response.lower():
            raise RuntimeError("Chrome rejected the CDP websocket handshake")
        self.next_id = 1

    def _read_http_headers(self) -> str:
        data = b""
        while b"\r\n\r\n" not in data:
            chunk = self.socket.recv(4096)
            if not chunk:
                raise RuntimeError("CDP websocket closed during handshake")
            data += chunk
        return data.decode("iso-8859-1")

    def _read_exact(self, length: int) -> bytes:
        chunks: list[bytes] = []
        remaining = length
        while remaining:
            chunk = self.socket.recv(remaining)
            if not chunk:
                raise RuntimeError("CDP websocket closed unexpectedly")
            chunks.append(chunk)
            remaining -= len(chunk)
        return b"".join(chunks)

    def _send(self, message: dict[str, object]) -> None:
        payload = json.dumps(message, separators=(",", ":")).encode("utf-8")
        size = len(payload)
        if size < 126:
            header = bytes([0x81, 0x80 | size])
        elif size < 65536:
            header = bytes([0x81, 0x80 | 126]) + struct.pack("!H", size)
        else:
            header = bytes([0x81, 0x80 | 127]) + struct.pack("!Q", size)
        mask = secrets.token_bytes(4)
        masked = bytes(byte ^ mask[index % 4] for index, byte in enumerate(payload))
        self.socket.sendall(header + mask + masked)

    def _receive(self) -> dict[str, object]:
        first, second = self._read_exact(2)
        opcode = first & 0x0F
        masked = bool(second & 0x80)
        length = second & 0x7F
        if length == 126:
            length = struct.unpack("!H", self._read_exact(2))[0]
        elif length == 127:
            length = struct.unpack("!Q", self._read_exact(8))[0]
        mask = self._read_exact(4) if masked else b""
        payload = self._read_exact(length)
        if masked:
            payload = bytes(byte ^ mask[index % 4] for index, byte in enumerate(payload))
        if opcode == 8:
            raise RuntimeError("CDP websocket closed")
        if opcode != 1:
            return self._receive()
        return json.loads(payload.decode("utf-8"))

    def command(self, method: str, params: dict[str, object] | None = None, timeout: float = 10) -> tuple[dict[str, object], list[dict[str, object]]]:
        request_id = self.next_id
        self.next_id += 1
        self._send({"id": request_id, "method": method, "params": params or {}})
        deadline = time.monotonic() + timeout
        events: list[dict[str, object]] = []
        while time.monotonic() < deadline:
            self.socket.settimeout(max(0.05, deadline - time.monotonic()))
            message = self._receive()
            if message.get("id") == request_id:
                if "error" in message:
                    raise RuntimeError(f"CDP {method} failed: {message['error']}")
                return message, events
            events.append(message)
        raise RuntimeError(f"CDP {method} timed out")

    def close(self) -> None:
        self.socket.close()


def evaluate(cdp: CdpSocket, expression: str) -> object:
    response, _ = cdp.command("Runtime.evaluate", {"expression": expression, "returnByValue": True, "awaitPromise": True})
    result = response.get("result", {}).get("result", {})
    if "exceptionDetails" in response.get("result", {}):
        raise RuntimeError(f"prototype evaluation exception: {response['result']['exceptionDetails']}")
    return result.get("value")


def navigate(cdp: CdpSocket, url: str) -> None:
    cdp.command("Page.navigate", {"url": url})
    deadline = time.monotonic() + 10
    while time.monotonic() < deadline:
        ready = evaluate(cdp, "document.readyState")
        if ready == "complete":
            return
        time.sleep(0.1)
    raise RuntimeError("prototype did not reach document.readyState=complete")


def exercise_viewport(cdp: CdpSocket, url: str, name: str, width: int, height: int, mobile: bool) -> None:
    cdp.command("Emulation.setDeviceMetricsOverride", {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": mobile})
    navigate(cdp, url)
    evidence = evaluate(
        cdp,
        """(() => {
          const connector = document.querySelector('[data-choice-group="print"] [data-value="structural-connector"]');
          const form = document.getElementById('readiness-form');
          const heading = document.getElementById('hero-title');
          if (!connector || !form || !heading) return { missing: true };
          connector.click();
          form.requestSubmit();
          const warning = document.getElementById('print-warning')?.textContent || '';
          const output = document.getElementById('output-content');
          return {
            missing: false,
            title: heading.textContent || '',
            outputActive: output?.classList.contains('active') === true,
            warning,
            width: window.innerWidth,
            documentWidth: document.documentElement.scrollWidth,
            scanColumns: getComputedStyle(document.querySelector('.scan-shell')).gridTemplateColumns,
            mobileQuery: matchMedia('(max-width: 900px)').matches
          };
        })()""",
    )
    if not isinstance(evidence, dict) or evidence.get("missing"):
        raise RuntimeError(f"{name}: required prototype elements are missing")
    if "Lerne zu bauen" not in str(evidence.get("title")):
        raise RuntimeError(f"{name}: educational path heading is missing")
    if evidence.get("outputActive") is not True:
        raise RuntimeError(f"{name}: readiness output did not activate")
    warning = str(evidence.get("warning", ""))
    if "Sicherheitsstopp" not in warning or "tragender 3D-gedruckter Verbinder" not in warning:
        raise RuntimeError(f"{name}: prohibited structural connector did not escalate safely")
    if int(evidence.get("documentWidth", 0)) > int(evidence.get("width", 0)):
        raise RuntimeError(f"{name}: horizontal overflow ({evidence['documentWidth']} > {evidence['width']})")
    if bool(evidence.get("mobileQuery")) is not mobile:
        raise RuntimeError(f"{name}: expected responsive breakpoint was not active")
    print(f"PASS {name}: safe route, no horizontal overflow, responsive layout")


def main() -> int:
    if not PROTOTYPE_ROOT.is_dir():
        raise RuntimeError(f"prototype directory missing: {PROTOTYPE_ROOT}")
    profile = LAB_ROOT / "tests" / f".browser-smoke-profile-{os.getpid()}-{secrets.token_hex(4)}"
    server: ThreadingHTTPServer | None = None
    browser: subprocess.Popen[bytes] | None = None
    cdp: CdpSocket | None = None
    try:
        server, _worker, http_port = start_server()
        cdp_port = free_loopback_port()
        browser = subprocess.Popen(
            [
                str(chrome_path()), "--headless=new", "--disable-gpu", "--no-first-run", "--no-default-browser-check",
                f"--remote-debugging-address=127.0.0.1", f"--remote-debugging-port={cdp_port}",
                f"--user-data-dir={profile}", "about:blank",
            ],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        targets = wait_for_targets(cdp_port)
        endpoint = next((item.get("webSocketDebuggerUrl") for item in targets if item.get("type") == "page"), None)
        if not isinstance(endpoint, str):
            raise RuntimeError("Chrome did not expose a page target")
        cdp = CdpSocket(endpoint)
        cdp.command("Runtime.enable")
        cdp.command("Log.enable")
        cdp.command("Page.enable")
        cdp.command(
            "Page.addScriptToEvaluateOnNewDocument",
            {"source": """
              window.__pvCarportSmokeConsoleErrors = [];
              const originalConsoleError = console.error.bind(console);
              console.error = (...args) => {
                window.__pvCarportSmokeConsoleErrors.push(args.map(String).join(' '));
                originalConsoleError(...args);
              };
              window.addEventListener('error', event => {
                window.__pvCarportSmokeConsoleErrors.push(event.message || 'window error');
              });
              window.addEventListener('unhandledrejection', event => {
                window.__pvCarportSmokeConsoleErrors.push(String(event.reason || 'unhandled rejection'));
              });
            """},
        )
        url = f"http://127.0.0.1:{http_port}/"
        exercise_viewport(cdp, url, "desktop 1440x1000", 1440, 1000, False)
        exercise_viewport(cdp, url, "mobile 390x844", 390, 844, True)
        errors = evaluate(cdp, "window.__pvCarportSmokeConsoleErrors || []")
        if errors:
            raise RuntimeError(f"browser console errors: {errors}")
        print("PASS browser console: no runtime errors observed")
        return 0
    finally:
        if cdp:
            cdp.close()
        if browser and browser.poll() is None:
            browser.terminate()
            try:
                browser.wait(timeout=8)
            except subprocess.TimeoutExpired:
                browser.kill()
                browser.wait(timeout=8)
        if server:
            server.shutdown()
            server.server_close()
        if profile.exists():
            shutil.rmtree(profile, ignore_errors=False)


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except Exception as error:
        print(f"FAIL browser smoke: {error}", file=sys.stderr)
        raise SystemExit(1)
