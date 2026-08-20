import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { Wrench, CheckCircle2, ShieldCheck, ArrowRight, Truck, Award, Zap } from 'lucide-react';

export const metadata = {
  title: 'Turnkey Realisierung & Montage | PV Lager Seesen · RIAL Energy',
  description: 'Stufe 3: Schlüsselfertige Montage, Punktfundamente und VDE AC-Netzinbetriebnahme durch Meisterbetrieb.',
};

export default function V2RealisierungPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-4 border-b border-white/10 pb-8">
          <span className="text-xs font-sans text-emerald-400 font-medium tracking-wide flex items-center justify-center gap-2">
            <Wrench className="w-4 h-4 text-emerald-400" />
            Stufe 3 · Schlüsselfertige Turnkey Realisierung
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Fachgerechte Montage &amp; Meister-Inbetriebnahme
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Alles aus einer Hand: Vom Tiefbau für die Punktfundamente über die Errichtung der 6063-T6 Aluminium-Konstruktion bis zur VDE-konformen AC-Netzintegration durch VR Gebäudetechnik.
          </p>
        </div>

        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
          <h2 className="text-xl font-bold text-white font-serif">
            Ihr Rundum-Sorglos-Paket zur schlüsselfertigen Übergabe:
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Truck className="w-4 h-4" />
                <span>Werkslieferung ab Seesen</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Just-in-Time Lieferung der Aluminium-Profile und PV-Module per Kran-LKW direkt an die Baustelle.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Punktfundamente &amp; Errichtung</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Präziser Tiefbau mit Erdbohrern oder Schraubfundamenten ohne große Flurschäden auf Ihrem Grundstück.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Zap className="w-4 h-4" />
                <span>Elektro-Meisterbetrieb (AC-Anschluss)</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Offizielle Abnahme und Anmeldung beim Netzbetreiber nach VDE-AR-N 4105 durch unseren Meisterbetrieb VR Gebäudetechnik.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-semibold">
                <Award className="w-4 h-4" />
                <span>10 Jahre Garantie &amp; 0% MwSt.</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                10 Jahre Garantie auf die Aluminium-Struktur und vollständige Steuerbefreiung nach § 12 Abs. 3 UStG.
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/v2#configurator"
              className="flex-1 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <span>Carport konfigurieren &amp; Montage anfragen</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-10 px-4 max-w-4xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
