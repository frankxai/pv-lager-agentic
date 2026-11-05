import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { auditCutover, validateOrderHandoff } from '../cutover.mjs';

const sample = JSON.parse(readFileSync(new URL('../fixtures/cutover.json', import.meta.url), 'utf8'));
const clone = value => structuredClone(value);
const codes = result => result.findings.map(finding => finding.code);

test('synthetic open balances reconcile and closed history stays out of Odoo openings', () => {
  const result = auditCutover(sample);
  assert.equal(result.passed, true);
  assert.deepEqual(result.findings, []);
  assert.deepEqual(result.counts, { weclappInvoices: 2, odooOpenings: 1, shopOrders: 1 });
});

test('missing and mismatched openings block cutover', () => {
  const missing = clone(sample);
  missing.odooOpenings = [];
  assert.ok(codes(auditCutover(missing)).includes('missing_odoo_opening'));
  const mismatch = clone(sample);
  mismatch.odooOpenings[0].openMinor = 53000;
  mismatch.odooOpenings[0].currency = 'USD';
  assert.deepEqual(codes(auditCutover(mismatch)), ['open_balance_mismatch', 'currency_mismatch']);
});

test('duplicate invoice numbers, duplicate openings and reopened closed invoices block cutover', () => {
  const bad = clone(sample);
  bad.weclappInvoices.push(clone(bad.weclappInvoices[0]));
  bad.odooOpenings.push(clone(bad.odooOpenings[0]));
  bad.odooOpenings.push({ ...bad.odooOpenings[0], invoiceNumber: 'NEW-9002', legacyInvoiceNumber: 'OLD-1002' });
  const result = auditCutover(bad);
  assert.equal(result.passed, false);
  assert.ok(codes(result).includes('duplicate_weclapp_number'));
  assert.ok(codes(result).includes('duplicate_odoo_opening'));
  assert.ok(codes(result).includes('closed_invoice_reopened'));
});

test('Wix lifecycle events may share an order; replayed events and repeat approvals are rejected', () => {
  const lifecycle = clone(sample);
  lifecycle.shopOrders.push({ ...lifecycle.shopOrders[0], eventId: 'refund-1', eventType: 'order_refunded', paymentStatus: 'refunded' });
  assert.equal(auditCutover(lifecycle).passed, true);
  lifecycle.shopOrders.push(clone(lifecycle.shopOrders[1]));
  assert.ok(codes(auditCutover(lifecycle)).includes('replayed_shop_event'));
  const repeated = clone(sample);
  repeated.shopOrders.push({ ...repeated.shopOrders[0], eventId: 'approved-2', totalMinor: 60000 });
  assert.ok(codes(auditCutover(repeated)).includes('duplicate_order_approval'));
  assert.ok(codes(auditCutover(repeated)).includes('shop_totalMinor_mismatch'));
});

test('handoff rejects malformed amounts and timestamps and returns a stable order key', () => {
  const order = sample.shopOrders[0];
  assert.equal(validateOrderHandoff(order).idempotencyKey, 'wix:demo-site:demo-order');
  assert.throws(() => validateOrderHandoff({ ...order, totalMinor: 12.5 }), /totalMinor/);
  assert.throws(() => validateOrderHandoff({ ...order, occurredAt: '2026-02-30T10:00:00Z' }), /occurredAt/);
  assert.throws(() => validateOrderHandoff({ ...order, source: 'unverified' }), /source/);
  assert.throws(() => validateOrderHandoff({ ...order, customerEmail: 'private@example.invalid' }), /customerEmail/);
  assert.throws(() => validateOrderHandoff({ ...order, lineItems: [{ ...order.lineItems[0], name: 'Private' }] }), /name/);
  assert.equal(validateOrderHandoff({ ...order, siteId: 'demo:site', orderId: 'order:1' }).idempotencyKey, 'wix:demo%3Asite:order%3A1');
});
