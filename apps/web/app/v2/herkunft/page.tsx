import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import { Warehouse, Truck, ShieldCheck, MapPin, CheckCircle2, PhoneCall } from 'lucide-react';

export const metadata = {
  title: 'Zentrallager Seesen (Harz) & Logistik-Hub | PV Lager · RIAL Energy',
  description: 'Zentrallager Seesen (Harz): 5.000m² Lagerfläche für PV-Module, Bausätze und Speicherkomponenten.',
};

export default function V2HerkunftPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24">
      <NavV2 />
      <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs text-amber-300 font-sans">
            <Warehouse className="w-4 h-4 text-amber-400" />
            <span>Zentrallager Harz · Logistik &amp; Direktabholung</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Zentrallager Seesen (Harz)
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Direkt an der A7 im Herzen Deutschlands. Über 5.000 m² Lagerfläche für Solarmodule, Aluminium-Bausätze, Wechselrichter und Speicher.
          </p>
        </div>

        {/* Location & Key Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">Standort Seesen</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Bornhäuser Str. 18, 38723 Seesen. Perfekte Verkehrsanbindung direkt an der Bundesautobahn A7 / B248 für schnelle Speditionsabwicklung bundesweit.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">24–48h Bereitstellung</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Palettenware und Carport-Bausätze sind sofort ab Lager verfügbar. Selbstabholung nach Terminvereinbarung oder termingenaue Baustellenanlieferung mit Mitnahmestapler.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-white">Qualitätsprüfung</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Jede Charge bifazialer Trina-Module und BYD-Speicher durchläuft eine standardisierte Wareneingangskontrolle vor der Einlagerung und Kommissionierung.
            </p>
          </div>
        </div>

        {/* Contact Banner */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-2xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif font-bold text-2xl text-white">Besichtigung oder Abholung vereinbaren?</h3>
            <p className="text-xs text-slate-400 font-sans">
              Unser Lagerteam in Seesen steht Ihnen von Mo–Fr (08:00–17:00 Uhr) zur Verfügung.
            </p>
          </div>
          <a
            href="tel:+49538198000"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition flex items-center gap-2 shadow-xl shadow-amber-500/20 shrink-0"
          >
            <PhoneCall className="w-4 h-4" />
            <span>+49 (0) 5381 98000</span>
          </a>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-12 px-4 max-w-6xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
