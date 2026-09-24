import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';
import { listBrands, renderInvoice } from './render.mjs';

const maxBytes = 512 * 1024;

export function createPreviewServer() {
  return createServer(async (request, response) => {
    const path = new URL(request.url ?? '/', 'http://localhost').pathname;
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    if (request.method === 'GET' && path === '/brands') {
      response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify(listBrands()));
      return;
    }
    if (request.method !== 'POST' || path !== '/render') {
      response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ error: 'Not found' }));
      return;
    }
    if (!String(request.headers['content-type'] ?? '').startsWith('application/json')) {
      response.writeHead(415, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ error: 'Expected application/json' }));
      return;
    }
    try {
      let size = 0;
      const chunks = [];
      for await (const chunk of request) {
        size += chunk.length;
        if (size > maxBytes) throw new TypeError('Invoice payload exceeds 512 KiB');
        chunks.push(chunk);
      }
      const html = renderInvoice(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      response.end(html);
    } catch (error) {
      response.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify({ error: error.message }));
    }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  createPreviewServer().listen(4177, '127.0.0.1', () => {
    process.stdout.write('Invoice preview API: http://127.0.0.1:4177\n');
  });
}
