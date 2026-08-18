'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, Sun, Zap, Info, ChevronRight, Sliders, RotateCw } from 'lucide-react';

interface LayerData {
  id: number;
  name: string;
  category: string;
  thickness: string;
  material: string;
  benefit: string;
  specs: { [key: string]: string };
  offsetDesktop: number;
  color: string;
  borderColor: string;
}

export function ExplodedModuleView() {
  const [explosionProgress, setExplosionProgress] = useState(65);
  const [activeLayerId, setActiveLayerId] = useState<number>(3);
  const [rotationX, setRotationX] = useState(55);
  const [rotationZ, setRotationZ] = useState(-30);
  const [autoRotate, setAutoRotate] = useState(false);

  const layers: LayerData[] = [
    {
      id: 1,
      name: '1.6 mm Antireflex-Solarglas (Front)',
      category: 'Front-Verglasung',
      thickness: '1.6 mm',
      material: 'Thermisch vorgespanntes Weißglas mit ARC-Nanobeschichtung',
      benefit: 'Minimiert Reflexionsverluste, zertifiziert für Hagelkorngröße bis 35 mm (HW4).',
      specs: { 'Transmission': '94.8 %', 'Hagelschutz': 'HW4 (35 mm)', 'Schneelast': '5.400 Pa' },
      offsetDesktop: -180,
      color: 'from-cyan-500/20 to-blue-500/30',
      borderColor: 'border-cyan-400/50'
    },
    {
      id: 2,
      name: 'POE/EVA Vernetzungsmatrix (Vorderseite)',
      category: 'Kapselung',
      thickness: '0.5 mm',
      material: 'Polyolefin-Elastomer (POE)',
      benefit: 'Verhindert Feuchtigkeits- und PID-Degradation, garantiert 30 Jahre Langlebigkeit.',
      specs: { 'UV-Cutoff': '< 300 nm', 'Vernetzung': '> 85 %', 'PID-Resistenz': 'IEC TS 62804-1' },
      offsetDesktop: -120,
      color: 'from-slate-400/10 to-slate-200/20',
      borderColor: 'border-slate-300/40'
    },
    {
      id: 3,
      name: '144 N-Type i-TOPCon Solarzellen-Matrix',
      category: 'Aktiver Photovoltaik-Kern',
      thickness: '140 µm',
      material: 'Monokristalline N-Type 210R Wafer mit Super Multi-Busbar (SMBB)',
      benefit: '22.0 % Modulwirkungsgrad. Null lichtinduzierte Degradation (Zero LID).',
      specs: { 'Zellwirkungsgrad': '25.3 %', 'Temperaturkoeffizient': '-0.30 %/°C', 'Bifazialitätsfaktor': '80 ± 5 %' },
      offsetDesktop: -60,
      color: 'from-amber-500/30 via-slate-900 to-indigo-950',
      borderColor: 'border-amber-400/70'
    },
    {
      id: 4,
      name: 'Transparente POE-Kapselungsmatrix (Rückseite)',
      category: 'Kapselung',
      thickness: '0.5 mm',
      material: 'Hochtransparenter POE-Film für bifaziale Lichttransmission',
      benefit: 'Ermöglicht bis zu 25 % Mehrertrag durch reflektiertes Albedo-Licht von unten.',
      specs: { 'Transparenz': '92.5 %', 'Haftfestigkeit': '> 70 N/cm', 'Volumenwiderstand': '1.0×10¹⁵ Ω·cm' },
      offsetDesktop: 0,
      color: 'from-slate-400/10 to-slate-200/20',
      borderColor: 'border-slate-300/40'
    },
    {
      id: 5,
      name: '1.6 mm Verstärktes Trägerglas (Rückseite)',
      category: 'Rückseiten-Schutz',
      thickness: '1.6 mm',
      material: 'Thermisch gehärtetes Glas mit Keramik-Randversiegelung',
      benefit: 'Feuerbeständigkeit Klasse A, verhindert Mikrorisse unter schweren Harzer Schneelasten.',
      specs: { 'Brandschutz': 'Klasse A (IEC 61730)', 'Druckbelastung': '5.400 Pa', 'Windlast': '2.400 Pa' },
      offsetDesktop: 60,
      color: 'from-cyan-500/20 to-blue-500/30',
      borderColor: 'border-cyan-400/50'
    },
    {
      id: 6,
      name: '30 mm Eloxiertes Aluminium-Hohlkammerprofil',
      category: 'Struktur-Rahmen',
      thickness: '30 mm',
      material: 'Extrudiertes Struktur-Aluminium EN AW-6063 T6 (Schwarz eloxiert)',
      benefit: 'Integrierte Wasserablauf- und Erdungsbohrungen, torsionssteife Eckverpressung.',
      specs: { 'Legierung': 'EN AW-6063 T6', 'Eloxalschicht': '15 µm', 'Garantie': '30 Jahre Statik' },
      offsetDesktop: 120,
      color: 'from-amber-600/30 via-slate-800 to-amber-900/40',
      borderColor: 'border-amber-500/60'
    },
    {
      id: 7,
      name: '3-Teilige IP68 Split-Anschlussdose & Dioden',
      category: 'Leistungselektronik',
      thickness: 'Compact',
      material: 'Wasserdicht vergossenes Polycarbonat mit Schottky-Bypass-Dioden',
      benefit: 'Minimiert Verschattungsverluste und Hitzeentwicklung im Hotspot-Fall.',
      specs: { 'Schutzklasse': 'IP68 (Dauerhaft wasserdicht)', 'Stecker': 'Stäubli MC4-EVO2', 'Kabelquerschnitt': '4 mm² Solarflex' },
      offsetDesktop: 180,
      color: 'from-emerald-500/20 to-slate-900',
      borderColor: 'border-emerald-400/50'
    }
  ];

  const activeLayer = layers.find(l => l.id === activeLayerId) || layers[2];

  return (
    <div className="rounded-3xl bg-[#070A14] border border-white/15 p-6 sm:p-10 lg:p-14 space-y-10 shadow-2xl overflow-hidden relative">
      {/* Background Studio Light Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Hardware Atelier · Explosions-Analyse</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Trina Vertex S+ 440W Bifazial
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Interaktive Schichten-Zerlegung des N-Type Doppelglas-Moduls. 3D Orbit-Steuerung und Toleranz-Prüfung.
          </p>
        </div>

        {/* Multi-Control Suite */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Explosion Scrub Slider */}
          <div className="bg-slate-900/90 border border-white/15 p-3.5 rounded-2xl space-y-2 min-w-[240px] shadow-xl backdrop-blur-md">
            <div className="flex justify-between text-xs text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 font-semibold text-amber-300">
                <Sliders className="w-3.5 h-3.5" />
                <span>Explosion:</span>
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
          </div>

          {/* 3D Orbit Controls */}
          <div className="bg-slate-900/90 border border-white/15 p-3.5 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-md text-xs font-mono">
            <button
              onClick={() => {
                setRotationX(rotationX === 55 ? 35 : 55);
                setRotationZ(rotationZ === -30 ? 15 : -30);
              }}
              className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold flex items-center gap-1.5 transition"
              title="3D Ansicht wechseln"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>3D Orbit</span>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive 3D Dissection Canvas */}
      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Visual Exploded Stage */}
        <div className="lg:col-span-7 relative min-h-[460px] flex items-center justify-center p-4">
          <div
            className="relative w-full max-w-md h-[380px] transition-transform duration-700 ease-out"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              transform: `rotateX(${rotationX}deg) rotateZ(${rotationZ}deg)`
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
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease'
                  }}
                  className={`absolute inset-0 rounded-2xl border-2 ${layer.borderColor} bg-gradient-to-br ${layer.color} backdrop-blur-md cursor-pointer transition-all duration-300 shadow-2xl flex flex-col justify-between p-4 ${
                    isSelected ? 'ring-4 ring-amber-400 ring-offset-2 ring-offset-slate-950 scale-105 shadow-amber-500/30' : 'hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded bg-slate-950/90 text-amber-300 text-[10px] font-mono font-bold border border-white/10">
                      Schicht 0{layer.id}
                    </span>
                    <span className="text-[10px] text-white/80 font-mono font-semibold">
                      {layer.thickness}
                    </span>
                  </div>

                  {layer.id === 3 && (
                    <div className="grid grid-cols-6 grid-rows-4 gap-1 p-2 bg-slate-950/60 rounded-xl border border-amber-400/40 my-auto">
                      {Array.from({ length: 24 }).map((_, idx) => (
                        <div key={idx} className="h-4 rounded bg-blue-950/80 border border-blue-400/40 relative overflow-hidden">
                          <div className="absolute inset-x-0 top-1/2 h-[0.5px] bg-amber-400/70" />
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="bg-slate-950/85 p-2 rounded-xl border border-white/10 flex items-center justify-between">
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

        {/* Right Detail Inspector Panel */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-white/15 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-2 border-b border-white/10 pb-4">
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold tracking-wider">
                {activeLayer.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 text-xs font-mono">
                Schicht 0{activeLayer.id} von 07
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
            <span className="text-[10px] font-mono text-slate-500 uppercase block">Schicht auswählen:</span>
            <div className="grid grid-cols-4 sm:grid-cols-7 gap-1.5">
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

          <div className="pt-2">
            <a
              href="/atelier"
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-xl transition flex items-center justify-center gap-2"
            >
              <span>Vollständiges Datenblatt im Atelier ansehen</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
