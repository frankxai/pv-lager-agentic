import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Zentrallager Seesen (Harz) V2 | RIAL Energy GmbH',
  description: 'Herkunft, Geschichte & Direkt-Großhandel Zentrallager Seesen.',
};

export default function V2HerkunftPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-4 border-b border-amber-500/20 pb-8">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">
            Zentrallager Seesen (Harz)
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Qualität &amp; Verfügbarkeit direkt vom Großhandel
          </h1>
        </div>

        <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-8 space-y-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white">Über den Standort Seesen</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Die {COMPANY.legalName} betreibt in Seesen (Harz) ihr zentrales Logistikzentrum für Photovoltaik-Komponenten, Aluminium-Profile für Carports und Speichertechnologie. Durch direkte Werksverträge sichern wir höchste Lieferfähigkeit ohne Zwischenhändler.
          </p>
        </div>
      </main>
    </div>
  );
}
