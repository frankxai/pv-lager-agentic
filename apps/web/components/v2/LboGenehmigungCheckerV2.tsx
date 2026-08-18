'use client';

import React, { useState } from 'react';
import { Scale, CheckCircle2, AlertTriangle, FileText, Download, ShieldCheck, MapPin } from 'lucide-react';

interface StateRule {
  name: string;
  freeArea: number; // m²
  boundaryHeight: number; // m
  boundaryLength: number; // m
  ruleNote: string;
}

const STATE_RULES: Record<string, StateRule> = {
  niedersachsen: {
    name: 'Niedersachsen (NBauO)',
    freeArea: 30,
    boundaryHeight: 3.0,
    boundaryLength: 9.0,
    ruleNote: 'Carports bis 30 m² Grundfläche sind verfahrensfrei. An einer Grundstücksgrenze max. 9 m Länge und 3 m mittlere Wandhöhe.',
  },
  nrw: {
    name: 'Nordrhein-Westfalen (BauO NRW)',
    freeArea: 30,
    boundaryHeight: 3.0,
    boundaryLength: 9.0,
    ruleNote: 'Carports bis 30 m² Brutto-Grundfläche sind genehmigungsfrei. Grenzbebauung bis 9 m je Grenze zulässig.',
  },
  bayern: {
    name: 'Bayern (BayBO)',
    freeArea: 50,
    boundaryHeight: 3.0,
    boundaryLength: 9.0,
    ruleNote: 'Im Innenbereich bis zu 50 m² Grundfläche verfahrensfrei. Grenzbebauung max. 9 m je Grenze, Gesamtlänge aller Grenzen max. 15 m.',
  },
  bawue: {
    name: 'Baden-Württemberg (LBO BW)',
    freeArea: 30,
    boundaryHeight: 3.0,
    boundaryLength: 9.0,
    ruleNote: 'Im Innenbereich bis 30 m² Grundfläche verfahrensfrei. Bei Solardach-Eindeckung gelten zusätzliche Begünstigungen.',
  },
  hessen: {
    name: 'Hessen (HBO)',
    freeArea: 30,
    boundaryHeight: 3.0,
    boundaryLength: 9.0,
    ruleNote: 'Garagen und Carports bis 30 m² Grundfläche und 3 m Wandhöhe sind genehmigungsfrei.',
  },
};

export function LboGenehmigungCheckerV2() {
  const [selectedState, setSelectedState] = useState<string>('niedersachsen');
  const [plannedWidth, setPlannedWidth] = useState<number>(6.0);
  const [plannedLength, setPlannedLength] = useState<number>(6.0);
  const [isBoundary, setIsBoundary] = useState<boolean>(true);

  const currentRule = STATE_RULES[selectedState] || STATE_RULES.niedersachsen;
  const calculatedArea = Math.round(plannedWidth * plannedLength * 10) / 10;
  const isAreaFree = calculatedArea <= currentRule.freeArea;
  const isBoundaryOk = !isBoundary || plannedLength <= currentRule.boundaryLength;
  const isOverallFree = isAreaFree && isBoundaryOk;

  return (
    <section id="baurecht" className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#000000] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans uppercase text-amber-400 tracking-widest font-medium flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-400" />
              Deutsches Baurecht &amp; Landesbauordnung (LBO)
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Baugenehmigungs- &amp; Grenzbebauungs-Check
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-slate-300 border border-white/10 text-xs font-sans font-medium flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Aktualisiert nach LBO Stand 2026</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <label className="text-xs font-sans text-slate-300 block mb-2 font-medium">
                Ihr Bundesland auswählen:
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-5 py-3.5 rounded-full bg-slate-900 border border-white/10 text-white font-medium text-xs focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="niedersachsen">Niedersachsen (Harz / Region Hannover / Braunschweig)</option>
                <option value="nrw">Nordrhein-Westfalen (NRW)</option>
                <option value="bayern">Bayern (BayBO)</option>
                <option value="bawue">Baden-Württemberg</option>
                <option value="hessen">Hessen</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between text-xs font-sans mb-2 text-slate-200">
                  <span>Breite (m):</span>
                  <span className="text-amber-400 font-mono font-medium">{plannedWidth} m</span>
                </div>
                <input
                  type="range"
                  min="3.0"
                  max="10.0"
                  step="0.5"
                  value={plannedWidth}
                  onChange={(e) => setPlannedWidth(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-sans mb-2 text-slate-200">
                  <span>Länge / Tiefe (m):</span>
                  <span className="text-amber-400 font-mono font-medium">{plannedLength} m</span>
                </div>
                <input
                  type="range"
                  min="4.0"
                  max="12.0"
                  step="0.5"
                  value={plannedLength}
                  onChange={(e) => setPlannedLength(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-950/80 border border-white/10 text-xs text-slate-300">
              <input
                type="checkbox"
                id="boundaryCheck"
                checked={isBoundary}
                onChange={(e) => setIsBoundary(e.target.checked)}
                className="w-4 h-4 accent-amber-500 rounded cursor-pointer"
              />
              <label htmlFor="boundaryCheck" className="cursor-pointer">
                Carport steht direkt an der Grundstücksgrenze (Grenzbebauung max. 9 m)
              </label>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-white/10 text-xs text-slate-400 leading-relaxed space-y-1">
              <span className="font-semibold text-slate-300 block">{currentRule.name}:</span>
              <p>{currentRule.ruleNote}</p>
            </div>
          </div>

          {/* Assessment Result Box */}
          <div className="lg:col-span-6 space-y-4">
            <div
              className={`border rounded-3xl p-8 space-y-6 shadow-2xl backdrop-blur-2xl transition-all ${
                isOverallFree
                  ? 'bg-emerald-500/5 border-emerald-500/30'
                  : 'bg-amber-500/5 border-amber-500/30'
              }`}
            >
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                {isOverallFree ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                ) : (
                  <AlertTriangle className="w-8 h-8 text-amber-400 shrink-0" />
                )}
                <div>
                  <h4 className="font-bold text-lg text-white">
                    {isOverallFree ? 'Verfahrensfrei (Genehmigungsfrei)' : 'Bauvoranfrage / Genehmigung erforderlich'}
                  </h4>
                  <span className="text-xs text-slate-400 font-sans block">
                    Kalkulierte Grundfläche: <strong className="text-white font-mono">{calculatedArea} m²</strong> (Max. frei: {currentRule.freeArea} m²)
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs font-sans">
                <div className="flex justify-between items-center text-slate-300">
                  <span>Grundflächen-Prüfung:</span>
                  <span className={isAreaFree ? 'text-emerald-400 font-medium' : 'text-amber-400 font-medium'}>
                    {isAreaFree ? `✓ ${calculatedArea} m² ≤ ${currentRule.freeArea} m²` : `✗ ${calculatedArea} m² > ${currentRule.freeArea} m²`}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Grenzabstand &amp; Länge:</span>
                  <span className={isBoundaryOk ? 'text-emerald-400 font-medium' : 'text-amber-400 font-medium'}>
                    {isBoundaryOk ? `✓ Max. ${currentRule.boundaryLength} m eingehalten` : `✗ Grenzmaß überschritten`}
                  </span>
                </div>

                <div className="flex justify-between items-center text-slate-300">
                  <span>Statik &amp; Bauunterlagen:</span>
                  <span className="text-emerald-400 font-medium">✓ Vollständige Statik DIN EN 1991 inklusive</span>
                </div>
              </div>

              <button
                onClick={() => alert('Der Baurechts-Leitfaden für ' + currentRule.name + ' wird vorbereitet.')}
                className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-white/15 transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Leitfaden &amp; Bauvoranfrage-Checkliste (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
