'use client';

import React from 'react';
import { Sliders, Shovel, Truck, Zap, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function MontageAblaufV2() {
  const steps = [
    {
      num: '01',
      icon: Sliders,
      title: 'Konfiguration & Statik-Prüfung',
      desc: 'Maßgeschneiderte Planung im 3D-Konfigurator. Automatische statische Auslegung für Ihre spezifische Schneelastzone im Harz / DACH.',
      detail: 'Inkl. DIN EN 1991 Statikunterlagen',
    },
    {
      num: '02',
      icon: Shovel,
      title: 'Fundamente & Baurecht',
      desc: 'Bereitstellung exakter Fundamentpläne (Punktfundamente 80x80cm). Unterstützung bei eventueller Bauvoranfrage durch unsere Bauingenieure.',
      detail: 'Verfahrensfrei nach LBO bis 30 m²',
    },
    {
      num: '03',
      icon: Truck,
      title: 'Werkslieferung ab Seesen',
      desc: 'Direkter Speditionsversand ab unserem Zentrallager Seesen (Harz). Vollständige Lieferung aller Träger, Glas-Glas Module und Montagesets.',
      detail: '24–48 Std. Bereitstellung',
    },
    {
      num: '04',
      icon: Zap,
      title: 'Montage & Netzanschluss',
      desc: 'Fachgerechte Errichtung des Aluminium-Tragwerks und schlüsselfertiger AC-Anschluss durch zertifizierte Elektromeister inkl. Smart-Meter.',
      detail: '100% schlüsselfertig mit Abnahme',
    },
  ];

  return (
    <section id="ablauf" className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#000000] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans uppercase text-amber-400 tracking-widest font-medium flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Schlüsselfertiger End-to-End Ablauf
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              In vier Schritten zum autarken Anwesen
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-300 border border-white/10 text-xs font-sans font-medium">
            Deutscher Meisterbetrieb &amp; Ingenieurservice
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 flex flex-col justify-between space-y-5 hover:border-amber-500/30 transition shadow-xl relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-xl font-bold text-slate-600 group-hover:text-amber-400/80 transition">
                    {step.num}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-white leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-[11px] text-amber-300/90 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{step.detail}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-2xl bg-slate-950/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-slate-300">
          <div>
            <span className="font-semibold text-white text-sm block">Sie wünschen die reine Selbstmontage?</span>
            <span className="text-slate-400">Unsere Bausätze enthalten vorkonfektionierte 100x100mm Alu-Profile und eine bebilderte Schritt-für-Schritt Anleitung.</span>
          </div>
          <Link
            href="/v2#configurator"
            className="px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs transition whitespace-nowrap shadow-lg shadow-amber-500/20"
          >
            Carport konfigurieren
          </Link>
        </div>
      </div>
    </section>
  );
}
