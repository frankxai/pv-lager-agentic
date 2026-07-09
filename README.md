# PV Lager Agentic (Rial Energy Alliance)

**Status**: Active build — agentic operating system, intelligent recommendation engine, sales + marketing intelligence, virtual domain layer for PV Lager (Seesen) / Rial Energy GmbH solar carports, Zola Car Pods, hybrid PV-climate systems, and full solutions.

**Mission**: Turn a high-trust, stocked local PV business into a scalable, AI-amplified operation. Deliver mass adoption and brand affection through personalized, funded, effortless customer journeys. Build reusable patterns that advance the broader FrankX/Starlight/GenCreator ecosystem while powering this specific alliance and partnership with brother's health/team support in mind.

## The Alliance & Partnership
- **RIAL Energy GmbH** (holding): Renewables + intelligent building tech.
- **PV Lager** (core operations, Seesen): Stocked warehouse ("Lagernde Ware — sofort verfügbar"), full PV components, unique **AC/DC PV Solar Multi-Split Klimaanlagen** (heavy action pricing), and architectural PV structures.
- **Zola Car Pods**: Internal/family-branded premium solar car pods / vehicle shelters (bifacial carports under PV Lager / SOLARCARPORT.TECH).
- **Products in focus**: Bifacial modules (Trina etc.), storage, mounting, Panasonic heat pumps, **PV-Carports / Zola Car Pods**, **PV-Terrassen** (with Smart Rain Channels), PV-Zäune, PV-Vordächer.
- **Sales model**: Wix shop + Kleinanzeigen + direct (phone/WhatsApp). Local pickup/delivery advantage.
- **Goal of this repo**: Intelligent first-touch quiz → tailored recs (modules + battery + structure + hybrid climate) + ROI + exact German subsidies (0% VAT, EEG, KfW/BEG up to 70%). Sales co-pilots for cousin (MD logistics/sales) + team. Marketing swarms for mass adoption/affection. Virtual layer via Wix MCP. Domain modeling via Energy IS sovereign instance.

This is the dedicated collaboration repo for the alliance. It consumes and extends the foundational agentic repos (see Interconnections) and the Energy IS vertical in Starlight Intelligence System (private sovereign instance for real data: customers, pricing, contracts).

## Key Deliverables (Built Here)
- **Intelligent Intake Quiz & Recommendation Engine** (see `/quiz`): Collects location, use-case (Zola Car Pod/carport/terrace/hybrid), scale, consumption, heating, priorities → instant personalized config, costs, ROI, stacked subsidies, upsell packages. Prototype HTML ready; production via Wix MCP + agents.
- **Sales Intelligence**: Co-pilot for cousin + team (lead scoring from quiz/inquiries, proposal generation, objection handling, inventory-aware quotes). Ties to ops (logistics, accounting agents).
- **Marketing Intelligence** (for mass adoption & brand affection): Content swarms generating affectionate/engaging material — Zola Car Pod owner stories, local Seesen impact, shareable ROI visuals, quiz virality, virtual experiences. SEO + social for the structural PV + hybrid climate niche.
- **Agentic Swarms & OS Layer**: Always-on (Hermes cron: inventory, subsidy watches), triggered (quiz → Buyer Agent + Sizing/Cost + Proposal), customer-facing, ops (accounting/bookkeeping, logistics for cousin).
- **Virtual Side**: Wix MCP-powered virtual storefront and co-work layer. Agent-driven site updates, dynamic product recs, lead capture. Digital experiences (virtual "Zola Pod configurator").
- **Domain Modeling (Energy IS PV Instance)**: Sovereign extension of Energy IS (7 sub-systems: Sizing, Cost, Installer, Operations, Buyer, Grid, Recovery + Calculator + Validation substrate). PV-specific domain concepts (Zola Car Pod entity, hybrid climate configs, structural kits, local Seesen fulfillment). Private instance for real data.

## Strategy (Recommended Hybrid)
1. **Core Optimization First**: Enhance pvlager.com (Wix) with quiz/funnel + agents (fast revenue, uses local stocked advantage + unique products).
2. **Digital Layer + Upsells**: Configurator as premium product; reusable SaaS patterns.
3. **Light SEO/Content**: Agent-generated, feeding main site + targeted pages for "mass affection".
4. **Parallel NL / Reusable**: Foundations advanced here feed other brands.

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
- **Orchestrator**: Routes quiz → specialists (Buyer Clarity, Sizing/Cost validators, Proposal, Inventory via MCP).
- **Always-On**: Hermes crons (subsidy updates, low-stock alerts, lead monitoring).
- **Triggered Swarms**: Quiz completion fires Buyer + Cost agents → handoff to Sales co-pilot.
- **Ops**: Accounting agents (receipts → books, subsidy tracking), logistics for cousin.
- **Marketing Swarm**: Generates affectionate content, personalized shares, virtual tour scripts.
- **Virtual/Domain**: Wix MCP as the live virtual domain. Energy IS PV domain model (entities, calculators validated).
- **Sovereignty**: Real data (customers, exact pricing, contracts) stays private. Public patterns reusable.

Full swarm architecture, handoff protocols, and Energy IS mapping in `/docs/architecture.md` and `/domain`.

## Quick Start (for the Alliance)
1. Open the interactive quiz prototype: `/quiz/pv-lager-intake-quiz-mock.html` (demo of the recommendation engine).
2. Review seller co-pilot prompt in `/agents/seller-copilot.md` (ready for Claude Cowork / Hermes).
3. See prior deep documentation: `/docs/rial-energy-pv-lager-documentation.md`.
4. For developers: Clone, run quiz locally, connect Wix MCP for live site updates.
5. Meetings: Use `/docs/meeting-plan.md` template with brother, cousin, team.

## Next / Build Plan (Swarm-Orchestrated)
- Phase 1: Quiz live on pvlager.com + basic Buyer Agent + Wix MCP integration.
- Phase 2: Sales co-pilot + accounting agents for cousin/ops relief.
- Phase 3: Marketing swarms for mass affection (Zola stories, ROI shares) + content engine.
- Phase 4: Full virtual layer + advanced domain (Energy IS PV extensions) + digital product packaging (reusable).
- Ongoing: Measure adoption metrics, iterate with brother/team, contribute reusable patterns back to foundations.

## Research & Validation Summary
- **Company**: Fully documented (RIAL holding + PV Lager operations, exact products, Wix + Kleinanzeigen channels, social).
- **Zola Car Pods**: Internal branded premium car pods/carports.
- **Market**: Germany leader in solar; carports/structural growing (dual-use value); complex subsidies = perfect for intelligent quiz.
- **Innovation**: Quiz/funnel is highly differentiating — removes fear, surfaces funding, tailors to unique offerings (stocked + hybrid climate + architectural).
- **Feasibility**: Wix MCP production-ready. Energy IS substrate already scaffolds this. Hermes + Claude + swarms ready.
- Full details in `/docs`.

## Contributing & Collaboration
- Primary users: Brother's team (cousin MD sales/logistics), health team support via reduced admin.
- Reusable for other brands.
- Use Starlight/Agentic patterns, validated calculators, explicit handoffs.
- Issues/PRs for quiz improvements, new agent roles, domain extensions.

**Built with best skills and swarms** (agentic-orchestration, todo-discipline, Energy IS, Starlight substrate, Hermes, MCP).

This repo makes the recommendation real, drives mass adoption + affection for PV Lager / Zola Car Pods, virtualizes the business, domains the energy vertical, and strengthens the entire agentic foundation stack.

Links to live repos:
- https://github.com/frankxai/pv-lager-agentic (this)
- https://github.com/frankxai/agentic-business-os
- https://github.com/frankxai/sales-intelligence
- https://github.com/frankxai/marketing-intelligence
- https://github.com/frankxai/Starlight-Intelligence-System (Energy IS)
- https://github.com/frankxai/agentic-creator-os

Let's build the future of agentic solar together.
