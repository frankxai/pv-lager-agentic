# PV-Lager Commercial OS

Architecture and workflow specification · 2026-09-11 · proposed implementation

This design now includes **Solar Commercial OS**, a reusable product with PV-Lager as its first pilot. The original workflow/metric specification below remains the pilot foundation; [reusable-product.md](reusable-product.md) defines the cross-business boundary.

## Decision

Build one commercial operating system for PV-Lager / RIAL Energy: turn sales, inventory, purchasing and campaign evidence into a short, owned queue of decisions. Help the team become category owners who understand demand, contribution and capital. Automate data preparation, diagnosis, drafts and measurement; extend execution authority only through recorded business mandates.

This package is a specification, not a connected dashboard or deployed integration. No company transaction data was available. No SKU rankings, savings, forecasts or margin claims in this package are measured business results.

## Read this package

1. [Architecture and operating model](architecture.md)
2. [Data contracts and metric definitions](data-and-metrics.md)
3. [Commercial workflows](workflows.md)
4. [Implementation and acceptance plan](delivery.md)
5. [Decision record schema](../../contracts/commercial-decision.schema.json)
6. [Execution policy template](../../config/commercial-policy.template.json)
7. [Reusable multi-business product](reusable-product.md)
8. [Codex execution handover](CODEX-HANDOVER.md)
9. [GitHub / Linear tracking](tracking.md)
10. [Plugin connection plan and validation](plugin-and-validation.md)
11. [Skills-only plugin package](../../plugins/solar-commercial-os/README.md)

The earlier [architecture](../architecture.md) and [strategy](../strategy.md) remain historical inputs. This specification is the proposed next design; it does not imply those earlier agent descriptions were implemented.

## Value proposition

- Brother / business owner: decide where capital and attention go; see contribution, inventory exposure and the decisions that need him.
- Employees: own categories or workflows, with a co-pilot that explains its evidence and learns from outcomes.
- Customers and installers: obtain suitable, available products and dependable quotes.
- Economic event: fulfilled, collected customer orders with positive contribution; repeat installer orders and cash recovered from excessive stock. AI output volume is not a business outcome.

## Evidence and current estate

| Asset | Observation | Consequence |
|---|---|---|
| pv-lager-agentic main at ef594a2 | July prototype, documentation and quiz; no production Next.js app | Do not use main as the current deployable application |
| Growth branch at 8129a428 | Application exists under apps/web; package has Next.js and AI SDK, no Payload dependency | Preserve and review this work before production consolidation |
| Remediation branch at 302db3a | Also contains apps/web | Compare with growth branch; review source changes rather than selecting by branch name |
| Vercel audit on September 10 | PV-Lager uploaded through CLI from growth branch; gitDirty=1; no project Git link | Recover or account for local differences before claiming reproducibility |
| Growth branch apps/web/app/api/stock/route.ts | Fixed inventory and prices; timestamp generated on request | Not an ERP observation; block this source from commercial intelligence |
| Solar Carport audit on September 10 | Frontend stock constants; enquiry endpoint logs without durable delivery | Repair before customer domain replacement |
| Existing domains, checked September 10 | pvlager.com remains Wix; solarcarport.tech remains legacy website-builder site | Keep operating storefronts available during replacement |
| Connected n8n search on September 11 | No workflow matched weclapp in the visible search scope | Integration implementation is not established by existing workflow names |

Source files:
- [PV-Lager growth application](https://github.com/frankxai/pv-lager-agentic/tree/8129a428dd7334838dab84c2d287498d69216394/apps/web)
- [PV-Lager growth stock route](https://github.com/frankxai/pv-lager-agentic/blob/8129a428dd7334838dab84c2d287498d69216394/apps/web/app/api/stock/route.ts)
- [PV-Lager remediation branch](https://github.com/frankxai/pv-lager-agentic/tree/302db3a598fb2322ad42f2098f2aa7a79e7e25bd)
- [Solar Carport lead route](https://github.com/frankxai/solarcarport.tech/blob/72ff08f1c6937450ad14ce5dafd7f21486f74030/src/app/api/embed/lead/route.ts)

## First useful outcome

A reconciled product/category report and a daily decision queue answering:

- What sold, at what contribution, through which channel?
- What can run out before replenishment arrives?
- What is excessive, ageing or obsolete?
- What purchase or campaign is worth the capital?
- Which qualified customers should the team help next?

Connect read-only weclapp data, or use authoritative exports. Website replacement and Odoo migration are not prerequisites.
