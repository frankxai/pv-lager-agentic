import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';

const brands = new Set(['rial-energy', 'pv-lager', 'solarcarport-tech', 'vr-gebaeudetechnik', 'aurevia']);
const eventTypes = new Set(['order_approved', 'order_cancelled', 'order_refunded']);
const paymentStatuses = new Set(['pending', 'paid', 'partially_refunded', 'refunded']);
const handoffFields = new Set(['source', 'siteId', 'orderId', 'eventId', 'eventType', 'occurredAt', 'brand', 'currency', 'totalMinor', 'paymentStatus', 'lineItems']);
const lineFields = new Set(['sku', 'quantity', 'lineTotalMinor']);

function onlyFields(value, allowed, path) {
  const extra = Object.keys(value).find(field => !allowed.has(field));
  if (extra) throw new TypeError(`${path}.${extra} is not allowed`);
}

function requiredString(value, path) {
  if (typeof value !== 'string' || !value.trim()) throw new TypeError(`${path} must be a nonempty string`);
  return value.trim();
}

function minor(value, path) {
  if (!Number.isSafeInteger(value) || value < 0) throw new TypeError(`${path} must be a nonnegative integer in minor currency units`);
  return value;
}

function enumValue(value, allowed, path) {
  if (!allowed.has(value)) throw new TypeError(`${path} has an unsupported value`);
  return value;
}

/** A Wix webhook must be verified before building this canonical handoff. */
export function validateOrderHandoff(order) {
  if (!order || typeof order !== 'object' || Array.isArray(order)) throw new TypeError('order must be an object');
  onlyFields(order, handoffFields, 'order');
  if (order.source !== 'wix') throw new TypeError('source must be wix');
  const siteId = requiredString(order.siteId, 'siteId');
  const orderId = requiredString(order.orderId, 'orderId');
  requiredString(order.eventId, 'eventId');
  enumValue(order.eventType, eventTypes, 'eventType');
  const timestamp = requiredString(order.occurredAt, 'occurredAt');
  const date = new Date(timestamp);
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/.test(timestamp) ||
      !Number.isFinite(date.valueOf()) || date.toISOString().slice(0, 19) !== timestamp.slice(0, 19)) {
    throw new TypeError('occurredAt must be a valid UTC timestamp');
  }
  enumValue(order.brand, brands, 'brand');
  if (!/^[A-Z]{3}$/.test(requiredString(order.currency, 'currency'))) throw new TypeError('currency must be an ISO 4217 code');
  minor(order.totalMinor, 'totalMinor');
  enumValue(order.paymentStatus, paymentStatuses, 'paymentStatus');
  if (!Array.isArray(order.lineItems) || order.lineItems.length < 1) throw new TypeError('lineItems must be a nonempty array');
  order.lineItems.forEach((line, index) => {
    if (!line || typeof line !== 'object' || Array.isArray(line)) throw new TypeError(`lineItems[${index}] must be an object`);
    onlyFields(line, lineFields, `lineItems[${index}]`);
    requiredString(line?.sku, `lineItems[${index}].sku`);
    if (typeof line.quantity !== 'number' || !Number.isFinite(line.quantity) || line.quantity <= 0) throw new TypeError(`lineItems[${index}].quantity must be positive`);
    minor(line.lineTotalMinor, `lineItems[${index}].lineTotalMinor`);
  });
  return { ...order, idempotencyKey: `wix:${encodeURIComponent(siteId)}:${encodeURIComponent(orderId)}` };
}

function checkInvoice(row, path, legacy) {
  if (!row || typeof row !== 'object' || Array.isArray(row)) throw new TypeError(`${path} must be an object`);
  requiredString(row.sellerKey, `${path}.sellerKey`);
  requiredString(row.invoiceNumber, `${path}.invoiceNumber`);
  requiredString(row.currency, `${path}.currency`);
  enumValue(row.brand, brands, `${path}.brand`);
  enumValue(row.documentType, new Set(['invoice', 'credit_note']), `${path}.documentType`);
  minor(row.openMinor, `${path}.openMinor`);
  if (legacy) enumValue(row.status, new Set(['open', 'closed']), `${path}.status`);
  else requiredString(row.legacyInvoiceNumber, `${path}.legacyInvoiceNumber`);
}

function key(row, number) { return `${row.sellerKey}\u0000${number}`; }

/** Compare normalized export snapshots. No accounting or invoice writes occur here. */
export function auditCutover(snapshot) {
  if (!snapshot || typeof snapshot !== 'object') throw new TypeError('snapshot must be an object');
  const legacy = snapshot.weclappInvoices;
  const openings = snapshot.odooOpenings;
  const shop = snapshot.shopOrders ?? [];
  if (!Array.isArray(legacy) || !Array.isArray(openings) || !Array.isArray(shop)) throw new TypeError('snapshot arrays are required');
  const findings = [];
  const oldByKey = new Map();
  const newByKey = new Map();
  legacy.forEach((row, index) => {
    checkInvoice(row, `weclappInvoices[${index}]`, true);
    const id = key(row, row.invoiceNumber);
    if (oldByKey.has(id)) findings.push({ severity: 'error', code: 'duplicate_weclapp_number', invoiceNumber: row.invoiceNumber });
    oldByKey.set(id, row);
  });
  openings.forEach((row, index) => {
    checkInvoice(row, `odooOpenings[${index}]`, false);
    const id = key(row, row.legacyInvoiceNumber);
    if (newByKey.has(id)) findings.push({ severity: 'error', code: 'duplicate_odoo_opening', invoiceNumber: row.legacyInvoiceNumber });
    newByKey.set(id, row);
  });
  for (const [id, old] of oldByKey) {
    const next = newByKey.get(id);
    if (old.status === 'open' && old.openMinor > 0 && !next) {
      findings.push({ severity: 'error', code: 'missing_odoo_opening', invoiceNumber: old.invoiceNumber });
      continue;
    }
    if (old.status === 'closed' || old.openMinor === 0) {
      if (next) findings.push({ severity: 'error', code: 'closed_invoice_reopened', invoiceNumber: old.invoiceNumber });
      continue;
    }
    if (next.openMinor !== old.openMinor) findings.push({ severity: 'error', code: 'open_balance_mismatch', invoiceNumber: old.invoiceNumber, weclappMinor: old.openMinor, odooMinor: next.openMinor });
    for (const field of ['currency', 'brand', 'documentType']) {
      if (next[field] !== old[field]) findings.push({ severity: 'error', code: `${field}_mismatch`, invoiceNumber: old.invoiceNumber });
    }
  }
  for (const [id, next] of newByKey) {
    if (!oldByKey.has(id)) findings.push({ severity: 'error', code: 'unknown_odoo_opening', invoiceNumber: next.legacyInvoiceNumber });
  }
  const seenEvents = new Set();
  const approvedOrders = new Map();
  shop.forEach(order => {
    const normalized = validateOrderHandoff(order);
    const eventKey = `${order.siteId}\u0000${order.eventId}`;
    if (seenEvents.has(eventKey)) findings.push({ severity: 'error', code: 'replayed_shop_event', orderId: order.orderId, eventId: order.eventId });
    seenEvents.add(eventKey);
    if (order.eventType === 'order_approved') {
      const previous = approvedOrders.get(normalized.idempotencyKey);
      if (previous) {
        findings.push({ severity: 'error', code: 'duplicate_order_approval', orderId: order.orderId });
        for (const field of ['brand', 'currency', 'totalMinor']) {
          if (previous[field] !== order[field]) findings.push({ severity: 'error', code: `shop_${field}_mismatch`, orderId: order.orderId });
        }
      }
      approvedOrders.set(normalized.idempotencyKey, order);
    }
    if (order.eventType === 'order_approved' && order.paymentStatus === 'refunded') {
      findings.push({ severity: 'warning', code: 'approved_order_refunded', orderId: order.orderId });
    }
  });
  return {
    passed: !findings.some(finding => finding.severity === 'error'),
    counts: { weclappInvoices: legacy.length, odooOpenings: openings.length, shopOrders: shop.length },
    findings
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    if (!process.argv[2]) throw new TypeError('Usage: node cutover.mjs normalized-export.json');
    const result = auditCutover(JSON.parse(readFileSync(process.argv[2], 'utf8')));
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
    if (!result.passed) process.exitCode = 1;
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 2;
  }
}
