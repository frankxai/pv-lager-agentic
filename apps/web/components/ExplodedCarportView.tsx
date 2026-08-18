'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, Car, Sliders, Info, ChevronRight, Zap } from 'lucide-react';

interface CarportLayer {
  id: number;
  name: string;
  category: string;
  specs: { [key: string]: string };
  offsetDesktop: number;
  benefit: string;
  color: string;
  borderColor: string;
}

export function ExplodedCarportView() {
  const [explosionProgress, setExplosionProgress] = useState(65);
  const [activeLayerId, setActiveLayerId] = useState<number>(4);

  const layers: CarportLayer[] = [
    {
      id: 1,
      name: 'Bifaziale Glas-Glas Solardach-Eindeckung',
      category: 'Aktive Solareindeckung',
      specs: { 'Modul-Typ': 'Trina Vertex S+ 440W N-Type', 'Lichtdurchlässigkeit': '12 % Diffuslicht', 'Ertrag': 'Bis zu 14.000 kWh/a' },
      offsetDesktop: -180,
      benefit: 'Dient gleichzeitig als wasserdichtes Schutzdach und hocheffizientes Kraftwerk.',
      color: 'from-amber-500/20 via-slate-900 to-indigo-950',
      borderColor: 'border-amber-400/60'
    },
    {
      id: 2,
      name: 'EPDM Dichtungsmatrix & Klick-Klemmprofile',
      category: 'Dichtung & Entwässerung',
      specs: { 'Material': 'Witterungsbeständiges EPDM', 'Dichtheitsklasse': '100 % Schlagregendicht', 'UV-Stabilität': '30 Jahre' },
      offsetDesktop: -110,
      benefit: 'Unsichtbare Fugenabdichtung zwischen den Modulen ohne sichtbare Silikonnähte.',
      color: 'from-cyan-500/20 to-slate-900',
      borderColor: 'border-cyan-400/50'
    },
    {
      id: 3,
      name: 'Smart Rain Channeling Querträger mit Innenrinne',
      category: 'Wasserführung',
      specs: { 'Rinnenquerschnitt': '80 × 50 mm integriert', 'Ablaufleistung': '> 120 l/min', 'Frostbeständigkeit': '-30 °C bis +80 °C' },
      offsetDesktop: -40,
      benefit: 'Leitet Regenwasser verdeckt durch das Tragwerk in den Pfostenablauf ab.',
      color: 'from-slate-400/20 to-slate-900',
      borderColor: 'border-slate-300/40'
    },
    {
      id: 4,
      name: '100 × 100 mm Aluminium-Hauptträger (EN AW-6063 T6)',
      category: 'Haupt-Tragwerk',
      specs: { 'Profilquerschnitt': '100 × 100 × 4.0 mm', 'Eloxal-Schicht': '15–20 µm Qualanod', 'Schneelastzone': 'Zone 3 (Harz bis 5.4 kN/m²)' },
      offsetDesktop: 30,
      benefit: 'Torsionssteifes Struktur-Aluminium verzieht sich nie und rostet nicht.',
      color: 'from-amber-600/30 to-slate-900',
      borderColor: 'border-amber-400/70'
    },
    {
      id: 5,
      name: 'Heavy-Duty Stützen mit 22 kW Wallbox-Kabelkanal',
      category: 'Vertikal-Stützen & E-Mobility',
      specs: { 'Kabelkanal': 'Integrierter Schacht 40 mm', 'Wallbox-Aufnahme': 'Passend für ABL / Heidelberg', 'Stützenhöhe': '2.40 – 2.90 m' },
      offsetDesktop: 100,
      benefit: 'Saubere, kabellose Ästhetik für Elektrofahrzeug-Laden direkt am Stellplatz.',
      color: 'from-emerald-500/20 to-slate-900',
      borderColor: 'border-emerald-400/50'
    },
    {
      id: 6,
      name: 'Edelstahl-Bodenanker & Schwerlast-Fundamentsockel',
      category: 'Fundament-Anbindung',
      specs: { 'Verankerung': 'M16 Edelstahl A4 Bolzenanker', 'Zugfestigkeit': '> 45 kN pro Punkt', 'Fundament': 'Punktfundament 80 × 80 cm' },
      offsetDesktop: 170,
      benefit: 'Geprüfte Verankerung für Windlastzone 4 und orkanartige Stürme im Harzer Umland.',
      color: 'from-slate-800 to-slate-950',
      borderColor: 'border-slate-500/50'
    }
  ];

  const activeLayer = layers.find(l => l.id === activeLayerId) || layers[3];

  return (
    <div className="rounded-3xl bg-[#070A14] border border-white/15 p-6 sm:p-10 lg:p-14 space-y-10 shadow-2xl overflow-hidden relative">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Car className="w-3.5 h-3.5" />
            <span>Hardware Atelier · Carport-Zerlegung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Zola Pod Sovereign 100 × 100 mm
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Struktur-Aluminium Bausatz für 2 PKW. Vollständige Analyse von Rinnenführung, Modulklemmung und Statikankern.
          </p>
        </div>

        {/* Scrub Slider */}
        <div className="bg-slate-900/90 border border-white/15 p-4 rounded-2xl space-y-2 min-w-[280px] shadow-xl backdrop-blur-md">
          <div className="flex justify-between text-xs text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 font-semibold text-amber-300">
              <Sliders className="w-3.5 h-3.5" />
              <span>Explosions-Grad:</span>
            </span>
            <span className="font-bold text-white">{explosionProgress} %</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={explosionProgress}
            onChange={(e) => setExplosionProgress(Number(e.target.value))}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>0% (Montiert)</span>
            <span>50% (Schnitt)</span>
            <span>100% (Zerlegt)</span>
          </div>
        </div>
      </div>

      {/* Dissection Canvas */}
      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 relative min-h-[460px] flex items-center justify-center p-4">
          <div
            className="relative w-full max-w-md h-[360px] transition-transform duration-700 ease-out"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(55deg) rotateZ(-30deg)'
            }}
          >
            {layers.map((layer) => {
              const currentOffset = (layer.offsetDesktop * (explosionProgress / 100));
              const isSelected = activeLayerId === layer.id;

              return (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayerId(layer.id)}
                  style={{
                    transform: `translateZ(${currentOffset}px) translateY(${currentOffset * 0.3}px)`,
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className={`absolute inset-0 rounded-2xl border-2 ${layer.borderColor} bg-gradient-to-br ${layer.color} backdrop-blur-md cursor-pointer transition-all duration-300 shadow-2xl flex flex-col justify-between p-4 ${
                    isSelected ? 'ring-4 ring-amber-400 ring-offset-2 ring-offset-slate-950 scale-105' : 'hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded bg-slate-950/90 text-amber-300 text-[10px] font-mono font-bold border border-white/10">
                      Baugruppe 0{layer.id}
                    </span>
                    <span className="text-[10px] text-white/80 font-mono font-semibold">
                      {layer.category}
                    </span>
                  </div>

                  <div className="bg-slate-950/85 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate max-w-[220px]">
                      {layer.name}
                    </span>
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Inspector Panel */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-white/15 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                {activeLayer.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                Baugruppe 0{activeLayer.id} von 06
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white">
              {activeLayer.name}
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {activeLayer.benefit}
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wide block">
              Technische Kennwerte & Toleranzen:
            </span>
            <div className="grid grid-cols-1 gap-2">
              {Object.entries(activeLayer.specs).map(([key, val]) => (
                <div key={key} className="flex justify-between items-center p-2.5 rounded-xl bg-slate-950/80 border border-white/10 text-xs font-mono">
                  <span className="text-slate-400">{key}</span>
                  <span className="text-amber-300 font-bold">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t border-white/10">
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Baugruppe wählen:</span>
            <div className="grid grid-cols-6 gap-1.5">
              {layers.map((l) => (
                <button
                  key={l.id}
                  onClick={() => setActiveLayerId(l.id)}
                  className={`py-2 text-xs font-mono font-bold rounded-xl transition ${
                    activeLayerId === l.id
                      ? 'bg-amber-400 text-slate-950 shadow-lg'
                      : 'bg-slate-950 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  0{l.id}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
