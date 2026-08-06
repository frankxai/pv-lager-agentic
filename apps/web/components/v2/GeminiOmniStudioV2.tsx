'use client';

import React, { useState } from 'react';
import { Camera, Sparkles, Cpu, CheckCircle2, RefreshCw } from 'lucide-react';

export function GeminiOmniStudioV2() {
  const [scanning, setScanning] = useState(false);
  const [analyzed, setAnalyzed] = useState(false);

  const startAnalysis = () => {
    setScanning(true);
    setAnalyzed(false);
    setTimeout(() => {
      setScanning(false);
      setAnalyzed(true);
    }, 1800);
  };

  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#000000] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans uppercase text-emerald-400 tracking-widest font-medium flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              Digitale Anwesens-Inspektion
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Kamera-Standortanalyse &amp; Schattenwurf
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-sans font-medium">
              Echtzeit KI-Vermessung
            </span>
          </div>
        </div>

        {/* Studio Content */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-xl text-white">Präzise Standort-Prüfung in Sekunden</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Kamera auf die Einfahrt oder Terrasse richten. Unsere Bildanalyse ermittelt Fundament-Anforderungen, Neigungswinkel und Einstrahlung direkt vor Ort.
              </p>
            </div>

            <button
              onClick={startAnalysis}
              disabled={scanning}
              className="w-full py-4 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 text-slate-950 font-semibold text-xs transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
            >
              {scanning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Analysiere Standort &amp; Schattenwurf...</span>
                </>
              ) : (
                <>
                  <Camera className="w-4 h-4" />
                  <span>Standort-Scan jetzt simulieren</span>
                </>
              )}
            </button>

            {/* Analysis Results Box */}
            {analyzed && (
              <div className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-3 font-sans text-xs animate-in fade-in">
                <div className="flex items-center justify-between text-emerald-400 font-medium border-b border-white/10 pb-2">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Ergebnis: Optimal geeignet für Solar-Carport
                  </span>
                  <span className="font-mono text-[11px] bg-emerald-500/20 px-2 py-0.5 rounded text-emerald-300">
                    Match 98.4%
                  </span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span>Erkannter Fundament-Typ:</span>
                    <strong className="text-white">Punktfundament (80x80cm)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Harz Schneelast-Einstufung:</span>
                    <strong className="text-amber-300 font-mono">Zone 3 (DIN EN 1991)</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Empfohlenes Carport-System:</span>
                    <strong className="text-emerald-400">Zola Manor Executive Carport</strong>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Visual Simulation Screen */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-950 shadow-2xl p-2">
              <div className="relative h-80 rounded-2xl overflow-hidden border border-white/10 bg-black">
                <img
                  src="/images/luxury-terrace.jpg"
                  alt="Spatial Vision Scan Preview"
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    scanning ? 'filter blur-sm contrast-125' : ''
                  }`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none"></div>

                {scanning && (
                  <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center space-y-2">
                      <Sparkles className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                      <span className="text-xs font-mono text-emerald-300 bg-black/80 px-3 py-1 rounded-full border border-emerald-500/30">
                        Vermesse Standort &amp; Neigung...
                      </span>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-white/10 text-xs font-sans text-slate-300">
                  Live Standort-Inspektion
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
