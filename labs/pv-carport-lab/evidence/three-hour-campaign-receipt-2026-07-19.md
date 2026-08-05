# PV Carport Lab — Three-Hour Campaign Receipt

**Campaign window:** 2026-07-19 04:36–07:35 Europe/Amsterdam  
**Canonical repository:** `C:/Users/frank/starlight/repos/pv-lager-agentic`  
**Canonical branch:** `agent/hermes/rial-energy-growth-system`  
**Purpose:** bounded hardening only; no commit, push, deploy, publication, external send, money action, or production mutation.

## Admission snapshot

| Check | Result |
|---|---|
| Repository path | `C:/Users/frank/starlight/repos/pv-lager-agentic` |
| Git top-level | `C:/Users/frank/starlight/repos/pv-lager-agentic` |
| Origin | `https://github.com/frankxai/pv-lager-agentic.git` |
| Branch | `agent/hermes/rial-energy-growth-system` |
| Git routing | `GIT_INDEX_FILE`, `GIT_DIR`, and `GIT_WORK_TREE` unset; resolved index `.git/index` |
| Disk admission | 215.32 GiB free — BOUNDED; no clone, worktree, install, local model, or media fanout |
| Performance preflight | `pp` unavailable; the campaign's supplied 14.8 GiB RAM admission remains the only available posture evidence |
| Receipt at tick entry | Absent; this file is the initial durable receipt |

## Tick ledger

| Tick | Objective | Execution status | Outcome status | Evidence / disposition |
|---|---|---|---|---|
| 1 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | The required prior receipt/snapshot was absent. All current `labs/pv-carport-lab/**` product artifacts are untracked, so this driver cannot establish whether another writer changed them since the prior snapshot. Per the collision rule, no Lab artifact was overwritten and no harness was added. The temporary CDP approach exists only under the untracked `.tmp-chrome-pv-lab/` profile; no matching session-owned browser process was observed. A pre-existing loopback listener was not claimed or stopped. |
| 2 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | At 05:55:50 WEDT, the previous receipt content hash remained `5c9a872fe4b0f2ad2e704ade3c7e734acd78c31a`, but every Lab artifact remained untracked and no authoritative hash inventory exists for them. `tests/` still contains only `test_validate_lab.py`; no repo-owned browser harness was added or run. Existing Chrome, Node, and Python processes were ownership-unknown and were not claimed or stopped. |
| 3 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | At 06:29:16 WEDT, the receipt hash was `105963afa0c806f82c89a9562e1d777552d53af38eabde66933a4dd13571dc58` and all 18 Lab paths remained untracked. The explicit test inventory is unchanged (`tests/test_validate_lab.py`, `scripts/validate_lab.py`, and `prototype/index.html`); no repo-owned browser harness exists. A listener remains on loopback port 9222, but it is ownership-unknown; this driver started, claimed, and stopped no browser/server process. Per the write-lease collision rule, no Lab artifact was overwritten. |
| 4 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | At 2026-07-19 05:01:55 GMT, the receipt hash at tick entry was `9144e5d0287b2c52543005951fcabf35d2e4b3cc0375a59e437a7e811141e6c1`, differing from tick 3's recorded hash. The complete Lab tree remains untracked (`git status --porcelain -- labs/pv-carport-lab` => `?? labs/pv-carport-lab/`), so a concurrent allowed-path change cannot be excluded. The existing validator passed 6 groups and 9 unit tests passed, but `tests/` contains only `test_validate_lab.py`; no durable browser harness exists. Loopback `127.0.0.1:9222` (PID 19844) is ownership-unknown and was not stopped. Manual four-fact Git routing passed; the estate `tools/verify-lane.mjs` is absent from this repo, so its mechanical guard could not run. No Lab artifact was overwritten. |

## O1 read-only observations

- The Lab has a dependency-free Python contract validator and unit tests, but no repo-owned browser smoke harness under `labs/pv-carport-lab/tests/`.
- The temporary CDP script targets a local Chrome debugging endpoint and writes a screenshot, so it is not the durable dependency-free harness required by O1.
- The prototype contains the required educational path and visible prohibition for structural connectors, but those behaviors were not re-exercised in this tick because collision admission failed before any harness write.
- Existing deterministic baseline remains green: `validate_lab.py` passed all 6 groups and `test_validate_lab.py` passed all 9 tests. This does not substitute for the missing browser smoke proof.

## Guardrails preserved

- No changes were made to `docs/rial-energy-joint-venture-growth-system-2026.md`.
- Structural, foundation, electrical, grid/DNO, MaStR, permit, commercial, financial, and publishing decisions remain human-gated.
- MBO remains model guidance; Land and local rules control. Process-free/permit-free is not treated as requirement-free.

## Residual HOLDs and next safe action

1. **HOLD_COLLISION:** establish an authoritative prior receipt/snapshot or explicit ownership transfer for the existing untracked Lab tree before changing any Lab artifact.
2. **O1 pending:** after collision clearance, add and run the repo-owned browser smoke harness against a session-owned loopback server, then record desktop/mobile, educational path, structural-connector rejection, console, overflow, and cleanup evidence.
3. **Temporary profile:** `.tmp-chrome-pv-lab/` remains untouched because it was not proven campaign-created by this driver; it must not be deleted without ownership evidence.

## Final tick and campaign closeout

| Tick | Objective | Execution status | Outcome status | Evidence / disposition |
|---|---|---|---|---|
| 5 of 5 | O1 — Durable browser proof (final collision check) | `completed` | `HOLD_COLLISION` | At 07:34:51 WEDT, Git routing again resolved to the canonical repository, `https://github.com/frankxai/pv-lager-agentic.git`, branch `agent/hermes/rial-energy-growth-system`, and `.git/index` with all routing variables unset. All 18 Lab artifacts, including this receipt, remain untracked; therefore no authoritative baseline excludes another writer changing allowed Lab paths. No browser harness was written or run. The existing loopback listener `127.0.0.1:9222` (PID 19844) and `.tmp-chrome-pv-lab/` profile are ownership-unknown, were not created by this driver, and were not stopped or deleted. |

### Campaign disposition

- **Expected/completed ticks:** `5 / 5`
- **Execution status:** `completed` — the finite driver reached its final evidence-backed disposition without prohibited side effects.
- **Outcome status:** `HOLD` — O1 has no durable browser proof because the collision gate blocked every Lab mutation. O2–O4 were not admitted out of order after O1 remained held.
- **Campaign-owned change:** this receipt only: `labs/pv-carport-lab/evidence/three-hour-campaign-receipt-2026-07-19.md`.
- **Deterministic checks at final tick:** `PYTHONDONTWRITEBYTECODE=1 python labs/pv-carport-lab/scripts/validate_lab.py` passed all 6 groups; `PYTHONDONTWRITEBYTECODE=1 python -m unittest labs/pv-carport-lab/tests/test_validate_lab.py` passed 9 tests; `git diff --check -- labs/pv-carport-lab README.md agents/seller-copilot.md` returned clean. These checks do not substitute for the missing browser proof or a release/privacy audit.
- **Temporary cleanup:** this driver owns no listener, browser, temporary profile, or other process. It therefore has no session-owned process to stop. The observed listener/profile remain a human/owner decision, not an authorization for destructive cleanup.
- **Private-content hold:** `docs/rial-energy-joint-venture-growth-system-2026.md` remains `HOLD_PRIVATE`, was not read for this closeout, and was not changed.

### Residual holds and next human decisions

1. **HOLD_COLLISION / O1:** provide an authoritative hash inventory or explicit ownership transfer for the untracked Lab tree; then add and run a repo-owned, dependency-free browser smoke harness on a session-owned loopback server. It must prove desktop/mobile layout, the educational path, structural-connector escalation, console cleanliness, overflow, and exact-process cleanup.
2. **O2:** after O1 admission, review the existing safety boundary, contracts, validator/tests, and cited official URLs only; preserve the stated MBO, Land/local-rule, permit/process, structural/foundation, electrical/grid, and MaStR human gates.
3. **O3:** then create `PUBLIC-RELEASE-CHECKLIST.md` and perform the scoped public/privacy audit. Do not expose or release the held private JV/family-business document.
4. **O4:** run the complete deterministic closure only after the preceding held work is resolved; no dependency installation is authorized.

## Rollback

Revert only this campaign-owned receipt path if this HOLD record must be withdrawn:
`labs/pv-carport-lab/evidence/three-hour-campaign-receipt-2026-07-19.md`.
