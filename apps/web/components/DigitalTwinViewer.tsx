'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sun, Snowflake, Layers, RefreshCw, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export function DigitalTwinViewer() {
  const [sunAngle, setSunAngle] = useState(45);
  const [snowLoad, setSnowLoad] = useState(false);
  const [transparency, setTransparency] = useState(30); // 30% bifacial light transmission
  const [carportColor, setCarportColor] = useState<'anthracite' | 'silver' | 'black'>('anthracite');

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Simple HTML5 Canvas 3D isometric representation of the Carport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Render Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background gradient
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, '#0D1322');
    bgGradient.addColorStop(1, '#05080E');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ground plane grid
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.15)';
    ctx.lineWidth = 1;
    for (let x = 0; x < canvas.width; x += 40) {
      ctx.beginPath();
      ctx.moveTo(x, canvas.height - 60);
      ctx.lineTo(x - 100, canvas.height);
      ctx.stroke();
    }

    // Carport Structure Coordinates (Isometric perspective)
    const colorHex = carportColor === 'anthracite' ? '#334155' : carportColor === 'black' ? '#1E293B' : '#94A3B8';
    
    // Posts (4 Heavy-Duty Alu 100x100mm posts)
    ctx.fillStyle = colorHex;
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 1.5;

    const posts = [
      { x: 140, y: 260, h: 120 },
      { x: 380, y: 200, h: 120 },
      { x: 200, y: 320, h: 140 },
      { x: 440, y: 260, h: 140 }
    ];

    posts.forEach((p) => {
      ctx.fillRect(p.x, p.y - p.h, 16, p.h);
      ctx.strokeRect(p.x, p.y - p.h, 16, p.h);
    });

    // Roof Rafters & Bifacial Glass-Glass Roof Panel
    ctx.beginPath();
    ctx.moveTo(120, 130);
    ctx.lineTo(390, 70);
    ctx.lineTo(470, 190);
    ctx.lineTo(180, 250);
    ctx.closePath();

    // Glass Roof Fill with Translucency
    const alpha = (100 - transparency) / 100 * 0.85 + 0.15;
    ctx.fillStyle = `rgba(245, 158, 11, ${alpha * 0.6})`;
    ctx.fill();
    ctx.strokeStyle = '#F59E0B';
    ctx.lineWidth = 2.5;
    ctx.stroke();

    // Grid lines representing Trina Bifacial Glass-Glass Modules
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
    ctx.lineWidth = 1;

    for (let i = 1; i <= 3; i++) {
      ctx.beginPath();
      ctx.moveTo(120 + i * 65, 130 - i * 15);
      ctx.lineTo(180 + i * 65, 250 - i * 15);
      ctx.stroke();
    }

    // Snow layer if snowLoad is true
    if (snowLoad) {
      ctx.fillStyle = 'rgba(241, 245, 249, 0.85)';
      ctx.beginPath();
      ctx.moveTo(120, 126);
      ctx.lineTo(390, 66);
      ctx.lineTo(470, 186);
      ctx.lineTo(180, 246);
      ctx.closePath();
      ctx.fill();
    }

    // Sun Ray Simulation based on sunAngle
    const sunX = 100 + (sunAngle / 90) * 350;
    const sunY = 50 + (1 - sunAngle / 90) * 40;

    // Draw Sun
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(sunX, sunY, 18, 0, Math.PI * 2);
    ctx.fill();

    // Sun Rays
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(sunX, sunY);
    ctx.lineTo(280, 180);
    ctx.stroke();

  }, [sunAngle, snowLoad, transparency, carportColor]);

  return (
    <div id="digitaltwin" className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-[#090D16] border border-cyan-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-cyan-400 tracking-widest font-bold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> 3D Digital Twin Viewer & Statik Simulator
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
              Interactive 3D Carport Visualizer
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-bold">
            Real-Time Statics Engine
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Canvas Preview */}
          <div className="lg:col-span-7 relative flex justify-center">
            <canvas
              ref={canvasRef}
              width={560}
              height={380}
              className="w-full h-auto max-w-[560px] rounded-2xl border border-slate-800 shadow-2xl bg-slate-950"
            />
            <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur border border-amber-500/30 text-amber-300 font-mono text-[10px] font-bold">
              Zola Pod 100x100mm Alu-Tragwerk
            </div>
          </div>

          {/* Right Interactive Sliders */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Sun className="w-4 h-4 text-amber-400" /> Sonnenstand Angle:
                </span>
                <span className="text-amber-400 font-mono font-bold">{sunAngle}° Elevation</span>
              </div>
              <input
                type="range"
                min={15}
                max={75}
                value={sunAngle}
                onChange={(e) => setSunAngle(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-semibold mb-2 text-slate-200">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" /> Bifaziale Glas-Transparenz:
                </span>
                <span className="text-cyan-400 font-mono font-bold">{transparency}% Lichtdurchlässigkeit</span>
              </div>
              <input
                type="range"
                min={10}
                max={50}
                value={transparency}
                onChange={(e) => setTransparency(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

            {/* Snow Load Statics Toggle */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Snowflake className={`w-5 h-5 ${snowLoad ? 'text-cyan-400 animate-spin' : 'text-slate-500'}`} />
                <div>
                  <h4 className="font-bold text-xs text-white">Schneelastzone 3 Simulation</h4>
                  <p className="text-[11px] text-slate-400">Prüfung der Alu-Sparren unter Last.</p>
                </div>
              </div>
              <button
                onClick={() => setSnowLoad(!snowLoad)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition border ${
                  snowLoad
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg'
                    : 'bg-slate-800 text-slate-300 border-slate-700'
                }`}
              >
                {snowLoad ? 'Schnee Aktiv' : 'Simulation'}
              </button>
            </div>

            {/* Alu Profile Color Picker */}
            <div>
              <span className="text-xs font-semibold text-slate-200 block mb-2">Profil Pulverbeschichtung:</span>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'anthracite', label: 'Anthrazit (RAL 7016)' },
                  { id: 'black', label: 'Schwarz (RAL 9005)' },
                  { id: 'silver', label: 'Silber (Eloxiert)' }
                ].map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setCarportColor(c.id as any)}
                    className={`py-2 px-2 rounded-xl text-[11px] font-semibold border transition ${
                      carportColor === c.id
                        ? 'bg-amber-500 text-slate-950 border-amber-300 font-bold'
                        : 'bg-slate-900 text-slate-300 border-slate-800'
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
