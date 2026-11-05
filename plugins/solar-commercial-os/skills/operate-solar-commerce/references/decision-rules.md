# Decision rules

- Net revenue excludes VAT and subtracts discounts, credits, and returns. Reconcile order lines against invoice lines; never count both as sales.
- Gross profit = net revenue minus recognized cost of goods. Gross margin = gross profit / net revenue; undefined when net revenue is zero. Cost coverage must accompany rankings.
- Contribution before advertising = net revenue minus COGS, variable shipping subsidy, payment, fulfillment, and return/warranty costs. Contribution after advertising also subtracts allocated campaign spend. Unattributed campaign spend still appears in the overall campaign/account result; it is not silently dropped.
- Missing costs are unknown, not zero. Provisional assumptions must be visible and excluded from claims of realized profit. Do not deduct a freight cost twice if already included in landed COGS.
- Stock available to promise uses the ERP's reservation convention. If availability is already net of reservations, do not subtract them again. Separate sellable, quarantined, returned, incoming, and reserved units by warehouse.
- Estimate demand using in-stock periods, seasonality, lead time, and returns. Observed sales during stockouts are a lower bound on demand. State the estimation window.
- Reorder proposal = lead-time demand + safety stock minus the usable inventory position. Handle time-phased confirmed inbound, backorders, MOQ/pack rounding, supplier reliability, and cash ceiling explicitly. Do not count quarantined stock as usable.
- Days of cover = usable available stock / estimated daily demand. With no reliable demand, report undefined or no observed demand, not zero days. Use receipt-lot age where available; a SKU's creation date does not measure stock age.
- Promotion candidates need available stock, credible demand, a contribution floor, a capped acquisition-cost assumption, and customer/product suitability. Draft an alternative clearance option if paid ads cannot meet the floor.
- Do not infer module/inverter/battery compatibility from brand names. Require verified technical constraints and supporting product documentation; escalate unresolved engineering questions.

Each decision records business scope, source version and extraction time, metric window, SKU/warehouse, facts versus assumptions, calculation, proposed change, expected range, owner, expiry, and execution authority. The production policy engine must enforce these fields; a prompt is not an access-control mechanism.

Historical COGS supports past margin; a purchase proposal needs the current supplier quote and cash schedule, including freight, tax payment timing, deposits and terms. An MOQ of 50 at a historical EUR 82 already implies EUR 4,100 before additional cash obligations; it cannot fit a EUR 3,000 cash cap without a verified alternative. Late inbound does not erase an earlier lead-time supply gap.
