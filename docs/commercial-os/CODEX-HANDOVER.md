# Codex execution handover

Prepared 2026-09-11. Start from the live issue state; historical observations below must be rechecked.

## Copy this into Codex

```text
Use $deliver-commercial-os.

Repository: frankxai/pv-lager-agentic
Goal: build Solar Commercial OS, a reusable solar-business platform that turns verified stock, sales, cost and campaign data into profitable staff decisions and reliable customer quote workflows. PV-Lager is the first pilot; businesses and customers must remain isolated.

Read AGENTS.md, GitHub epic #4, the selected issue and its dependencies. The architecture/handover is in draft PR #3 on branch codex/commercial-os-architecture-20260911, under docs/commercial-os/. If that PR is merged, read the current main version. Fetch and inspect the actual refs; do not assume main contains the deployed application.

Start with issue #5 unless live evidence proves it is complete. Recover a clean application baseline by comparing agent/hermes/rial-energy-growth-system and agent/claude/pvlager-decontamination, both under apps/web. Preserve unrelated work and record the source choice. Use an isolated issue branch. Do not blindly merge either branch or replace existing work.

Implement the selected issue through a focused, tested PR. Complete useful work with synthetic fixtures when live access is absent, but leave live-data acceptance open. Follow reusable-product.md, dashboard-architecture.md, architecture.md, data-and-metrics.md, workflows.md, tracking.md, the decision schema and policy template.

Success: satisfy the selected issue's checkboxes with reproducible evidence; make data freshness and unknown costs visible; preserve tenant/customer authorization; avoid duplicate external effects; document operational ownership and recovery. Link the PR and evidence to the issue and update the Linear milestone record when justified.

GitHub owns implementation state. Linear owns business readiness and milestone acceptance; do not duplicate engineering issues there. Its free issue quota is currently exhausted, so use the project description's B1–B3 checklist.

You may inspect, implement, test, commit and open/update the issue PR within this task. This handover does not authorize production merges, account transfers, domain cutovers, purchases, paid campaigns or customer messages. Honor any additional explicit authorization from the active user session.

Do not stop at another architecture proposal. Deliver the first ready implementation slice, report commands actually run and results, identify exact remaining access blockers, and name the next ready issue. Do not claim a remote task, deployment, plugin registration or live integration exists without its receipt.
```

## First execution target

[Issue #5](https://github.com/frankxai/pv-lager-agentic/issues/5): establish the canonical application and ownership handover plan.

Known observations at audit:
- main `ef594a2e69259eea26539b8b363997d084d455c6`: old prototype/docs rather than the Next.js application.
- growth `8129a428dd7334838dab84c2d287498d69216394`: application under `apps/web`; stock route uses fixed values and a request-time timestamp.
- remediation `302db3a598fb2322ad42f2098f2aa7a79e7e25bd`: also contains `apps/web`.
- PV-Lager Vercel deployment was a CLI upload with dirty source and no Git link. Clean provenance has not been established by the architecture PR.
- PR #3 contains a proposed design/contracts/plugin package. Merging it alone cannot recover the app, connect ERP or complete the implementation epic.

Issue #5 can proceed without ERP credentials. Infer install/build commands from the selected lockfile and package scripts; record the exact runtime and commands after inspection. No build command is asserted as verified in this handover.

## Delivery order

| Stage | GitHub work | What may proceed concurrently | Gate |
|---|---|---|---|
| Recover | #5 | Business ownership/data access checklist | Clean source and build |
| Foundation | #6, then #7 | Payload/editorial/UX from #1 after source recovery | Tenant tests and reconciled source |
| First value | #8 and #1 | Read-only staff decisions; customer UI | Traceable metrics; quotes need #10 for live handoff |
| Live AI | #9 and #10 | MCP read tools and execution service | Authentication, mandates and replay tests |
| Repeat | #11 | Real pilot selection and training | Synthetic isolation plus separate business acceptance |

Dependencies are links in GitHub issue bodies and [tracking.json](tracking.json), not an installed scheduler. A Codex session takes one ready issue at a time unless explicitly given a broader implementation batch.

## Product-level success criteria

These apply across releases; do not pretend the first PR completes them all.

1. Reproducible commit/build and recorded deployment root.
2. Per-tenant stock, sales/credits and costs reconcile to source totals with agreed tolerances; unknown/stale facts stay visible.
3. Deterministic best-seller, contribution, replenishment and excess-stock calculations pass meaningful edge cases.
4. A customer receives a persisted quote receipt; retrying submission/handoff does not duplicate an ERP order.
5. Two tenants with overlapping SKU/customer IDs cannot cross API, database, cache, job, export, file or retrieval boundaries.
6. Consequential actions obey mandate scope, expiry, monetary limits, fresh facts and idempotency.
7. A real authenticated MCP endpoint is registered and called successfully before claiming the live plugin is connected.
8. A second synthetic tenant works through configuration; actual second-business value is separately reviewed against a baseline.
9. Operators have backup/recovery, escalation and access-removal instructions.

## Required evidence in every implementation PR

State the user/business problem, changed behavior, acceptance mapping, exact commands/results, screenshots where behavior is visual, private evidence reference for live reconciliation, remaining gates, rollout/recovery and next issue. Link GitHub tasks with “Refs” until all acceptance is met; use automatic closing only for genuinely completed issues.

Never commit credentials, customer exports, supplier terms or private margin results to this public repository. Synthetic fixtures must be unmistakably synthetic. Use an approved private evidence location for live validation.

## Business inputs

B1: authorized read-only ERP or exports; mapping/control totals; reconciliation owner.
B2: business account/billing/access ownership; primary/backup staff; metric definitions, cash/ads limits and mandates.
B3: staff/customer reviewers, baseline/observation period and second pilot operator.

Current [Linear project](https://linear.app/arcanea/project/solar-commercial-os-pv-lager-pilot-d77a2e324652) holds these checklist records because new issues are quota-blocked. A named human assignee has not been inferred.

## Execution status

This document is an executable task brief, not evidence that a remote Codex session has started. The current environment has no callable remote-Codex launch capability. Open the repository in Codex and submit the prompt above. The three installed personal skills can help this account; repository plugin packaging supports subsequent distribution, subject to the target platform's install/registration flow.
