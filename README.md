# PV Lager Agentic (RIAL Energy Alliance)

**Status**: Active pre-pilot — education, evidence, governed agent workflows, and human-reviewed commerce for PV Lager (Seesen) / RIAL Energy GmbH.

**Mission**: Turn product expertise, inventory, customer questions, and professional partners into a trustworthy decision-to-project system. AI prepares evidence and handoffs; named people retain technical, legal, commercial, and safety authority.

## Current source of truth

- **Research location/status:** [`docs/source-map-and-research-status.md`](docs/source-map-and-research-status.md)
- **Joint-venture, education, product, inventory, CRM/ERP, and 90-day pilot plan:** [`docs/rial-energy-joint-venture-growth-system-2026.md`](docs/rial-energy-joint-venture-growth-system-2026.md)
- **Starlight PV Carport Lab product, GTM, safety, contracts, tests, and prototype:** [`labs/pv-carport-lab/README.md`](labs/pv-carport-lab/README.md)

> **Prototype safety:** The legacy quiz is now a deprecation page. The current Lab prototype produces only a learning and human-review pathway—never a quote, structural/electrical design, permit result, stock promise, subsidy determination, or financial forecast.

## The Alliance & Partnership
- **RIAL Energy GmbH** (holding): Renewables + intelligent building tech.
- **PV Lager** (core operations, Seesen): Stocked warehouse ("Lagernde Ware — sofort verfügbar"), full PV components, unique **AC/DC PV Solar Multi-Split Klimaanlagen** (heavy action pricing), and architectural PV structures.
- **Zola Car Pods**: Working/internal label from earlier discussions. It is not currently evidenced on the reviewed public sites; confirm its exact name, ownership, and public-use status with the family before publishing it.
- **Products in focus**: Bifacial modules (Trina etc.), storage, mounting, Panasonic heat pumps, **PV-Carports / Zola Car Pods**, **PV-Terrassen** (with Smart Rain Channels), PV-Zäune, PV-Vordächer.
- **Sales model**: Wix shop + Kleinanzeigen + direct (phone/WhatsApp). Local pickup/delivery advantage.
- **Goal of this repo**: Intelligent first-touch education and diagnostic → bounded system pathways (modules + battery + structure + hybrid climate) → source-dated scenarios and human-reviewed quotes. Sales co-pilots for cousin (MD logistics/sales) + team. Marketing swarms for useful, people-first education. Virtual layer via Wix MCP. Domain modeling via Energy IS sovereign instance.

This is the dedicated collaboration repo for the alliance. It consumes and extends the foundational agentic repos (see Interconnections) and the Energy IS vertical in Starlight Intelligence System (private sovereign instance for real data: customers, pricing, contracts).

## Key Deliverables (Built Here)
- **Starlight PV Carport Lab** (see `/labs/pv-carport-lab`): readiness scan, Build Passport, maker-learning model, product/affiliate contracts, human gates, validators, regression tests, and a customer-facing prototype.
- **Sales Intelligence**: bounded co-pilot for education, evidence completeness, source-backed product explanations, and human handoffs. Live quotes require approved inventory, compatibility, pricing, and ownership.
- **Marketing Intelligence**: useful, reviewed content from real buyer questions, project evidence, and explicit limits—not unsupported ROI, subsidy, scarcity, or approval claims.
- **Agentic Operations Layer**: intake, evidence, concept, safety-gate, BOM, sales, partner-routing, and observation agents with draft-only authority until human approval.
- **Virtual Side**: Wix MCP-powered virtual storefront and co-work layer. Agent-driven site updates, dynamic product recs, lead capture. Digital experiences (virtual "Zola Pod configurator").
- **Domain Modeling (Energy IS PV Instance)**: Sovereign extension of Energy IS (7 sub-systems: Sizing, Cost, Installer, Operations, Buyer, Grid, Recovery + Calculator + Validation substrate). PV-specific domain concepts (Zola Car Pod entity, hybrid climate configs, structural kits, local Seesen fulfillment). Private instance for real data.

## Strategy (Recommended Hybrid)
1. **Decision layer first**: prove that education and a Build Passport improve evidence quality and reduce quote/rework burden.
2. **Human-reviewed joint offer**: join the digital dossier to an approved product/partner brief.
3. **Attributable economics**: digital-product revenue, host shares, and incremental-gross-profit participation with explicit reconciliation.
4. **Useful evidence content**: one reviewed knowledge surface fed by real questions and project learning.
5. **Reusable platform only after proof**: productize Pro Desk when the pilot workflow and responsibilities work repeatedly.

See full strategy, market validation (Germany solar carports growing, subsidies complex → quiz is highly differentiating), and prior research in `/docs`.

## Interconnections (Reusable Foundations + Ecosystem)
This repo is built on and advances:
- **[Starlight Intelligence System](https://github.com/frankxai/Starlight-Intelligence-System)**: Energy IS vertical (public reference + private/pv-lager sovereign instance). Calculator/Validation substrate. Swarm topologies.
- **[Agentic Creator OS](https://github.com/frankxai/agentic-creator-os)**: Runtime, skills, agents, MCP/Claude compatibility.
- **[agentic-business-os](https://github.com/frankxai/agentic-business-os)** (this ecosystem): Business OS patterns — website/agent harness, quality gates, compounding memory. PV-Lager examples added here.
- **[sales-intelligence](https://github.com/frankxai/sales-intelligence)**: Lead-to-close agents, seller co-pilots (cousin/team specific prompts and workflows here).
- **[marketing-intelligence](https://github.com/frankxai/marketing-intelligence)**: Swarms for content, engagement, affection/adoption. Zola Car Pods campaigns and quiz-driven virality here.
- **Wix MCP Server**: Official bridge for natural-language site control (Claude Cowork, Hermes agents). Virtual layer for the business.
- **Hermes Agent + Sub-Agents + Cron**: Persistent routines, local profiles (brother strategic, cousin sales/logistics).
- **Reusable across brands**: Patterns, skills, and examples here (PV-specific) are designed for Starlight, Arcanea, FrankX/GenCreator, and other verticals. Advance foundations generally in their repos; apply/extend specifically here.

Work in this repo both solves the immediate PV Lager/Rial needs **and** strengthens the shared stack.

## Architecture Overview (from Agentic Orchestration + Energy IS)
- **Orchestrator**: enforces the project state machine and routes evidence to the next named human or agent.
- **Draft agents**: intake, education, evidence, concept, prototype, safety completeness, provisional BOM, sales explanation, and operations observation.
- **Human gates**: jurisdiction, structural, electrical, product/BOM, commercial, installation, commissioning, and handover.
- **Always-on observation**: stale-source, blocked-project, consent, attribution, support, and safety alerts—only after real data integrations exist.
- **Virtual/domain layer**: Wix MCP and Energy IS can supply governed product/lead data; no production mutation is enabled by this prototype.
- **Sovereignty**: Real data (customers, exact pricing, contracts) stays private. Public patterns reusable.

Full swarm architecture, handoff protocols, and Energy IS mapping in `/docs/architecture.md` and `/domain`.

## Quick Start (for the Alliance)
1. Read [`labs/pv-carport-lab/README.md`](labs/pv-carport-lab/README.md) and [`labs/pv-carport-lab/SAFETY-BOUNDARY.md`](labs/pv-carport-lab/SAFETY-BOUNDARY.md).
2. Run `python labs/pv-carport-lab/scripts/validate_lab.py` and the Lab unit tests.
3. Serve `/labs/pv-carport-lab/prototype` locally and test the Readiness Scan / JSON Project Pass.
4. Review `/agents/seller-copilot.md`; do not use it with customers until its production prerequisites are implemented.
5. Use the family-meeting decisions in the full joint-venture plan before commercial activation.

## Next / Build Plan (Swarm-Orchestrated)
- Phase 0: family roles, legal/product boundary, professional partners, live product data, and attribution agreement.
- Phase 1: invitation-only Readiness Scan + Build Passport cohort with 5–10 projects.
- Phase 2: human-reviewed kit brief, source-backed seller co-pilot, and operations observation.
- Phase 3: partner Pro Desk, repeatable workshops, and host-beneficiary distribution if pilot evidence supports it.
- Ongoing: measure evidence completeness, rejection reasons, quote-cycle time, attributable gross profit, refunds, support, and safety escalations.

## Research & Validation Summary
- **Company**: The public RIAL, PV Lager, SolarCarport.tech, and VR Gebäudetechnik surfaces are mapped; private commercial and system facts still require owner confirmation.
- **Zola Car Pods**: Unverified working label, not yet a public brand fact.
- **Market/rules**: All tax, tariff, subsidy, and financial claims must be sourced and date-stamped at use time.
- **Innovation hypothesis**: An honest education, diagnostic, system-bundle, and continuity layer can reduce buyer uncertainty and increase attributable lifetime value; the 90-day pilot is designed to test it.
- **Feasibility**: The current repo proves only the concept. Production requires actual CRM/ERP discovery, approved integrations, validated calculators, and operational ownership.
- Full details in `/docs`.

## Contributing & Collaboration
- Primary users: Brother's team (cousin MD sales/logistics), health team support via reduced admin.
- Reusable for other brands.
- Use Starlight/Agentic patterns, validated calculators, explicit handoffs.
- Issues/PRs for quiz improvements, new agent roles, domain extensions.

**Built with best skills and swarms** (agentic-orchestration, todo-discipline, Energy IS, Starlight substrate, Hermes, MCP).

This repository is the public, non-sensitive product and operating-pattern layer. Real customer, supplier, price, contract, and approval records belong in an approved private system.

Links to live repos:
- https://github.com/frankxai/pv-lager-agentic (this)
- https://github.com/frankxai/agentic-business-os
- https://github.com/frankxai/sales-intelligence
- https://github.com/frankxai/marketing-intelligence
- https://github.com/frankxai/Starlight-Intelligence-System (Energy IS)
- https://github.com/frankxai/agentic-creator-os

Let's build the future of agentic solar together.
