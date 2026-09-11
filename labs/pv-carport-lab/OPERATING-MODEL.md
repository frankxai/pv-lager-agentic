# Operating Model and Agent Orchestration

**Status:** pre-pilot operating contract.  
**Principle:** agents accelerate evidence and handoffs; named humans own regulated and irreversible decisions.

## 1. Project state machine

```text
discover
  → education
  → concept_draft
  → jurisdiction_review
  → structural_review
  → electrical_review
  → bom_review
  → commercial_review
  → quote_ready
  → contracted
  → build
  → commission
  → handover
  → service
```

Only `discover`, `education`, and creation of a **clearly labeled** `concept_draft` may be fully automated. Every later transition requires evidence from the owner named in `contracts/safety-policy.json`.

A rejection is a successful outcome when it prevents an unsuitable purchase or unsafe build.

## 2. Agents

| Agent | Job | May create | Must not do |
|---|---|---|---|
| Intake Agent | collect goals and site facts | project-pass draft, missing-data list | infer missing safety facts |
| Learning Guide | teach concepts and pathways | curriculum progress, questions | present education as approval |
| Evidence Agent | organize photos, measurements, sources | evidence index, freshness flags | alter or fabricate evidence |
| Concept Agent | create non-authoritative layouts | concept options, assumptions | issue final dimensions/statics |
| Prototype Agent | generate scale models and safe process aids | labeled concept CAD/STL | structural/electrical parts |
| Safety Gate Agent | check completeness against policy | gate status and escalations | approve its own gate |
| BOM Agent | match reviewed requirements to catalog | versioned BOM draft | claim compatibility/stock without source |
| Sales Copilot | explain offers and prepare handoff | quote brief, next actions | fabricate scarcity, savings, approval |
| Partner Router | match required human role | ranked options and disclosure | hide commercial relationship |
| Operations Observer | monitor aging evidence and blocked work | alerts, queue, weekly receipt | silently move project state |

## 3. Evidence contract

Every material claim stores:

- `claim` and `claim_type`;
- source URL/document ID or accountable human;
- exact product/project version;
- jurisdiction;
- verified-at and review-due dates;
- confidence and known limits;
- affected project states;
- supersession history.

Unknown, stale, and conflicting are first-class states. They never collapse into “verified.”

## 4. Handoff contract

Each agent-to-human or human-to-agent handoff contains:

- project ID and current state;
- requested decision;
- evidence bundle;
- assumptions and conflicts;
- safety/commercial impact;
- deadline if genuine;
- named owner;
- allowed next states;
- immutable decision receipt.

## 5. Observation and operations cadence

### Per event

- validate project payload;
- record source and consent;
- evaluate policy gates;
- append—not overwrite—decision receipt;
- alert on prohibited or missing transitions.

### Daily during pilot

- stale stock/pricing/compatibility sources;
- projects waiting on human gates;
- consent or withdrawal requests;
- failed validations and agent exceptions;
- unresolved safety escalations;
- attribution conflicts.

### Weekly

- projects by state and aging;
- rejection and escalation reasons;
- Build Passport completion;
- quote-cycle time;
- conversion by attributable source;
- revenue, incremental gross profit, refunds, support hours;
- content questions generated from real demand;
- policy incidents and corrections.

### Monthly

- source/legal/standards review;
- product and partner scorecard;
- affiliate reconciliation;
- curriculum and prototype-file review;
- stop/continue/expand decision.

## 6. Human admission and authority

Before an agent enters the workflow it needs:

- named owner and purpose;
- permitted inputs/outputs;
- tool and data scopes;
- risk class and stop conditions;
- required evidence;
- evaluation set;
- rollout and rollback plan.

No agent receives checkout, payment, contract-signing, public-publish, electrical commissioning, structural approval, permit submission, inventory mutation, or customer-message authority by default.

## 7. Development lane ownership

- **Yogabook / Frontend Queen:** customer prototype, UX, content, visual QA, local product contracts.
- **Independent backend reviewer:** after a branch or PR exists, read-only contract review first; then a separate backend lane for persistence, APIs, audit logs, and CI if explicitly assigned.
- **PV Lager/RIAL technical owner:** product data, compatibility, stock, warranty, and fulfillment truth.
- **Professional partners:** jurisdiction, structure, electrical, installation, and commissioning decisions.

Never allow two machines or agents to write the same branch. Public repository work contains no customer, pricing, supplier-contract, credential, or commercially sensitive family data.

## 8. Cleanup rules

- Deprecate calculators that output unsupported savings, payback, subsidies, or structural recommendations.
- Keep one current initiative SSOT; historical strategy files link to it instead of duplicating details.
- Delete or archive generated files only with provenance and replacement evidence.
- Contract JSON must validate before prototype/automation changes are considered complete.
- No production automation is enabled from a concept document or mock UI.

## 9. Pilot metrics and stop conditions

### Product metrics

- ≥80% of admitted projects produce a complete evidence checklist or an explicit reason they cannot.
- human reviewers report less missing information than ordinary inbound leads;
- quote/rework time improves without raising incident or support burden;
- customers understand that AI output is not approval.

### Stop conditions

Pause intake or the affected pathway when:

- an agent issues unreviewed safety-critical instructions;
- required product evidence is stale or missing;
- responsibility for a kit/part is ambiguous;
- a customer bypasses a human gate;
- attribution/payout data cannot be reconciled;
- support capacity or professional-review capacity is exceeded;
- a legal, product, or technical reviewer rejects the current model.
