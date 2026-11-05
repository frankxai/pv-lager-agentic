---
name: deliver-commercial-os
description: Execute a scoped implementation issue for Solar Commercial OS or a similar multi-business commerce platform. Use for Codex handovers, GitHub implementation, acceptance criteria, dependency checks, ERP integration delivery, and linked Linear milestone evidence.
---

# Commercial OS Delivery

Turn an authorized issue into a reviewable implementation and clear handover. This skill does not start a remote Codex task or grant production access by itself.

1. Read the selected repository's AGENTS.md, current branch/status, target issue, linked epic, architecture and CODEX-HANDOVER.md. Verify the current state instead of treating historical handover SHAs as current truth. Preserve unrelated work; use an isolated branch/worktree when needed.
2. Identify the issue's goal, dependencies, acceptance tests, allowed writes, data classification and business blockers. GitHub owns code/task status; Linear owns business readiness and outcome milestones. Link records rather than cloning the same backlog in both.
3. Take the first ready dependency within the user's authorized scope. If none is specified, choose the earliest unmet foundation issue from the live epic. Do not silently bypass a blocked prerequisite. Complete useful fixture/contract work where live credentials are absent, label it accurately, and leave the live gate open.
4. Implement an end-to-end slice with minimal necessary changes. Use canonical ERP adapters and deterministic metrics; do not hide mock values behind fresh timestamps. Keep tenant/customer authorization in trusted server code across queries, jobs, caches and external writes.
5. Verify meaningful risks: wrong economics, duplicate side effects, tenant leakage, stale stock, invalid permissions, failed provider retries and reproducible builds. Match tests to acceptance criteria; do not claim a passing command you did not run.
6. Open or update a focused PR linked to the issue with problem, behavior, evidence, remaining limits and rollout/recovery steps. Do not merge, transfer accounts, change live domains, spend money or message customers unless those actions are authorized in the session or an applicable mandate. Prior authorization remains valid; do not ask again for already covered work.
7. Update only the tracker state justified by evidence. A docs/contract/plugin-package PR does not complete a live-integration issue. Record real blockers with an accountable role and exact missing input. Do not invent assignments to people or a Codex agent.
8. End with PR/issue links, verified result, residual blockers and the next ready issue. If you cannot run the remote task, provide the exact repository, branch, issue and starter prompt without claiming it is running.

## Portable handover contract

A handover contains: repository and starting ref; goal and exclusions; source-of-truth documents; ordered dependencies; measurable acceptance criteria; runnable verification commands once known; private access prerequisites; action authority; owner roles; evidence links; rollback/recovery and next issue.

For PV-Lager, begin at https://github.com/frankxai/pv-lager-agentic/issues/4 and follow its live links. The initial design was PR #3 and source recovery issue #5; those are navigation hints, not permanent assertions that work is unfinished.
