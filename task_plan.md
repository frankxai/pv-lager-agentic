# Task Plan: PV Lager Ultra-Premium Solar Carport & Lead Magnet Architecture

**Project:** `pv-lager-agentic` (`C:\Users\frank\starlight\repos\pv-lager-agentic`)  
**Target Brand:** PV Lager / RIAL Energy GmbH (<https://www.pvlager.com/>)  
**Goal:** Redesign website into an ultra-premium Next.js experience featuring Jay Abraham education-based lead magnet ("Strategy of Preeminence"), interactive step-by-step PV Carport configurator with real sample ERP/BOM output, Vercel AI agent & ElevenLabs voice agent architecture, smart upsells, multi-funnel testing framework, and qualified sales lead routing for the owner (Frank's brother).

---

## Phases & Milestones

### Phase 1: Context & Brand Asset Ingestion (COMPLETE)
- [x] Scrape & ingest `pvlager.com` brand assets, typography, images, and domain context
- [x] Review canonical RIAL Energy / PV Lager joint-venture growth strategy doc
- [x] Create project planning files (`task_plan.md`, `findings.md`, `progress.md`, `implementation_plan.md`)

### Phase 2: Architectural Design & Implementation Plan (COMPLETE)
- [x] Define Multi-Funnel Architecture (4 test funnels)
- [x] Define Configurator Logic & BOM Engine (Profiles, Modules, Electrical, Battery, Pricing)
- [x] Define Vercel AI SDK Agent & ElevenLabs Voice Copilot Architecture
- [x] Present `implementation_plan.md` & obtain User Auto-Approval

### Phase 3: Core Next.js Application & Component Engineering (COMPLETE)
- [x] Upgrade `apps/web` (Next.js 15 App Router + Tailwind + Framer Motion)
- [x] Implement Premium Visual Design System (Dark mode, emerald/cyan solar glow, glassmorphic panels)
- [x] Build Educational Lead Magnet Component (*Der Solar-Kaufkompass*)
- [x] Build Interactive 60-Second Solar Carport Configurator & Sample ERP BOM Engine
- [x] Build Smart Upsell System (Battery storage, EV Wallbox, Leasing option)
- [x] Build Seller Copilot Lead Routing (Export complete dossier to brother/sales team)

### Phase 4: AI Agents & Multi-Funnel Routing (COMPLETE)
- [x] Integrate Vercel AI SDK Solar Consultant Copilot API endpoint (`app/api/chat/route.ts`)
- [x] Integrate ElevenLabs Voice Agent streaming widget (`VoiceAgentWidget.tsx`)
- [x] Implement Multi-Funnel Testing View Switcher (`FunnelEvaluatorBar.tsx`)

### Phase 5: Verification & Git Sync (IN_PROGRESS)
- [x] Run `npm install` in `apps/web`
- [ ] Run build verification (`npm run build` in `apps/web`)
- [ ] Push/sync git repo to `https://github.com/frankxai/pv-lager-agentic.git`
- [ ] Create `walkthrough.md` artifact
