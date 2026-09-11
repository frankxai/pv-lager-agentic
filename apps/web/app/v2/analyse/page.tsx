import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { PRICING } from '@/lib/pricing';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Autarkie-Analyse | PV Lager Seesen · RIAL Energy',
  description: 'Stufe 1: 190€ Autarkie-Analyse. 100% Anrechnung bei Beauftragung von Konzept oder Realisierung.',
};

export default function V2AnalysePage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-4 border-b border-white/10 pb-8">
          <span className="text-xs font-sans text-amber-400 font-medium tracking-wide">
            Stufe 1 · {PRICING.analyse.display} (100% Anrechenbar)
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Wirtschaftlichkeits- &amp; Autarkie-Analyse
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Fundierte Potenzialanalyse für Ihr Privatanwesen oder Gewerbeareal vor der Detailplanung. Berechnet durch die Ingenieure der {COMPANY.legalName}.
          </p>
        </div>

        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white font-serif">Im Leistungsumfang der {PRICING.analyse.display} Analyse enthalten:</h2>
          <ul className="space-y-4 text-sm text-slate-300 font-sans">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Standort- &amp; Einstrahlungsanalyse basierend auf Satellitendaten</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Aluminium-Profilberechnung nach Harzer Schneelast 3 Statik</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>25-Jahre Ertragsrechnung, Eigenverbrauchsquote &amp; Amortisationszeit</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>100% Anrechnung des Analysebetrags bei Folgebeschaffung</span>
            </li>
          </ul>

          <div className="pt-6 border-t border-white/10">
            <a
              href="mailto:vertrieb@pvlager.de?subject=Anfrage%20Autarkie-Analyse%20190EUR"
              className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <span>Analyse jetzt beauftragen ({PRICING.analyse.display})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-10 px-4 max-w-4xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
