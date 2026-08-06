import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Schlüsselfertige Realisierung V2 | Aurevia Estate Solar',
  description: 'Stufe 3: Turnkey Montage durch RIAL Energy GmbH & VR Gebäudetechnik.',
};

export default function V2RealisierungPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-4 border-b border-amber-500/20 pb-8">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">
            Stufe 3 · Schlüsselfertig
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Schlüsselfertige Realisierung &amp; Montage
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Ausgeführt von der {COMPANY.legalName} mit eigenem Zentrallager Seesen, zertifizierten Montageteams &amp; eigenen Elektromeistern.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-8 space-y-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white">Alles aus einer Hand:</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Keine Subunternehmer-Kette. Von der Fundamentierung über die Aluminium-Montage bis zur EVU-Inbetriebnahme und VDE-Prüfung übernehmen wir die volle Gewährleistung.
          </p>
        </div>
      </main>
    </div>
  );
}
