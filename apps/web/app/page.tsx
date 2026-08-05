'use client';

import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { FunnelEvaluatorBar, FunnelMode } from '../components/FunnelEvaluatorBar';
import { LeadMagnetModal } from '../components/LeadMagnetModal';
import { CarportConfigurator } from '../components/CarportConfigurator';
import { SellerCopilotModal } from '../components/SellerCopilotModal';
import { VoiceAgentWidget } from '../components/VoiceAgentWidget';
import { pvlagerImages } from '../lib/pvlager-media';
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
  TrendingUp,
  Maximize2
} from 'lucide-react';

export default function HomePage() {
  const [funnelMode, setFunnelMode] = useState<FunnelMode>('configurator');
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);

  // Active Lightbox image state
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const productShowcase = [
    {
      title: "Solar-Carport Zola Pod (Doppel-Carport 2PKW)",
      category: "Carport Komplettsystem",
      price: "3.490 €",
      img: pvlagerImages.carportKitDouble,
      desc: "Voll-Aluminium Konstruktion 100x100mm mit Smart Rain Channeling, statisch geprüft für Schneelastzone 3 im Harz."
    },
    {
      title: "Einzel-Carport Zola Pod (1 PKW)",
      category: "Carport Komplettsystem",
      price: "2.190 €",
      img: pvlagerImages.carportKitSingle,
      desc: "Kompakte Anwesens-Lösung für SUV & Elektrofahrzeuge. Korrosionsfreies Aluminium-Tragwerk."
    },
    {
      title: "Trina Vertex S+ Bifazial Glas-Glas 435W",
      category: "PV Module",
      price: "89 €",
      img: pvlagerImages.bifacialModules,
      desc: "Lichtdurchlässiges Doppelglas-Modul mit N-Type i-TOPCon Technologie & 25% Mehrertrag durch Rückseiten-Reflektion."
    },
    {
      title: "Heavy-Duty Aluminium-Profile 100x100mm",
      category: "Unterkonstruktion",
      price: "auf Anfrage",
      img: pvlagerImages.aluminumProfiles,
      desc: "Gezogene Aluminium-Tragprofile für Carports, Terrassen & PV-Überdachungen. 30 Jahre Garantie."
    },
    {
      title: "AC/DC Direct-PV Solar Klimaanlage",
      category: "Solar Klima",
      price: "899 €",
      img: pvlagerImages.acdcSolarKlima,
      desc: "Direkt-PV betriebenes Klimasystem. Speist Solarstrom ohne Wechselrichter-Verluste für Kühlen & Heizen ein."
    },
    {
      title: "Panasonic Aquarea T-CAP 9kW Wärmepumpe",
      category: "Wärmepumpen",
      price: "4.250 €",
      img: pvlagerImages.heatPumpPanasonic,
      desc: "Konstante Heizleistung bis -20°C Außentemperatur im Harzer Winter. Perfekt auf PV-Kopplung abgestimmt."
    },
    {
      title: "BYD Battery-Box Premium HVS 10.2 kWh",
      category: "Speichersysteme",
      price: "3.890 €",
      img: pvlagerImages.storageBatteryBYD,
      desc: "Modularer Lithium-Eisenphosphat Speicher (LiFePO4) für bis zu 85% Eigenverbrauchs-Quote."
    },
    {
      title: "Huawei SUN2000 10KTL-M1 Hybrid Wechselrichter",
      category: "Wechselrichter",
      price: "1.850 €",
      img: pvlagerImages.huaweiInverter,
      desc: "Dreiphasiger Hybrid-Wechselrichter mit integriertem AI Lichtbogenschutz & Batterieschnittstelle."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* Funnel Evaluator Bar (Testing Suite) */}
      <FunnelEvaluatorBar currentMode={funnelMode} onSelectMode={setFunnelMode} />

      {/* Main Navbar */}
      <Navbar
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenVoice={() => setIsVoiceOpen(true)}
      />

      {/* CINEMATIC HERO SECTION WITH REAL PV LAGER INSTALLATION BACKGROUND */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-amber-500/20">
        {/* Real Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={pvlagerImages.heroCarport}
            alt="PV Lager Solar Carport Installation"
            className="w-full h-full object-cover object-center scale-105 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080C14] via-[#080C14]/60 to-transparent" />
        </div>

        {/* Floating Glowing Orbs */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/20 via-emerald-500/15 to-cyan-500/15 blur-[160px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/90 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-2xl backdrop-blur-md">
                <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Zentrallager Seesen (Harz) · 100% Lagerware</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] border border-emerald-500/30">
                  0% MwSt.
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
                Solar-Carports & Alu-Systeme.{' '}
                <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-emerald-400 bg-clip-text text-transparent">
                  Präzision aus Seesen.
                </span>
              </h1>

              {/* Subheadline (Jay Abraham Preeminence) */}
              <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light">
                Erhalten Sie in <strong className="text-amber-400 font-semibold">60 Sekunden</strong> Ihre vollstatische ERP-Stückliste inkl. Aluminium-Profilberechnung, bifazialen Glas-Glas Modulen & ertragsoptimierter Speicher-Auslegung direkt aus unserem Zentrallager.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <a
                  href="#configurator"
                  className="w-full sm:w-auto px-8 py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2.5 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  <span>60s Carport Konfigurator Starten</span>
                </a>

                <button
                  onClick={() => setIsLeadMagnetOpen(true)}
                  className="w-full sm:w-auto px-7 py-4.5 rounded-2xl bg-slate-950/90 hover:bg-slate-900 text-slate-200 font-bold text-sm border border-amber-500/30 hover:border-amber-400 transition flex items-center justify-center gap-2.5 backdrop-blur-md"
                >
                  <BookOpen className="w-5 h-5 text-amber-400" />
                  <span>Solar Kaufkompass 2026 (PDF Free)</span>
                </button>
              </div>

              {/* Trust Features */}
              <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/15">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">Statik geprüft Schneelast 3</span>
                </div>
                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 text-amber-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">3-5 Tage Spedition ab Lager</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">30 Jahre Alu-Profil Garantie</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-slate-300 font-medium">0% MwSt. (§12 (3) UStG) Befreit</span>
                </div>
              </div>
            </div>

            {/* Right Featured Glass Card (Real Product Spotlight) */}
            <div className="lg:col-span-5 relative">
              <div className="bg-slate-900/90 border border-amber-500/40 p-5 rounded-3xl space-y-4 shadow-2xl backdrop-blur-xl">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer" onClick={() => setActiveImage(pvlagerImages.carportKitDouble)}>
                  <img
                    src={pvlagerImages.carportKitDouble}
                    alt="Solar Carport Doppel-Bausatz"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded bg-slate-950/85 backdrop-blur border border-amber-500/40 text-amber-300 font-mono text-[11px] font-bold">
                    Zola Pod Doppel-Carport
                  </div>
                  <div className="absolute bottom-3 right-3 p-2 rounded-lg bg-slate-950/80 text-amber-400 border border-amber-500/30">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex justify-between items-center text-xs px-1">
                  <div>
                    <span className="text-slate-400 block font-mono text-[10px] uppercase">Zentrallager Seesen Bestseller</span>
                    <span className="font-bold text-white text-base">Alu-Carport 100x100mm mit Bifazial-Dach</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold">
                    Sofort Lieferbar
                  </span>
                </div>
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

      {/* AUTHENTIC PRODUCT SHOWCASE GALLERY (REAL PV LAGER WAREHOUSE PHOTOS) */}
      <section className="py-20 bg-[#060911] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
              Original Lagerware & Komponenten
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Authentisches PV Lager Sortiment aus Seesen
            </h2>
            <p className="text-xs text-slate-400">
              Alle gezeigten Produkte sind in unserem Zentrallager Seesen vorrätig und sofort abrufbereit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productShowcase.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div
                  className="relative h-48 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveImage(item.img)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2 py-1 rounded bg-slate-950/80 text-amber-400 text-[10px] font-mono font-bold">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-slate-800">
                    <span className="text-amber-400 font-bold font-mono text-sm">{item.price}</span>
                    <a
                      href="#configurator"
                      className="text-[11px] font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                    >
                      <span>Auswählen</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JAY ABRAHAM EDUCATIONAL HUB SECTION */}
      <section className="py-20 bg-[#080C14] border-t border-white/10">
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

      {/* LIGHTBOX MODAL FOR HIGH-RES PHOTOS */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg" onClick={() => setActiveImage(null)}>
          <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl border border-amber-500/40">
            <img src={activeImage} alt="Hochauflösendes PV Lager Produktbild" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

      {/* MODALS */}
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={() => setIsLeadMagnetOpen(false)} />
      <SellerCopilotModal isOpen={isCopilotOpen} onClose={() => setIsCopilotOpen(false)} />
      <VoiceAgentWidget isOpen={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
    </div>
  );
}
