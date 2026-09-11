'use client';

import React, { useState } from 'react';
import { Building2, Zap, ArrowRight, ShieldCheck, FileSpreadsheet, CheckCircle2 } from 'lucide-react';

export function FleetParkPlanner() {
  const [baysCount, setBaysCount] = useState(24);
  const [includeFastChargers, setIncludeFastChargers] = useState(true);
  const [fastChargersCount, setFastChargersCount] = useState(4);

  // Calculations
  const kwpCapacity = baysCount * 3.4; // ~3.4 kWp per parking bay
  const annualKwhYield = Math.round(kwpCapacity * 980);
  const co2OffsetTons = (annualKwhYield * 0.475 / 1000).toFixed(0);
  
  const estimatedCapex = Math.round(baysCount * 4200 + (includeFastChargers ? fastChargersCount * 14500 : 0));
  const annualThgRevenue = Math.round(fastChargersCount * 350 * (includeFastChargers ? 1 : 0));
  const estimatedPaybackYears = (estimatedCapex / (annualKwhYield * 0.22 + annualThgRevenue)).toFixed(1);

  return (
    <div id="fleet" className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-bold flex items-center gap-1.5">
              <Building2 className="w-4 h-4" /> B2B Commercial & Flotten-Parkplatz Rechner
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
              Gewerbe Multi-Bay Solar-Park Rechner
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold">
            Gewerbliche AfA Abschreibung
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Controls Left */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>Anzahl Firmenparkplätze / Stellplätze:</span>
                <span className="text-cyan-400 font-mono font-bold text-sm">{baysCount} PKW Plätze</span>
              </div>
              <input
                type="range"
                min={6}
                max={200}
                step={2}
                value={baysCount}
                onChange={(e) => setBaysCount(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <div>
                    <h4 className="font-bold text-xs text-white">DC Schnellladestationen (150 kW)</h4>
                    <p className="text-[11px] text-slate-400">Flottenlösung mit THG-Quote Erlösen</p>
                  </div>
                </div>
                <input
                  type="checkbox"
                  checked={includeFastChargers}
                  onChange={(e) => setIncludeFastChargers(e.target.checked)}
                  className="w-5 h-5 accent-cyan-500 cursor-pointer"
                />
              </div>

              {includeFastChargers && (
                <div className="pt-2">
                  <span className="text-[11px] font-semibold text-slate-300 block mb-1">Anzahl DC Fast-Charger:</span>
                  <div className="grid grid-cols-4 gap-2">
                    {[2, 4, 8, 16].map((count) => (
                      <button
                        key={count}
                        onClick={() => setFastChargersCount(count)}
                        className={`py-1.5 rounded-lg text-xs font-mono font-bold border transition ${
                          fastChargersCount === count
                            ? 'bg-cyan-500 text-slate-950 border-cyan-300'
                            : 'bg-slate-900 text-slate-300 border-slate-800'
                        }`}
                      >
                        {count} Säulen
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results Right */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Solar-Gesamtleistung</span>
                <span className="text-2xl font-bold font-mono text-cyan-400">{kwpCapacity.toFixed(0)} kWp</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Jahresertrag</span>
                <span className="text-2xl font-bold font-mono text-emerald-400">{annualKwhYield.toLocaleString()} kWh</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">CO2 Einsparung</span>
                <span className="text-2xl font-bold font-mono text-white">{co2OffsetTons} Tonnen / a</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <span className="text-[10px] text-slate-400 font-mono uppercase block">Amortisationszeit</span>
                <span className="text-2xl font-bold font-mono text-amber-400">{estimatedPaybackYears} Jahre</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/15 via-slate-950 to-amber-500/15 border border-cyan-500/40 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Geschätzte Investition (Netto)</span>
                <span className="text-2xl font-black font-mono text-cyan-400">€{estimatedCapex.toLocaleString()}</span>
              </div>

              <a
                href="#configurator"
                className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-lg transition"
              >
                <span>B2B Angebot Anfordern</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
