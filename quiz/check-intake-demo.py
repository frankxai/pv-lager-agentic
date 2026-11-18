"""Exercise the local intake brief in Chromium with Python Playwright."""
import os
from pathlib import Path
from playwright.sync_api import sync_playwright

quiz = Path(__file__).with_name("pv-lager-intake-quiz-mock.html")
with sync_playwright() as runtime:
    browser = runtime.chromium.launch(
        executable_path=os.getenv("CHROMIUM_PATH"),
        args=["--single-process", "--no-zygote"] if os.getenv("CHROMIUM_SINGLE_PROCESS") == "1" else [],
    )
    page = browser.new_page(accept_downloads=True)
    page.route("http**/*", lambda route: route.abort())
    for width in [375, 768, 1440]:
        page.set_viewport_size({"width": width, "height": 844})
        page.goto(quiz.as_uri(), wait_until="domcontentloaded")
        project = page.get_by_role("radio", name="📦 Komponenten")
        first = page.get_by_role("radio").first
        first.focus()
        for _ in range(3):
            page.keyboard.press("ArrowRight")
        assert project.is_checked()
        ev = page.get_by_role("checkbox", name="🔌 E-Auto")
        ev.focus()
        page.keyboard.press("Space")
        assert ev.is_checked()
        page.get_by_label("Postleitzahl").fill("Testgebiet")
        page.get_by_role("button", name="Empfehlung berechnen (Demo)").click()
        assert page.locator("#result").evaluate("e => e === document.activeElement")
        assert "Komponenten" in page.locator("#rec-content").inner_text()
        assert "E-Auto" in page.locator("#brief-summary").inner_text()
        with page.expect_download() as pending:
            page.get_by_role("button", name="Konfigurationsbrief herunterladen").click()
        brief = pending.value.path().read_text()
        assert all(value in brief for value in ["Testgebiet", "Komponenten", "E-Auto", "8000 kWh"])
        assert "€" not in brief
        page.get_by_label("Anzahl Stellplätze").fill("0")
        assert page.locator("#result").is_hidden()
        page.get_by_role("button", name="Empfehlung berechnen (Demo)").click()
        assert not page.locator("#cars").evaluate("field => field.validity.valid")
        assert page.locator("#result").is_hidden()
        page.get_by_label("Anzahl Stellplätze").fill("3")
        page.get_by_role("button", name="Empfehlung berechnen (Demo)").click()
        assert page.locator("#result").is_visible()
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
        print(f"{width}px passed: keyboard, selected inputs, export, invalidation and recovery")
    browser.close()
