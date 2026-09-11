# Delivery tracking

Prepared 2026-09-11. Live tracker state takes precedence over this initial mapping.

Use [GitHub epic #4](https://github.com/frankxai/pv-lager-agentic/issues/4) for implementation and the [Linear project](https://linear.app/arcanea/project/solar-commercial-os-pv-lager-pilot-d77a2e324652) for business readiness and milestone acceptance. [PR #3](https://github.com/frankxai/pv-lager-agentic/pull/3) contains the proposed design and package. Start execution with [the Codex handover](CODEX-HANDOVER.md).

## Engineering backlog

| Issue | Workstream | Dependencies | Evidence that completes it |
|---|---|---|---|
| [#5](https://github.com/frankxai/pv-lager-agentic/issues/5) | Canonical application and ownership plan | None | Source choice, clean build and preview provenance |
| [#6](https://github.com/frankxai/pv-lager-agentic/issues/6) | Tenant/customer authorization | #5 | Permission matrix and negative isolation tests |
| [#7](https://github.com/frankxai/pv-lager-agentic/issues/7) | ERP/export adapters | #6 | Idempotent imports, freshness and source reconciliation |
| [#8](https://github.com/frankxai/pv-lager-agentic/issues/8) | Economics and staff decisions | #7 | Deterministic calculations and traceable decision examples |
| [#1](https://github.com/frankxai/pv-lager-agentic/issues/1) | Payload and customer commerce | #5, #6, #7; #10 for live handoff | Mobile journey and durable quote receipt |
| [#9](https://github.com/frankxai/pv-lager-agentic/issues/9) | Live authenticated plugin | #6, #8; #10 for execution tools | Protocol/auth tests, registration and real scoped call |
| [#10](https://github.com/frankxai/pv-lager-agentic/issues/10) | Mandates and durable actions | #8 | Limits, replay/failure tests and sandbox receipt |
| [#11](https://github.com/frankxai/pv-lager-agentic/issues/11) | Second business and handover | #1, #6–#10 | Synthetic onboarding plus separate real pilot acceptance |

Dependencies are recorded as issue links and in [tracking.json](tracking.json). No autonomous issue scheduler or GitHub-to-Linear synchronization has been installed. Suggested executor roles are not assignments to named people.

## Linear outcome milestones

| Milestone | GitHub evidence | Business gate |
|---|---|---|
| M1 — Trusted foundation | #5, #6, #7 | B1 and ownership/access portion of B2 |
| M2 — Staff decisions and customer quotes | #8, #1; #10 handoff foundation | Staff/customer review in B3 |
| M3 — Authenticated AI and controlled actions | #9, #10 | Applicable mandates in B2 |
| M4 — Repeatable business rollout | #11 | Real second pilot and handover in B3 |

Milestones are outcomes, not a prohibition on preparing later components early. Quote delivery may use the durable execution foundation before broader purchasing/campaign automation is accepted.

Linear's workspace free issue quota blocked business-ticket creation. No upgrade was purchased. B1–B3 are actual checklist records in the project's description, not claimed Linear issues:

- B1: authorized private source data, SKU/warehouse mappings, control totals and reconciliation owner.
- B2: business account/billing ownership, operators, metric definitions, contribution/cash/ads limits and mandates.
- B3: staff/customer review, baseline/observation period, real second pilot and training.

Named business assignees remain pending; role ownership is explicit. Do not place private records in this public repository.

## Operating the tracker

1. Select the first dependency-ready GitHub issue and create a focused implementation branch.
2. Link the PR to the issue. Report acceptance evidence and unresolved live/business gates.
3. Close only when the issue's complete acceptance criteria are met; documentation alone is insufficient for implementation issues.
4. At accepted PR/release boundaries, the technical coordinator updates the corresponding Linear milestone description with evidence and acceptance status, plus B1–B3 as appropriate.
5. Do not mirror every task. Linear's computed milestone percentages do not measure engineering completion while implementation issues live in GitHub.
6. If native synchronization is introduced later, define field ownership, link identifiers, idempotent events and loop prevention first. Keep GitHub task state authoritative.

For a GitHub-only team, the epic and handover already suffice. Retain Linear while the business uses it for rollout decisions; paying for extra seats or quota is not required to start implementation.
