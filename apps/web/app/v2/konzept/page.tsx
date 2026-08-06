import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { PRICING } from '@/lib/pricing';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Autarkie-Konzept V2 | Aurevia Estate Solar',
  description: 'Stufe 2: 490€ Ingenieur-Entwurfsplanung und Vor-Ort-Statik.',
};

export default function V2KonzeptPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-4 border-b border-amber-500/20 pb-8">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">
            Stufe 2 · {PRICING.konzept.display}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Autarkie-Konzept &amp; Ausführungsplanung
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Ingenieurtechnische Entwurfsplanung und statische Vorprüfung vor Ort vor der schlüsselfertigen Montage.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-8 space-y-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white">Leistungsumfang des Konzepts:</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Vor-Ort-Termin eines Projektingenieurs, Prüfung des Baugrunds, Kabelwege-Planung und Auslegung des Zählerplatzes nach VDE-AR-N 4105.
          </p>
          <div className="pt-6 border-t border-white/10">
            <a
              href="mailto:vertrieb@pvlager.de?subject=Anfrage%20Autarkie-Konzept%20490EUR"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-widest flex items-center justify-center shadow-xl shadow-amber-500/25"
            >
              Konzept Beauftragen ({PRICING.konzept.display})
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
