'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FunnelEvaluatorBar, FunnelMode } from '../components/FunnelEvaluatorBar';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { CarportConfigurator } from '../components/CarportConfigurator';
import { SellerCopilotModal } from '../components/SellerCopilotModal';
import { VoiceAgentWidget } from '../components/VoiceAgentWidget';
import {
  ShieldCheck,
  Zap,
  Award,
  Truck,
  CheckCircle,
  BookOpen,
  Building2,
  Mic,
  ArrowRight,
  Sun,
  Layers,
  Sparkles,
  PhoneCall,
  FileCheck,
  TrendingUp
} from 'lucide-react';

export default function HomePage() {
  const [funnelMode, setFunnelMode] = useState<FunnelMode>('configurator');
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* Funnel Evaluator Bar (Testing Suite) */}
      <FunnelEvaluatorBar currentMode={funnelMode} onSelectMode={setFunnelMode} />

      {/* Main Navbar */}
      <Navbar
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenVoice={() => setIsVoiceOpen(true)}
      />

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        {/* Glowing Background Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-amber-500/15 via-emerald-500/10 to-cyan-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-300 text-xs font-mono shadow-lg">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Zentrallager Seesen (Harz) · Sofort Lieferbar</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] font-bold">
                0% MwSt.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Solar Carports & Alu-Systeme.{' '}
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                Ingenieurkunst aus Seesen.
              </span>
            </h1>

            {/* Subheadline (Jay Abraham Direct Response Style) */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Keine Schätzungen. Erhalten Sie in <strong className="text-amber-400">60 Sekunden</strong> Ihre vollstatische ERP-Stückliste, inklusive Aluminium-Profilberechnung, bifazialen Glas-Glas Modulen & ertragsoptimierter Speicher-Auslegung.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="#configurator"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>60s Carport Konfigurator Starten</span>
              </a>

              <button
                onClick={() => setIsLeadMagnetOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-sm border border-slate-700 transition flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Solar Kaufkompass 2026 (PDF Free)</span>
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/10 mt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">Statik geprüft für Schneelastzone 3</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">3-5 Tage Spedition aus Zentrallager</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-cyan-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">30 Jahre Alu-Profilstruktur Garantie</span>
              </div>
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="text-xs text-slate-300 font-medium">0% MwSt. (§12 (3) UStG) Befreit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC FUNNEL VIEW SWITCHER */}
      {funnelMode === 'configurator' && (
        <section className="py-6">
          <CarportConfigurator onCompleteLead={() => alert('Vielen Dank! Ihre Anfrage wurde protokolliert.')} />
        </section>
      )}

      {funnelMode === 'lead-magnet' && (
        <section className="py-12 max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900 border border-amber-500/40 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center mx-auto text-3xl font-black">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white">Funnel 2: Jay Abraham Preeminence Lead Magnet</h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Nutzen Sie das Prinzip der Überlegenheits-Strategie ("Strategy of Preeminence"): Educate before you sell. Der 24-seitige Kaufkompass vermittelt dem Kunden neutrales Wissen zu Schneelasten, Bifazialitäts-Gewinnen und Speicher-Kalkulationen.
            </p>
            <button
              onClick={() => setIsLeadMagnetOpen(true)}
              className="px-8 py-4 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm shadow-xl"
            >
              Leitfaden Modal Öffnen & Download Ansehen
            </button>
          </div>
        </section>
      )}

      {funnelMode === 'b2b-fleet' && (
        <section className="py-12 max-w-5xl mx-auto px-4 space-y-8">
          <div className="p-8 rounded-3xl bg-slate-900 border border-cyan-500/40 shadow-2xl space-y-6">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-cyan-400" />
              <div>
                <h2 className="text-2xl font-bold text-white">Funnel 3: B2B Commercial & Fleet Solar Park Calculator</h2>
                <p className="text-xs text-slate-400">Für Firmenparkplätze, Logistikzentren & Gewerbeobjekte ab 4 bis 200 Stellplätzen.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-slate-500 block">Stellplätze (Multi-Bay)</span>
                <span className="text-amber-400 font-bold text-lg font-mono">24 PKW Plätze</span>
                <p className="text-slate-400 text-[11px]">Ca. 80 kWp Gesamtleistung</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-slate-500 block">Erwarteter Jahresertrag</span>
                <span className="text-emerald-400 font-bold text-lg font-mono">78.400 kWh / Jahr</span>
                <p className="text-slate-400 text-[11px]">Direktes EV-Flottenladen</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <span className="text-slate-500 block">Amortisationszeitraum</span>
                <span className="text-cyan-400 font-bold text-lg font-mono font-bold">5.8 Jahre</span>
                <p className="text-slate-400 text-[11px]">Inkl. AfA Sonderabschreibung</p>
              </div>
            </div>

            <div className="text-center pt-2">
              <a
                href="#configurator"
                onClick={() => setFunnelMode('configurator')}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2"
              >
                <span>B2B Multi-Bay Konfiguration Starten</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      )}

      {funnelMode === 'voice-ai' && (
        <section className="py-12 max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900 border border-emerald-500/40 shadow-2xl space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-3xl font-black border border-emerald-500/40">
              <Mic className="w-8 h-8 animate-pulse" />
            </div>
            <h2 className="text-3xl font-bold text-white">Funnel 4: ElevenLabs Voice Agent Guided Intake</h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
              Ermöglicht Kunden die freihändige verbalisierte Konfiguration. Der KI-Sprachagent erfasst Wünsche zu Fahrzeugen, Stellplätzen & Speichern und wandelt diese live in die ERP-Stückliste um.
            </p>
            <button
              onClick={() => setIsVoiceOpen(true)}
              className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-xl"
            >
              Voice Assistant Widget Öffnen
            </button>
          </div>
        </section>
      )}

      {/* JAY ABRAHAM EDUCATIONAL HUB SECTION */}
      <section className="py-20 bg-[#070A11] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
              Transparenz & Ingenieurwissen
            </span>
            <h2 className="text-3xl font-bold text-white">
              Der Solar Kaufkompass: Wissen vor der Kaufentscheidung
            </h2>
            <p className="text-xs text-slate-400">
              Wir klären auf, wo andere Anbieter Schweigen bewahren.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Alu 100x100mm vs. Holz oder Stahl</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Holz verzieht sich über Jahrzehnte und erfordert Nachanstrich. Verzinkter Stahl kann an Verschraubungen rosten. Anodisiertes Aluminium ist dauerhaft korrosionsfrei und wartungsfrei.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                <Sun className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Bifaziale Transparenz & Tageslicht</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Klassische schwarze Folienmodule dunkeln den Stellplatz komplett ab. Bifaziale Glas-Glas Module lassen angenehmes Licht durch und nutzen Unterseiten-Reflektion für Extra-Ertrag.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-base text-white">Speicher-Kalkulation ohne Schönrechnen</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ein Speicher sollte exakt auf den Nachtverbrauch abgestimmt sein. Wir berechnen Ihnen transparent die echten Amortisationsjahre ohne künstlich angenommene Strompreisexplosionen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CALLOUT FOR SALES TEAM */}
      <section className="py-12 bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-xl font-bold text-white">Fragen zur Statik oder Sondermaßen?</h3>
          <p className="text-xs text-slate-300">
            Sprechen Sie direkt mit unserer technischen Vertriebsleitung im Zentrallager Seesen (Harz).
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="tel:+49538198000"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Direkt anrufen: +49 (0) 5381 98000</span>
            </a>
            <button
              onClick={() => setIsCopilotOpen(true)}
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs inline-flex items-center gap-2 border border-slate-700"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>AI Sales Copilot Fragen</span>
            </button>
          </div>
        </div>
      </section>

      {/* MODALS */}
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={() => setIsLeadMagnetOpen(false)} />
      <SellerCopilotModal isOpen={isCopilotOpen} onClose={() => setIsCopilotOpen(false)} />
      <VoiceAgentWidget isOpen={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
    </div>
  );
}
