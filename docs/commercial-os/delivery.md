# Implementation and acceptance plan

## What this change delivers

A repository-resident architecture, operating model, metric dictionary, eight workflows, rollout plan, decision schema and default execution policy. It does not implement ERP adapters, migrate data, provision hosting, publish campaigns, place orders or activate scheduled jobs.

## Build sequence

Ownership preparation, source recovery and read-only intelligence can run in parallel. Customer-domain cutover, financial transaction activation and ERP authority migration are separate releases.

| Stage | Owner | Deliverable | Dependency / evidence gate | Time box and stop condition |
|---|---|---|---|---|
| First 72 hours | Frank + business operator | Reproducible source plan; read-only data mapping; first reconciliation report | Access to source tree and ERP export/service account | Cap initial discovery at 3 focused workdays; unresolved access yields a precise data request, not fake metrics |
| Days 4–14 | Engineer + category employee | Product/category metrics and daily decision queue; excess and replenishment drafts | Reconciled sales/stock/cost data | Deliver one category first; stop expansion when core quantities/costs cannot be reconciled |
| Days 15–30 | Engineer + commercial employee | Payload editorial pilot, one offer experiment and persistent quote flow | Approved product data; shipping/pricing; communication/spend mandate | One category and one campaign; pause scaling until true contribution and fulfilment can be evaluated |
| Days 31–90 | Owner + engineering | Bounded execution, broader categories, supplier feedback; Odoo migration rehearsal | Reliable results, action audit, recovery test and migration parity | No ERP switch until balances/open work and idempotency pass; no broad automation while exception burden rises |

These are planning windows, not promised completion dates. API access, team availability and existing source recovery determine elapsed time. No paid infrastructure or campaign budget is authorised by this plan.

## Prioritised implementation backlog

### P0 — Recover source and prevent misleading operations

- Compare growth and remediation branches; capture current deployment metadata.
- Locate the development checkout or deployment-source evidence for gitDirty changes.
- Review and preserve useful changes; document unrecoverable differences rather than claiming an exact match.
- Build the agreed apps/web source in preview and establish a clean commit-to-deployment path.
- Replace mock/live-labelled stock sources with explicit unavailable/demo states until connected.
- Persist enquiries before success acknowledgement; add delivery receipts and exception ownership.
- Keep public customer domains on working systems until replacement acceptance.
- Inventory company ownership, credentials, backups and independent billing; do not bundle account transfer into code deployment.

Acceptance: selected source reproduces the approved preview; no action depends on hardcoded inventory; a test enquiry is durably stored and delivered exactly once under retry.

### P1 — Establish evidence

- Create private operational database and least-privilege source access.
- Implement import cursors, deduplication, deletion/correction handling and private source retention.
- Map canonical product IDs, units, source order IDs and valuation method.
- Load history, current inventory, open POs and order promises.
- Implement deterministic metric views with quality receipts and missing-cost disclosure.
- Add role-scoped access: owners see liquidity; category staff see relevant economics; public APIs expose no costs.

Acceptance: totals reconcile by period/category; two orders spanning discount, delivery and return scenarios trace end to end; pallet/piece and kit/component semantics are verified.

### P2 — Make decisions usable

- Implement decision schema, evidence drill-down, ownership and lifecycle.
- Build German-first Heute and Produkte screens using real data only.
- Implement one-category excess/replenishment calculations and supplier comparison.
- Record accepted, edited and rejected decisions with predicted ranges and later outcomes.
- Limit generated prose to evidence-backed explanation and drafts.

Acceptance: each recommendation reproduces from its source snapshot and calculation version; missing evidence blocks dependent execution; users complete a morning review without manually rebuilding reports.

### P3 — Connect marketing and sales

- Add Payload editorial models and approved claim/media registry.
- Select a small set of genuinely available products; validate bundle compatibility.
- Implement quote/checkout handover, taxes, shipping, payment events and external order mapping.
- Establish campaign/order identifiers, attribution and all-spend reconciliation.
- Draft one campaign kit; the business chooses and authorises its spending envelope.
- Measure campaign cohorts through conversion/return lag; compare with baseline before scaling.

Acceptance: real product, landing-page and checkout terms agree; no duplicate ERP orders; conversion count does not double-count stages; all spend reduces reported contribution.

### P4 — Increase autonomy and rehearse Odoo

- Implement scoped mandates, budget reservation, action locks, expiry and read-back verification.
- Require named owners and an operational stop/recovery path.
- Pilot bounded purchase/campaign changes only after at least two complete observed review cycles for that workflow, with outcome windows mature enough to judge.
- Create Odoo adapter; replay contracts and reconcile shadow results.
- Rehearse cutover with open orders, returns, POs, stock, costs and payment allocations.
- Disable the former writer before enabling the new authority.

Acceptance: retries and timeouts cannot duplicate commitments; stale evidence invalidates approval; policy caps include pending actions; migration parity and rollback are documented.

## Evidence-based targets

Initial targets concern engineering correctness:
- Every displayed commercial recommendation has source freshness, owner, metric version and evidence.
- Zero unexplained duplicate orders or silently dropped enquiries.
- Every external action has an authority receipt, unique business reference and verified result.
- Unknown data remains visibly unknown.

After baseline, owner selects directional business targets using:
- realised contribution after all marketing costs;
- excess inventory at cost and net cash recovery;
- fulfilment reliability;
- staff preparation time measured before and after.

Do not promise a revenue lift, inventory reduction percentage or 80–90% automation before measuring actual work and economics.

## Meaningful acceptance cases

1. Credit note after month-end changes the correct cohort and accounting-period view without double deduction.
2. Missing purchase cost excludes a SKU from margin ranking while retaining its unit sales.
3. Pallet and piece sales reconcile to the same base unit.
4. Customer order and related ERP order/invoice count as one commercial sale.
5. Reserved stock and firm demand are not subtracted twice.
6. Confirmed inbound prevents an unnecessary duplicate PO; late inbound still reveals the shortage.
7. MOQ exceeds cash envelope: choose a feasible alternative or escalate; never silently breach.
8. Old stock reserved for a valid project does not enter a clearance campaign.
9. Campaign with spend but no orders still reduces total contribution.
10. A repeat job after an external timeout reconciles before attempting a second side effect.
11. A stale stock snapshot cannot acquire freshness by being requested again.
12. Staff without cost access cannot retrieve margin through the co-pilot or public endpoint.
13. Edited campaign/order data invalidates stale authority and forces revalidation.
14. Odoo shadow results differ from weclapp: report mismatch and block authority switch.

Run these against the implemented services; the existence of a checklist is not a passed test.

## Service onboarding checklist

The business employee can prepare one secure handover:
- Read-only ERP tenant access or the datasets in data-and-metrics.md.
- Named owner for products/costs and one category to pilot.
- Current warehouse availability/reservation semantics and valuation method.
- Existing advertising account/channel ownership and conversion setup, when relevant.
- Staff roles and company-controlled deployment/database accounts.

Pass credentials through the chosen secret manager/service connection, never repository commits, issue bodies or chat messages.

## API and tool constraints verified for planning

- weclapp publishes an API portal, but tenant schema, exact fields, pagination and credentials remain unverified.
- Payload ecommerce includes products/orders/payments; native shipping/tax handling must be implemented separately.
- Odoo 19 JSON-2 supports external access; its official documentation describes plan constraints and independent SQL transactions per call. Validate the chosen hosted/self-managed deployment before committing.
- Google Ads supports transaction-specific and offline conversion data; account access and tracking quality remain unverified.
- No specific Odoo MCP server is selected or proven. MCP is an access surface over business services.

Sources:
- https://www.weclapp.com/api/
- https://payloadcms.com/docs/ecommerce/overview
- https://github.com/odoo/documentation/blob/19.0/content/developer/reference/external_api.rst
- https://support.google.com/google-ads/answer/6095947
- https://developers.google.com/google-ads/api/docs/conversions/upload-offline
