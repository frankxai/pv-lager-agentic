'use client';

import React, { useState } from 'react';
import { Car, Zap, ArrowRight, ArrowLeft, CircleCheckBig, Sparkles, ShieldCheck } from 'lucide-react';

export function ConfiguratorV2() {
  const [step, setStep] = useState(1);
  const [carportType, setCarportType] = useState<'single' | 'double' | 'fleet' | 'terrasse'>('double');
  const [moduleCount, setModuleCount] = useState(18);
  const [storageType, setStorageType] = useState<'none' | '5kwh' | '10kwh' | '20kwh'>('10kwh');
  const [wallboxCount, setWallboxCount] = useState(1);

  // Calculations
  const kwp = Math.round(moduleCount * 0.435 * 100) / 100;
  const yearlyYield = Math.round(kwp * 980);

  let basePrice = 3490;
  if (carportType === 'single') basePrice = 2190;
  if (carportType === 'fleet') basePrice = 8900;
  if (carportType === 'terrasse') basePrice = 2890;

  const storagePrice = storageType === 'none' ? 0 : storageType === '5kwh' ? 2490 : storageType === '10kwh' ? 3890 : 6990;
  const wallboxPrice = wallboxCount * 890;
  const totalPrice = basePrice + moduleCount * 89 + storagePrice + wallboxPrice;

  return (
    <div id="configurator" className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-[#030712] border border-amber-500/40 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl">
        {/* Header */}
        <div className="bg-slate-900/90 border-b border-white/10 px-6 py-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-xl shadow-lg shadow-amber-500/30">
              {step}
            </div>
            <div>
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                Schritt {step} von 4 · Interaktiver ERP-Konfigurator
              </span>
              <h2 className="text-base font-bold text-white">
                {step === 1 && 'Bauform & Carport-Typ Wählen'}
                {step === 2 && 'Photovoltaik-Eindeckung & Module'}
                {step === 3 && 'Speicher & Wallbox Optionen'}
                {step === 4 && 'ERP Stückliste & Reservierung'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <button
                key={s}
                onClick={() => setStep(s)}
                className={`h-2.5 rounded-full transition-all ${
                  step === s ? 'bg-amber-500 w-12 shadow-lg shadow-amber-500/40' : 'bg-slate-800 w-7'
                }`}
                title={`Schritt ${s}`}
              />
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-6">
            {step === 1 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Car className="w-5 h-5 text-amber-400" />
                  Wählen Sie Ihren Verwendungszweck:
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div
                    onClick={() => {
                      setCarportType('single');
                      setModuleCount(10);
                    }}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all flex flex-col justify-between ${
                      carportType === 'single'
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-xl shadow-amber-500/20'
                        : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                      <img src="/images/pvlager/fab3ae_17ffab381467495d8997442cdc29cfe4.png" alt="Einzel-Carport" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-sm text-white block mb-1">Einzel-Carport (1 Stellplatz)</span>
                    <p className="text-xs text-slate-400 mb-3">Ideal für PKW oder SUV. Ca. 3,5m x 6m.</p>
                  </div>

                  <div
                    onClick={() => {
                      setCarportType('double');
                      setModuleCount(18);
                    }}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all flex flex-col justify-between ${
                      carportType === 'double'
                        ? 'bg-amber-500/10 border-amber-500 text-white shadow-xl shadow-amber-500/20'
                        : 'bg-slate-900/90 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="relative h-32 w-full rounded-xl overflow-hidden mb-3 border border-white/10">
                      <img src="/images/pvlager/fab3ae_08c181c1910c4e4d91466a56650493dd.png" alt="Doppel-Carport" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-bold text-sm text-white block mb-1">Doppel-Carport (2 Stellplätze)</span>
                    <p className="text-xs text-slate-400 mb-3">Der Bestseller für Familien &amp; 2 Fahrzeuge. Ca. 6m x 6m.</p>
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-amber-400" />
                  Bifaziale Trina Vertex S+ Glas-Glas PV-Module (440W):
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-semibold text-slate-200">
                    <span>Anzahl Module auf dem Carport-Dach:</span>
                    <span className="text-amber-400 font-mono font-bold text-sm">{moduleCount} Module ({kwp} kWp)</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="40"
                    step="2"
                    value={moduleCount}
                    onChange={(e) => setModuleCount(Number(e.target.value))}
                    className="w-full accent-amber-500 cursor-pointer"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-white">Batteriespeicher &amp; Ladestation (Wallbox)</h3>
                <div>
                  <label className="text-xs font-mono text-slate-300 block mb-2 font-semibold">BYD High-Voltage Speicher:</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: 'none', label: 'Ohne Speicher' },
                      { key: '5kwh', label: '5.1 kWh BYD HVS' },
                      { key: '10kwh', label: '10.2 kWh BYD HVS' },
                      { key: '20kwh', label: '19.3 kWh BYD HVS' },
                    ].map((st) => (
                      <button
                        key={st.key}
                        onClick={() => setStorageType(st.key as any)}
                        className={`p-3 rounded-xl border text-xs font-bold text-left transition ${
                          storageType === st.key ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300' : 'bg-slate-900 border-slate-800 text-slate-300'
                        }`}
                      >
                        {st.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-5">
                <h3 className="text-lg font-bold text-white">Bestätigung &amp; VIP Reservierung</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert('Vielen Dank! Ihre ERP-Stückliste wurde erfolgreich an den Vertrieb Seesen übermittelt.');
                  }}
                  className="space-y-4"
                >
                  <input
                    type="text"
                    required
                    placeholder="Ihr Name / Ansprechpartner"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                  />
                  <input
                    type="email"
                    required
                    placeholder="E-Mail Adresse"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Telefonnummer für Rückfragen"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm"
                  />
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl shadow-amber-500/25"
                  >
                    Unverbindlich Reservieren &amp; Stückliste Senden
                  </button>
                </form>
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <button
                disabled={step === 1}
                onClick={() => setStep((s) => Math.max(1, s - 1))}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 font-medium text-xs flex items-center gap-1.5 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück</span>
              </button>
              {step < 4 && (
                <button
                  onClick={() => setStep((s) => Math.min(4, s + 1))}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition"
                >
                  <span>Nächster Schritt</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right Summary Box */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-amber-500/30 rounded-2xl p-5 space-y-5 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" /> Real-Time ERP Stückliste (BOM)
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                  Live Kalkulation
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">PV-Gesamtleistung</span>
                  <span className="text-amber-400 font-bold font-mono text-sm">{kwp} kWp</span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Jahresertrag (ca.)</span>
                  <span className="text-emerald-400 font-bold font-mono text-sm">{yearlyYield.toLocaleString()} kWh/a</span>
                </div>
              </div>

              <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium">Geschätzter Komplettpreis:</span>
                  <span className="text-xl font-bold font-mono text-amber-400">€{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1 border-t border-amber-500/20">
                  <span>MwSt. Befreit:</span>
                  <span className="font-mono font-bold text-emerald-400">0% § 12 (3) UStG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
