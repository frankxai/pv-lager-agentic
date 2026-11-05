# Data contracts and commercial metrics

## Evidence before rankings

No live weclapp, payment or advertising account data was read for this specification. Existing frontend product/stock constants are not business records. Do not report bestsellers, margin winners, purchase quantities or oversupply until authoritative data is imported and reconciled.

A read-only ERP connection is sufficient for the first useful report. A dated export can establish a baseline; it cannot support real-time inventory promises.

## Minimum onboarding pack

Ask the business operator for a secure read-only weclapp integration or private exports:

| Dataset | Preferred history | Required detail |
|---|---|---|
| Products and variants | Current plus inactive SKUs referenced historically | Stable ID, SKU, manufacturer code/GTIN, category, Wp, units, units per pallet, lifecycle |
| Sales documents | 12 months initially; up to 24 for seasonal comparison | Order and line IDs, dates, status, qty, discounts, net sales, tax, channel, linked invoices/credit notes |
| Purchase documents | Same period plus all open POs | Supplier, costs, rebates, quantity, receipt dates, promised dates, freight, payment terms |
| Stock and movements | Current balances plus receipt/movement history | Warehouse/bin/lot, available/reserved/quarantined, movements, valuation method |
| Returns and credit notes | Same period | Original sale reference, quantity, reason, refund, handling and recovered value |
| Freight and payment fees | Same period where available | Order or shipment reference, real carrier cost, customer shipping charge, provider fees |
| Ads | Since tracking began; initially recent 90 days | Campaign/day/currency/spend, clicks, conversions, order/lead linkage where permitted |
| Open commercial work | Current | Quotes, stage, due date, firm demand, customer delivery promise; avoid free-text personal details in analytics |
| Liquidity inputs | Current and upcoming payment schedule | Collectible receivables, committed supplier payments and available cash; owner-only scope |

Initially rank products using ERP evidence even when ads are unavailable, but label contribution as before advertising. Do not substitute an invented attribution model or zero ad spend.

Inspect the actual tenant API schema, pagination, stock semantics and permissions before mapping endpoints. [weclapp API portal](https://www.weclapp.com/api/)

## Canonical data grains

All records carry tenant_id, source_system, source_id, source_updated_at, observed_at, ingested_at and import_run_id. Business dates use Europe/Berlin; technical timestamps use UTC. Preserve source currency and conversion basis. Use decimal money, not floating-point currency arithmetic.

| Entity | Grain / key | Required semantics |
|---|---|---|
| product | tenant + canonical_product_id | Manufacturer part number; base unit; category; Wp where relevant; lifecycle |
| source_id_map | tenant + source + entity + source_id | Canonical ID, active dates, immutable migration trace |
| supplier_offer | supplier + product + quote version | Currency, unit/pack conversion, tier price, MOQ, landed-cost components, validity, payment and delivery terms |
| sale_line | tenant + ERP order + line + revision | Ordered, fulfilled and invoiced quantities kept separately; net price and discounts |
| invoice_line | invoice + line | Posted revenue date, order linkage, tax separation; avoid counting order and invoice twice |
| return_line | credit/return + line | Original sale linkage; returned qty, refund, salvage and handling costs |
| inventory_snapshot | warehouse + product + lot + observed_at | Physical, blocked and reserved quantities; explicit source definitions |
| stock_movement | source movement ID | Type, quantity, location, original receipt/lot identity, event time |
| purchase_line | PO + line + revision | Ordered, received and outstanding quantity; expected date; confirmed versus tentative |
| fulfilment | shipment + line | Quantity, promised date at acceptance, actual date, actual freight and customer shipping charge |
| payment_allocation | payment + invoice allocation | Collected cash, refund cash, fees and outstanding balance |
| campaign_daily | platform + account + campaign + local date | All spend, currency and status; never just spend attached to successful orders |
| attribution | order/lead + campaign + model version | Match basis, confidence, attribution window, weights totalling at most 1 |
| decision / action / outcome | immutable business decision ID | Evidence, expected impact, approvals, side effects, failures and measured outcome |

BOM edges retain product IDs, component quantity, unit, approved compatibility source and revision. Kit sales consume component demand; they are not additional independent sales of every component. Transfers between warehouse bins must not reset stock age.

## Reconciliation and quality

Before publishing metrics:
- Match order/invoice/credit-note totals to the chosen ERP period and status scope. Explain any differences.
- Deduplicate source IDs and revisions; process cancellations and late returns.
- Reconcile stock: opening + receipts + returns + transfers in - shipments - transfers out - write-offs = closing, by product/warehouse where supported.
- Convert pallets, pieces, sets and watts explicitly. Reject impossible units and missing mappings.
- Cost coverage is measured by share of net sales with credible costs; show excluded revenue alongside every profitability ranking.
- Quantity without cost remains countable demand, but does not become a margin estimate.
- Distinguish observation age from request time. A response produced now may contain yesterday's stock.
- Missing costs, stock history, lead times or order attribution create an explicit unknown state.

Acceptance requires zero unexplained duplicate business documents and no unexplained balance differences beyond a documented source-rounding tolerance. Normal returns, corrections and rounding are reconciled facts, not automatically errors.

Proposed data service levels: inventory and reservations refreshed within 15 minutes for operational recommendations; invoices/costs reconciled daily; advertising refreshed daily. These are design targets subject to tenant API capability. Checkout must revalidate/reserve authoritative stock at commitment time; a 15-minute snapshot alone is insufficient.

## Primary scoreboard

| Metric | Definition | Decision / cadence | Limitation |
|---|---|---|---|
| Contribution after marketing | Net recognised sales + net shipping income - landed COGS - variable fulfilment/payment/service costs - realised return/warranty costs - separately disclosed incremental reserves - all advertising spend | Weekly allocation, trailing 28 days | Excludes fixed overhead and tax; costs/reserves and refunds must not be deducted twice |
| Excess inventory at cost | Actual on-hand units classified as excess under the approved coverage policy, multiplied by documented lot/unit cost | Weekly capital allocation | Forecast-dependent; separate booked inventory reduction from net cash recovery |
| On-time, in-full fulfilment | Eligible orders due in period fully delivered/collected by original agreed date divided by all eligible orders due in period | Daily operations, weekly review | Open overdue orders stay in denominator; mutually agreed changes are recorded, not silently backdated |

Two quality guardrails: margin evidence coverage and overdue/unreconciled source data. When a guardrail fails, keep the business issue visible but block dependent monetary execution.

Drivers: contribution per order and quote win rate; days of supply and lot age; promised-date stock availability and supplier arrival reliability.

## Product economics

Use reconciled ex-tax values. Apply the finance-approved landed-cost/valuation method; preserve the method and source.

- Net sales = posted product revenue less discounts and linked refunds/credits within the defined accounting or sale-cohort view.
- Landed COGS = cost assigned to units sold, including allocated inbound freight/duties and applicable rebates. Do not deduct inbound freight twice.
- Gross profit = net product sales - landed COGS.
- Gross margin % = gross profit / net product sales. This is not markup on cost. Non-positive denominator yields undefined, not zero.
- Contribution before ads = gross profit + customer shipping income - outbound freight - payment fees - variable pick/pack/installation/service cost - return/warranty costs and disclosed reserves not already recognised above.
- Contribution after ads for a channel = channel contribution before ads - all channel campaign spend.
- Per-SKU attributed contribution after ads is provisional when spend allocation is uncertain. Allocate unsuccessful-campaign spend explicitly or keep it in an unallocated bucket that still reduces the business total.
- CM per watt = contribution before ads / actual rated watts sold; compare only suitable products within the same decision context.
- GMROI for a stated period = gross profit in that period / time-weighted average inventory at cost in that period. Clearly label the period; do not mechanically annualise sparse histories.
- Average margin % is sum gross profit / sum net sales, never the unweighted average of SKU percentages.

Show realised transaction economics and prospective replacement-cost economics separately. Yesterday's purchase cost is not today's supplier offer.

Sales leaderboards: units, watts, net sales, gross profit euros, contribution euros, repeat demand and inventory return. One project sale can dominate units; show customer/project concentration and channel alongside rank. Do not call the highest-margin product the best replenishment candidate without considering demand and capital.

## Inventory, forecast and buying logic

Start with interpretable 28/90-day baselines, in-stock exposure and known projects. Track demand uncertainty, seasonal evidence and supplier lead-time distribution. Recorded sales while out of stock understate demand; mark censored periods. Sparse and intermittent demand uses conservative ranges or category priors, not precise-looking forecasts.

Two valid planning views must not be mixed:

1. Available-now view: usable on-hand minus non-overlapping firm reservations. Compare against uncommitted demand only.
2. Time-phased planning view: start with usable physical on-hand, then subtract each firm dispatch exactly once and residual forecast demand exactly once, and add confirmed inbound arrivals by date.

Residual forecast demand is total forecast less overlapping firm demand, floored at zero. If the forecast was already generated for uncommitted demand, do not subtract firm demand again. Record the forecast basis.

For a horizon H:
projected stock = usable on-hand + confirmed arrivals by H - firm dispatches by H - residual forecast consumption by H.

Reorder quantity is the smallest feasible quantity that keeps projected stock above the agreed safety level over the lead-time/review horizon, subject to pack size, MOQ, shelf/storage capacity, approved suppliers, cash availability and maximum coverage. If MOQ breaches cash or maximum coverage, escalate an alternative; do not round up into an infeasible purchase.

Safety levels are calibrated to service needs and variability. Avoid applying the same day-of-cover target to commodity modules, batteries and project-built carports. Show shortage date, arrival confidence and downside demand scenario.

- Days of supply = relevant usable/uncommitted stock divided by expected matching daily demand. Zero demand is undefined/infinite; show as no observed demand.
- Age = time since original receipt of still-held stock; when lot data is missing, state the approximation.
- Age buckets (initial display): 0–30, 31–60, 61–90, 91–180, >180 days. Age is a diagnostic, not proof of excess.
- Excess at cost is bounded by actual on-hand inventory. Separate expected future excess on confirmed inbound POs.
- Stock reserved for valid projects, service spares or deliberate seasonal protection can be old without being excessive.
- Rising watts per euro, superseded models, returns and compatibility gaps can increase obsolescence risk. Use verified supplier/market evidence, not an invented market price.

Compare no purchase, smaller/frequent purchase, supplier renegotiation, substitution and purchase; include cash due dates and confirmed receipts. Supplier discount alone never justifies buying.

## Campaign economics and causal limits

At order level:
maximum acquisition spend = expected contribution before advertising - required retained contribution.
Use a conservative estimate and separate repeat-customer upside until observed.

For a quote lead:
maximum cost per qualified lead = calibrated win probability × expected won-order contribution before ads - expected presale handling cost - required expected retained contribution.
A nominal form completion is not automatically a qualified lead.

Advertising platform ROAS based on gross revenue is a diagnostic. The business decision uses contribution, all spend, returns and conversion lag. Platform-attributed sales are not automatically incremental; cannibalisation of organic demand must be considered. Use holdouts or controlled budget/geo/time tests when volume supports them; avoid causal claims from before/after alone.

Track both:
- Account-period economics: complete revenue/cost/spend totals.
- Matured acquisition cohorts: spend and later converted/returned orders within a declared window.

For clearance, compare expected net cash recovery now with holding, supplier return, trade bundle or write-down. Book loss and cash benefit can diverge. Any deliberate below-floor clearance is an owner-approved exception with both effects shown.

Do not publish real product claims or shipping promises from generated content alone. Approved datasheets, technical compatibility, actual availability and confirmed logistics govern the offer.
