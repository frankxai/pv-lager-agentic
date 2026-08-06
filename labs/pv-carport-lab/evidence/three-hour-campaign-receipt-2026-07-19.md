# PV Carport Lab — Three-Hour Campaign Receipt

**Campaign window:** 2026-07-19 04:36–07:35 Europe/Amsterdam  
**Canonical repository:** `pv-lager-agentic` (verified internally)
**Canonical branch:** `agent/hermes/rial-energy-growth-system`  
**Purpose:** bounded hardening only; no commit, push, deploy, publication, external send, money action, or production mutation.

## Admission snapshot

| Check | Result |
|---|---|
| Repository path | verified internally |
| Git top-level | verified internally |
| Origin | `https://github.com/frankxai/pv-lager-agentic.git` |
| Branch | `agent/hermes/rial-energy-growth-system` |
| Git routing | `GIT_INDEX_FILE`, `GIT_DIR`, and `GIT_WORK_TREE` unset; resolved index `.git/index` |
| Disk admission | 215.32 GiB free — BOUNDED; no clone, worktree, install, local model, or media fanout |
| Performance preflight | `pp` unavailable; the campaign's supplied 14.8 GiB RAM admission remains the only available posture evidence |
| Receipt at tick entry | Absent; this file is the initial durable receipt |

## Tick ledger

| Tick | Objective | Execution status | Outcome status | Evidence / disposition |
|---|---|---|---|---|
| 1 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | The required prior receipt/snapshot was absent. All current `labs/pv-carport-lab/**` product artifacts are untracked, so this driver cannot establish whether another writer changed them since the prior snapshot. Per the collision rule, no Lab artifact was overwritten and no harness was added. The temporary CDP approach used an untracked browser profile; no matching session-owned browser process was observed. A pre-existing loopback listener was not claimed or stopped. |
| 2 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | At 05:55:50 WEDT, the previous receipt content hash remained `5c9a872fe4b0f2ad2e704ade3c7e734acd78c31a`, but every Lab artifact remained untracked and no authoritative hash inventory exists for them. `tests/` still contains only `test_validate_lab.py`; no repo-owned browser harness was added or run. Existing Chrome, Node, and Python processes were ownership-unknown and were not claimed or stopped. |
| 3 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | At 06:29:16 WEDT, the receipt hash was `105963afa0c806f82c89a9562e1d777552d53af38eabde66933a4dd13571dc58` and all 18 Lab paths remained untracked. The explicit test inventory is unchanged (`tests/test_validate_lab.py`, `scripts/validate_lab.py`, and `prototype/index.html`); no repo-owned browser harness exists. A listener remains on loopback port 9222, but it is ownership-unknown; this driver started, claimed, and stopped no browser/server process. Per the write-lease collision rule, no Lab artifact was overwritten. |
| 4 of 5 | O1 — Durable browser proof | `completed` | `HOLD_COLLISION` | At 2026-07-19 05:01:55 GMT, the receipt hash at tick entry was `9144e5d0287b2c52543005951fcabf35d2e4b3cc0375a59e437a7e811141e6c1`, differing from tick 3's recorded hash. The complete Lab tree remained untracked, so a concurrent allowed-path change could not be excluded. The existing validator passed 6 groups and 9 unit tests passed, but `tests/` contained only `test_validate_lab.py`; no durable browser harness existed. An ownership-unknown loopback listener was not stopped. Manual four-fact Git routing passed; the repository mechanical guard was absent, so it could not run. No Lab artifact was overwritten. |

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
3. **Temporary profile:** the observed browser profile remains untouched because it was not proven campaign-created by this driver; it must not be deleted without ownership evidence.

## Final tick and campaign closeout

| Tick | Objective | Execution status | Outcome status | Evidence / disposition |
|---|---|---|---|---|
| 5 of 5 | O1 — Durable browser proof (final collision check) | `completed` | `HOLD_COLLISION` | At 07:34:51 WEDT, Git routing again resolved to the canonical repository, public origin, and canonical branch with the normal Git index and routing variables unset. All 18 Lab artifacts, including this receipt, remained untracked; therefore no authoritative baseline excluded another writer changing allowed Lab paths. No browser harness was written or run. An existing loopback listener and temporary profile were ownership-unknown, were not created by this driver, and were not stopped or deleted. |

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

## Post-campaign O2 safety/source closure (bounded follow-up)

The finite campaign remains historically closed at `5 / 5` ticks. This is a separate,
read-only O2 source-and-contract review; it does not alter the campaign schedule or grant
structural, electrical, permitting, commercial, or publication authority.

- **Execution status:** `completed`.
- **Outcome status:** `PASS` for the scoped safety/source closure; no correction was needed in
  `SAFETY-BOUNDARY.md` or its machine-readable safety/workflow contracts.
- **Scope inspected:** `SAFETY-BOUNDARY.md`, all four contracts, the pilot fixture,
  `scripts/validate_lab.py`, and `tests/test_validate_lab.py` only. The held private
  JV/family-business document was not opened or changed.
- **Source retrievability (2026-08-06):** 22 cited official URLs were requested without
  persisting their content. 21 returned HTTP 200 with the expected official-site/title
  family; the Lower Saxony VORIS citation returned an HTTP 302 redirect, which is a
  retrievability result rather than an independent legal interpretation. Source URLs and
  labels remain references for qualified human review, not a substitute for it.
- **Guardrails reconfirmed:** MBO is model guidance; Land and local rules control;
  `verfahrensfrei`/process-free is not requirement-free; and structural/foundation plus
  electrical/grid/DNO/MaStR paths remain qualified-human gates with accountable evidence.
  The contracts retain draft-only agents, no self-approval, no external side effects, and
  no money, checkout, structural, electrical, permit, or publishing authority.
- **Deterministic proof:** `PYTHONDONTWRITEBYTECODE=1 python
  labs/pv-carport-lab/scripts/validate_lab.py --json` returned `status: pass` for 6 groups;
  `PYTHONDONTWRITEBYTECODE=1 python -m unittest
  labs/pv-carport-lab/tests/test_validate_lab.py` passed all 9 tests.
- **Rollback:** revert only this O2 receipt addition if it must be withdrawn. No safety,
  contract, validator, test, commercial, or private-document artifact was changed.

## Post-campaign O1 remediation (bounded follow-up)

The finite 2026-07-19 campaign remains historically closed at `5 / 5` ticks. This
separate, bounded follow-up did not reopen or alter that campaign's schedule,
authority, or prior collision record.

- **Objective:** O1 — durable browser proof only.
- **Execution status:** `completed`.
- **Outcome status:** `PASS` for the previously missing browser-proof artifact.
- **Artifact:** `tests/browser_smoke.py` — a standard-library CDP smoke harness that
  owns a fresh loopback HTTP server, a fresh headless-Chrome profile, and the exact
  browser process it starts.
- **Deterministic result:** `PYTHONDONTWRITEBYTECODE=1 python
  labs/pv-carport-lab/tests/browser_smoke.py` passed: desktop `1440x1000` and mobile
  `390x844` both exercised the educational path, rejected a `structural-connector`
  selection with the visible `Sicherheitsstopp`, had no horizontal overflow, and
  reported no browser-console/runtime errors.
- **Cleanup proof:** after the run, Git reported only the new harness under
  `labs/pv-carport-lab/tests/`; no harness-owned browser profile or listener remained.
- **Residual HOLDs:** O2 safety/source closure, O3 public-release/privacy closure,
  and O4 deterministic closure remain unperformed in this bounded follow-up. The
  private JV/family-business document remains `HOLD_PRIVATE`, unread, and unchanged.
- **Rollback:** revert only the new browser harness, this README command/documentation
  update, and this evidence addition; do not alter unrelated Lab or private material.

## Post-campaign O3 public-release/privacy closure (bounded follow-up)

This bounded follow-up advances O3 only. It does not reopen the historical finite
campaign, authorize publication or commerce, or grant structural, electrical,
permit, commercial, financial, or publishing authority.

- **Objective:** O3 — public-release/privacy closure.
- **Execution status:** `completed`.
- **Outcome status:** `PASS` for the scoped Lab audit and public-safe sanitization;
  **public release remains `HOLD_PUBLIC_RELEASE`** pending the named human gates in
  `PUBLIC-RELEASE-CHECKLIST.md`.
- **Collision admission:** the receipt entry hash before this follow-up's final evidence
  append was `7d4bf3537225ce183a665cffd8117c40606fc444`. The scheduled driver held the
  Lab write lease; no external process or sibling change was observed during this
  bounded mutation.
- **Changed artifacts:** `PUBLIC-RELEASE-CHECKLIST.md`; public-safe
  `PRODUCT-AND-GTM.md`; `README.md`; `IMPLEMENTATION-RECEIPT.md`; `OPERATING-MODEL.md`;
  `design-loop-evidence.json`; inactive `offer-catalog.json` and `affiliate-policy.json`
  commercial fields; `prototype/index.html`; and this receipt. The existing O1 browser
  harness remains an uncommitted prior campaign artifact and was not changed by O3.
- **Sanitization:** removed internal absolute-path and machine/peer references from the
  public-facing Lab artifacts; replaced individual/partner-specific public prototype copy
  with roles; removed inactive price hypotheses and affiliate percentages; and replaced
  the public GTM outline with product roles, release gates, and a private-record boundary.
  The Lab still keeps every offer inactive and `salesAllowed: false`.
- **Private-content hold:** `docs/rial-energy-joint-venture-growth-system-2026.md` is
  `HOLD_PRIVATE`; it was not opened, changed, or used as evidence.
- **Deterministic proof:** all 7 scoped Lab JSON files parsed successfully;
  `git diff --check -- labs/pv-carport-lab README.md agents/seller-copilot.md` passed;
  the new checklist passed an untracked-file diff whitespace check; targeted scans found
  no local user paths, machine/peer identifiers, inactive numeric price/percentage fields,
  secret-value patterns, or the scoped private JV/family-business wording. The standard
  library's runtime-random `secrets` import in the existing browser harness is not a
  credential and was not altered.
- **Residual HOLD:** O4 deterministic hardening remains next and has not been run in this
  O3-bounded follow-up. O5 closeout remains pending after O4.
- **Rollback:** revert only the O3-listed Lab paths above if this follow-up must be
  withdrawn; do not alter the held private document or any non-Lab path.

## Post-campaign O4 deterministic hardening (bounded follow-up)

This bounded follow-up advances O4 only. It does not reopen the historical finite
campaign, authorize publication or commerce, or grant structural, electrical,
permit, commercial, financial, or publishing authority.

- **Objective:** O4 — deterministic hardening.
- **Execution status:** `completed`.
- **Outcome status:** `HOLD_ENVIRONMENT` — all available dependency-free and
  read-only checks passed, but an independent Draft 2020-12 JSON Schema engine was
  unavailable in the current host environment. The installed Python `jsonschema`
  import fails because its `rpds.rpds` runtime module is missing; `check-jsonschema`
  and Node `ajv` are unavailable. No package was installed, and no Lab source change
  can truthfully repair that host dependency condition.
- **Collision admission:** before this append, the prior receipt SHA-256 was
  `df1c0ba1aacad238b7c238a37ca774d5a12922603c465b2e88a858d5f892d456`.
  A read-only hash snapshot of the contracts, schema, prototype, validator, and
  tests was unchanged after verification. No sibling allowed-path change was observed.
- **Passing checks:** dependency-free validator returned `status: pass` for 6 groups;
  9 unit tests passed; browser smoke passed at desktop `1440x1000` and mobile
  `390x844` with the educational route, structural-connector safety stop, no
  horizontal overflow, and no browser-console/runtime errors; all 7 scoped JSON files
  parsed; local Markdown links passed (`12` checked); raw Markdown URL syntax passed
  (`24` URLs); `git diff --check -- labs/pv-carport-lab README.md agents/seller-copilot.md`
  passed; and focused scans found no absolute private paths, credential assignments,
  inactive price/percentage fields, or private-JV/family-business phrases in public
  Lab text artifacts.
- **Temporary cleanup:** the browser smoke left no Lab browser-smoke profile. Existing
  loopback listeners were ownership-unknown and were neither claimed nor stopped.
- **Residual HOLD:** O5 closeout remains pending because the required JSON Schema
  validation has not run against the fixture on a working schema engine. Restore the
  existing host dependency or run the exact schema/fixture pair in an already-approved
  environment; do not install dependencies under this campaign.
- **Private-content hold:** `docs/rial-energy-joint-venture-growth-system-2026.md`
  remains `HOLD_PRIVATE`; it was not read or changed.
- **Rollback:** revert only this O4 receipt addition if it must be withdrawn.
