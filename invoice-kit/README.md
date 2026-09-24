# Invoice presentation kit

Printable HTML and CSS invoice layouts for the RIAL alliance. This kit changes presentation only. Odoo remains the source of invoice records, amounts, tax treatment, numbering, legal seller, and electronic invoice data.

## Brand variants

| Brand key | Intended presentation | Source of direction |
| --- | --- | --- |
| `rial-energy` | Restrained industrial parent identity | RIAL brand registry and public site |
| `pv-lager` | Clear, dense component trading document | PV Lager public site and alliance brief |
| `solarcarport-tech` | Architectural product document | SolarCarport.tech public site and alliance brief |
| `vr-gebaeudetechnik` | Service and installation document | VR Gebäudetechnik public site and alliance brief |
| `aurevia` | Ivory and copper digital product document | `aurevia-solar/docs/BRAND-EXPERIENCE.md` and `docs/brand-pack/TOKENS.md` |

All five are visual profiles. They do **not** imply five legal sellers. The `seller` object must come from the actual Odoo company on each invoice. The Aurevia variant follows its own editorial identity and does not reuse visual files from a sibling site. Logos are omitted until approved source files and their usage rights are confirmed.

## Use locally

Requires Node.js 20 or newer. No packages or external assets are needed.

```powershell
node invoice-kit/render.mjs invoice-kit/fixtures/example.json > preview.html
node --test invoice-kit/tests/render.test.mjs
node --test invoice-kit/tests/cutover.test.mjs
node invoice-kit/server.mjs
```

The local preview API listens on `127.0.0.1:4177`:

| Route | Purpose |
| --- | --- |
| `GET /brands` | List supported presentation profiles |
| `GET /preview?brand=pv-lager` | Open a labeled synthetic brand preview with print control |
| `POST /render` | Accept the JSON shape in `fixtures/example.json`; return a self-contained HTML preview |

The API does not connect to Odoo, store invoices, send emails, or issue PDFs. Its only job is to let people and agents iterate on a layout using approved invoice snapshots. Do not expose the preview API publicly.

The synthetic brand preview supports keyboard focus and touch-sized controls. The invoice itself uses print-first typography and tabular numbers. The layout and print output still need review with real Odoo PDFs.

## Migration audit

`CUTOVER.md` covers the Weclapp-to-Odoo migration, Wix order handoff, Vercel site, and IONOS domains. Run the read-only audit on **normalized, redacted** exports:

```powershell
node invoice-kit/cutover.mjs invoice-kit/fixtures/cutover.json
```

`order-handoff.schema.json` and `validateOrderHandoff()` define a verified Wix event reference. They do not verify a raw webhook, create a sale, or issue an invoice. The synthetic fixture is only for exercising the audit. Production use needs the actual shop account, field map, credentials, signature verification, durable event ledger and accounting approval.

## Odoo integration path

1. Confirm the exact Odoo version, hosting type and plan. Odoo Online report customization and external API access depend on available features and plan; Odoo.sh or self-hosted may package a custom report module.
2. Duplicate the standard invoice report in a test database. Keep the original available while comparing output.
3. Map Odoo's invoice fields into this kit's snapshot shape. Pass Odoo's formatted line amounts, tax groups, totals, legal company details, language, and payment details. Do not calculate money in the renderer.
4. Adapt the approved HTML sections and `invoice.css` into the version-specific QWeb report. Keep the selected brand profile on the invoice or journal, with a documented default.
5. Inspect HTML **and** Odoo's generated PDF using long addresses, many lines, discounts, multiple tax rates, credit notes, zero tax, and page breaks. Review the e-invoice XML separately; the visual template does not change it.
6. Have the accounting owner approve the final seller details, field completeness, wording, and output before replacing the active report.

The current deliverable is a working portable presentation layer and preview API. A deployable Odoo add-on needs the family's actual Odoo version, hosting type, company/journal setup, and redacted real invoice examples.
