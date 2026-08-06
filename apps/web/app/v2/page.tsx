'use client';

import React, { useState } from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import { CarportConfiguratorV2 } from '@/components/CarportConfiguratorV2';
import { LeadMagnetModal } from '@/components/LeadMagnetModal';
import { SellerCopilotModal } from '@/components/SellerCopilotModal';
import { VoiceAgentWidget } from '@/components/VoiceAgentWidget';
import { pvlagerImages } from '@/lib/pvlager-media';
import {
  Award,
  ShieldCheck,
  Sparkles,
  Sliders,
  ArrowRight,
  Zap,
  Building2,
  Car,
  Thermometer,
  Layers,
  Truck,
  Sun,
  BookOpen,
  Maximize2,
  FileCheck,
  Shield,
  PhoneCall,
  CheckCircle2,
  Video,
  Cpu,
  Eye,
  Camera,
  Activity
} from 'lucide-react';

export default function V2LandingPage() {
  // Modal states
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [isCopilotOpen, setIsCopilotOpen] = useState(false);
  const [isVoiceOpen, setIsVoiceOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Active Gemini Omni Strategy Tab
  const [omniTab, setOmniTab] = useState<'vision' | 'video' | 'telemetry'>('vision');

  // Product Showcase Catalog (100% Authentic Local WebP Images)
  const productShowcase = [
    {
      title: 'Solar-Carport Zola Pod (Doppel-Carport 2 PKW)',
      category: 'Executive Bausatz',
      price: '3.490 €',
      img: pvlagerImages.carportKitDouble,
      desc: 'Voll-Aluminium Konstruktion 100x100mm mit Smart Rain Channeling, statisch geprüft für Schneelastzone 3 im Harz.'
    },
    {
      title: 'Einzel-Carport Zola Pod (1 PKW)',
      category: 'Executive Bausatz',
      price: '2.190 €',
      img: pvlagerImages.carportKitSingle,
      desc: 'Kompakte Anwesens-Lösung für SUV & Elektrofahrzeuge. Korrosionsfreies Aluminium-Tragwerk.'
    },
    {
      title: '5x3m Solar Carport Premium System',
      category: 'Bausatz Komplett',
      price: '2.990 €',
      img: pvlagerImages.carportRostak5x3,
      desc: 'Optimiert für maximale Flächenausnutzung mit integrierter bifazialer Solardach-Eindeckung.'
    },
    {
      title: 'Trina Vertex S+ Bifazial Glas-Glas 440W',
      category: 'PV Module',
      price: '89 €',
      img: pvlagerImages.bifacialModules,
      desc: 'Lichtdurchlässiges Doppelglas-Modul mit N-Type i-TOPCon Technologie & 25% Mehrertrag durch Rückseiten-Reflektion.'
    },
    {
      title: 'Heavy-Duty Aluminium-Profile 100x100mm',
      category: 'Unterkonstruktion',
      price: 'auf Anfrage',
      img: pvlagerImages.aluminumProfiles,
      desc: 'Gezogene Aluminium-Tragprofile für Carports, Terrassen & PV-Überdachungen. 30 Jahre Garantie.'
    },
    {
      title: 'AC/DC Direct-PV Solar Klimaanlage',
      category: 'Solar Klima',
      price: '899 €',
      img: pvlagerImages.acdcSolarKlima,
      desc: 'Direkt-PV betriebenes Klimasystem. Speist Solarstrom ohne Wechselrichter-Verluste für Kühlen & Heizen ein.'
    },
    {
      title: 'Solar Pergola & Terrassen-Überdachung',
      category: 'Anwesens-Design',
      price: '3.250 €',
      img: pvlagerImages.pergolaModern,
      desc: 'Ästhetische Beschattung mit transparenter PV-Verglasung für exklusive Terrassen & Gartenanwesen.'
    },
    {
      title: 'Souveräne Referenz-Anlage Seesen',
      category: 'Harz Referenz',
      price: 'Schlüsselfertig',
      img: pvlagerImages.referenceEstate,
      desc: 'Demonstrationsobjekt im Harz mit 100% Autarkie-System und BYD-Speicherkopplung.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      {/* Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,500;0,700;0,800;1,600&display=swap');
        .font-display { font-family: 'Playfair Display', Georgia, serif; }
      `}</style>

      {/* Floating Header Navigation */}
      <NavbarV2
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
        onOpenVoice={() => setIsVoiceOpen(true)}
      />

      <main className="space-y-28 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* 1. APPLE-GRADE HERO SECTION */}
        <section id="hero" className="relative rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/30 p-6 sm:p-16 grid lg:grid-cols-12 gap-10 items-center shadow-2xl">
          {/* Master Visual Backdrop */}
          <div className="absolute inset-0 z-0">
            <img
              src={pvlagerImages.dronespott2}
              alt="Aurevia Sovereign Estate Villa Luftaufnahme"
              className="w-full h-full object-cover filter brightness-[0.35] contrast-125 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050811] via-[#050811]/90 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/60 to-transparent" />
          </div>

          {/* Ambient Lighting Orbs */}
          <div className="absolute top-0 right-0 w-[650px] h-[650px] bg-gradient-to-bl from-amber-500/20 via-emerald-500/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

          <div className="lg:col-span-7 space-y-7 relative z-10">
            {/* Top Sovereign Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#070B14]/90 border border-amber-400/35 text-amber-300 text-xs font-semibold tracking-wide shadow-2xl backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>Aurevia Sovereign V2 · Harz Zentrallager Seesen</span>
              <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] border border-emerald-500/40">
                0% MwSt.
              </span>
            </div>

            {/* Apple-Style Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
              Die vollendete Form der{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent italic">
                Energieautarkie.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-xl text-slate-200 leading-relaxed font-light">
              Voll-Aluminium Solar Carports 100x100mm, bifaziale Glas-Glas Eindeckung und Speicher-Kopplung. Entwickelt für die höchste Schneelastklasse im Harz. Direkt aus unserem Zentrallager Seesen.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#configurator-v2"
                className="px-8 py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-2xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2.5 transform hover:scale-105 border border-amber-300/40"
              >
                <Zap className="w-5 h-5 fill-current" />
                <span>3D Konfigurator Starten</span>
              </a>

              <button
                onClick={() => setIsLeadMagnetOpen(true)}
                className="px-7 py-4.5 rounded-2xl bg-[#070B14]/90 hover:bg-slate-900 text-slate-200 font-semibold text-xs sm:text-sm border border-amber-500/35 hover:border-amber-400 transition flex items-center justify-center gap-2.5 backdrop-blur-md shadow-xl"
              >
                <BookOpen className="w-5 h-5 text-amber-400" />
                <span>Solar Kaufkompass 2026 (PDF Free)</span>
              </button>
            </div>

            {/* Trust Features Bar */}
            <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left border-t border-white/15">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">Statik geprüft Schneelast 3</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Truck className="w-4 h-4 text-amber-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">3-5 Tage Spedition ab Lager</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">30 Jahre Alu-Profil Garantie</span>
              </div>
              <div className="flex items-center gap-2.5">
                <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] text-slate-300 font-medium">0% MwSt. (§12 UStG) Befreit</span>
              </div>
            </div>
          </div>

          {/* Right Spotlight Display */}
          <div className="lg:col-span-5 relative z-10">
            <div className="glow-card p-4 rounded-3xl space-y-3.5 shadow-2xl">
              <div
                className="relative h-72 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
                onClick={() => setActiveImage(pvlagerImages.carportKitDouble)}
              >
                <img
                  src={pvlagerImages.carportKitDouble}
                  alt="Zola Pod Sovereign Solar Carport"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-slate-950/90 backdrop-blur border border-amber-500/40 text-amber-300 font-mono text-[10px] font-bold">
                  Zola Pod Sovereign Edition V2
                </div>
                <div className="absolute bottom-3 right-3 p-2 rounded-xl bg-slate-950/80 text-amber-400 border border-amber-500/30">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs px-1">
                <div>
                  <span className="text-slate-400 block font-mono text-[9px] uppercase">Zentrallager Seesen Bestseller</span>
                  <span className="font-serif font-bold text-white text-sm">Alu-Carport 100x100mm mit Bifazial-Dach</span>
                </div>
                <span className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-[11px] font-bold">
                  Sofort Lieferbar
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. APPLE-STYLE BENTO GRID SHOWCASE */}
        <section id="bento-v2" className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">Inselkompetenz & Werkstoffe</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">Präzision in jedem Detail</h2>
            <p className="text-xs text-slate-300">Gebaut nach den strengsten Harzer Bau- und Schneelastnormen DIN 1055.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glow-card p-8 rounded-3xl space-y-4 md:col-span-2">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-2xl text-white">Heavy-Duty Aluminium 100x100mm</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Gezogene Aluminium-Tragprofile verziehen sich im Gegensatz zu Leimholz auch nach 30 Jahren im Harzer Schnee nicht. Absolut korrosionsfrei, ohne erforderlichen Nachanstrich und geprüft für Schneelastzone 3.
              </p>
            </div>

            <div className="glow-card-emerald p-8 rounded-3xl space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-xl text-white">Trina Vertex S+ 440W Bifazial</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                N-Type i-TOPCon Doppelglas-Module. Lassen diffuses Tageslicht durch und erzeugen durch Lichtreflektion auf der Unterseite bis zu 25% Mehrertrag.
              </p>
            </div>
          </div>
        </section>

        {/* 3. INTERACTIVE 3D CONFIGURATOR V2 */}
        <section id="configurator-v2" className="scroll-mt-24">
          <CarportConfiguratorV2 />
        </section>

        {/* 4. GEMINI OMNI MULTIMODAL AI STRATEGY ROADMAP */}
        <section id="gemini-omni" className="glow-card p-8 sm:p-12 rounded-3xl space-y-8 border border-emerald-500/35">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-emerald-500/20 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>Next-Gen Strategy Roadmap</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Gemini Omni & Vision AI Integration Strategy
              </h2>
            </div>

            {/* Strategy Tabs */}
            <div className="flex items-center gap-2">
              {[
                { id: 'vision', label: 'Vision Inspection', icon: Camera },
                { id: 'video', label: 'Synthetic 4K Video', icon: Video },
                { id: 'telemetry', label: 'Live Digital Twin', icon: Activity },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setOmniTab(tab.id as any)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
                      omniTab === tab.id
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Strategy Tab Content */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              {omniTab === 'vision' && (
                <>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-bold">Pillar 1: Multimodal Vision Site Intake</span>
                  <h3 className="font-display text-2xl font-bold text-white">Echtzeit Kamera-Diagnose via Gemini 1.5 / 2.0 Flash</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Der Anwesensbesitzer richtet seine Smartphone-Kamera auf die Einfahrt oder Terrasse. Gemini Vision erkennt Fundament-Typen, Schattenwurf und Dachneigung in Echtzeit und speist die Daten direkt in die Weclapp ERP-Stückliste ein.
                  </p>
                </>
              )}

              {omniTab === 'video' && (
                <>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-bold">Pillar 2: Personalisierte 4K Drohnen-Flythroughs</span>
                  <h3 className="font-display text-2xl font-bold text-white">Synthetische Renderings & Video-Einbettung</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Mithilfe von Veo 2 / NanoBanana Pipelines generieren wir innerhalb von 30 Sekunden ein 4K Drohnen-Video, das das konfigurierte Zola Pod Carport direkt auf dem Grundstück des Kunden zeigt.
                  </p>
                </>
              )}

              {omniTab === 'telemetry' && (
                <>
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block font-bold">Pillar 3: Predicitive Autarky Optimization</span>
                  <h3 className="font-display text-2xl font-bold text-white">Gemini Digital Twin Telemetrie</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Kopplung des Haus-Speichers und der AC/DC Direct Klimaanlage an Gemini Omni zur prädiktiven Steuerung basierend auf Wettermodellen und dynamischen Stromtarifen.
                  </p>
                </>
              )}

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setIsCopilotOpen(true)}
                  className="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-lg transition"
                >
                  AI Strategy Demo Starten ➔
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3 font-mono text-xs">
              <div className="flex justify-between items-center text-emerald-400 border-b border-slate-800 pb-2">
                <span>Gemini Omni Pipeline</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px]">LIVE</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                {omniTab === 'vision' && '> Input: Real-time Camera Feed (30fps)\n> Processing: Gemini Vision Spatial Grid\n> Output: Structural Foundation Code & Schneelast Statik'}
                {omniTab === 'video' && '> Input: 3D CAD Bounding Box\n> Model: Veo 2 High-Res Generator\n> Output: Personalized 4K Drone Video Flythrough'}
                {omniTab === 'telemetry' && '> Input: Harz Weather Station Feed\n> Forecast: 48h Solar Production Model\n> Action: Autonomous Battery Discharge Command'}
              </p>
            </div>
          </div>
        </section>

        {/* 5. EXCLUSIVE PRODUCT SHOWCASE GALLERY */}
        <section id="showcase-v2" className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold">
              Original Lagerware & Komponenten V2
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
              Authentisches PV Lager Sortiment aus Seesen
            </h2>
            <p className="text-xs text-slate-400">
              Alle gezeigten Produkte sind in unserem Zentrallager Seesen vorrätig und sofort abrufbereit. 0% MwSt. § 12 (3) UStG.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {productShowcase.map((item, i) => (
              <div
                key={i}
                className="glow-card rounded-2xl overflow-hidden flex flex-col justify-between group"
              >
                <div
                  className="relative h-44 overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setActiveImage(item.img)}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-slate-950/85 text-amber-300 text-[10px] font-mono font-bold border border-amber-500/30">
                    {item.category}
                  </div>
                </div>

                <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-sm text-white group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-center pt-2.5 border-t border-slate-800">
                    <div>
                      <span className="text-[9px] text-slate-500 block">Ab Lager Seesen</span>
                      <span className="amber-gradient-text font-bold font-mono text-sm">{item.price}</span>
                    </div>
                    <a
                      href="#configurator-v2"
                      className="text-[11px] font-semibold text-slate-300 hover:text-white flex items-center gap-1 bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700"
                    >
                      <span>Auswählen</span>
                      <ArrowRight className="w-3 h-3 text-amber-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. JAY ABRAHAM PREEMINENCE ENGINEERING TRANSPARENCY HUB */}
        <section id="engineering" className="glow-card p-6 sm:p-12 rounded-3xl space-y-8 border border-amber-500/35">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider font-bold">Ingenieurkunst & Werkstoff-Analyse</span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">Warum Heavy-Duty Aluminium 100x100mm?</h2>
            <p className="text-xs text-slate-300">Der transparente Werkstoff-Vergleich für Ihr Anwesen im Harz.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 pt-2">
            <div className="p-6 rounded-2xl bg-slate-950 border border-amber-500/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold font-mono text-sm">01</div>
              <h3 className="font-serif font-bold text-white text-lg">Heavy-Duty Alu 100x100mm</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Anodisiertes Aluminium verzieht sich nie, benötigt keinerlei Nachanstrich und bleibt auch nach 30 Jahren im Harzer Schnee absolut korrosionsfrei.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-bold font-mono text-sm">02</div>
              <h3 className="font-serif font-bold text-slate-300 text-lg">Leimholz & BS-Holz</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Holz nimmt Feuchtigkeit auf, erfordert alle 2 Jahre Abschleifen/Lasieren und neigt unter hoher Schneelast im Harz zu Rissbildung.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-800 text-slate-400 flex items-center justify-center font-bold font-mono text-sm">03</div>
              <h3 className="font-serif font-bold text-slate-300 text-lg">Verzinkter Stahl</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Sehr schwer, neigt an Bohrlöchern und Verschraubungen zu Rostbildung und ist schwerer an Gebäude-Fassaden anzupassen.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* MOBILE STICKY QUICK ACTION DOCK */}
      <MobileStickyBarV2
        onOpenLeadMagnet={() => setIsLeadMagnetOpen(true)}
        onOpenCopilot={() => setIsCopilotOpen(true)}
      />

      {/* LIGHTBOX MODAL FOR HIGH-RES PHOTOS */}
      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-lg cursor-pointer" onClick={() => setActiveImage(null)}>
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-2xl border border-amber-500/40 shadow-2xl">
            <img src={activeImage} alt="Hochauflösendes PV Lager Produktbild" className="w-full h-full object-contain max-h-[85vh]" />
          </div>
        </div>
      )}

      {/* MODALS SUITE */}
      <LeadMagnetModal isOpen={isLeadMagnetOpen} onClose={() => setIsLeadMagnetOpen(false)} />
      <SellerCopilotModal isOpen={isCopilotOpen} onClose={() => setIsCopilotOpen(false)} />
      <VoiceAgentWidget isOpen={isVoiceOpen} onClose={() => setIsVoiceOpen(false)} />
    </div>
  );
}
