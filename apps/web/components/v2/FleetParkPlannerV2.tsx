'use client';

import React, { useState } from 'react';
import { Building2, BatteryCharging, DollarSign, ShieldCheck } from 'lucide-react';

export function FleetParkPlannerV2() {
  const [bays, setBays] = useState(20);
  const [fastChargers, setFastChargers] = useState(4);

  const totalKwp = bays * 4.35;
  const yearlyYieldKwh = Math.round(totalKwp * 960);
  const estInvest = Math.round(bays * 3200 + fastChargers * 8500);
  const afaYearlyWriteoff = Math.round(estInvest / 20); // 5% degressive AfA / linear 20y
  const thgEarningsPerYear = Math.round(fastChargers * 650);

  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#000000] border border-white/10 p-8 sm:p-12 rounded-3xl space-y-10 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans uppercase text-amber-400 tracking-widest font-medium flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-400" />
              Gewerbe &amp; B2B Fuhrpark Planer
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Multi-Bay Solar Überdachung für Firmenparkplätze
            </h2>
          </div>
          <div className="px-4 py-1.5 rounded-full bg-slate-900 text-amber-300 border border-amber-500/20 text-xs font-sans font-medium">
            AfA Sonderabschreibung &amp; THG-Quote
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-sans mb-2 text-slate-200">
                <span>Anzahl Parkplätze / Stellplätze (Multi-Bay):</span>
                <span className="text-amber-300 font-mono font-medium text-sm">{bays} Stellplätze</span>
              </div>
              <input
                type="range"
                min="6"
                max="200"
                step="2"
                value={bays}
                onChange={(e) => setBays(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-sans mb-2 text-slate-200">
                <span>150kW DC Schnellladepunkte (EV Fast Charger):</span>
                <span className="text-cyan-400 font-mono font-medium text-sm">{fastChargers} Ladepunkte</span>
              </div>
              <input
                type="range"
                min="0"
                max="24"
                step="2"
                value={fastChargers}
                onChange={(e) => setFastChargers(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Gesamt Photovoltaik-Leistung:</span>
                <span className="font-mono font-medium text-amber-300">{totalKwp.toFixed(1)} kWp</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Jahresertrag aus Carport-Dach:</span>
                <span className="font-mono font-medium text-emerald-400">{yearlyYieldKwh.toLocaleString()} kWh/a</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>THG-Quoten Ertrag (Öffentliches Laden):</span>
                <span className="font-mono font-medium text-cyan-400">ca. €{thgEarningsPerYear.toLocaleString()} / Jahr</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-7 space-y-6 shadow-xl backdrop-blur-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/60 p-5 rounded-2xl border border-white/10">
                  <span className="text-xs font-sans text-slate-400 block">Geschätzte Investition</span>
                  <span className="text-3xl font-bold font-mono text-amber-300 mt-1 block">€{estInvest.toLocaleString()}</span>
                </div>
                <div className="bg-black/60 p-5 rounded-2xl border border-white/10">
                  <span className="text-xs font-sans text-slate-400 block">Jährl. AfA Abschreibung</span>
                  <span className="text-3xl font-bold font-mono text-emerald-400 mt-1 block">€{afaYearlyWriteoff.toLocaleString()} / a</span>
                </div>
              </div>

              <a
                href="mailto:vertrieb@pvlager.de?subject=Anfrage%20B2B%20Fuhrpark%20Solar-Carport"
                className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-semibold text-xs transition shadow-xl shadow-amber-500/20 hover:opacity-95 flex items-center justify-center gap-2"
              >
                <span>B2B Fuhrpark Angebot anfordern</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
