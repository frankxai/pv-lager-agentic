# PV-Lager Agentic Architecture

The current architecture source of truth for the PV-carport initiative is [`../labs/pv-carport-lab/OPERATING-MODEL.md`](../labs/pv-carport-lab/OPERATING-MODEL.md), backed by machine-readable policies in `../labs/pv-carport-lab/contracts/`.

## Layers

1. **Customer learning:** readiness scan, curriculum, Build Passport, and explicit limitations.
2. **Project evidence:** source-dated site facts, assumptions, products, versions, consent, and decision receipts.
3. **Draft agents:** intake, learning, evidence, concept, safe prototype, gate completeness, provisional BOM, sales explanation, routing, and observation.
4. **Human authority:** local planning/building control, structural engineering, registered electrical installation, PV Lager/RIAL product approval, commercial review, installation, commissioning, and handover.
5. **Commerce:** only human-approved quotes, contracts, stock, compatibility, warranty, fulfillment, withdrawal/returns, and attribution.
6. **Virtual/domain layer:** Wix MCP, CRM/ERP, and Energy IS integrations after security/data/ownership review.
7. **Operations:** stale-source, queue-aging, incident, consent, support, attribution, and reconciliation receipts.

## Project state machine

`discover → education → concept_draft → jurisdiction_review → structural_review → electrical_review → bom_review → commercial_review → quote_ready → contracted → build → commission → handover → service`

Only the first two transitions and a clearly labeled concept draft may be automated. Later transitions require the evidence and owner defined in `../labs/pv-carport-lab/contracts/safety-policy.json`.

## Handoff packet

- project ID and current state;
- requested decision and named owner;
- evidence bundle, source dates, assumptions, and conflicts;
- allowed next states and stop conditions;
- immutable human decision receipt.

## Runtime status

The repository currently contains contracts, a dependency-free validator, regression tests, and a static prototype. It does **not** contain a production CRM/ERP/Wix integration, approved calculator, autonomous customer messaging, inventory mutation, checkout, or professional approval service.
