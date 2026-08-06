'use client';

import React, { useState } from 'react';
import { TrendingUp, Award, Zap, ShieldCheck } from 'lucide-react';

export function AutarkieCalculatorV2() {
  const [monthlyBill, setMonthlyBill] = useState(250);
  const [kmPerYear, setKmPerYear] = useState(15000);
  const [kwp, setKwp] = useState(7.83);
  const [storageKwh, setStorageKwh] = useState(10);

  // Calculations
  const yearlyBill = monthlyBill * 12;
  const yearlySolarYield = kwp * 980; // kWh/year
  const evDemand = (kmPerYear / 100) * 18; // 18 kWh / 100km
  const autarkieDegree = Math.min(88, Math.round((yearlySolarYield / (yearlyBill * 2.5 + evDemand)) * 100));
  const savings25Years = Math.round(yearlyBill * 25 * 0.72 + (kmPerYear * 0.12 * 25));
  const paybackYears = Math.max(5.8, Number((14000 / (yearlyBill * 0.7 + (kmPerYear * 0.08))).toFixed(1)));

  return (
    <section id="autarkie" className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-[#030712] border border-amber-500/40 p-6 sm:p-10 rounded-3xl space-y-8 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-amber-400" />
              25-Jahre Ertrags &amp; Rendite Rechner
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
              Finanzielle Autarkie &amp; Amortisation
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
            0% MwSt. § 12 (3) UStG Befreit
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Sliders */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>Monatliche Stromkosten (ohne Solar):</span>
                <span className="text-amber-400 font-mono font-bold text-sm">{monthlyBill} € / Monat</span>
              </div>
              <input
                type="range"
                min="80"
                max="800"
                step="10"
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>E-Auto Fahrleistung pro Jahr:</span>
                <span className="text-amber-400 font-mono font-bold text-sm">{kmPerYear.toLocaleString()} km / Jahr</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="2500"
                value={kmPerYear}
                onChange={(e) => setKmPerYear(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>Carport PV-Leistung (kWp):</span>
                <span className="text-amber-400 font-mono font-bold text-sm">{kwp} kWp</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[4.35, 7.83, 12, 17.4].map((v) => (
                  <button
                    key={v}
                    onClick={() => setKwp(v)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold border transition ${
                      kwp === v
                        ? 'bg-amber-500 text-slate-950 border-amber-300'
                        : 'bg-slate-900 text-slate-300 border-slate-800'
                    }`}
                  >
                    {v} kWp
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>Batteriespeicher-Kapazität:</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">{storageKwh} kWh</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[0, 5, 10, 20].map((v) => (
                  <button
                    key={v}
                    onClick={() => setStorageKwh(v)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold border transition ${
                      storageKwh === v
                        ? 'bg-emerald-500 text-slate-950 border-emerald-300'
                        : 'bg-slate-900 text-slate-300 border-slate-800'
                    }`}
                  >
                    {v === 0 ? 'Ohne' : `${v} kWh`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-slate-900/90 border border-amber-500/40 rounded-2xl p-6 space-y-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Autarkiegrad</span>
                  <span className="text-3xl font-black font-mono text-emerald-400">{autarkieDegree}%</span>
                </div>
                <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Amortisationszeit</span>
                  <span className="text-3xl font-black font-mono text-amber-400">{paybackYears} Jahre</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-transparent p-5 rounded-xl border border-amber-500/30 space-y-1">
                <span className="text-xs text-slate-300 block font-medium">Geschätzte Ersparnis über 25 Jahre:</span>
                <span className="text-3xl font-black font-mono text-amber-300">
                  €{savings25Years.toLocaleString()}
                </span>
                <p className="text-[11px] text-slate-400 pt-1">
                  Inkl. Strompreissteigerung 3.5%/a &amp; E-Auto Eigenstrom-Ersparnis vs. Supercharger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
