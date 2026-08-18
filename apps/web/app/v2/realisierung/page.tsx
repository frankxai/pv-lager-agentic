import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { Wrench, ShieldCheck, Truck, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Schlüsselfertige Realisierung & Montage | Aurevia Manor Solar',
  description: 'Stufe 3: Turnkey Montage durch RIAL Energy GmbH & Meister-Elektriker.',
};

export default function V2RealisierungPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-4 border-b border-white/10 pb-8">
          <span className="text-xs font-sans text-amber-400 font-medium tracking-wide flex items-center justify-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            Stufe 3 · Schlüsselfertige Turnkey Realisierung
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Montage &amp; Netzanschluss aus einer Hand
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Keine Schnittstellenverluste. Von der Fundamenterstellung über das Aufstellen des 100x100mm Alu-Tragwerks bis zur AC-Inbetriebnahme durch eigene Meister.
          </p>
        </div>

        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white font-serif">
              Volle Gewährleistung &amp; garantierte Ausführung
            </h2>
            <p className="text-xs text-slate-400 font-normal leading-relaxed">
              Die {COMPANY.legalName} vereint Großhandels-Lagerkapazitäten in Seesen mit zertifizierten Montage- und Elektrofachteams in ganz Norddeutschland und DACH.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-sans">
            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-semibold">
                <Truck className="w-4 h-4" />
                <span>Direktlieferung</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Just-in-Time Werkslieferung mit Kran-Entladung direkt ab Zentrallager Seesen.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold">
                <Wrench className="w-4 h-4" />
                <span>Präzisions-Montage</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Aufbau der tragenden Aluminium-Profile, Ausrichtung der Glas-Glas Eindeckung und Regenrinne.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/60 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Zap className="w-4 h-4" />
                <span>Meister-Inbetriebnahme</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Vollständige VDE 0100-600 Prüfung, Smart-Meter-Installation und Fertigmeldung beim Energieversorger.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-xs text-slate-300 flex items-center gap-3 font-sans">
            <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <strong className="text-white block font-medium">30 Jahre Profilgarantie &amp; 0% MwSt.</strong>
              <span className="text-slate-400">Vollständige Steuerbefreiung nach § 12 Abs. 3 UStG für private Wohngebäude und E-Mobilität.</span>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10">
            <Link
              href="/v2#configurator"
              className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <span>Carport jetzt im 3D-Planer konfigurieren</span>
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
