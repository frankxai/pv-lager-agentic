'use client';

import React, { useState } from 'react';
import { Layers, ShieldCheck, Zap, Info, Sliders, BatteryCharging, ChevronRight } from 'lucide-react';

interface BatteryLayer {
  id: number;
  name: string;
  category: string;
  specs: { [key: string]: string };
  offsetDesktop: number;
  benefit: string;
  color: string;
  borderColor: string;
}

export function ExplodedBatteryView() {
  const [explosionProgress, setExplosionProgress] = useState(60);
  const [activeLayerId, setActiveLayerId] = useState<number>(3);

  const layers: BatteryLayer[] = [
    {
      id: 1,
      name: 'High-Voltage Battery Control Unit (BCU)',
      category: 'Steuerung & BMS',
      specs: { 'Spannungsbereich': '200 – 500 V DC', 'Schnittstellen': 'CAN / RS485 / Modbus', 'Schutzklasse': 'IP55' },
      offsetDesktop: -160,
      benefit: 'Intelligentes Einzelzellen-Balancing und direkte Ansteuerung des Hybrid-Wechselrichters.',
      color: 'from-amber-500/20 to-slate-900',
      borderColor: 'border-amber-400/50'
    },
    {
      id: 2,
      name: 'DC-Haupttrennschalter & Überspannungsschutz',
      category: 'Sicherheitselektronik',
      specs: { 'Schaltstrom': '63 A DC', 'Reaktionszeit': '< 10 ms', 'Norm': 'VDE-AR-E 2510-50' },
      offsetDesktop: -100,
      benefit: 'Allpolige physikalische Trennung im Störungsfall. Maximaler Brandschutz.',
      color: 'from-red-500/20 to-slate-900',
      borderColor: 'border-red-400/50'
    },
    {
      id: 3,
      name: '4× Modularer LiFePO4 Hochvolt-Zellblock (10.2 kWh)',
      category: 'Energiespeicher-Kern',
      specs: { 'Kapazität': '10.24 kWh', 'Zellchemie': 'Lithium-Eisenphosphat (LiFePO4)', 'Zyklenfestigkeit': '> 6.000 Zyklen' },
      offsetDesktop: -30,
      benefit: 'Kobaltfreie Zellen mit höchster thermischer Stabilität. Kein thermisches Durchgehen.',
      color: 'from-emerald-500/30 via-slate-900 to-indigo-950',
      borderColor: 'border-emerald-400/70'
    },
    {
      id: 4,
      name: 'Thermisches Aluminium-Ableitblech & Sensormatrix',
      category: 'Thermisches Management',
      specs: { 'Wärmeleitfähigkeit': '210 W/m·K', 'Temperatursensoren': '8x NTC integriert', 'Betriebsbereich': '-10 °C bis +50 °C' },
      offsetDesktop: 40,
      benefit: 'Gleichmäßige Wärmeabfuhr über den gesamten Zellstapel für maximale Lebensdauer.',
      color: 'from-slate-400/10 to-slate-200/20',
      borderColor: 'border-slate-300/40'
    },
    {
      id: 5,
      name: 'Vergoldete Hochstrom-Steckkontakte (Pluggable)',
      category: 'Verbindungstechnik',
      specs: { 'Übergangswiderstand': '< 0.5 mΩ', 'Montage': 'Kabellose Steckmontage', 'Nennstrom': '100 A' },
      offsetDesktop: 110,
      benefit: 'Modulare Erweiterbarkeit ohne externe Batteriekabel zwischen den Modulen.',
      color: 'from-amber-400/30 to-amber-700/40',
      borderColor: 'border-amber-400/60'
    },
    {
      id: 6,
      name: 'Pulverbeschichtetes Stahlblech-Standgehäuse',
      category: 'Gehäuse & Sockel',
      specs: { 'Material': '1.5 mm Stahlblech verzinkt', 'Lackierung': 'DB703 Feinstruktur', 'Bodenlast': '167 kg Gesamt' },
      offsetDesktop: 180,
      benefit: 'Robustes Standgehäuse für Aufstellung im Hausanschlussraum oder der Garage.',
      color: 'from-slate-800 to-slate-950',
      borderColor: 'border-slate-500/50'
    }
  ];

  const activeLayer = layers.find(l => l.id === activeLayerId) || layers[2];

  return (
    <div className="rounded-3xl bg-[#070A14] border border-white/15 p-6 sm:p-10 lg:p-14 space-y-10 shadow-2xl overflow-hidden relative">
      {/* Background Studio Light */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>Hardware Atelier · Speicher-Zerlegung</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            BYD Battery-Box Premium HVS 10.2
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Modulare Hochvolt-Architektur (LiFePO4). Analyse von BMS-Controller, Steckkontakten und Sicherheitsmatrix.
          </p>
        </div>

        {/* Scrub Slider */}
        <div className="bg-slate-900/90 border border-white/15 p-4 rounded-2xl space-y-2 min-w-[280px] shadow-xl backdrop-blur-md">
          <div className="flex justify-between text-xs text-slate-300 font-mono">
            <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
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
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>0% (Kompakt)</span>
            <span>50% (Schnitt)</span>
            <span>100% (Zerlegt)</span>
          </div>
        </div>
      </div>

      {/* Dissection Canvas */}
      <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
        <div className="lg:col-span-7 relative min-h-[460px] flex items-center justify-center p-4">
          <div
            className="relative w-full max-w-sm h-[360px] transition-transform duration-700 ease-out"
            style={{
              perspective: '1200px',
              transformStyle: 'preserve-3d',
              transform: 'rotateX(60deg) rotateZ(-25deg)'
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
                    transform: `translateZ(${currentOffset}px) translateY(${currentOffset * 0.25}px)`,
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className={`absolute inset-0 rounded-2xl border-2 ${layer.borderColor} bg-gradient-to-br ${layer.color} backdrop-blur-md cursor-pointer transition-all duration-300 shadow-2xl flex flex-col justify-between p-4 ${
                    isSelected ? 'ring-4 ring-emerald-400 ring-offset-2 ring-offset-slate-950 scale-105' : 'hover:scale-[1.02]'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-0.5 rounded bg-slate-950/90 text-emerald-300 text-[10px] font-mono font-bold border border-white/10">
                      Baugruppe 0{layer.id}
                    </span>
                    <span className="text-[10px] text-white/80 font-mono font-semibold">
                      {layer.category}
                    </span>
                  </div>

                  <div className="bg-slate-950/85 p-2.5 rounded-xl border border-white/10 flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate max-w-[200px]">
                      {layer.name}
                    </span>
                    <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
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
              <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
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
                  <span className="text-emerald-300 font-bold">{val}</span>
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
                      ? 'bg-emerald-400 text-slate-950 shadow-lg'
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
