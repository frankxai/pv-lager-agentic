'use client';

import React from 'react';
import { BrandLogoV2 } from './BrandLogoV2';
import { Sparkles, Mic, Zap, Layers, Cpu, ShoppingBag, ArrowRight } from 'lucide-react';

interface NavbarV2Props {
  onOpenLeadMagnet?: () => void;
  onOpenCopilot?: () => void;
  onOpenVoice?: () => void;
}

export function NavbarV2({ onOpenLeadMagnet, onOpenCopilot, onOpenVoice }: NavbarV2Props) {
  return (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Glass Container */}
      <div className="bg-[#070B14]/90 backdrop-blur-3xl border border-amber-500/30 rounded-3xl shadow-2xl p-4 sm:px-7 flex items-center justify-between transition-all">
        {/* Brand Monogram */}
        <a href="/" className="hover:opacity-95 transition">
          <BrandLogoV2 variant="full" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold text-slate-300">
          <a href="/shop" className="hover:text-amber-300 transition text-amber-300 flex items-center gap-1.5 font-bold">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Digital Forge (Shop)</span>
          </a>

          <a href="/atelier" className="hover:text-white transition flex items-center gap-1.5 font-semibold">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Hardware Atelier</span>
          </a>

          <a href="/dossier" className="hover:text-emerald-300 transition text-emerald-300 font-bold flex items-center gap-1">
            <Cpu className="w-3.5 h-3.5 text-emerald-400" />
            <span>AI Skill Dossier</span>
          </a>

          <a href="/v2" className="hover:text-white transition text-slate-400">
            Sovereign Estate
          </a>
        </nav>

        {/* Right Action Suite */}
        <div className="flex items-center gap-3">
          {onOpenVoice && (
            <button
              onClick={onOpenVoice}
              className="p-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-emerald-400 border border-emerald-500/35 transition shadow-lg flex items-center gap-1.5 text-xs font-bold"
              title="Voice AI Assistant"
            >
              <Mic className="w-4 h-4 animate-pulse" />
              <span className="hidden xl:inline">Voice Agent</span>
            </button>
          )}

          {onOpenCopilot && (
            <button
              onClick={onOpenCopilot}
              className="p-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-cyan-500/35 transition shadow-lg flex items-center gap-1.5 text-xs font-bold"
              title="AI Concierge Copilot"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden xl:inline">Concierge</span>
            </button>
          )}

          <a
            href="/shop"
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-xl shadow-amber-500/25 transition border border-amber-300/40 flex items-center gap-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Shop & Skills ➔</span>
          </a>
        </div>
      </div>
    </header>
  );
}
