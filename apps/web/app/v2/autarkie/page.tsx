import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { Cpu, Sun, Battery, Flame, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Technologie & Autarkie | Aurevia Manor Solar',
  description: 'Bifaziale Glas-Glas Module, Hochvolt-Batteriespeicher und SG Ready Wärmepumpen-Kopplung.',
};

export default function V2AutarkieTechPage() {
  const techPillars = [
    {
      icon: Sun,
      title: 'Bifaziale Glas-Glas Photovoltaik',
      badge: 'N-Type i-TOPCon',
      desc: 'Doppelglas-Module fangen direktes Sonnenlicht von oben und reflektierte Albedo-Strahlung vom Boden ein. Ergebnis: Bis zu 25% Mehrertrag im Jahresverlauf.',
      stats: '440W Modulleistung · 30 Jahre Leistungsgarantie',
    },
    {
      icon: Battery,
      title: 'BYD HVS Hochvolt-Speicher',
      badge: 'Lithium-Eisenphosphat (LFP)',
      desc: 'Eigensichere Zellchemie ohne Kobalt. Ermöglicht 100% Entladetiefe, ultraschnelles Laden bei Spitzenertrag und vollwertige Notstrom-Inselfähigkeit.',
      stats: '10.2 kWh bis 22.1 kWh modular skalierbar',
    },
    {
      icon: Flame,
      title: 'Wärmepumpen & AC/DC Sektorkopplung',
      badge: 'SG Ready & Direkt-PV',
      desc: 'Intelligente Ansteuerung von Panasonic Aquarea Wärmepumpen und Direkt-Klimasystemen zur thermischen Speicherung von Solarüberschuss.',
      stats: 'Heizung & Kühlung zum Nulltarif',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-sans text-amber-400 font-medium tracking-wide flex items-center justify-center gap-2">
            <Cpu className="w-4 h-4 text-amber-400" />
            Spitzentechnologie &amp; Systemkopplung 2026
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Autarkie durch intelligente Werkstoffe &amp; Elektronik
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Ein harmonisch abgestimmtes Gesamtsystem: Von bifazialer Solarenergie über dynamische Speicher bis zur direkten E-Mobilitäts-Ladung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {techPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-6 hover:border-amber-500/30 transition shadow-2xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-sans text-amber-300/90 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {item.badge}
                    </span>
                  </div>

                  <h2 className="font-serif font-bold text-xl text-white group-hover:text-amber-300 transition">
                    {item.title}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-400 font-mono">
                  {item.stats}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-950/90 border border-white/10 rounded-3xl p-8 sm:p-12 text-center space-y-6 max-w-4xl mx-auto shadow-2xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Berechnen Sie Ihre persönliche Autarkiequote
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-normal">
            Erfahren Sie in 60 Sekunden, wie viel Prozent Ihres Jahresstrombedarfs für Haushalt, Wärmepumpe und E-Fahrzeuge durch einen Aurevia Solar-Carport gedeckt werden.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              href="/v2#configurator"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition shadow-xl shadow-amber-500/20 flex items-center gap-2"
            >
              <span>Autarkie-Rechner starten</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-10 px-4 max-w-7xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
