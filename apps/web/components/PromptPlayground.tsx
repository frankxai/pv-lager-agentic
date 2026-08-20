'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, Check, Terminal, Camera, Sliders, Eye, ArrowRight } from 'lucide-react';

interface PromptPreset {
  id: string;
  name: string;
  architectureStyle: string;
  lightingSetup: string;
  cameraSettings: string;
  prompt: string;
  negativePrompt: string;
}

export function PromptPlayground() {
  const [activePresetId, setActivePresetId] = useState('preset-01');
  const [copied, setCopied] = useState(false);

  const presets: PromptPreset[] = [
    {
      id: 'preset-01',
      name: 'Minimalist Bauhaus Villa',
      architectureStyle: 'Modernist Bauhaus Flat-Roof Concrete',
      lightingSetup: 'Soft overcast Northern European afternoon light',
      cameraSettings: 'Hasselblad H6D-100c, 35mm lens, f/4.0, ISO 100',
      prompt:
        'Architectural photograph of a luxury minimalist Bauhaus residence with an integrated double solar carport made of heavy-duty black anodized aluminum 100x100mm beams. The canopy features semi-transparent bifacial glass-glass solar panels casting geometric soft shadows on a polished dark concrete driveway. Soft overcast Northern European afternoon light, shot on Hasselblad H6D-100c, 35mm lens, f/4.0, ultra-sharp realistic textures --ar 16:9 --v 6.1 --style raw',
      negativePrompt:
        'warped solar panels, broken grid, melting glass, oversaturated neon, cartoonish, low resolution, blurry render'
    },
    {
      id: 'preset-02',
      name: 'Harz Mountain Timber Estate',
      architectureStyle: 'Alpine Timber, Slate & Dark Anthracite Metal',
      lightingSetup: 'Crisp early winter dusk with glowing warm interior light',
      cameraSettings: 'Phase One IQ4 150MP, 45mm Schneider Kreuznach, f/5.6',
      prompt:
        'Elevated architectural dusk photograph of a modern timber and dark slate estate in the Harz mountains. An attached heavy-duty aluminum solar carport features all-black bifacial solar glass with warm amber interior lights glowing through floor-to-ceiling panoramic glass windows. Subtle snow dusting on surrounding pine trees, crisp 8k atmospheric clarity, cinematic architectural digest quality --ar 16:9 --v 6.1 --style raw',
      negativePrompt:
        'floating objects, unrealistic snow drift, deformed cars, crooked roof pillars, plastic look'
    },
    {
      id: 'preset-03',
      name: 'Industrial CAD Dissection Studio',
      architectureStyle: 'Technical Studio Exploded View',
      lightingSetup: 'Studio dark space with dual rim lighting',
      cameraSettings: 'Macro Studio Rig, 90mm f/8, ultra-high geometric precision',
      prompt:
        'Studio technical exploded CAD view of a modular aluminum solar carport structure floating in clean dark space with studio rim lighting. Individual layers separated vertically: 440W bifacial solar glass modules at top, EPDM sealing gaskets, rain gutter crossbeams, heavy-duty 100x100mm extruded structural posts, and stainless steel anchor bolts at bottom. Precision technical blueprint aesthetics, 8k resolution --ar 16:9 --v 6.1 --style raw',
      negativePrompt:
        'messy wiring, random floating debris, distorted text, illegible geometry, blur'
    }
  ];

  const active = presets.find((p) => p.id === activePresetId) || presets[0];

  const copyPrompt = () => {
    navigator.clipboard.writeText(active.prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="rounded-3xl bg-[#070A14] border border-white/15 p-6 sm:p-10 lg:p-14 space-y-8 shadow-2xl overflow-hidden relative">
      {/* Ambient Light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Visual Prompt Engine · Studio Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Fotorealistische Solar-Architektur generieren
          </h2>
          <p className="text-slate-400 text-sm mt-1 max-w-xl">
            Testen Sie unsere kuratierten SOTA-Prompts für Midjourney v6.1, FLUX.1 und NanoBanana direkt im Browser.
          </p>
        </div>

        {/* Preset Switcher */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-white/10">
          {presets.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePresetId(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition ${
                activePresetId === p.id
                  ? 'bg-amber-400 text-slate-950 shadow-lg'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Playground Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start relative z-10">
        {/* Left: Prompt Terminal Box */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex justify-between items-center text-xs font-mono">
            <span className="text-amber-400 font-bold uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              <span>Prompt Payload (Midjourney / FLUX)</span>
            </span>
            <button
              onClick={copyPrompt}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold border border-white/15 transition flex items-center gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Kopiert!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Prompt kopieren</span>
                </>
              )}
            </button>
          </div>

          <div className="p-5 rounded-2xl bg-slate-950/95 border border-white/10 text-xs font-mono text-slate-200 leading-relaxed min-h-[180px] selection:bg-amber-400 selection:text-slate-950">
            {active.prompt}
          </div>

          {/* Negative Prompt Block */}
          <div className="p-4 rounded-xl bg-slate-950/60 border border-white/10 space-y-1 text-xs font-mono">
            <span className="text-[10px] text-slate-500 uppercase block font-bold">Negative Prompt Filter:</span>
            <span className="text-slate-400 text-[11px] block">{active.negativePrompt}</span>
          </div>
        </div>

        {/* Right: Camera & Lighting Telemetry */}
        <div className="lg:col-span-5 bg-slate-900/90 border border-white/15 p-6 sm:p-8 rounded-3xl space-y-5 shadow-2xl backdrop-blur-md">
          <div className="space-y-1 border-b border-white/10 pb-4">
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold">
              Kamera & Licht-Setup
            </span>
            <h3 className="text-xl font-bold text-white">{active.name}</h3>
          </div>

          <div className="space-y-3 text-xs font-mono">
            <div className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-0.5">
              <span className="text-slate-400 text-[10px] block">Architektur-Stil:</span>
              <span className="text-white font-bold">{active.architectureStyle}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-0.5">
              <span className="text-slate-400 text-[10px] block">Licht-Charakteristik:</span>
              <span className="text-amber-300 font-bold">{active.lightingSetup}</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-white/10 space-y-0.5">
              <span className="text-slate-400 text-[10px] block">Kamera- & Optik-Werte:</span>
              <span className="text-emerald-300 font-bold">{active.cameraSettings}</span>
            </div>
          </div>

          <div className="pt-2">
            <a
              href="/shop"
              className="w-full py-3 rounded-xl bg-slate-950 hover:bg-slate-900 text-amber-300 font-bold text-xs border border-amber-400/30 transition flex items-center justify-center gap-1.5"
            >
              <span>Vollständiges Prompt-Paket im Shop ansehen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
