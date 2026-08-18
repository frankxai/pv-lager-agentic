import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { Warehouse, Truck, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Zentrallager Seesen (Harz) | Aurevia Manor & RIAL Energy',
  description: 'Herkunft, Geschichte & Direkt-Großhandel Zentrallager Seesen.',
};

export default function V2HerkunftPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-12">
        <div className="text-center space-y-4 border-b border-white/10 pb-8">
          <span className="text-xs font-sans text-amber-400 font-medium tracking-wide flex items-center justify-center gap-2">
            <Warehouse className="w-4 h-4 text-amber-400" />
            Zentrallager Seesen (Harz) · Niedersachsen
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Direktbezug &amp; Logistikkompetenz ab Lager
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto font-normal leading-relaxed">
            Über 1.400 Bifazial-Module und hunderte Aluminium-Profile permanent vorrätig. Qualitätssicherung und Direktversand ohne Zwischenhandel.
          </p>
        </div>

        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-8 shadow-2xl">
          <div className="space-y-3">
            <h2 className="text-xl font-bold text-white font-serif">Das Logistikzentrum in Seesen</h2>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              Die {COMPANY.legalName} betreibt in Seesen am Harz ihr zentrales Großhandels- und Logistikzentrum für Photovoltaik-Komponenten, Heavy-Duty Aluminium-Strukturprofile und Hochvolt-Speicher. Durch direkte Herstellerbeziehungen garantieren wir unschlagbare Verfügbarkeit und verlässliche Speditionslaufzeiten.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs">
            <div className="bg-black/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-slate-400 block text-xs">Lagerfläche</span>
              <strong className="text-xl font-mono text-amber-300 block">Zentrallager Harz</strong>
              <p className="text-slate-400 text-[11px]">Schnelle Autobahnanbindung an die A7.</p>
            </div>
            <div className="bg-black/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-slate-400 block text-xs">Lieferzeit</span>
              <strong className="text-xl font-mono text-emerald-400 block">24–48 Std.</strong>
              <p className="text-slate-400 text-[11px]">Bundesweiter Speditionsversand.</p>
            </div>
            <div className="bg-black/60 p-5 rounded-2xl border border-white/10 space-y-2">
              <span className="text-slate-400 block text-xs">Statik-Garantie</span>
              <strong className="text-xl font-mono text-cyan-400 block">30 Jahre</strong>
              <p className="text-slate-400 text-[11px]">Massiv 6063-T6 Aluminium.</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-xs text-slate-400 font-sans">
            <span className="flex items-center gap-2 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}</span>
            </span>
            <a
              href="tel:+49538198000"
              className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium border border-white/10 transition"
            >
              Lagerberatung: +49 5381 98000
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
