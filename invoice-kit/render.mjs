import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const brands = JSON.parse(readFileSync(new URL('./brands.json', import.meta.url), 'utf8'));
const cssTemplate = readFileSync(new URL('./invoice.css', import.meta.url), 'utf8');

const labels = {
  'de-DE': {
    invoice: 'Rechnung', credit_note: 'Gutschrift', billTo: 'Rechnung an', from: 'Aussteller',
    number: 'Rechnungsnummer', date: 'Rechnungsdatum', due: 'Fällig am', service: 'Leistungsdatum',
    reference: 'Ihre Referenz', description: 'Beschreibung', quantity: 'Menge', unitPrice: 'Einzelpreis',
    tax: 'Steuer', amount: 'Betrag', net: 'Netto', taxTotal: 'Umsatzsteuer', total: 'Gesamtbetrag',
    payment: 'Zahlung', terms: 'Zahlungsbedingungen', remittance: 'Verwendungszweck', notes: 'Hinweise',
    legal: 'Rechtlicher Aussteller', vatId: 'USt-IdNr.', register: 'Handelsregister'
  },
  'en-GB': {
    invoice: 'Invoice', credit_note: 'Credit note', billTo: 'Bill to', from: 'Issued by',
    number: 'Invoice number', date: 'Issue date', due: 'Due date', service: 'Service date',
    reference: 'Your reference', description: 'Description', quantity: 'Quantity', unitPrice: 'Unit price',
    tax: 'Tax', amount: 'Amount', net: 'Subtotal', taxTotal: 'Tax', total: 'Amount due',
    payment: 'Payment', terms: 'Payment terms', remittance: 'Payment reference', notes: 'Notes',
    legal: 'Legal issuer', vatId: 'VAT ID', register: 'Company register'
  }
};

export function listBrands() {
  return Object.entries(brands).map(([id, profile]) => ({ id, name: profile.name, descriptor: profile.descriptor }));
}

function text(value, name, { optional = false } = {}) {
  if (optional && (value === undefined || value === null || value === '')) return '';
  if (typeof value !== 'string' || !value.trim()) throw new TypeError(`${name} must be a nonempty string`);
  if (value.length > 1000) throw new TypeError(`${name} is too long`);
  return value.trim();
}

function lines(value, name) {
  if (!Array.isArray(value) || value.length < 1 || value.length > 8) {
    throw new TypeError(`${name} must contain 1–8 address lines`);
  }
  return value.map((line, index) => text(line, `${name}[${index}]`));
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]);
}

function field(label, value) {
  return value ? `<td><div class="section-label">${esc(label)}</div><div class="meta-value">${esc(value)}</div></td>` : '<td></td>';
}

function detail(label, value) {
  return value ? `<div><strong>${esc(label)}:</strong> ${esc(value)}</div>` : '';
}

function themeCss(profile) {
  return cssTemplate
    .replaceAll('__ACCENT__', profile.accent)
    .replaceAll('__INK__', profile.ink)
    .replaceAll('__MUTED__', profile.muted)
    .replaceAll('__RULE__', profile.rule)
    .replaceAll('__WASH__', profile.wash)
    .replaceAll('__PAPER__', profile.paper)
    .replaceAll('__HEADING_FONT__', profile.headingFont);
}

/** Render only a presentation snapshot. Amounts and legal details must come from Odoo. */
export function renderInvoice(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new TypeError('Invoice must be an object');
  const brandId = text(input.brand, 'brand');
  const profile = Object.hasOwn(brands, brandId) ? brands[brandId] : null;
  if (!profile) throw new TypeError(`Unknown brand: ${brandId}`);
  const locale = input.locale ?? 'de-DE';
  const l = labels[locale];
  if (!l) throw new TypeError('locale must be de-DE or en-GB');
  const kind = input.documentType ?? 'invoice';
  if (!['invoice', 'credit_note'].includes(kind)) throw new TypeError('documentType must be invoice or credit_note');
  const number = text(input.number, 'number');
  const issueDate = text(input.issueDate, 'issueDate');
  const dueDate = text(input.dueDate, 'dueDate', { optional: true });
  const serviceDate = text(input.serviceDate, 'serviceDate', { optional: true });
  const reference = text(input.reference, 'reference', { optional: true });
  const seller = input.seller;
  const buyer = input.buyer;
  if (!seller || typeof seller !== 'object') throw new TypeError('seller is required');
  if (!buyer || typeof buyer !== 'object') throw new TypeError('buyer is required');
  const sellerName = text(seller.name, 'seller.name');
  const sellerAddress = lines(seller.address, 'seller.address');
  const buyerName = text(buyer.name, 'buyer.name');
  const buyerAddress = lines(buyer.address, 'buyer.address');
  if (!Array.isArray(input.lines) || input.lines.length < 1 || input.lines.length > 200) {
    throw new TypeError('lines must contain 1–200 items');
  }
  const totals = input.totals;
  if (!totals || typeof totals !== 'object') throw new TypeError('totals are required');
  const net = text(totals.net, 'totals.net');
  const tax = text(totals.tax, 'totals.tax');
  const gross = text(totals.gross, 'totals.gross');
  const rows = input.lines.map((line, index) => {
    if (!line || typeof line !== 'object') throw new TypeError(`lines[${index}] must be an object`);
    const description = text(line.description, `lines[${index}].description`);
    const note = text(line.detail, `lines[${index}].detail`, { optional: true });
    const quantity = text(line.quantity, `lines[${index}].quantity`);
    const unitPrice = text(line.unitPrice, `lines[${index}].unitPrice`);
    const taxLabel = text(line.taxLabel, `lines[${index}].taxLabel`);
    const amount = text(line.amount, `lines[${index}].amount`);
    return `<tr><td><div class="item-heading">${esc(description)}</div>${note ? `<div class="item-detail">${esc(note)}</div>` : ''}</td><td class="num">${esc(quantity)}</td><td class="num">${esc(unitPrice)}</td><td class="num">${esc(taxLabel)}</td><td class="num">${esc(amount)}</td></tr>`;
  }).join('');
  const breakdown = totals.breakdown ?? [];
  if (!Array.isArray(breakdown) || breakdown.length > 12) throw new TypeError('totals.breakdown must be an array of at most 12 rows');
  const taxRows = breakdown.map((row, index) => `<tr class="tax-detail"><td>${esc(text(row.label, `totals.breakdown[${index}].label`))}</td><td>${esc(text(row.amount, `totals.breakdown[${index}].amount`))}</td></tr>`).join('');
  const payment = input.payment ?? {};
  if (typeof payment !== 'object' || Array.isArray(payment)) throw new TypeError('payment must be an object');
  const paymentDetails = [
    detail('IBAN', text(payment.iban, 'payment.iban', { optional: true })),
    detail('BIC', text(payment.bic, 'payment.bic', { optional: true })),
    detail(l.remittance, text(payment.reference, 'payment.reference', { optional: true })),
    detail(l.terms, text(payment.terms, 'payment.terms', { optional: true }))
  ].join('');
  const notes = text(input.notes, 'notes', { optional: true });
  const sellerDetails = [
    detail(l.vatId, text(seller.vatId, 'seller.vatId', { optional: true })),
    detail(l.register, text(seller.register, 'seller.register', { optional: true })),
    detail('E-Mail', text(seller.email, 'seller.email', { optional: true }))
  ].join('');
  const css = themeCss(profile);

  return `<!doctype html><html lang="${locale === 'de-DE' ? 'de' : 'en'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(l[kind])} ${esc(number)}</title><style>${css}</style></head><body><main class="sheet brand-${brandId}">
    <div class="accent-rule"></div>
    <table class="masthead"><tr><td><div class="wordmark">${esc(profile.name)}</div><div class="descriptor">${esc(profile.descriptor)}</div></td><td><div class="document-kind">${esc(l[kind])}</div><div class="document-number">${esc(l.number)} <strong>${esc(number)}</strong></div></td></tr></table>
    <table class="address-row"><tr><td><div class="section-label">${esc(l.billTo)}</div><div class="party-name">${esc(buyerName)}</div>${buyerAddress.map(x => `<div class="address-line">${esc(x)}</div>`).join('')}</td><td><div class="section-label">${esc(l.from)}</div><div class="party-name">${esc(sellerName)}</div>${sellerAddress.map(x => `<div class="address-line">${esc(x)}</div>`).join('')}</td></tr></table>
    <div class="meta"><table class="meta-row"><tr>${field(l.date, issueDate)}${field(l.due, dueDate)}${field(l.service, serviceDate)}${field(l.reference, reference)}</tr></table></div>
    <table class="items"><colgroup><col style="width:46%"><col style="width:12%"><col style="width:15%"><col style="width:11%"><col style="width:16%"></colgroup><thead><tr><th>${esc(l.description)}</th><th class="num">${esc(l.quantity)}</th><th class="num">${esc(l.unitPrice)}</th><th class="num">${esc(l.tax)}</th><th class="num">${esc(l.amount)}</th></tr></thead><tbody>${rows}</tbody></table>
    <table class="summary"><tr><td>${esc(l.net)}</td><td>${esc(net)}</td></tr><tr><td>${esc(l.taxTotal)}</td><td>${esc(tax)}</td></tr>${taxRows}<tr class="gross"><td>${esc(l.total)}</td><td>${esc(gross)}</td></tr></table>
    ${paymentDetails ? `<section class="payment"><h2 class="payment-title">${esc(l.payment)}</h2>${paymentDetails}</section>` : ''}
    ${notes ? `<table class="bottom-row"><tr><td><div class="section-label">${esc(l.notes)}</div><div class="preserve-lines">${esc(notes)}</div></td><td></td></tr></table>` : ''}
    <footer class="foot"><strong>${esc(l.legal)}: ${esc(sellerName)}</strong><br>${sellerAddress.map(esc).join(' · ')}${sellerDetails ? `<br>${sellerDetails}` : ''}</footer>
  </main></body></html>`;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const filename = process.argv[2];
  if (!filename) {
    process.stderr.write('Usage: node render.mjs invoice.json\n');
    process.exitCode = 2;
  } else {
    try { process.stdout.write(renderInvoice(JSON.parse(readFileSync(filename, 'utf8')))); }
    catch (error) { process.stderr.write(`${error.message}\n`); process.exitCode = 1; }
  }
}
