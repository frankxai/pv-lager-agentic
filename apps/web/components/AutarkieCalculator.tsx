'use client';

import React, { useState } from 'react';
import { TrendingUp, Zap, PiggyBank, ShieldCheck, Sun, Battery, ArrowRight, Sparkles } from 'lucide-react';

export function AutarkieCalculator() {
  const [monthlyBill, setMonthlyBill] = useState(250);
  const [annualEvKm, setAnnualEvKm] = useState(15000);
  const [batterySize, setBatterySize] = useState(10);
  const [carportKwp, setCarportKwp] = useState(7.83);

  // Calculations
  const annualBillNoSolar = monthlyBill * 12;
  const evKwhNeeded = (annualEvKm / 100) * 18; // 18 kWh / 100km
  const evGridCost = evKwhNeeded * 0.40; // 40 cent / kWh

  const annualSolarGeneration = Math.round(carportKwp * 980);
  const autarkieDegree = batterySize === 0 ? 45 : batterySize <= 5 ? 65 : batterySize <= 10 ? 82 : 92;
  
  const annualSavingsPower = (annualBillNoSolar * (autarkieDegree / 100));
  const annualSavingsEv = (evGridCost * (autarkieDegree / 100));
  const totalAnnualSavings = Math.round(annualSavingsPower + annualSavingsEv);
  const total25YearSavings = Math.round(totalAnnualSavings * 25 * 1.03); // 3% inflation assumption

  const estimatedSystemCost = Math.round(carportKwp * 1350 + (batterySize * 350));
  const paybackYears = (estimatedSystemCost / totalAnnualSavings).toFixed(1);
  const roi25Years = (((total25YearSavings - estimatedSystemCost) / estimatedSystemCost) * 100).toFixed(0);

  return (
    <div id="autarkie" className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="glass-gold-card p-6 sm:p-10 rounded-3xl space-y-8 border border-amber-500/40 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4" /> 25-Jahre Ertrags & Rendite Rechner
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
              Finanzielle Autarkie & Amortisation
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono font-bold">
            0% MwSt. § 12 (3) UStG Befreit
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Controls */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>Monatliche Stromkosten (ohne Solar):</span>
                <span className="text-amber-400 font-mono font-bold text-sm">{monthlyBill} € / Monat</span>
              </div>
              <input
                type="range"
                min={80}
                max={800}
                step={10}
                value={monthlyBill}
                onChange={(e) => setMonthlyBill(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>E-Auto Fahrleistung pro Jahr:</span>
                <span className="text-amber-400 font-mono font-bold text-sm">{annualEvKm.toLocaleString()} km / Jahr</span>
              </div>
              <input
                type="range"
                min={0}
                max={50000}
                step={2500}
                value={annualEvKm}
                onChange={(e) => setAnnualEvKm(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>Carport PV-Leistung (kWp):</span>
                <span className="text-amber-400 font-mono font-bold text-sm">{carportKwp.toFixed(2)} kWp</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[4.35, 7.83, 12.0, 17.4].map((kwp) => (
                  <button
                    key={kwp}
                    onClick={() => setCarportKwp(kwp)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold border transition ${
                      carportKwp === kwp
                        ? 'bg-amber-500 text-slate-950 border-amber-300'
                        : 'bg-slate-900 text-slate-300 border-slate-800'
                    }`}
                  >
                    {kwp} kWp
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span>Batteriespeicher-Kapazität:</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">{batterySize} kWh</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[0, 5, 10, 15].map((size) => (
                  <button
                    key={size}
                    onClick={() => setBatterySize(size)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold border transition ${
                      batterySize === size
                        ? 'bg-emerald-500 text-slate-950 border-emerald-300'
                        : 'bg-slate-900 text-slate-300 border-slate-800'
                    }`}
                  >
                    {size === 0 ? 'Ohne' : `${size} kWh`}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Live Results Cards */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-mono uppercase">Eigenversorgungs-Grad</span>
                <div className="text-2xl font-bold font-mono text-emerald-400">{autarkieDegree}% Autarkie</div>
                <span className="text-[10px] text-slate-500 block">Unabhängig vom Stromnetz</span>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-mono uppercase">Amortisationszeit</span>
                <div className="text-2xl font-bold font-mono text-amber-400">{paybackYears} Jahre</div>
                <span className="text-[10px] text-slate-500 block">Vollständige Gütertilgung</span>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-mono uppercase">Jährliche Ersparnis</span>
                <div className="text-2xl font-bold font-mono text-white">€{totalAnnualSavings.toLocaleString()} / Jahr</div>
                <span className="text-[10px] text-slate-500 block">Strom + E-Auto Laden</span>
              </div>

              <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] text-slate-400 font-mono uppercase">25-Jahre Gesamtrendite</span>
                <div className="text-2xl font-bold font-mono text-cyan-400">+{roi25Years}% ROI</div>
                <span className="text-[10px] text-slate-500 block">Kapitalzuwachs nach Kauf</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-950 to-emerald-500/15 border border-amber-500/40 flex justify-between items-center">
              <div>
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Geschätzter Netto-Gewinn (25 Jahre)</span>
                <span className="text-2xl font-black font-mono amber-gradient-text">€{total25YearSavings.toLocaleString()}</span>
              </div>

              <a
                href="#configurator"
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 shadow-lg transition"
              >
                <span>Jetzt Konfigurieren</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
