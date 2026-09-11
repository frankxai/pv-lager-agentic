# Solar Commercial OS plugin

Version 0.1.0 — skills-only package.

Use one product across solar businesses, with separate staff and customer access to the underlying services.

| Skill | Purpose |
|---|---|
| operate-solar-commerce | Stock, margin, buying and campaign decisions from evidence |
| assist-solar-customers | Published products, verified comparisons and authorized quote/order help |
| deliver-commercial-os | Scoped implementation issues, PR evidence and tracker handover |

## Use now

The requesting account also has these three personal skills installed. Request a skill by name in ChatGPT or use its `$skill-name` invocation in Codex. Existing authorized tools or supplied exports provide the data; this package does not include an ERP connector.

For other accounts, share/install the skills through their supported Skills flow, or install this source package through a plugin source/marketplace supported by their ChatGPT/Codex version. A repository folder is not evidence of account installation or public directory publication. No global marketplace entry was created here.

The root plugin.json is the portable manifest. .codex-plugin/plugin.json provides aligned compatibility metadata. Skills are under skills/. This directory is self-contained; no credentials, live MCP endpoint, app registration identifier or company dataset is bundled.

## Connect live business tools

Implement GitHub issue #9 and the authentication/data dependencies in epic #4. Deploy and verify the real scoped MCP service before adding mcp.json or platform registration mappings. Mutation tools reuse the mandate/outbox service in issue #10. Never use skill text as the tenant authorization boundary.

See ../../docs/commercial-os/plugin-and-validation.md for the proposed tools and connection gates, ../../docs/commercial-os/reusable-product.md for architecture, and ../../docs/commercial-os/CODEX-HANDOVER.md for the execution prompt.

Official packaging documentation: https://developers.openai.com/plugins/build/plugins

## Release maintenance

Personal skill sources are installed separately from this repository package. For a release, copy the reviewed core SKILL.md/references from the installed source, preserve the public skill names, align both manifests, validate, and record source-content hashes. Updating either copy does not automatically synchronize the other. Do not duplicate private personal configuration into the distributable package.
