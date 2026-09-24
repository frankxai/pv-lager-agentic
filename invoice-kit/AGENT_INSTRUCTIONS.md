# Instructions for invoice layout agents

You are editing presentation for the RIAL alliance's Odoo invoices. Work inside `invoice-kit/` until an Odoo version and deployment route are confirmed.

1. Select exactly one profile from `brands.json` for the invoice's customer-facing brand. Never infer the legal seller from that profile.
2. Use the accounting-approved Odoo invoice snapshot as input. Keep invoice number, dates, parties, line order, tax labels, amounts, totals, currency, payment details, and credit-note status unchanged. Do not compute or round money in presentation code.
3. Edit the shared HTML structure in `render.mjs` only for information hierarchy. Edit `invoice.css` for print rules and `brands.json` for brand-specific colour/type. Keep text readable in grayscale and on A4.
4. Escape every user or ERP-provided field. Keep the preview server bound to localhost. Do not add third-party CDNs, remote fonts, tracking, or persistence of invoice data.
5. Compare real Odoo HTML and PDF outputs. Test one-page and multi-page invoices, a long product description, long recipient address, discounts, mixed taxes, zero tax, and a credit note. Check that the tax breakdown and gross amount visibly match Odoo's source record.
6. Treat the PDF and electronic invoice XML as separate artifacts. Report any difference between them to the accounting owner; do not claim that a visually correct PDF proves tax or e-invoicing compliance.
7. Before changing a live report, provide the before/after PDF, the Odoo version and report identifier, the exact field map, test results, and a rollback path for the accounting owner to review.
8. For migration, use `CUTOVER.md`, `cutover.mjs` and the versioned field map. Treat normalized exports as untrusted input. Never infer an Odoo API plan or endpoint from the brand. Never post a financial document because a Wix webhook alone said an order changed.
9. Deduplicate Wix deliveries by site and event ID, and reconcile order state by site and order ID. Keep the verified webhook payload and the fetched order separate from the small handoff contract. A refund event can follow approval for the same order.

Definition of done: every active brand has an approved invoice sample, all required data comes from the correct Odoo company, the HTML and PDF have been inspected, and the accounting owner accepts the result.
