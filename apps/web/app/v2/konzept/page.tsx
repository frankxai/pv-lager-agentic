import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { PRICING } from '@/lib/pricing';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { Compass, CheckCircle2, ShieldCheck, ArrowRight, FileCheck, Layers } from 'lucide-react';

export const metadata = {
  title: 'Autarkie-Konzept & Ausführungsplanung | Aurevia Manor Solar',
  description: 'Stufe 2: 490€ Ingenieur-Entwurfsplanung, 3D CAD und Vor-Ort-Statik.',
};

export default function V2KonzeptPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-4 border-b border-white/10 pb-8">
          <span className="text-xs font-sans text-amber-400 font-medium tracking-wide flex items-center justify-center gap-2">
            <Compass className="w-4 h-4 text-amber-400" />
            Stufe 2 · {PRICING.konzept.display} (100% Anrechenbar bei Beauftragung)
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Autarkie-Konzept &amp; Technische Entwurfsplanung
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Ingenieurtechnische Detailauslegung vor Ort: Vom 3D-CAD-Entwurf über den Fundamentplan bis zur normgerechten Zählerplatzprüfung nach VDE-AR-N 4105.
          </p>
        </div>

        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white font-serif">
              Was im {PRICING.konzept.display} Autarkie-Konzept enthalten ist:
            </h2>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Erfahrene Projektingenieure und Bauexperten der {COMPANY.legalName} erfassen alle örtlichen Gegebenheiten und erstellen die prüffähigen Unterlagen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <FileCheck className="w-4 h-4" />
                <span>3D CAD &amp; Verschattungsanalyse</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Minutengenaue Sonnenstands- und Verschattungssimulation über das gesamte Kalenderjahr.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Typenstatik DIN EN 1991</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Berechnung der Fundamentlasten (Punktfundamente) abgestimmt auf Ihre Schneelastzone.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Layers className="w-4 h-4" />
                <span>Kabeltrassen &amp; Zählerplatz-Check</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Prüfung der AC-Hauptverteilung und Vorbereitung der VDE-Meldung beim zuständigen Netzbetreiber.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>100% Kosten-Anrechnung</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Die 490 € werden bei der Bestellung Ihres Carport-Bausatzes oder Montagesystems vollständig gutgeschrieben.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <a
              href="mailto:vertrieb@pvlager.de?subject=Anfrage%20Autarkie-Konzept%20490EUR"
              className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <span>Konzept jetzt beauftragen ({PRICING.konzept.display})</span>
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
