import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { listBrands, renderInvoice } from './render.mjs';

const maxBytes = 512 * 1024;
const demo = JSON.parse(readFileSync(new URL('./fixtures/example.json', import.meta.url), 'utf8'));

function previewHtml(brandId) {
  const brands = listBrands();
  if (!brands.some(brand => brand.id === brandId)) throw new TypeError('Unknown preview brand');
  const links = brands.map(brand => `<a href="/preview?brand=${brand.id}"${brand.id === brandId ? ' aria-current="page"' : ''}>${brand.name}</a>`).join('');
  return renderInvoice({ ...demo, brand: brandId })
    .replace('</head>', `<style>
      .preview-bar { position: sticky; top: 0; z-index: 2; padding: 12px 16px; background: #17232b; color: #fff; font: 14px/1.35 Arial, sans-serif; }
      .preview-bar nav { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; max-width: 1100px; margin: 0 auto; }
      .preview-bar a, .preview-bar button { display: inline-flex; align-items: center; min-height: 44px; padding: 9px 12px; border: 1px solid #77868e; border-radius: 3px; background: transparent; color: #fff; font: inherit; text-decoration: none; cursor: pointer; }
      .preview-bar a[aria-current="page"] { background: #fff; border-color: #fff; color: #17232b; font-weight: bold; }
      .preview-bar a:focus-visible, .preview-bar button:focus-visible { outline: 3px solid #f5b642; outline-offset: 3px; }
      .preview-bar button { margin-left: auto; }
      .preview-note { max-width: 1100px; margin: 8px auto 0; color: #e4eaed; font-size: 12px; }
      @media (hover: hover) and (pointer: fine) { .preview-bar a:hover, .preview-bar button:hover { border-color: #fff; } }
      @media (prefers-reduced-motion: reduce) { .preview-bar * { scroll-behavior: auto; transition: none; animation: none; } }
      @media print { .preview-bar { display: none; } }
    </style></head>`)
    .replace('<body>', `<body><header class="preview-bar"><nav aria-label="Brand preview">${links}<button type="button" onclick="window.print()">Print sample</button></nav><p class="preview-note">Synthetic sample data · Local design preview · Not an issued invoice</p></header>`);
}

export function createPreviewServer() {
  return createServer(async (request, response) => {
    const url = new URL(request.url ?? '/', 'http://localhost');
    const path = url.pathname;
    response.setHeader('Cache-Control', 'no-store');
    response.setHeader('X-Content-Type-Options', 'nosniff');
    if (request.method === 'GET' && path === '/brands') {
      response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      response.end(JSON.stringify(listBrands()));
      return;
    }
    if (request.method === 'GET' && path === '/preview') {
      try {
        const html = previewHtml(url.searchParams.get('brand') ?? 'pv-lager');
        response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        response.end(html);
      } catch (error) {
        response.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
        response.end(JSON.stringify({ error: error.message }));
      }
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
