import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { renderInvoice, listBrands } from '../render.mjs';
import { createPreviewServer } from '../server.mjs';

const example = JSON.parse(readFileSync(new URL('../fixtures/example.json', import.meta.url), 'utf8'));

test('all five brand variants render a self-contained A4 invoice', () => {
  assert.equal(listBrands().length, 5);
  for (const brand of listBrands()) {
    const html = renderInvoice({ ...example, brand: brand.id });
    assert.match(html, /@page \{ size: A4/);
    assert.ok(html.includes(brand.name));
    assert.ok(html.includes('535,50 €'));
    assert.ok(html.includes('Muster Solar GmbH'));
    assert.ok(!html.includes('__ACCENT__'));
    assert.ok(!html.includes('https://cdn.'));
  }
});

test('ERP text is escaped, including invoice number, address, item and notes', () => {
  const html = renderInvoice({
    ...example,
    number: '<script>alert(1)</script>',
    buyer: { name: 'A&B', address: ['<img src=x onerror=alert(1)>'] },
    lines: [{ ...example.lines[0], description: '<b>Test</b>' }],
    notes: '"quoted" & <unsafe>'
  });
  assert.ok(!html.includes('<script>alert(1)</script>'));
  assert.ok(!html.includes('<img src=x onerror=alert(1)>'));
  assert.ok(!html.includes('<b>Test</b>'));
  assert.ok(html.includes('&lt;b&gt;Test&lt;/b&gt;'));
  assert.ok(html.includes('A&amp;B'));
  assert.ok(html.includes('&quot;quoted&quot; &amp; &lt;unsafe&gt;'));
});

test('credit note and English labels render without changing amounts', () => {
  const html = renderInvoice({ ...example, locale: 'en-GB', documentType: 'credit_note' });
  assert.ok(html.includes('Credit note'));
  assert.ok(html.includes('Amount due'));
  assert.ok(html.includes('535,50 €'));
});

test('unknown brand and missing financial fields fail clearly', () => {
  assert.throws(() => renderInvoice({ ...example, brand: '__proto__' }), /Unknown brand/);
  assert.throws(() => renderInvoice({ ...example, totals: { ...example.totals, gross: '' } }), /totals.gross/);
  assert.throws(() => renderInvoice({ ...example, lines: [] }), /lines must contain/);
});

test('local preview API lists brands and renders HTML', async () => {
  const server = createPreviewServer();
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  try {
    const { port } = server.address();
    const base = `http://127.0.0.1:${port}`;
    const brandsResponse = await fetch(`${base}/brands`);
    assert.equal(brandsResponse.status, 200);
    assert.equal((await brandsResponse.json()).length, 5);
    const renderResponse = await fetch(`${base}/render`, {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(example)
    });
    assert.equal(renderResponse.status, 200);
    assert.match(renderResponse.headers.get('content-type'), /text\/html/);
    assert.ok((await renderResponse.text()).includes('PV Lager'));
    const badResponse = await fetch(`${base}/render`, {
      method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}'
    });
    assert.equal(badResponse.status, 400);
  } finally {
    await new Promise(resolve => server.close(resolve));
  }
});
