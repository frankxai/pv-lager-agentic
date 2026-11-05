# PV-Lager Agentic Architecture (Starlight + Energy IS + Agentic Orchestration)

> Next design: [Commercial OS architecture and workflows](commercial-os/README.md), proposed September 11, 2026. The material below is the earlier conceptual architecture; it is not evidence of active integrations.

## High-Level Layers
1. **Always-On (Hermes Cron + Profiles)**: Inventory sync, subsidy monitoring, lead scoring, heartbeat reports.
2. **Triggered Swarms**: Quiz completion → Buyer Clarity Agent + validated Sizing/Cost (Energy IS) → Proposal Generator → handoff to Sales Co-Pilot.
3. **Customer-Facing**: Intelligent quiz (this repo /quiz), dynamic recs, virtual configurator (Wix MCP).
4. **Ops & Sales Intelligence**: Cousin/team co-pilots (sales-intelligence repo), accounting agents, logistics.
5. **Marketing Intelligence**: Content swarms for mass adoption & affection (marketing-intelligence repo) — Zola stories, ROI shares, virtual experiences.
6. **Virtual Side**: Wix MCP as live virtual domain layer. Agent-controlled storefront, products, leads.
7. **Domain (Energy IS PV Instance)**: Sovereign extension of Energy IS vertical. PV-specific entities (Zola Car Pod, hybrid climate configs, structural kits, local fulfillment). Calculator + Validation for credible numbers. Private instance holds real data.

## Handoff Protocol (Agentic Orchestration Pattern)
- From: Quiz/Buyer Agent
- To: Sales Co-Pilot
- Context: Quiz answers + calculated kWp/cost/ROI/subsidies + inventory snapshot + suggested package
- Artifacts: Recommendation text, PDF draft, next-step options

## Integration Points
- Starlight Intelligence System → Energy IS vertical + sovereign private/pv-lager
- Agentic Creator OS + Hermes → runtime, skills, profiles, crons
- Wix MCP → virtual site control
- sales-intelligence & marketing-intelligence repos → specialized reusable modules applied here

Full swarm patterns and Energy IS 7 sub-systems mapping in the parent Starlight repo and this /domain folder.
