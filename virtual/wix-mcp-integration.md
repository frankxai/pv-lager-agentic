# Virtual Side — Wix MCP Integration

Wix MCP Server is the bridge for the virtual layer of PV Lager.

**Capabilities**:
- Natural language control of products, inventory, ecom, leads, CMS via Claude, Cursor, Hermes agents.
- Dynamic quiz-driven product recommendations and "available now" flags.
- Agent updates to site (new packages, pricing, testimonials from marketing swarm).
- Lead capture directly into collections → sales intelligence handoff.

**Setup Notes** (production):
- Use official Wix MCP docs + Claude connector.
- Hermes profiles can call MCP tools for always-on or triggered actions.
- Combine with Energy IS calculators for accurate recs.

This makes the pvlager.com site a living virtual domain controlled by the agentic system.

See main README and architecture for how it fits the full stack.
