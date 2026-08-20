import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { AutarkieCalculatorV2 } from '@/components/v2/AutarkieCalculatorV2';
import { COMPANY } from '@/lib/company';
import { Zap, Sun, Battery, Flame, Car } from 'lucide-react';

export const metadata = {
  title: 'Sektorkopplung & Autarkie | PV Lager Seesen · RIAL Energy',
  description: 'Solar-Carports, Wärmepumpen, Batteriespeicher und AC/DC-Klima im harmonisierten Gesamtsystem.',
};

export default function V2AutarkiePage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24">
      <NavV2 />
      <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs text-amber-300 font-sans">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Sektorkopplung &amp; Energie-Autarkie</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Das vernetzte Solar-Gesamtsystem
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Ein Solar-Carport ist mehr als nur ein Unterstand: Er ist das regenerative Kraftwerk für Ihr E-Fahrzeug, Ihre Wärmepumpe und Ihren Hausspeicher.
          </p>
        </div>

        {/* 4 Pillars of Energy Autarky */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-sans">
          <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center border border-amber-500/20">
              <Sun className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Bifaziale PV-Erzeugung</h3>
            <p className="text-slate-400 leading-relaxed">
              Trina Vertex S+ Doppelglas-Module wandeln auch reflektiertes Bodenlicht auf der Modulunterseite in wertvollen Solarstrom um.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Battery className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Hochvolt-Speicherung</h3>
            <p className="text-slate-400 leading-relaxed">
              BYD Battery-Box HVS und Huawei LUNA halten den tagsüber erzeugten Sonnenstrom für die Nacht- und Spitzenlasten bereit.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <Car className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">22kW Smart EV Charging</h3>
            <p className="text-slate-400 leading-relaxed">
              Dynamisches PV-Überschussladen speist ausschließlich reinen Sonnenstrom in Ihr Elektrofahrzeug ein.
            </p>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center border border-rose-500/20">
              <Flame className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-white text-sm">Wärmepumpe &amp; AC/DC Klima</h3>
            <p className="text-slate-400 leading-relaxed">
              Direkte Sektorkopplung mit Panasonic T-CAP Wärmepumpen und RIAL Direct-PV AC/DC Klimasystemen ohne Netzverluste.
            </p>
          </div>
        </div>

        <AutarkieCalculatorV2 />
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-12 px-4 max-w-6xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
