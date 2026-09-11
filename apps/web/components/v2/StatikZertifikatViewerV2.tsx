'use client';

import React, { useState } from 'react';
import { ShieldCheck, Snowflake, Wind, Award, Check, X, FileText, Download } from 'lucide-react';

export function StatikZertifikatViewerV2() {
  const [activeTab, setActiveTab] = useState<'schnee' | 'wind' | 'werkstoff'>('schnee');

  return (
    <section id="statik" className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#000000] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans uppercase text-amber-400 tracking-widest font-medium flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Deutsche Ingenieurskunst &amp; DIN-Normen
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Statische Zertifizierung nach DIN EN 1991
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-300 border border-amber-500/20 text-xs font-sans font-medium">
            Zertifiziert für Harzer Schneelastzone 3
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-3 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('schnee')}
            className={`px-5 py-2.5 rounded-full text-xs font-medium transition ${
              activeTab === 'schnee'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            Schneelastzone 3 (3.0 kN/m²)
          </button>
          <button
            onClick={() => setActiveTab('wind')}
            className={`px-5 py-2.5 rounded-full text-xs font-medium transition ${
              activeTab === 'wind'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            Windlastzone 2 &amp; 3 (Orkanfest)
          </button>
          <button
            onClick={() => setActiveTab('werkstoff')}
            className={`px-5 py-2.5 rounded-full text-xs font-medium transition ${
              activeTab === 'werkstoff'
                ? 'bg-amber-500 text-slate-950 font-semibold'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            Werkstoffvergleich (Alu vs. Holz &amp; Stahl)
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'schnee' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs text-amber-300 font-medium">
                <Snowflake className="w-4 h-4 text-cyan-400" />
                <span>DIN EN 1991-1-3 / NA Deutschland</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Extremlasten bis zu 300 kg/m² Nassschnee im Harz
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Der Harz gehört zu den schneereichsten Regionen Deutschlands. Standard-Baumarkt-Carports kollabieren unter schweren Schneelasten. Unsere PV Lager 100x100mm Alu-Tragwerke halten einer Dauerlast von bis zu 3.0 kN/m² stand.
              </p>
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Prüflast Schneelast 3:</span>
                  <strong className="text-white font-mono">3.0 kN/m² (ca. 306 kg/m²)</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Glas-Glas Modul Bruchlast:</span>
                  <strong className="text-emerald-400 font-mono">5.400 Pa Druckbelastung</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Statischer Nachweis:</span>
                  <strong className="text-amber-300 font-mono">Prüffähige Typenstatik inklusive</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-white/10 rounded-3xl p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
                <Snowflake className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-white text-base">Typenstatik PDF Nachweis</h4>
              <p className="text-xs text-slate-400">
                Laden Sie den vollständigen statischen Berechnungsbericht für Bauamt und Gebäudeversicherung herunter.
              </p>
              <button
                onClick={() => alert('Statiknachweis PDF wird heruntergeladen.')}
                className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-white/10 transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Statiknachweis DIN EN 1991 (PDF)</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'wind' && (
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs text-amber-300 font-medium">
                <Wind className="w-4 h-4 text-amber-400" />
                <span>DIN EN 1991-1-4 Windlasteinwirkungen</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white">
                Orkansicher bis Windstärke 12 (130 km/h)
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Durch computerberechnete Windsog-Klammern und biegesteife Eckverbinder aus Edelstahl bleibt die Solar-Dacheindeckung selbst bei extremen Herbststürmen fest im Profil verankert.
              </p>
              <div className="p-5 rounded-2xl bg-slate-950 border border-white/10 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Windsog-Sicherheit:</span>
                  <strong className="text-emerald-400 font-mono">2.400 Pa Sogwiderstand</strong>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Fundament-Verankerung:</span>
                  <strong className="text-white font-mono">Schwerlastanker M16 Edelstahl A4</strong>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-950 border border-white/10 rounded-3xl p-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
                <Wind className="w-8 h-8" />
              </div>
              <h4 className="font-bold text-white text-base">Windlast-Zertifikat</h4>
              <p className="text-xs text-slate-400">
                Geprüft für Binnenland, Hügelland und Küstennähe nach Eurocode 1.
              </p>
              <button
                onClick={() => alert('Windlast-Zertifikat wird heruntergeladen.')}
                className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-white/10 transition flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Windlastzertifikat herunterladen</span>
              </button>
            </div>
          </div>
        )}

        {activeTab === 'werkstoff' && (
          <div className="space-y-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-sans">
                <thead>
                  <tr className="border-b border-white/10 text-slate-400">
                    <th className="py-3 px-4 font-semibold">Eigenschaft</th>
                    <th className="py-3 px-4 text-amber-300 font-bold">PV Lager 6063-T6 Aluminium</th>
                    <th className="py-3 px-4 text-slate-400">Leimholz (BSH / KVH)</th>
                    <th className="py-3 px-4 text-slate-400">Stahl verzinkt</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">Witterungsbeständigkeit</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">100% korrosionsfrei</td>
                    <td className="py-3.5 px-4 text-red-400">Fäulnis / Verzug bei Nässe</td>
                    <td className="py-3.5 px-4 text-amber-400">Rostgefahr an Schnittkanten</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">Pflegeaufwand</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">0 € / Wartungsfrei</td>
                    <td className="py-3.5 px-4 text-red-400">Anstrich alle 2–3 Jahre</td>
                    <td className="py-3.5 px-4 text-slate-400">Gering</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">Garantie</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">30 Jahre Werksgarantie</td>
                    <td className="py-3.5 px-4 text-slate-400">5–10 Jahre</td>
                    <td className="py-3.5 px-4 text-slate-400">10 Jahre</td>
                  </tr>
                  <tr>
                    <td className="py-3.5 px-4 font-medium text-white">Integrierte Kabelführung</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-semibold">Vollständig unsichtbar im Profil</td>
                    <td className="py-3.5 px-4 text-red-400">Sichtbare Aufputz-Kanäle</td>
                    <td className="py-3.5 px-4 text-amber-400">Teilweise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
