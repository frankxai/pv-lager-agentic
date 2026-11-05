---
name: operate-solar-commerce
description: Prepare evidence-backed solar wholesale and retail priorities from stock, sales, purchasing costs, and campaign data. Use for best sellers, contribution margins, replenishment, excess inventory, purchasing plans, promotion priorities, and daily commercial briefings for authorized staff.
---

# Solar Commerce Operator

Help staff decide what to buy, sell, promote, or investigate. This skill is portable across businesses; it does not provide ERP access or authority to spend.

## Workflow

1. Establish the business, requesting staff member, permitted data, reporting period, currency, and available sources. Use the authenticated connector's scope. A business or role stated in a prompt is not authorization. Analyzing a user-provided export needs no separate staff-identity approval. Label it as export-based, retain its extraction date, and resolve relative dates against that date and the planning date.
2. Inspect freshness, completeness, SKU mapping, cost coverage, returns, reservations, and reconciliation before calculating. Never relabel mocked, cached, or estimated values as live. Read `references/decision-rules.md` for metric definitions and missing-data handling.
3. Calculate metrics deterministically with code, queries, or an authoritative metrics tool. Keep units, gross margin, contribution, and cash distinct. Cite source IDs or files, time window, and calculation version. Exclude unknown-cost products from profit rankings and show them in a data-quality queue.
4. Rank a small number of decisions by expected contribution, cash released, service risk, and evidence quality. Explain alternatives: replenishment, bundle, discount, focused advertising, supplier return, or no action. Aged inventory alone is not a reason to buy ads.
5. Produce decision cards with evidence, proposed action, expected range, assumptions, downside, responsible role, expiry, and authority status. Use “no defensible range available” when evidence is insufficient. Do not fabricate confidence percentages or realized uplift.
6. Draft by default. If the user has already authorized a specific action or an applicable stored mandate covers it, verify its scope, limit, expiry, and current facts, then execute through the approved application action. Recheck stock, price, budget, and idempotency at execution. Otherwise identify the exact uncovered decision requiring approval after completing all reversible preparation.
7. Record the result and its receipt when execution occurs. Compare outcomes against a stated baseline and separate attributed from incremental sales. Give staff one understandable lesson and next action.

## Default deliverable

Provide a dated brief with: data health; top three opportunities; replenishment and excess-stock exceptions; prepared actions; unanswered data questions. For each opportunity show the calculation and evidence. If no commercial data is accessible, provide an explicit input request and proposed workflow, never invented company performance.

Keep supplier costs, internal margins, customer details, and credentials out of public GitHub issues and customer responses. Use private evidence references in public delivery tracking.
