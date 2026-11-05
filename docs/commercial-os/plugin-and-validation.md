# Plugin scope, connection plan and validation

2026-09-11 · Package version 0.1.0

## What exists

`plugins/solar-commercial-os/` contains a skills-only plugin: portable root `plugin.json`, Codex compatibility metadata, three skills and usage documentation. The core skill content is also installed as personal skills for the requesting account after Git persistence verification.

| Skill | Use |
|---|---|
| operate-solar-commerce | Staff stock, contribution, buying, excess-stock and campaign decisions |
| assist-solar-customers | Published products, verified comparisons, quote drafts and authorized own-order help |
| deliver-commercial-os | Issue-based implementation, acceptance evidence and tracker handover |

Skills provide procedures and can use tools the session already has. They do not themselves grant API access, create a production backend, enforce server authorization, or register a ChatGPT plugin.

OpenAI documents portable plugin packages and skill discovery in its [plugin packaging guide](https://developers.openai.com/plugins/build/plugins) and [skills guide](https://developers.openai.com/plugins/build/skills). This package keeps portable and compatibility interface metadata aligned. No fabricated MCP URL or registration ID is included.

## Planned tool-only MCP surface

Implementation belongs to [#9](https://github.com/frankxai/pv-lager-agentic/issues/9). Names below are proposed service contracts, not callable tools in this package.

| Proposed tool | Scope | Result/effect |
|---|---|---|
| catalog_search / product_get | Published catalog, or authenticated customer pricing | Published specifications, price basis and dated availability |
| commercial_brief / decision_get | Permitted staff of current tenant | Evidence, calculated metrics and decision proposals |
| quote_prepare | Customer's own account or permitted staff | Recalculated draft; persisted draft creation is a write |
| quote_submit | Customer's own account or permitted staff | Durable submitted quote and receipt; not automatic paid order |
| own_order_get | Authenticated customer ownership | Allowlisted order/fulfillment status |
| decision_execute | Staff role plus applicable mandate | Execution via #10; never arbitrary ERP commands |

Design tool schemas around narrow operations. Explicitly annotate draft persistence as a write; do not label a mutating operation read-only. Tools may not accept unrestricted SQL or provider credentials. Read models must preserve business and customer scope, freshness and provenance.

Use verified identity and membership on every server call. Authentication/authorization cannot be delegated to skill wording. Follow the official [authentication guide](https://developers.openai.com/plugins/build/auth). User or tenant-specific records and consequential writes need appropriate authentication and scopes.

Deploy and validate an actual authenticated HTTPS MCP endpoint, then complete the platform registration and test a real call. Only after registration add actual MCP/app mappings. The official [connection guide](https://developers.openai.com/plugins/deploy/connect-chatgpt) describes the current setup; interface navigation can change. No plugin directory publication or live connection was performed here.

## Skill behavior evaluation

One independent forward test used a deliberately synthetic, dated export containing missing costs, ATP already net of reservations, a late inbound delivery, MOQ above cash budget, stockout-constrained demand and unallocated ad spend. No external actions were taken.

Observed:
- A: revenue EUR 10,000, gross profit EUR 1,800, contribution before ads EUR 1,300 and after allocated ads EUR 400.
- ATP remained 20, not 10; a provisional 50-unit purchase at historical EUR 82 exceeded EUR 3,000 cash.
- B: cost missing; excluded from profit rankings and no justified ad increase.
- C: 60 sales over 11 in-stock days was identified as a provisional demand rate rather than using all 31 days.
- EUR 300 unallocated account ad spend remained visible; total account profitability remained unresolved.
- Stale extraction and ambiguous “tomorrow” prevented an unsupported live purchasing claim.

Revisions explicitly resolve relative dates, distinguish historical COGS from current supplier cash requirements, allow “no defensible range available,” and clarify that user-provided exports need no additional identity approval.

This was a behavior check on one scenario, not production financial validation or a security penetration test. Server-side isolation and execution guarantees remain implementation acceptance gates.

## Packaging checks

Run the provided environment's skill validator on installed skill sources and plugin validator on the packaged compatibility manifest; check portable identity/version/interface consistency and source-content parity. Recorded results for this delivery are in `validation-results.json`. The production application's build and MCP protocol/auth tests have not been run because they are not implemented by this package.
