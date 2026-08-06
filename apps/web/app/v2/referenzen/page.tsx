import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';

export const metadata = {
  title: 'Referenzen V2 | Aurevia Estate Solar Showcase',
  description: 'Gebaute Solar-Carports, Anwesen & Gewerbe-Überdachungen.',
};

export default function V2ReferenzenPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">
            Gebaute Projekte &amp; Architektur
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Estate Solar &amp; Carport Gallery
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/estate-mansion.jpg" alt="Privatanwesen Carport" className="h-60 w-full object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-white text-base">Zola Manor Doppel-Carport</h3>
              <p className="text-xs text-slate-400">18 Bifaziale Trina Module (7.83 kWp) · Harz Schneelast 3</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/luxury-carport.jpg" alt="Executive Solar Carport" className="h-60 w-full object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-white text-base">Executive 100x100mm Alu-Profil</h3>
              <p className="text-xs text-slate-400">Integraphische Regenrinne &amp; 10kWh BYD Speicher</p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
            <img src="/images/bifacial-module.jpg" alt="Bifaziale PV Module" className="h-60 w-full object-cover" />
            <div className="p-5 space-y-2">
              <h3 className="font-bold text-white text-base">Bifaziales Glas-Glas Photovoltaik-Dach</h3>
              <p className="text-xs text-slate-400">+25% Rückseiten-Mehrertrag durch Lichtbrechung</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
