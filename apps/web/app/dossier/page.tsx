'use client';

import React, { useState } from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import {
  FileCode2,
  CheckCircle2,
  AlertCircle,
  Download,
  Zap,
  Cpu,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  Sliders,
  Sun,
  Car,
  BatteryCharging
} from 'lucide-react';

export default function DossierPortalPage() {
  const [activeMode, setActiveMode] = useState<'interactive' | 'json'>('interactive');
  
  // Interactive Builder State
  const [location, setLocation] = useState('38723 Seesen');
  const [moduleCount, setModuleCount] = useState(32);
  const [hasCarport, setHasCarport] = useState(true);
  const [hasStorage, setHasStorage] = useState(true);
  const [wallboxPower, setWallboxPower] = useState(22);

  // Raw JSON State
  const [jsonInput, setJsonInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const calculatedKwp = ((moduleCount * 440) / 1000).toFixed(2);
  const calculatedYield = Math.round(Number(calculatedKwp) * 980);

  const getPayload = () => {
    if (activeMode === 'json' && jsonInput.trim()) {
      return JSON.parse(jsonInput);
    }
    return {
      dossierVersion: "1.0.0",
      generator: "Aurevia-Interactive-Dossier-Builder",
      timestamp: new Date().toISOString(),
      client: {
        estateType: "Privatanwesen / Villa",
        location: location || "38723 Seesen",
        snowLoadZone: "Zone 3 (Harz Vorland)",
        windLoadCategory: "Kategorie 2"
      },
      configuration: {
        systemType: hasCarport ? "Zola Pod Sovereign Double Carport" : "Dach-PV Aufdachanlage",
        totalCapacityKwp: Number(calculatedKwp),
        moduleCount: moduleCount,
        moduleModel: "Trina Vertex S+ 440W Bifazial Glas-Glas",
        structureType: "Heavy-Duty Aluminium 100x100mm Eloxiert",
        storageSystem: hasStorage ? "BYD Battery-Box Premium HVS 10.2 kWh" : null,
        wallboxCount: hasCarport ? 2 : 1,
        wallboxPowerKw: wallboxPower
      },
      projectedMetrics: {
        annualYieldKwh: calculatedYield,
        projectedAutarkyPercent: hasStorage ? 86 : 58,
        annualCo2SavingsKg: Math.round(calculatedYield * 0.48),
        vatRate: 0
      },
      verificationHash: `AUR-EST-${Date.now().toString(36).toUpperCase()}`
    };
  };

  const handleValidate = async () => {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const payload = getPayload();
      const res = await fetch('/api/dossier', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Validierung fehlgeschlagen.');
      }

      setResult(data);
    } catch (err: any) {
      setError(err?.message || 'Ungültiges Dossier-Format. Bitte Eingaben prüfen.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      <NavbarV2 />

      <main className="space-y-20 py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Header */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Aurevia AI Skill Protocol · Ingestion Portal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
            AI Estate Dossier Validierung
          </h1>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
            Generieren Sie Ihr Anwesens-Dossier interaktiv oder übermitteln Sie das JSON aus Ihrem <strong className="text-amber-300">ChatGPT</strong>, <strong className="text-cyan-300">Claude</strong> oder <strong className="text-emerald-300">Antigravity</strong> Assistenten.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10 mt-2">
            <button
              onClick={() => setActiveMode('interactive')}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center gap-2 ${
                activeMode === 'interactive'
                  ? 'bg-amber-400 text-slate-950 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>01. Interaktiver Konfigurator</span>
            </button>
            <button
              onClick={() => setActiveMode('json')}
              className={`px-5 py-2 rounded-xl text-xs font-mono font-bold transition flex items-center gap-2 ${
                activeMode === 'json'
                  ? 'bg-emerald-400 text-slate-950 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>02. Raw JSON Payload</span>
            </button>
          </div>
        </section>

        {/* Main Canvas */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Input Column */}
          <div className="lg:col-span-6 bg-[#070A14] border border-white/15 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl">
            {activeMode === 'interactive' ? (
              <div className="space-y-5">
                <div className="border-b border-white/10 pb-3">
                  <h3 className="font-bold text-lg text-white">Anwesens-Parameter festlegen</h3>
                  <span className="text-xs text-slate-400 font-mono">Live-Berechnung für Zentrallager Seesen</span>
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300">Standort / PLZ:</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-950 border border-white/10 rounded-xl p-3 text-xs font-mono text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                {/* Module Count Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-300">Solarmodule (Trina 440W):</span>
                    <span className="text-amber-400 font-bold">{moduleCount} Stk. ({calculatedKwp} kWp)</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="2"
                    value={moduleCount}
                    onChange={(e) => setModuleCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                {/* Hardware Toggles */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div
                    onClick={() => setHasCarport(!hasCarport)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                      hasCarport ? 'bg-amber-400/10 border-amber-400/50' : 'bg-slate-950 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Car className={`w-4 h-4 ${hasCarport ? 'text-amber-400' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold text-white">Solar-Carport</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono mt-2">Zola Pod 100x100mm</span>
                  </div>

                  <div
                    onClick={() => setHasStorage(!hasStorage)}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition flex flex-col justify-between ${
                      hasStorage ? 'bg-emerald-400/10 border-emerald-400/50' : 'bg-slate-950 border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <BatteryCharging className={`w-4 h-4 ${hasStorage ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span className="text-xs font-bold text-white">BYD Speicher</span>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono mt-2">10.2 kWh High-Voltage</span>
                  </div>
                </div>

                {/* Generated Preview */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 text-xs font-mono space-y-1">
                  <div className="flex justify-between text-slate-400">
                    <span>Erwarteter Jahresertrag:</span>
                    <span className="text-amber-300 font-bold">{calculatedYield.toLocaleString('de-DE')} kWh/a</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Autarkie-Quote:</span>
                    <span className="text-emerald-400 font-bold">{hasStorage ? '86 % (Sehr hoch)' : '58 % (Basis)'}</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="text-xs font-mono text-amber-400 uppercase font-bold">Dossier JSON Payload</span>
                  <button
                    onClick={() => setJsonInput(JSON.stringify(getPayload(), null, 2))}
                    className="text-[11px] font-mono text-slate-400 hover:text-amber-300 underline"
                  >
                    Aktuellen Stand als JSON einfügen
                  </button>
                </div>
                <textarea
                  rows={13}
                  value={jsonInput}
                  onChange={(e) => setJsonInput(e.target.value)}
                  placeholder="Fügen Sie hier Ihr JSON aus ChatGPT/Claude ein..."
                  className="w-full bg-slate-950/90 border border-white/10 rounded-2xl p-4 text-xs font-mono text-slate-200 focus:outline-none focus:border-amber-400/60 leading-relaxed"
                />
              </div>
            )}

            <button
              onClick={handleValidate}
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-xl transition flex items-center justify-center gap-2"
            >
              {loading ? (
                <span>Warenbestand & Statik werden geprüft...</span>
              ) : (
                <>
                  <Zap className="w-4 h-4 fill-current" />
                  <span>Dossier validieren & Waren-Reservierung abrufen</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Right Validation Result Column */}
          <div className="lg:col-span-6 space-y-6">
            {error && (
              <div className="p-6 rounded-3xl bg-red-950/40 border border-red-500/40 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-bold text-sm">
                  <AlertCircle className="w-5 h-5" />
                  <span>Validierungsfehler</span>
                </div>
                <p className="text-xs text-red-200 font-mono">{error}</p>
              </div>
            )}

            {result ? (
              <div className="bg-[#070A14] border border-emerald-500/40 p-8 rounded-3xl space-y-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-emerald-500/20 pb-4">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold block">
                      Status: {result.status}
                    </span>
                    <h3 className="text-xl font-bold text-white">Zuteilung erfolgreich verifiziert</h3>
                  </div>
                  <span className="px-3 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold">
                    {result.quoteId}
                  </span>
                </div>

                <div className="space-y-3 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Versand-Zentrallager:</span>
                    <span className="text-white font-bold">{result.warehouseDispatch}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Lieferzeit Spedition:</span>
                    <span className="text-amber-300 font-bold">{result.estimatedDeliveryDays}</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Reservierte Module:</span>
                    <span className="text-white font-bold">{result.allocation.modulesAllocated} Stk. Trina 440W</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-white/10 flex justify-between">
                    <span className="text-slate-400">Steuersatz (§12 UStG):</span>
                    <span className="text-emerald-400 font-bold">0 % MwSt. (Befreit)</span>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex justify-between text-sm">
                    <span className="text-white font-bold">Verbindlicher Richtpreis:</span>
                    <span className="text-amber-400 font-bold text-base">{result.financialSummary.totalEur.toLocaleString('de-DE')} €</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-1 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-300">
                    <Clock className="w-4 h-4" />
                    <span>Lagerware für 72 Stunden reserviert</span>
                  </div>
                  <p className="text-[11px]">
                    {result.nextStep.action}
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-[#070A14] border border-white/10 p-8 rounded-3xl space-y-6 shadow-xl text-center">
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="space-y-2 max-w-sm mx-auto">
                  <h3 className="text-lg font-bold text-white">Aurevia AI Skill nutzen</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Installieren Sie den Aurevia Solar Architect Skill in Ihrem bevorzugten AI-Modell, um Ihr Anwesen vollautomatisch zu berechnen.
                  </p>
                </div>
                <div className="pt-2 flex flex-col gap-2.5 max-w-xs mx-auto text-xs font-mono">
                  <a
                    href="/skills/aurevia-estate-architect.skill.md"
                    target="_blank"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-white/15 flex items-center justify-center gap-2 transition"
                  >
                    <Download className="w-4 h-4" />
                    <span>Skill Herunterladen (.md)</span>
                  </a>
                  <a
                    href="/skills/openapi-aurevia-planner.yaml"
                    target="_blank"
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-white/10 flex items-center justify-center gap-2 transition"
                  >
                    <Download className="w-4 h-4" />
                    <span>OpenAPI Action (.yaml)</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <MobileStickyBarV2 />
    </div>
  );
}
