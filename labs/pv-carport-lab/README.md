# Starlight PV Carport Lab

**Status:** pre-pilot initiative  
**Canonical home:** `frankxai/pv-lager-agentic/labs/pv-carport-lab`  
**Initiative name:** Starlight PV Carport Lab  
**Customer-facing description:** learn, plan, and de-risk a PV carport before buying or building  
**Verified:** 2026-07-18

## Purpose

The Lab turns the question “Can I build a PV carport?” into a governed learning and project path. AI agents may explain choices, collect project facts, draft a concept, assemble a provisional bill of materials, and prepare human reviews. They do **not** replace structural engineering, local building control, a registered electrical installer, or product-compliance decisions.

The initiative combines:

- **Starlight Intelligence / FrankX:** education system, project workspace, AI orchestration, diagnostics, attribution, and reusable digital products.
- **PV Lager / RIAL Energy:** product truth, inventory, pricing, fulfillment, warranties, and technical approval.
- **SolarCarport.tech and qualified partners:** carport expertise, engineered systems, installation, and commissioning where contracted.
- **Customer or maker:** site facts, goals, learning, approved non-regulated work, and documented decisions.

No new hardware brand is assumed. “Starlight PV Carport Lab” is initially an initiative and software/education layer, with PV Lager as the commerce partner.

## What the Lab can safely teach

- PV-carport anatomy and decision sequence.
- Aluminum, timber, and engineered-kit routes and their trade-offs.
- How module dimensions, orientation, drainage, shading, wind, snow, foundations, and electrical routing affect a concept.
- How to collect site evidence for a structural engineer, authority, installer, and supplier.
- Parametric concept modelling and small-scale prototyping.
- 3D printing for **scale models, drill/spacing templates, lab jigs, labels, and non-load-bearing assembly aids**.

The Lab does not publish unreviewed structural connectors, foundations, load calculations, final fabrication dimensions, live electrical instructions, or claims that a project is permit-free.

## Product stack

| Layer | Initial offer | Owner | State |
|---|---|---|---|
| Discover | Free PV Carport Readiness Scan | Starlight | prototype |
| Learn | Guided workshop and maker curriculum | joint | concept |
| Plan | PV Carport Build Passport | Starlight | prototype |
| Review | Human-reviewed project and kit brief | joint/partner | gated pilot |
| Supply | Verified modules, structure, electrical components | PV Lager/RIAL | live only from approved data |
| Build | Installation or supervised maker path | qualified partner | partner-dependent |
| Continue | Monitoring, maintenance, upgrades, referrals | joint | concept |

The machine-readable offer states are in `contracts/offer-catalog.json`. “Concept” and “prototype” offers must not be sold as available.

## Repository map

- `PRODUCT-AND-GTM.md` — what Frank sells, what the operating company sells, launch sequence, and economics.
- `SAFETY-BOUNDARY.md` — official-source-backed limits and human gates.
- `OPERATING-MODEL.md` — state machine, agent responsibilities, evidence, and operating cadence.
- `IMPLEMENTATION-RECEIPT.md` — verified workspace, build, QA, cleanup, swarm handoff, and release gates.
- `contracts/` — offer, affiliate, safety, and agent contracts.
- `schemas/project-pass.schema.json` — portable project intake/evidence schema.
- `examples/pilot-project.json` — synthetic example with no personal data.
- `scripts/validate_lab.py` — dependency-free contract and example validator.
- `tests/test_validate_lab.py` — policy regression tests.
- `prototype/index.html` — customer-facing readiness and Build Passport prototype.
- `design-loop-evidence.json` — visual evidence and quality decision for the prototype.

## Verify locally

```bash
python labs/pv-carport-lab/scripts/validate_lab.py
python -m unittest labs/pv-carport-lab/tests/test_validate_lab.py
python -m http.server 8765 --directory labs/pv-carport-lab/prototype
```

Then open `http://127.0.0.1:8765/`.

## Pilot exit criteria

A public sales pilot starts only after:

1. a named owner accepts every human gate;
2. German legal/product-compliance review is recorded;
3. a structural engineer and registered electrical installer path exists;
4. live product, compatibility, stock, pricing, and warranty data are available;
5. affiliate attribution and cancellation rules are signed;
6. the customer-facing prototype passes accessibility, mobile, and factual QA;
7. no unverified 3D-printed part appears in a structural or electrical safety path.
