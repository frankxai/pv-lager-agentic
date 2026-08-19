'use client';

import React from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import { ExplodedCarportView } from '@/components/ExplodedCarportView';
import { ProductCard } from '@/components/ProductCard';
import { Figure } from '@/components/Figure';
import { DIGITAL_PRODUCTS } from '@/lib/digital-products';
import {
  Sparkles,
  Cpu,
  ShieldCheck,
  Zap,
  ShoppingBag,
  Layers,
  ArrowRight,
  CheckCircle2,
  Code,
  Download,
  Building2,
  Sliders,
  ChevronRight,
  Terminal,
  FileCheck2
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      <NavbarV2 />

      <main className="space-y-28 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* HERO SECTION: AUTONOMOUS SOLAR INTELLIGENCE & GERMAN PROVENANCE */}
        <section className="relative rounded-3xl overflow-hidden bg-[#070A14] border border-white/15 p-8 sm:p-14 lg:p-20 space-y-10 shadow-2xl text-center md:text-left">
          {/* Background Ambient Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none opacity-40" />
          <div className="absolute -top-32 -left-32 w-[550px] h-[550px] bg-amber-500/15 rounded-full blur-[160px] pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Aurevia · Autonomous Solar Engineering & Agentic Intelligence Forge</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Deutsche Ingenieurskunst.{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent italic">
                Autonome AI-Swarm Intelligenz.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
              Das weltweit erste Ökosystem, das reale deutsche Solar-Hardware (100×100 mm Struktur-Aluminium, bifaziales Doppelglas, Zentrallager Seesen) mit installierbaren AI Skills, Multi-Agenten-Schwärmen und parametrischer Software vereint.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <a
                href="/shop"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-2xl shadow-amber-500/25 transition flex items-center justify-center gap-2.5 border border-amber-300/40"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Digital Products & AI Skills Shop</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/atelier"
                className="px-8 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-mono text-sm font-bold border border-white/15 transition flex items-center justify-center gap-2"
              >
                <Layers className="w-4 h-4 text-amber-400" />
                <span>3D Hardware Atelier (CAD)</span>
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-white/10 text-xs font-mono relative z-10">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">AI Agenten-Cluster:</span>
              <span className="text-amber-400 font-bold text-base">5-Agent Swarm</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">Hardware-Profil:</span>
              <span className="text-white font-bold text-base">100 × 100 mm Alu</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">Statik-Zertifikat:</span>
              <span className="text-emerald-400 font-bold text-base">Zone 3 (5.4 kN/m²)</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">Lizenzmodell:</span>
              <span className="text-amber-400 font-bold text-base">Sovereign / No-Lockin</span>
            </div>
          </div>
        </section>

        {/* THE DUAL ENGINE: PHYSICAL PROVENANCE + DIGITAL FORGE */}
        <section className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
              Das Fundament unseres Erfolgs
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
              Reale Hardware trifft auf generative Software.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-light">
              Keine abstrakte KI-Fantasie. Jede Zeile unserer AI-Prompts, Berechnungs-Skills und BOM-Engines basiert auf echter, in Deutschland gebauter und statisch geprüfter Solar-Architektur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* Left: Physical Provenance with Audited Manifest Media */}
            <div className="bg-[#070A14] border border-white/15 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 font-mono text-xs font-bold">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>01. Physische Hardware Provenienz</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Zola Pod Struktur-Aluminium & Seesen Zentrallager
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Entwickelt und gefertigt nach DIN EN 1090-3 für extreme Schneelasten im Harzer Umland. 100×100 mm massive Pfosten, unsichtbare Regenrinnenführung und bifaziale Doppelglas-Module.
                </p>

                {/* Audited Reference Proof Media */}
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-slate-950 p-2 space-y-2">
                  <Figure
                    slug="dji-0081"
                    alt="Referenz · bestehende Ausführung einer realen solaren Überdachungsanlage in Niedersachsen."
                  />
                  <div className="px-3 py-2 bg-slate-900/80 rounded-xl text-[11px] font-mono text-slate-400 flex justify-between items-center">
                    <span>Zu validieren am Zielobjekt:</span>
                    <span className="text-amber-300 font-bold">Bodenstatik & Fundament</span>
                  </div>
                </div>

                <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>EN AW-6063 T6 eloxiertes Struktur-Aluminium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Trina Vertex S+ 440W N-Type Bifazial Module</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direkt-Versand aus Zentrallager Seesen</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="/atelier"
                  className="text-xs font-mono text-amber-300 font-bold hover:text-amber-200 flex items-center gap-1.5"
                >
                  <span>Hardware-Zerlegung im Atelier ansehen</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: Digital AI Forge */}
            <div className="bg-[#070A14] border border-emerald-500/30 p-8 sm:p-10 rounded-3xl space-y-6 shadow-2xl flex flex-col justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-bold">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>02. Agentic AI Forge & Digital Products</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Multi-Agenten-Schwärme, Prompts & BOM Software
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Vollständige Digital-Suiten für AI-Assistenten, Handwerksbetriebe und Architekten. Generieren Sie 3D Render-Prompts, parametrische Zuschnittlisten und verifizierte Dossiers in Sekunden.
                </p>
                <ul className="space-y-2 text-xs font-mono text-slate-300 pt-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Claude Code, ChatGPT Actions & Antigravity Skills</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>100+ SOTA Visual-Prompts (Midjourney / FLUX)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>TypeScript & Python BOM-Berechnungs-Engines</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-white/10">
                <a
                  href="/shop"
                  className="text-xs font-mono text-emerald-300 font-bold hover:text-emerald-200 flex items-center gap-1.5"
                >
                  <span>Digitale Produkte im Shop erkunden</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* EMBEDDED INTERACTIVE 3D CAD DISSECTION */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold">Interaktive Hardware-Zerlegung</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Zola Pod 100 × 100 mm Carport-Statik
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Scrubben Sie den Explosionsregler, um die interne Rinnenführung und Statikanker freizulegen.
            </p>
          </div>

          <ExplodedCarportView />
        </section>

        {/* FEATURED DIGITAL PRODUCTS & AI SKILLS */}
        <section className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Digitale Produkte & Skills</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Top AI-Werkzeuge für Creators & Ingenieure
              </h2>
            </div>
            <a
              href="/shop"
              className="text-xs font-mono text-amber-300 font-bold hover:text-amber-200 flex items-center gap-1.5"
            >
              <span>Alle Produkte im Shop ansehen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DIGITAL_PRODUCTS.slice(0, 3).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ZERO LEGAL HEADACHE & SOVEREIGN CREATOR TERMS */}
        <section className="rounded-3xl bg-[#070A14] border border-emerald-500/30 p-8 sm:p-14 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-5">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div className="space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold">
                Rechtssicherheit & Klare Verantwortungsabgrenzung
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Souveräne Werkzeuge. Null rechtliche Fallstricke.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Aurevia stellt hochpräzise AI-gestützte Berechnungsmodelle, Visualisierungs-Prompts und parametrische Algorithmen bereit. Gemäß unserer transparenten Lizenzbedingungen fungieren alle digitalen Produkte als qualifizierte Planungsgrundlagen. Die formelle baurechtliche Genehmigung, statische Endabnahme und der elektrische Netzanschluss verbleiben stets in der souveränen Verantwortung des bauausführenden Fachunternehmens vor Ort.
              </p>
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBarV2 />
    </div>
  );
}
