'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Cpu, Sun, Snowflake, ShieldCheck, Layers, Zap } from 'lucide-react';

export function DigitalTwinViewerV2() {
  const [sunAngle, setSunAngle] = useState(45);
  const [snowLoad, setSnowLoad] = useState(1.5);
  const [carportType, setCarportType] = useState<'single' | 'double' | 'multibay'>('double');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const width = canvas.width;
      const height = canvas.height;
      const centerX = width / 2;
      const centerY = height / 2 + 20;

      // Ground plane grid lines
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.1)';
      ctx.lineWidth = 1;
      for (let i = -300; i <= 300; i += 35) {
        ctx.beginPath();
        ctx.moveTo(centerX + i, centerY + 80);
        ctx.lineTo(centerX + i * 0.45, centerY + 180);
        ctx.stroke();
      }

      // Aluminum Pillars
      const posts = carportType === 'single' ? [-80, 80] : carportType === 'double' ? [-140, 0, 140] : [-180, -60, 60, 180];
      ctx.fillStyle = '#334155';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 1.5;

      posts.forEach((x) => {
        ctx.beginPath();
        ctx.rect(centerX + x - 8, centerY - 60, 16, 140);
        ctx.fill();
        ctx.stroke();
      });

      // Roof Surface
      const roofWidth = carportType === 'single' ? 200 : carportType === 'double' ? 340 : 440;
      ctx.save();
      ctx.translate(centerX, centerY - 70);
      ctx.rotate((-5 * Math.PI) / 180);

      const gradient = ctx.createLinearGradient(-roofWidth / 2, 0, roofWidth / 2, 0);
      gradient.addColorStop(0, '#0F172A');
      gradient.addColorStop(0.5, '#1E293B');
      gradient.addColorStop(1, '#090D16');

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.rect(-roofWidth / 2, -15, roofWidth, 30);
      ctx.fill();
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Bifacial Sun Rays
      const sunRad = (sunAngle * Math.PI) / 180;
      const sunX = Math.cos(sunRad) * 220;
      const sunY = -Math.sin(sunRad) * 120;

      ctx.strokeStyle = 'rgba(251, 191, 36, 0.4)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(sunX, sunY);
      ctx.lineTo(0, -15);
      ctx.stroke();

      // Ground Reflection Ray
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.35)';
      ctx.beginPath();
      ctx.moveTo(0, 120);
      ctx.lineTo(0, 15);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.restore();

      // Sun Sphere
      const sunRadGlobal = (sunAngle * Math.PI) / 180;
      const globalSunX = centerX + Math.cos(sunRadGlobal) * 200;
      const globalSunY = centerY - 140 - Math.sin(sunRadGlobal) * 80;

      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(globalSunX, globalSunY, 12, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [sunAngle, snowLoad, carportType]);

  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#000000] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans uppercase text-amber-400 tracking-widest font-medium flex items-center gap-2">
              <Cpu className="w-4 h-4 text-amber-400" />
              Interaktive 3D Simulation
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              Digitale 3D Statik &amp; Bifazial-Licht Simulation
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-sans font-medium">
              Canvas 3D Engine Studio
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <label className="text-xs font-sans text-slate-300 block mb-2 font-medium">
                Carport Bauform auswählen:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setCarportType('single')}
                  className={`py-2.5 rounded-full text-xs font-sans font-medium border transition ${
                    carportType === 'single'
                      ? 'bg-amber-500 text-slate-950 border-amber-300'
                      : 'bg-slate-900 text-slate-300 border-slate-800'
                  }`}
                >
                  Einzel (1 PKW)
                </button>
                <button
                  onClick={() => setCarportType('double')}
                  className={`py-2.5 rounded-full text-xs font-sans font-medium border transition ${
                    carportType === 'double'
                      ? 'bg-amber-500 text-slate-950 border-amber-300'
                      : 'bg-slate-900 text-slate-300 border-slate-800'
                  }`}
                >
                  Doppel (2 PKW)
                </button>
                <button
                  onClick={() => setCarportType('multibay')}
                  className={`py-2.5 rounded-full text-xs font-sans font-medium border transition ${
                    carportType === 'multibay'
                      ? 'bg-amber-500 text-slate-950 border-amber-300'
                      : 'bg-slate-900 text-slate-300 border-slate-800'
                  }`}
                >
                  Fuhrpark (Multi)
                </button>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-sans mb-2 text-slate-200">
                <span>Sonnenstand / Einstrahlwinkel:</span>
                <span className="text-amber-400 font-mono font-medium">{sunAngle}° Elevation</span>
              </div>
              <input
                type="range"
                min="15"
                max="75"
                value={sunAngle}
                onChange={(e) => setSunAngle(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-xs font-sans mb-2 text-slate-200">
                <span>Statische Schneelast-Prüfung:</span>
                <span className="text-emerald-400 font-mono font-medium">{snowLoad} kN/m² (Schneelast 3)</span>
              </div>
              <input
                type="range"
                min="0.75"
                max="3.0"
                step="0.25"
                value={snowLoad}
                onChange={(e) => setSnowLoad(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Aluminium-Legierung:</span>
                <span className="font-mono font-medium text-white">6063-T6 Structural</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Bifaziale Rückseiten-Reflektion:</span>
                <span className="font-mono font-medium text-emerald-400">+25% Mehrertrag</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Statik Standard Harz:</span>
                <span className="font-mono font-medium text-amber-300">DIN EN 1991-1-3</span>
              </div>
            </div>
          </div>

          {/* 3D Render Canvas */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-slate-950/90 shadow-2xl p-2">
              <canvas ref={canvasRef} width={640} height={360} className="w-full h-auto rounded-2xl bg-[#07090F]" />
              <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-black/80 border border-white/10 text-xs font-sans text-slate-300">
                Live Studio Render · Zola Manor 3D Twin
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
