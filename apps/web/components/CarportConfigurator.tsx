'use client';

import React, { useState } from 'react';
import {
  Car,
  Zap,
  ShieldCheck,
  BatteryCharging,
  Cpu,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  FileText,
  DollarSign,
  Building2,
  Sun,
  Sparkles,
  ChevronRight,
  Send
} from 'lucide-react';

interface CarportConfiguratorProps {
  initialType?: string;
  onCompleteLead?: (dossier: any) => void;
}

export function CarportConfigurator({ initialType = 'double', onCompleteLead }: CarportConfiguratorProps) {
  // Configurator state
  const [step, setStep] = useState(1);
  const [carportType, setCarportType] = useState(initialType); // 'single', 'double', 'commercial', 'terrace'
  const [profileSystem, setProfileSystem] = useState('heavy-duty'); // 'heavy-duty' (100x100), 'standard' (80x80)
  const [panelWattage, setPanelWattage] = useState(435); // 435W, 450W, 500W
  const [panelCount, setPanelCount] = useState(carportType === 'single' ? 10 : carportType === 'double' ? 18 : carportType === 'terrace' ? 12 : 40);
  const [inverterChoice, setInverterChoice] = useState('hybrid-10kw'); // 'hybrid-5kw', 'hybrid-10kw', 'hybrid-20kw'

  // Upsells
  const [addBattery, setAddBattery] = useState(true);
  const [batteryCapacity, setBatteryCapacity] = useState(10); // 5, 10, 15 kWh
  const [addWallbox, setAddWallbox] = useState(true);
  const [wallboxType, setWallboxType] = useState('dual-11kw'); // 'single-11kw', 'dual-11kw'
  const [isLeasing, setIsLeasing] = useState(false);
  const [addMaintenance, setAddMaintenance] = useState(true);

  // Customer lead details
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadZip, setLeadZip] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Recalculate ERP & BOM data
  const totalPowerKwp = (panelCount * panelWattage) / 1000;
  const estimatedAnnualKwh = Math.round(totalPowerKwp * 980); // Average German solar yield factor ~980 kWh/kWp
  const co2SavingsTons = (estimatedAnnualKwh * 0.475 / 1000).toFixed(1);

  // Profile calculations
  const postProfilesNeeded = carportType === 'single' ? 4 : carportType === 'double' ? 6 : carportType === 'terrace' ? 4 : 12;
  const mainRafterProfiles = carportType === 'single' ? 3 : carportType === 'double' ? 5 : carportType === 'terrace' ? 4 : 10;
  const purlinProfiles = Math.ceil(panelCount / 2);
  const rainChannelMeters = carportType === 'single' ? 6 : carportType === 'double' ? 9 : carportType === 'terrace' ? 7 : 24;

  // Base pricing breakdown (samples from PV Lager ERP)
  const baseStructurePrice = carportType === 'single' ? 3200 : carportType === 'double' ? 5400 : carportType === 'terrace' ? 3800 : 14500;
  const panelsPrice = panelCount * 95; // €95 per bifacial glass-glass module
  const inverterPrice = inverterChoice === 'hybrid-5kw' ? 1100 : inverterChoice === 'hybrid-10kw' ? 1850 : 3100;
  const batteryPrice = addBattery ? (batteryCapacity === 5 ? 2100 : batteryCapacity === 10 ? 3600 : 5200) : 0;
  const wallboxPrice = addWallbox ? (wallboxType === 'single-11kw' ? 650 : 1250) : 0;
  const maintenancePrice = addMaintenance ? 190 : 0;

  const totalPriceWithoutVat = baseStructurePrice + panelsPrice + inverterPrice + batteryPrice + wallboxPrice + maintenancePrice;
  const monthlyLeasingRate = Math.round((totalPriceWithoutVat * 1.04) / 72); // 6-year leasing rate sample

  const handleNextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      leadName,
      leadEmail,
      leadPhone,
      leadZip,
      carportType,
      profileSystem,
      panelCount,
      totalPowerKwp,
      estimatedAnnualKwh,
      inverterChoice,
      upsells: {
        addBattery,
        batteryCapacity,
        addWallbox,
        wallboxType,
        isLeasing,
        addMaintenance
      },
      bom: {
        postProfilesNeeded,
        mainRafterProfiles,
        purlinProfiles,
        rainChannelMeters
      },
      totalPriceWithoutVat,
      monthlyLeasingRate,
      timestamp: new Date().toISOString()
    };

    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn('Backend endpoint logging:', err);
    }

    if (onCompleteLead) onCompleteLead(payload);
    setIsSubmitted(true);
  };

  return (
    <div id="configurator" className="w-full max-w-6xl mx-auto my-12 px-4 sm:px-6">
      {/* Configurator Container */}
      <div className="bg-[#0F172A] border border-amber-500/30 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-xl">
        {/* Step Indicator Top Bar */}
        <div className="bg-slate-900/90 border-b border-white/10 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center text-lg shadow-md">
              {step}
            </div>
            <div>
              <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest block font-bold">
                Schritt {step} von 5 · Interaktiver ERP-Konfigurator
              </span>
              <h2 className="text-sm font-bold text-white">
                {step === 1 && 'Bauform & Carport-Typ Wählen'}
                {step === 2 && 'Aluminium-Profilsystem & Belastbarkeit'}
                {step === 3 && 'Solarmodule & Ertragsberechnung'}
                {step === 4 && 'Wechselrichter, Speicher & Wallbox (Upsells)'}
                {step === 5 && 'Stückliste (BOM) & Qualifiziertes Angebot'}
              </h2>
            </div>
          </div>

          {/* Step Progress Pills */}
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <button
                key={i}
                onClick={() => setStep(i)}
                className={`w-7 h-2 rounded-full transition-all ${
                  step === i
                    ? 'bg-amber-500 w-10 shadow-md shadow-amber-500/30'
                    : step > i
                    ? 'bg-emerald-500'
                    : 'bg-slate-800'
                }`}
                title={`Schritt ${i}`}
              />
            ))}
          </div>
        </div>

        {/* Configurator Content Workspace */}
        <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Controls (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* STEP 1: CARPORT TYPE */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Car className="w-5 h-5 text-amber-400" />
                  Wählen Sie Ihren Verwendungszweck:
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      id: 'single',
                      title: 'Einzel-Carport (1 Stellplatz)',
                      desc: 'Ideal für PKW oder SUV. Ca. 3,5m x 6m.',
                      panels: 10,
                      kwp: '4.35 kWp'
                    },
                    {
                      id: 'double',
                      title: 'Doppel-Carport (2 Stellplätze)',
                      desc: 'Der Bestseller für Familien & 2 Fahrzeuge. Ca. 6m x 6m.',
                      panels: 18,
                      kwp: '7.83 kWp'
                    },
                    {
                      id: 'commercial',
                      title: 'Gewerbe & Fuhrpark (Multi-Bay)',
                      desc: 'Für Firmenparkplätze, Logistik & Flotten (ab 4 Stellplätzen).',
                      panels: 40,
                      kwp: '17.4 kWp'
                    },
                    {
                      id: 'terrace',
                      title: 'Solar-Terrassendach & Überdachung',
                      desc: 'Regendichte Überdachung für Terrasse oder Freifläche.',
                      panels: 12,
                      kwp: '5.22 kWp'
                    }
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setCarportType(item.id);
                        setPanelCount(item.panels);
                      }}
                      className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                        carportType === item.id
                          ? 'bg-amber-500/10 border-amber-500 text-white glow-amber'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm text-white">{item.title}</span>
                        {carportType === item.id && <CheckCircle className="w-5 h-5 text-amber-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mb-3">{item.desc}</p>
                      <span className="inline-block px-2.5 py-1 rounded-md bg-slate-800 text-amber-300 font-mono text-[11px]">
                        Empfohlen: ~{item.panels} Module ({item.kwp})
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: PROFILE SYSTEM */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-amber-400" />
                  Aluminium-Tragwerk & Unterkonstruktion:
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      id: 'heavy-duty',
                      title: 'Heavy-Duty Ultra-Alu 100x100mm (Empfohlen)',
                      specs: 'Statisch geprüft für Schneelastzone 3 & Windlastzone 4. Inkl. integrierter Smart-Regenrinne.',
                      benefit: 'Höchste Langlebigkeit, korrosionsfrei, 30 Jahre Garantie auf Profilstruktur.'
                    },
                    {
                      id: 'standard',
                      title: 'Standard Aluminium 80x80mm',
                      specs: 'Kompakte Leichtbauweise für normale Schneelastzonen 1-2.',
                      benefit: 'Wirtschaftliche Lösung für geschützte Lagen.'
                    }
                  ].map((item) => (
                    <div
                      key={item.id}
                      onClick={() => setProfileSystem(item.id)}
                      className={`p-5 rounded-2xl cursor-pointer border transition-all ${
                        profileSystem === item.id
                          ? 'bg-amber-500/10 border-amber-500 text-white glow-amber'
                          : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-bold text-sm text-white">{item.title}</span>
                        {profileSystem === item.id && <CheckCircle className="w-5 h-5 text-amber-400" />}
                      </div>
                      <p className="text-xs text-slate-300 mb-2">{item.specs}</p>
                      <p className="text-xs text-emerald-400 font-medium">✓ {item.benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: SOLAR MODULES */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Sun className="w-5 h-5 text-amber-400" />
                  Solarmodule & Belegungsanzahl:
                </h3>

                <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-2">
                      Anzahl Bifaziale Glas-Glas Module: <span className="text-amber-400 font-mono text-sm">{panelCount} Module</span>
                    </label>
                    <input
                      type="range"
                      min={6}
                      max={60}
                      value={panelCount}
                      onChange={(e) => setPanelCount(parseInt(e.target.value))}
                      className="w-full accent-amber-500 cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                      <span>6 Module (Kompakt)</span>
                      <span>18 Module (Standard)</span>
                      <span>60 Module (Gewerbe)</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-200 mb-2">Modul-Leistungsklasse:</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[435, 450, 500].map((w) => (
                        <button
                          key={w}
                          onClick={() => setPanelWattage(w)}
                          className={`p-3 rounded-xl text-xs font-bold border transition ${
                            panelWattage === w
                              ? 'bg-amber-500 text-slate-950 border-amber-400'
                              : 'bg-slate-800 text-slate-300 border-slate-700 hover:border-slate-600'
                          }`}
                        >
                          {w} Watt Bifazial
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                    <strong>Bifazial-Vorteil:</strong> Durch die Lichtdurchlässigkeit der Glas-Glas-Module strömt angenehmes Tageslicht unter das Carport, während die Unterseite reflektiertes Licht in bis zu 25% Extra-Strom umwandelt.
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: UPSELLS & ADD-ONS */}
            {step === 4 && (
              <div className="space-y-5 animate-fade-in">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-amber-400" />
                  Wechselrichter, Batteriespeicher & Smart Upsells:
                </h3>

                {/* Battery Storage Upsell */}
                <div className={`p-5 rounded-2xl border transition-all ${addBattery ? 'bg-emerald-500/10 border-emerald-500/50' : 'bg-slate-900/80 border-slate-800'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <BatteryCharging className="w-6 h-6 text-emerald-400" />
                      <div>
                        <h4 className="font-bold text-sm text-white">Zusätzlicher Stromspeicher (Smart Battery)</h4>
                        <p className="text-xs text-slate-400">Erhöht Eigenverbrauch von 35% auf bis zu 85%.</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={addBattery}
                      onChange={(e) => setAddBattery(e.target.checked)}
                      className="w-5 h-5 accent-emerald-500 cursor-pointer"
                    />
                  </div>

                  {addBattery && (
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {[5, 10, 15].map((cap) => (
                        <button
                          key={cap}
                          onClick={() => setBatteryCapacity(cap)}
                          className={`p-2.5 rounded-xl text-xs font-bold border transition ${
                            batteryCapacity === cap
                              ? 'bg-emerald-500 text-slate-950 border-emerald-400'
                              : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}
                        >
                          {cap} kWh Speicher
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Wallbox EV Charger Upsell */}
                <div className={`p-5 rounded-2xl border transition-all ${addWallbox ? 'bg-cyan-500/10 border-cyan-500/50' : 'bg-slate-900/80 border-slate-800'}`}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Zap className="w-6 h-6 text-cyan-400" />
                      <div>
                        <h4 className="font-bold text-sm text-white">EV Wallbox Ladestation (11kW / 22kW)</h4>
                        <p className="text-xs text-slate-400">Überschussladen direkt aus dem Solar-Carport.</p>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={addWallbox}
                      onChange={(e) => setAddWallbox(e.target.checked)}
                      className="w-5 h-5 accent-cyan-500 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Financing Option */}
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-sm text-amber-300">Optionale Leasing / Ratenzahlung</h4>
                    <p className="text-xs text-slate-400">Ab ca. €{monthlyLeasingRate}/Monat ohne Eigenkapital.</p>
                  </div>
                  <button
                    onClick={() => setIsLeasing(!isLeasing)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold border transition ${
                      isLeasing ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-300 border-slate-700'
                    }`}
                  >
                    {isLeasing ? '✓ Leasing Ausgewählt' : 'Leasing Anfragen'}
                  </button>
                </div>
              </div>
            )}

            {/* STEP 5: FINAL LEAD FORM */}
            {step === 5 && (
              <div className="space-y-5 animate-fade-in">
                {!isSubmitted ? (
                  <>
                    <div>
                      <h3 className="text-base font-bold text-white flex items-center gap-2">
                        <FileText className="w-5 h-5 text-amber-400" />
                        Kostenloses Angebot & Stückliste Anfordern:
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Ihre Konfiguration wird direkt an den Vertriebsleiter (Frank's Bruder) übermittelt. Sie erhalten ein individuelles Festpreisangebot inkl. Statiknachweis.
                      </p>
                    </div>

                    <form onSubmit={handleSubmitLead} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate-200 mb-1">Vor- & Nachname *</label>
                          <input
                            type="text"
                            required
                            value={leadName}
                            onChange={(e) => setLeadName(e.target.value)}
                            placeholder="Max Mustermann"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-200 mb-1">E-Mail-Adresse *</label>
                          <input
                            type="email"
                            required
                            value={leadEmail}
                            onChange={(e) => setLeadEmail(e.target.value)}
                            placeholder="name@domain.de"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-200 mb-1">Telefonnummer (für Rückfragen)</label>
                          <input
                            type="tel"
                            value={leadPhone}
                            onChange={(e) => setLeadPhone(e.target.value)}
                            placeholder="+49 170 1234567"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-200 mb-1">Postleitzahl (für Statikprüfung)</label>
                          <input
                            type="text"
                            required
                            value={leadZip}
                            onChange={(e) => setLeadZip(e.target.value)}
                            placeholder="38723 (z.B. Seesen)"
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/25 transition flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>Verbindliches Festpreisangebot & Reservoir-Reservierung Anfordern</span>
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="py-8 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Anfrage erfolgreich übermittelt!</h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Vielen Dank, <span className="text-amber-400 font-bold">{leadName}</span>! Ihre Konfiguration & ERP-Stückliste liegt unserem Vertriebsteam in Seesen vor.
                    </p>
                    <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-400 inline-block font-mono">
                      Referenz-ID: PVL-{Math.floor(100000 + Math.random() * 900000)} · Priorität: Hoch
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Navigation buttons */}
            <div className="flex justify-between items-center pt-4 border-t border-white/10">
              <button
                onClick={handlePrevStep}
                disabled={step === 1}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-300 font-medium text-xs flex items-center gap-1.5 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Zurück</span>
              </button>

              {step < 5 && (
                <button
                  onClick={handleNextStep}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition"
                >
                  <span>Nächster Schritt</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* ERP / BOM Live Preview Panel (Right 5 cols) */}
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

              {/* Key Specs Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">PV-Gesamtleistung</span>
                  <span className="text-amber-400 font-bold font-mono text-sm">{totalPowerKwp.toFixed(2)} kWp</span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">Jahresertrag (ca.)</span>
                  <span className="text-emerald-400 font-bold font-mono text-sm">{estimatedAnnualKwh.toLocaleString()} kWh/a</span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">CO2 Ersparnis</span>
                  <span className="text-cyan-400 font-bold font-mono text-sm">{co2SavingsTons} Tonnen/a</span>
                </div>
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">MwSt. Satz</span>
                  <span className="text-emerald-400 font-bold font-mono text-sm">0% (§12 (3) UStG)</span>
                </div>
              </div>

              {/* ERP Component Breakdown */}
              <div className="space-y-2 text-xs">
                <span className="text-slate-400 font-mono text-[11px] block font-semibold">Benötigte Hardware-Komponenten:</span>
                
                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Alu-Steher (100x100mm Heavy-Duty)</span>
                  <span className="font-mono font-semibold text-white">{postProfilesNeeded} Stk.</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Haupt-Sparren & Querträger</span>
                  <span className="font-mono font-semibold text-white">{mainRafterProfiles} Stk.</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Bifaziale Glas-Glas Module ({panelWattage}W)</span>
                  <span className="font-mono font-semibold text-amber-400">{panelCount} Stk.</span>
                </div>

                <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                  <span>Smart Regenrinne & Abflusskanal</span>
                  <span className="font-mono font-semibold text-white">{rainChannelMeters} Meter</span>
                </div>

                {addBattery && (
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                    <span>Smart Battery Speicher ({batteryCapacity} kWh)</span>
                    <span className="font-mono font-semibold text-emerald-400">1 Set</span>
                  </div>
                )}

                {addWallbox && (
                  <div className="flex justify-between py-1.5 border-b border-slate-800 text-slate-300">
                    <span>EV Wallbox Ladestation</span>
                    <span className="font-mono font-semibold text-cyan-400">1 Stk.</span>
                  </div>
                )}
              </div>

              {/* Price Calculation Summary */}
              <div className="bg-amber-500/10 p-4 rounded-xl border border-amber-500/30 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300 font-medium">Geschätzter Komplettpreis:</span>
                  <span className="text-xl font-bold font-mono text-amber-400">€{totalPriceWithoutVat.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center text-[11px] text-slate-400 pt-1 border-t border-amber-500/20">
                  <span>Oder mtl. Leasingrate (60-72 Monate):</span>
                  <span className="font-mono font-bold text-white">ab €{monthlyLeasingRate}/Monat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
