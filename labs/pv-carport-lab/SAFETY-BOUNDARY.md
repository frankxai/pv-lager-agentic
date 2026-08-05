# Safety and Regulatory Boundary

**Scope:** product-design guardrail for a German, initially Lower Saxony, AI-assisted PV-carport learning and project system.  
**Verified:** 2026-07-18.  
**Not legal, structural-engineering, fire-safety, electrical, or permit advice.** Obtain qualified review for the actual product, jurisdiction, site, and contract.

## 1. Core rule

AI can prepare evidence and concepts. It cannot certify a building, choose a foundation from generic inputs, approve a structural load path, authorize an electrical installation, determine a local permit outcome, or place a product on the market on behalf of a responsible economic operator.

Every customer-facing output must identify:

- what is known and its source;
- what is assumed;
- what is still unknown;
- who must review it;
- the jurisdiction and verification date;
- whether the output is educational, conceptual, or human-approved.

## 2. Building control and permits

Germany’s building-control requirements are state and site specific. DIBt explains that the Musterbauordnung is a model and that the Länder implement technical building rules into Land law without being bound to identical wording. In Lower Saxony, § 60 NBauO says only the measures listed in its annex are “verfahrensfrei” within the stated limits. A process-free measure is not automatically exempt from zoning, setbacks, structural safety, fire, heritage, local-plan, neighbor, or other applicable requirements.

Lab policy:

- never state “permit-free” from postcode or dimensions alone;
- collect municipality, parcel/site context, intended use, dimensions, boundary distances, and existing structures;
- route the project to the local authority or a qualified planning professional before procurement when status is not documented;
- store the authority/professional decision as evidence rather than paraphrasing it as an AI conclusion.

## 3. Structure, foundations, and construction products

A carport is a structure exposed to site-dependent wind, snow, imposed loads, drainage, corrosion/moisture, ground conditions, connection behavior, and accidental actions. PV modules and their attachment can change the load and failure path.

DIBt explains that building safety depends on reliable and capable construction products and construction methods and that regulatory proof of usability/application may be required in some cases. DIBt also warns that a CE-marked construction product is usable only where its declared performance satisfies the requirements for its intended use in Germany; CE is not approval of a complete carport or every configuration. Regulation (EU) 2024/3110 establishes harmonised rules for marketing construction products.

The European Commission JRC identifies EN 1990–EN 1999 as the Eurocode family. Current DIN/Eurocode texts and German National Annexes are licensed technical standards, not a public AI checklist. The responsible structural professional must apply the current Land-adopted technical rules and parameters for the actual site.

Lab policy:

- structural system, member sizing, connections, bracing, anchors, foundations, and final fabrication dimensions require qualified structural review;
- the review envelope includes snow, wind, uplift, module dead load, construction-stage stability, ground/soil, corrosion/material class, drainage, tolerances, and effects on neighbouring structures;
- supplier documents, declarations, approvals, ETA/CE evidence, intended use, and installation instructions must be linked to the exact item/version;
- changing module size, bay width, material, connection, foundation, or site load reopens review;
- a generic AI-generated BOM is never “approved.”

## 4. 3D printing boundary

3D printing is valuable for learning and process aids, but uncontrolled anisotropy, material aging, UV, temperature, moisture, creep, layer adhesion, print settings, geometry, and traceability make casual prints unsuitable for safety-critical load paths.

### Allowed in the initial Lab

- scale models and teaching cutaways;
- spacing/drill templates used only as guides and checked against approved drawings;
- labels and assembly organizers away from live electrical/thermal hazards;
- non-load-bearing lab jigs and mockups;
- fit prototypes that are replaced by approved production parts.

### Prohibited without a separate engineered and compliance-approved product process

- columns, beams, rafters, bracing, foundations, anchors, structural connectors, module clamps, fall-protection components, or any primary/secondary load-path part;
- weather seals, drainage, fire barriers, or safety guards whose failure can harm people/property;
- DC/AC enclosures, cable supports, connectors, or parts near live conductors unless the exact material, ratings, intended use, testing, and responsible approval are documented;
- publishing fabrication files as “safe” or “certified” without the corresponding evidence.

A downloadable file is a product-risk decision, not merely content. Public STL/CAD releases require named ownership, versioning, intended-use limits, materials/process specification, testing, traceability, instructions, warnings, and legal/product review.

## 5. Electrical work, grid connection, and registration

NAV § 13 requires electrical work behind the house connection fuse—apart from stated exceptions—to be performed by the network operator or an installation company entered in a network operator’s installer register, following applicable rules and recognized technical practice.

EnWG § 49 requires energy installations to be built and operated safely according to generally accepted technical rules. VDE FNN identifies VDE-AR-N 4105:2026-03 as the national standard for connecting generation systems to low-voltage networks, while the responsible distribution network operator supplements it through its TAB and connection process. EEG § 8 establishes the grid-connection process but does not displace those technical requirements. The Bundesnetzagentur and Marktstammdatenregister provide connection and mandatory registration information; under MaStRV § 5, registration is generally due within one month after commissioning.

Lab policy:

- no live wiring instructions, conductor/protection sizing, inverter commissioning, grid connection, or energization workflow for unqualified users;
- collect electrical goals and existing-system facts for a registered installer;
- require installer approval of equipment compatibility, protection, routing, earthing/bonding, meter/network requirements, and commissioning;
- track grid-operator and MaStR tasks with accountable owners and evidence;
- do not call a grid-connected project complete before installer/operator evidence covers the applicable DNO and MaStR steps.

## 6. Consumer and construction-product responsibility

The EU General Product Safety Regulation (EU) 2023/988 is in force for consumer products. It includes manufacturer risk-analysis, technical-documentation, traceability, identification, warning/instruction, and online-offer information duties. German ProdSG §§ 3 and 6 make foreseeable assembly/installation/maintenance and German safety information relevant. Regulation (EU) 2024/3110 governs the marketing of construction products, with transition details requiring specialist review.

Electrical products can additionally trigger the Low Voltage Directive and German ElektroG responsibilities. Own-branding, bundling, importing, manufacturing, modifying, or publishing a safety-relevant part can change which entity bears manufacturer/importer/distributor duties. In B2C distance sales, pre-contract information, advertised features, assembly/installation information, withdrawal/returns, and warranty representations add consumer exposure. A B2B contract can allocate some commercial risk but does not remove building, grid, electrical, construction-product, or product-safety duties.

Lab policy:

- first pilot uses documented third-party systems and keeps economic-operator roles explicit;
- do not white-label structural or electrical hardware in the initial pilot;
- contractually assign product documentation, traceability, recalls, incident handling, warranties, and technical support;
- obtain German legal/product-compliance review before selling a kit or downloadable safety-relevant fabrication file;
- preserve product/version and serial/batch traceability, German instructions/warnings, complaints, incident, and recall paths where applicable;
- do not market a bespoke printed part or AI-derived variation as “CE-approved” or “building-approved” without product-specific evidence.

## 7. AI non-negotiables

The AI must never:

- decide that a site is permit-free or issue a definitive local-planning interpretation;
- generate or sign site-specific structural calculations, foundation/anchor designs, snow/wind results, soil assessments, load ratings, or installation releases;
- certify Eurocode, MVV TB, CE, CPR, DoP, abZ/aBG/ETA, VDE, TAB, DNO, GPSR, ProdSG, or other compliance;
- issue or sign grid applications, commissioning records, electrical test records, declarations of conformity/performance, legal-manufacturer instructions, or MaStR registrations;
- instruct a user to work in a live electrical installation, meter area, or inverter DC/AC system;
- treat an uploaded supplier document as applicable to the site/configuration until the accountable human has checked it.

The AI may explain sources, identify missing evidence, maintain assumptions and versions, prepare checklists, and force escalation to the named authority, engineer, installer, supplier, compliance owner, or DNO.

## 8. Human gates

| Gate | Required owner | Minimum evidence |
|---|---|---|
| Jurisdiction | local authority or qualified planner | written status/source for actual site |
| Structural | qualified structural engineer | site-specific signed/issued design or accepted system evidence |
| Product/BOM | PV Lager/RIAL technical owner | exact products, versions, intended use, compatibility, warranty, stock timestamp |
| Electrical | registered installation company | approved electrical design/scope and commissioning path |
| Commercial | invoicing entity/legal reviewer | terms, withdrawal/returns, responsibilities, disclosures |
| Release | Lab product owner | completed gate record, version, source dates, test receipt |

No agent may self-approve a gate or treat a missing answer as approval.

## 9. Safe lab-to-kit progression

1. **Education Lab:** no building installation, grid connection, structural claim, or sale of load-bearing printed parts.
2. **Engineered demonstrator:** site-specific structural design, approved proprietary system, qualified installation, inspections, and monitored evidence.
3. **Constrained kit pilot:** predefined configurations only; each project stays blocked until jurisdiction, structural-envelope applicability, installer engagement, exact BOM, and traceability are complete.
4. **Series product:** technical file, risk analysis, German instructions/warnings, traceability, supplier declarations, complaints/incident/recall process, construction-product route, electrical obligations, partner network, insurance, and counsel approval.
5. **Scale inside the envelope:** versioned configuration, change control, commissioning evidence, and a hard stop whenever a project escapes the approved envelope.

## 10. Official sources

- Lower Saxony, current § 60 NBauO: https://voris.wolterskluwer-online.de/browse/document/cite/a66b72bc-8f4d-3984-b141-421a6cea275f
- Lower Saxony ministry, NBauO overview: https://www.mw.niedersachsen.de/startseite/bauen_wohnen/bauordnungsrecht_bautechnik_und_gebaudeenergierecht/nbauo/niedersachsische-bauordnung-nbauo-217310.html
- DIBt, German regulatory system and CE/intended-use limits: https://www.dibt.de/de/service/faqs/das-deutsche-regelungssystem-fuer-bauprodukte-und-bauarten
- DIBt, Musterbauordnung PDF (September 2024): https://www.dibt.de/fileadmin/dibt-website/Dokumente/Rechtsgrundlagen/MBO.pdf
- DIBt, approvals, ETAs and building-product/method evidence: https://www.dibt.de/de/wir-bieten/zulassungen-etas-und-mehr
- European Commission JRC Eurocodes: https://eurocodes.jrc.ec.europa.eu/
- EnWG § 49 technical safety rules: https://www.gesetze-im-internet.de/enwg_2005/__49.html
- NAV § 13 electrical installations: https://www.gesetze-im-internet.de/nav/__13.html
- VDE FNN, VDE-AR-N 4105:2026-03: https://www.vde.com/de/fnn/themen/tar/tar-niederspannung/erzeugungsanlagen-am-niederspannungsnetz-vde-ar-n-4105-2018
- EEG § 8 grid connection: https://www.gesetze-im-internet.de/eeg_2014/__8.html
- Bundesnetzagentur, renewable-generation grid connection: https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/ErneuerbareEnergien/Netzanschluss/start.html
- MaStR mandatory registration information: https://www.marktstammdatenregister.de/MaStRHilfe/subpages/registrierungVerpflichtend.html
- MaStRV § 5 registration deadline and scope: https://www.gesetze-im-internet.de/mastrv/__5.html
- EU General Product Safety Regulation 2023/988: https://eur-lex.europa.eu/eli/reg/2023/988/oj
- EU Construction Products Regulation 2024/3110: https://eur-lex.europa.eu/eli/reg/2024/3110/oj
- German ProdSG § 3 safety assessment: https://www.gesetze-im-internet.de/prodsg_2021/__3.html
- German ProdSG § 6 consumer-product information: https://www.gesetze-im-internet.de/prodsg_2021/__6.html
- EU Low Voltage Directive 2014/35/EU: https://eur-lex.europa.eu/eli/dir/2014/35/oj
- ElektroG § 6 registration: https://www.gesetze-im-internet.de/elektrog_2015/__6.html
- BGB § 434 conformity/assembly requirements: https://www.gesetze-im-internet.de/bgb/__434.html
- BGB § 312d distance-sales information: https://www.gesetze-im-internet.de/bgb/__312d.html
- EGBGB Art. 246a § 1 pre-contract information: https://www.gesetze-im-internet.de/bgbeg/art_246a__1.html

These sources establish a conservative product boundary; they do not resolve a particular project or replace current professional advice.
