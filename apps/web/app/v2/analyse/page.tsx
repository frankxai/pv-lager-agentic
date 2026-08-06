import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { PRICING } from '@/lib/pricing';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { ShieldCheck, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Autarkie-Analyse V2 | Aurevia Estate Solar',
  description: 'Stufe 1: 190€ Autarkie-Analyse. 100% Anrechnung bei Beauftragung von Konzept oder Realisierung.',
};

export default function V2AnalysePage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-10">
        <div className="text-center space-y-4 border-b border-amber-500/20 pb-8">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold">
            Stufe 1 · {PRICING.analyse.display} (100% Anrechenbar)
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Wirtschaftlichkeits &amp; Autarkie-Analyse
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Fundierte Potenzialanalyse für Ihr Privatanwesen oder Firmenareal bevor Sie in die Detailplanung investieren.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-8 space-y-6 shadow-2xl">
          <h2 className="text-xl font-bold text-white">Was in der {PRICING.analyse.display} Analyse enthalten ist:</h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Standort- &amp; Einstrahlungsanalyse basierend auf Satellitendaten</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Aluminium-Profilberechnung nach Harzer Schneelast 3 Statik</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>25-Jahre Ertragsrechnung &amp; Amortisationszeit</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>100% Anrechnung der Kosten bei Folgebeschaffung</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-white/10">
            <a
              href="mailto:vertrieb@pvlager.de?subject=Anfrage%20Autarkie-Analyse%20190EUR"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-widest flex items-center justify-center shadow-xl shadow-amber-500/25"
            >
              Analyse Jetzt Beauftragen ({PRICING.analyse.display})
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
