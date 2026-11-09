# Weclapp to Odoo invoice cutover

This is a read-only reconciliation plan and a presentation kit. The actual Odoo version, plan, company setup, Weclapp export format, and redacted invoices have not been supplied. Nothing here connects to a production tenant or issues an invoice.

## Current surface map

| Surface | Observed role | Invoice rule |
| --- | --- | --- |
| Weclapp | Legacy invoice ledger | Export historical numbers, open residuals, credit notes, payments, customers and source order references before cutover. Keep immutable source files and a dated export manifest. |
| Odoo | Intended accounting and invoice authority | Create/import open items and approved reports here. Preserve legacy references; let Odoo control invoice numbers, tax, totals and legal seller. |
| PV Lager Wix shop | Order source | Verify webhook signature, fetch the current order from Wix, normalize a small handoff, then reconcile before creating any Odoo sale or invoice. |
| Vercel alliance site | Separate marketing/web project | Show links or account information if approved; never treat a page or function as the accounting ledger. |
| IONOS domains | DNS and mail for RIAL Energy and SolarCarport.tech | Keep current DNS/mail routing intact. An invoice email sender needs a separate deliverability and reply-path test. |

The surface map comes from repository configuration and read-only public DNS/site inspection on 24 September 2026. Confirm each account and its owner before a live change.

## Migration sequence

1. **Identify the tenant.** Record Odoo version, Online plan versus Odoo.sh/self-hosted, companies, journals, currencies, fiscal positions, existing report IDs, and installed e-invoicing modules. Odoo Online external API access depends on plan. Do not assume a Custom plan.
2. **Freeze a baseline.** Export Weclapp invoices and credit notes, their final numbers, status, outstanding balances in minor currency units, customer IDs, seller company, tax treatment, order reference, PDF, and payment allocation. Record export time, row counts and file hashes. Do the same for Odoo's proposed open-item import preview.
3. **Normalize snapshots.** Map source exports into `fixtures/cutover.json` shape. `sellerKey` must be an accounting-approved legal company key, never a design brand. `legacyInvoiceNumber` is the immutable cross-reference; Odoo may assign a different new number. Keep PII out of test fixtures and logs.
4. **Audit before posting.** Run `node invoice-kit/cutover.mjs path/to/normalized-export.json`. Errors block cutover: missing or duplicate openings, reopened closed items, balance/currency/brand/type mismatches, unknown openings, or duplicate shop approvals. Reconcile counts and balances by legal seller, currency and document type in the accounting system as well.
5. **Import in a test database.** Import the approved open invoices, bills and credit notes according to the actual Odoo migration path. Test payment matching, refunds, taxes, dates, PDF, e-invoice XML, and customer statements. Closed historical items stay in the legacy archive unless the accountant chooses a separate history strategy.
6. **Approve the report.** Duplicate the standard Odoo invoice report in the test tenant. Port the approved layout to its version-specific QWeb/Studio report, retain a reversible original, and compare issued PDFs against the Odoo source record. Have the accounting owner approve legal text, seller data, tax display, bank details and the report switch.
7. **Cut over by timestamp.** Pause automatic shop-to-ERP posting, drain and record outstanding events, record the last Weclapp and first Odoo transaction boundaries, then switch a single controlled integration endpoint. Reconcile a test order, payment, refund and credit note before resuming the queue. Retain an event ledger keyed by Wix site and event ID, plus an order reference key by Wix site and order ID.
8. **Observe and roll back.** Reconcile daily order count, gross order value, invoices, credits, paid amounts, tax totals and failed events by company. On failure, pause integration and restore the previous report or posting route. Do not replay events blindly; use the recorded IDs and accounting review.

## Shop handoff

`order-handoff.schema.json` describes the smallest useful verified Wix event. The `validateOrderHandoff()` helper checks its runtime shape. This is **not** a raw webhook handler: verify Wix's signed webhook, deduplicate `siteId + eventId`, fetch current order details from Wix, and map brand from an approved site/merchant registry before producing this object. A later refund is a distinct event for the same order; `siteId + orderId` remains its stable business reference. Order totals provide a comparison, while Odoo decides taxable amounts and final invoice values. Never invoice merely because a webhook arrived.

The current helper accepts no personal data. A real order/customer mapping needs a separately approved field map and retention/access policy. It must preserve source order ID and payment state, handle out-of-order delivery, and reconcile partial refunds and shipping/tax line differences using real fixtures.

## Production gates

| Gate | Evidence required | Status |
| --- | --- | --- |
| Odoo tenant and API path | Version, hosting/plan, permitted API or Studio/report route | Open |
| Accounting source | Redacted Weclapp and Odoo exports plus seller/journal map | Open |
| Financial reconciliation | Zero blocking findings plus accounting totals and payment check | Synthetic test only |
| Report quality | Real one-page/multi-page HTML, PDF, credit note and e-invoice XML review | Synthetic HTML only |
| Wix integration | Verified signed events, replay/out-of-order tests, live order mapping | Contract only |
| Vercel and IONOS | Approved endpoint ownership, mail test, DNS change plan if needed | Read-only discovery only |
| Authorization | Accounting owner signs off before live report/posting switch | Open |

## Official references

- [Odoo migration getting started](https://www.odoo.com/documentation/19.0/applications/finance/accounting/get_started.html)
- [Odoo external JSON-2 API and plan availability](https://www.odoo.com/documentation/19.0/developer/reference/external_api.html)
- [Odoo report rendering](https://www.odoo.com/documentation/19.0/developer/reference/backend/reports.html)
- [Odoo Studio PDF reports](https://www.odoo.com/documentation/19.0/applications/studio/pdf_reports.html)
- [Odoo electronic invoicing](https://www.odoo.com/documentation/19.0/applications/finance/accounting/customer_invoices/electronic_invoicing.html)
- [Wix Order Created webhook](https://dev.wix.com/docs/api-reference/business-solutions/e-commerce/orders/orders/order-created)
- [Wix webhook delivery FAQ](https://dev.wix.com/docs/build-apps/develop-your-app/api-integrations/events-and-webhooks/faq-for-webhooks)

The linked Odoo pages document version 19 as a reference. Verify the tenant's actual version before adapting a report or import file.
