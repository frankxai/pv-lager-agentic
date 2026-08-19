'use client';

import React, { useState } from 'react';
import { NavbarV2 } from '@/components/NavbarV2';
import { MobileStickyBarV2 } from '@/components/MobileStickyBarV2';
import { ProductCard } from '@/components/ProductCard';
import { DIGITAL_PRODUCTS, DigitalProduct } from '@/lib/digital-products';
import {
  Sparkles,
  Cpu,
  Download,
  ShieldCheck,
  Zap,
  Code,
  Terminal,
  Layers,
  ArrowRight,
  HelpCircle,
  FileCheck2,
  Lock
} from 'lucide-react';

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Alle Produkte (5)' },
    { id: 'ai-skills', label: 'AI Skills & System Prompts' },
    { id: 'prompt-packs', label: 'Visual Prompt Engines' },
    { id: 'engineering-software', label: 'BOM & CAD Software' },
    { id: 'swarms', label: 'Multi-Agenten Schwärme' },
    { id: 'enterprise', label: 'Enterprise & White-Label' }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? DIGITAL_PRODUCTS
    : DIGITAL_PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#04060C] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-24 lg:pb-12 relative overflow-x-hidden">
      <NavbarV2 />

      <main className="space-y-20 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Shop Hero */}
        <section className="relative rounded-3xl overflow-hidden bg-[#070A14] border border-white/15 p-8 sm:p-14 space-y-8 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono font-semibold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>Aurevia Digital Forge · Autonomous Solar Intelligence</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              AI Skills, Prompt-Packs &{' '}
              <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-emerald-400 bg-clip-text text-transparent italic">
                Engineering-Software.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Befähigen Sie Ihre AI-Assistenten mit erprobter deutscher Solaringenieurskunst. Von installierbaren Claude Code & ChatGPT Skills über fotorealistische Prompt-Matrizen bis hin zu parametrischen BOM-Schnittplänen.
            </p>
          </div>

          {/* Value Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs font-mono relative z-10">
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">Auslieferung:</span>
              <span className="text-emerald-400 font-bold text-sm">Sofort-Download</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">Kompatibilität:</span>
              <span className="text-amber-400 font-bold text-sm">Claude, GPT, Antigravity</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">Lizenzrecht:</span>
              <span className="text-white font-bold text-sm">Kommerziell nutzbar</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-950/80 border border-white/10">
              <span className="text-slate-400 block">Deutscher Standard:</span>
              <span className="text-amber-400 font-bold text-sm">DIN EN 1991 / 1090</span>
            </div>
          </div>
        </section>

        {/* Category Navigation Bar */}
        <section className="space-y-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-mono font-bold whitespace-nowrap transition flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-amber-400 text-slate-950 shadow-lg'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white border border-white/10 hover:border-white/25'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* ZERO LEGAL HEADACHES & SOVEREIGN CREATOR TERMS */}
        <section className="rounded-3xl bg-[#070A14] border border-emerald-500/30 p-8 sm:p-12 space-y-6 shadow-2xl relative overflow-hidden">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 font-mono text-[10px] font-bold uppercase">
                <span>Rechtssicherheit & Creator-Souveränität</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Verantwortungsbewusste Ingenieurs-Software ohne Rechtsrisiken
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Unsere digitalen Produkte, Prompt-Pakete und AI-Skills liefern fundierte Entwurfsmodelle, parametrische Vorprüfungen und visuelle Simulationen. 
                Die finale baurechtliche Freigabe, Genehmigungsplanung und der elektrische Netzanschluss verbleiben gemäß unserer transparenten Software-Nutzungsbedingungen in der Eigenverantwortung der lokalen Fachhandwerker und Statiker vor Ort.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs font-mono">
            <div className="flex items-center gap-2 text-slate-300">
              <FileCheck2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Keine wiederkehrenden Abos</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Vollständige Daten-Souveränität</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Zap className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Sofortige Bereitstellung</span>
            </div>
          </div>
        </section>
      </main>

      <MobileStickyBarV2 />
    </div>
  );
}
