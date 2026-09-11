'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, CheckCircle2, ArrowRight, Zap, Car, Anchor, Wrench } from 'lucide-react';

interface AssemblyStep {
  step: number;
  title: string;
  category: string;
  desc: string;
  specs: string;
  icon: any;
  color: string;
}

export function ScrollAssemblyShowcase() {
  const [currentStep, setCurrentStep] = useState(3);

  const steps: AssemblyStep[] = [
    {
      step: 1,
      title: 'Edelstahl-Fundamentanker (M16 A4)',
      category: 'Fundament & Basis',
      desc: 'Chemisch verankerte Schwerlast-Bolzenanker übertragen Zug- und Druckkräfte direkt in frostfreie Punktfundamente (80×80 cm).',
      specs: 'Zugkraft > 45 kN / Punkt · Edelstahl A4-80',
      icon: Anchor,
      color: 'border-slate-400 text-slate-300'
    },
    {
      step: 2,
      title: '100 × 100 mm Struktur-Pfosten mit Kabelkanal',
      category: 'Vertikal-Tragwerk',
      desc: 'Massives, eloxiertes EN AW-6063 T6 Aluminium. Unsichtbare innere Kabelführung für 22 kW Wallbox und Wechselrichter-Strings.',
      specs: '100×100×4.0 mm Profil · 15 µm Qualanod Eloxalschicht',
      icon: Layers,
      color: 'border-amber-400 text-amber-300'
    },
    {
      step: 3,
      title: 'Smart Rain Channeling Querträger-System',
      category: 'Entwässerung & Dachrahmen',
      desc: 'Extrudierte Längs- und Querträger fangen Regenwasser direkt unter den Modulfugen auf und leiten es geräuschlos durch die Pfosten ab.',
      specs: '80×50 mm integrierte Rinne · > 120 l/min Ablauf',
      icon: Wrench,
      color: 'border-cyan-400 text-cyan-300'
    },
    {
      step: 4,
      title: 'Bifaziale Glas-Glas Eindeckung (440W N-Type)',
      category: 'Aktive Energie-Matrix',
      desc: 'Doppelglas-Module mit 12 % Lichtdurchlässigkeit. Schützen Ihr Fahrzeug vor Hagel (HW4) und erzeugen sauberen Solarstrom direkt auf dem Stellplatz.',
      specs: 'Trina Vertex S+ · N-Type Doppelglas (HW4 zertifiziert)',
      icon: Zap,
      color: 'border-emerald-400 text-emerald-300'
    }
  ];

  return (
    <div className="rounded-3xl bg-[#070A14] border border-white/15 p-6 sm:p-10 lg:p-14 space-y-10 shadow-2xl overflow-hidden relative">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Car className="w-3.5 h-3.5" />
            <span>Physische Montage-Sequenz</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            In 4 Phasen zur autarken Überdachung
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Vom frostsicheren Bodenanker bis zum aktiven Doppelglas-Solardach.
          </p>
        </div>

        {/* Phase Stepper Pills */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setCurrentStep(idx)}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition ${
                currentStep === idx
                  ? 'bg-amber-400 text-slate-950 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Phase 0{s.step}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Assembly Canvas */}
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Visual Assembly Graphic Display */}
        <div className="lg:col-span-7 bg-slate-950/90 border border-white/10 rounded-3xl p-8 min-h-[380px] flex flex-col justify-between relative overflow-hidden shadow-2xl">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-slate-900 text-amber-400 font-bold border border-amber-400/30">
              Montage-Phase 0{steps[currentStep].step} von 04
            </span>
            <span className="text-slate-400">{steps[currentStep].category}</span>
          </div>

          {/* Graphical Layers Visualizer */}
          <div className="my-auto space-y-3 py-6">
            {steps.map((st, idx) => {
              const isPassed = idx <= currentStep;
              const isCurrent = idx === currentStep;

              return (
                <div
                  key={st.step}
                  onClick={() => setCurrentStep(idx)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-500 cursor-pointer flex items-center justify-between ${
                    isCurrent
                      ? `${st.color} bg-slate-900/90 shadow-xl scale-[1.02]`
                      : isPassed
                      ? 'border-emerald-500/40 bg-slate-950 text-slate-300'
                      : 'border-slate-800 bg-slate-950/40 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono font-bold text-xs ${
                        isCurrent
                          ? 'bg-amber-400 text-slate-950'
                          : isPassed
                          ? 'bg-emerald-500/20 text-emerald-400'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      0{st.step}
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {st.title}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono opacity-80 hidden sm:inline">
                    {st.specs}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-slate-500 text-center">
            Klicken Sie auf eine Phase, um die Montage-Details einzusehen.
          </div>
        </div>

        {/* Detailed Inspector for Current Step */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-white/15 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
              {steps[currentStep].category}
            </span>
            <h3 className="text-2xl font-bold text-white">
              {steps[currentStep].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {steps[currentStep].desc}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 space-y-1 text-xs font-mono">
            <span className="text-slate-400 block text-[10px]">Technische Ausführung & Spezifikation:</span>
            <span className="text-emerald-300 font-bold text-sm block">
              {steps[currentStep].specs}
            </span>
          </div>

          <div className="pt-2">
            <a
              href="/atelier"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-xl transition flex items-center justify-center gap-2"
            >
              <span>Vollständiges CAD-Tragwerk im Atelier zerlegen</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
