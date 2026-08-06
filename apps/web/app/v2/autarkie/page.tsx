import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';

export const metadata = {
  title: 'Technologie & Autarkie V2 | Aurevia Estate Solar',
  description: 'Technologische Aufschlüsselung von bifazialen Modulen, Wärmepumpen & Speichern.',
};

export default function V2AutarkieTechPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-4 border-b border-amber-500/20 pb-8">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">
            Autarkie-Technologie 2026
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Maximale Unabhängigkeit durch Systemkopplung
          </h1>
        </div>

        <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-8 space-y-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white">Bifaziales Glas-Glas Photovoltaik-Dach</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Unsere Solar-Carports nutzen bifaziale N-Type i-TOPCon PV-Module, die Licht von oben und reflektierte Strahlung vom Boden nutzen. Dies erzeugt bis zu 25% höheren Ertrag im Vergleich zu Standard-Modulen.
          </p>
        </div>
      </main>
    </div>
  );
}
