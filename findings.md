# Research Findings: PV Lager & Solar Carport Architecture

## 1. Brand & Public Surface Facts
- **Parent Umbrella:** RIAL Energy GmbH (<https://www.rialenergy.de/>)
- **Primary Commerce & Stock Surface:** PV Lager (<https://www.pvlager.com/>)
- **Structural PV Surface:** SolarCarport.tech (<https://www.solarcarport.tech/>)
- **Installation Partner:** VR Gebäudetechnik (<https://www.vr-gebaeudetechnik.de/>)
- **Target Audience (ICP):**
  1. Private homeowners wanting solar carports, terraces, or storage.
  2. B2B Commercial & Industrial buyers (company parking lots, logistics centers).
  3. Installers, electricians, and trade buyers requiring stocked aluminum profiles and modules.

## 2. Ingested Brand Assets
- **Logo & Favicon Assets:**
  - `https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png`
  - `https://static.wixstatic.com/media/fab3ae_52b99309068b4d81af21193f2c00f9eb~mv2`
  - `https://static.wixstatic.com/media/fab3ae_561e8663abe24a98a79412d783fc4cf3~mv2`
- **Color Palette & Visual Style:**
  - Dominant colors: Deep obsidian/slate black (`#0B0F19`), Solar Emerald (`#10B981`), Cyber Cyan (`#06B6D4`), Metallic Aluminum (`#E2E8F0`), Warm Amber Gold (`#F59E0B`).
  - Aesthetic vibe: Ultra-premium industrial engineering, sleek glassmorphism, precise CAD-inspired UI cards, interactive micro-animations.

## 3. Marketing Doctrine (Jay Abraham Adaptation)
- **Strategy of Preeminence:** Become the trusted advisor before asking for money.
- **Educate Before Selling:** Offer *Der Solar-Kaufkompass für Deutschland* (free engineering ROI report and buying checklist).
- **Risk Reversal:** Transparent compatibility guarantees, zero-pressure intake, verified BOM breakdown with real sample ERP output.
- **Multi-Funnel Strategy:**
  - **Funnel A (Direct Response):** 60-Second Custom Carport Configurator + Instant Cost/Yield Calculation.
  - **Funnel B (Educational Authority):** Free Solar Kaufkompass & Whitepaper Download.
  - **Funnel C (B2B Commercial):** Fleet & Parking Lot Solar Yield & Tax Amortization Tool.
  - **Funnel D (Conversational AI):** Interactive Voice & AI Copilot Guided Intake.

## 4. Technical Architecture Stack
- **Frontend Framework:** Next.js 15 App Router (`apps/web`).
- **Styling & Motion:** Tailwind CSS, Framer Motion, Lucide Icons.
- **AI Integrations:**
  - Vercel AI SDK (`@ai-sdk/react`, `@ai-sdk/google` or OpenAI) for live seller copilot API.
  - ElevenLabs Voice Agent widget integration for hands-free audio consultation.
- **Configurator Engine & ERP BOM Simulation:**
  - Dynamic profile calculation (Heavy-Duty 80x80 / 100x100 vs Standard 40x40 aluminum profiles).
  - Solar module quantity & peak power output (kWp), annual yield (kWh/year).
  - Hybrid inverter sizing, battery storage options (5kWh - 20kWh upsells).
  - Final ERP payload generation formatted for sales team (Frank's brother).
