'use client';

import React from 'react';
import { BrandLogoV2 } from './BrandLogoV2';
import { PhoneCall, Sparkles, Mic, Zap } from 'lucide-react';

interface NavbarV2Props {
  onOpenLeadMagnet?: () => void;
  onOpenCopilot?: () => void;
  onOpenVoice?: () => void;
}

export function NavbarV2({ onOpenLeadMagnet, onOpenCopilot, onOpenVoice }: NavbarV2Props) {
  return (
    <header className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Floating Apple-Grade Glass Container */}
      <div className="bg-[#070B14]/85 backdrop-blur-3xl border border-amber-500/30 rounded-3xl shadow-2xl p-4 sm:px-7 flex items-center justify-between transition-all">
        {/* Brand Monogram */}
        <a href="#hero" className="hover:opacity-95 transition">
          <BrandLogoV2 variant="full" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold text-slate-300">
          <a href="#hero" className="hover:text-amber-300 transition">
            Souveränität
          </a>
          <a href="#configurator-v2" className="hover:text-amber-300 transition text-amber-300 flex items-center gap-1.5 font-bold">
            <Zap className="w-3.5 h-3.5 text-amber-400 fill-current" />
            <span>3D Konfigurator</span>
          </a>
          <a href="#showcase-v2" className="hover:text-amber-300 transition">
            Portfolio
          </a>
          <a href="#bento-v2" className="hover:text-amber-300 transition">
            Ingenieurkunst
          </a>
          <a href="#gemini-omni" className="hover:text-amber-300 transition text-emerald-300 font-bold flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Gemini Omni AI</span>
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
              <span className="hidden xl:inline">VIP Concierge</span>
            </button>
          )}

          <a
            href="tel:+49538198000"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold text-xs border border-amber-500/25 transition shadow-lg"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-[11px]">+49 (0) 5381 98000</span>
          </a>

          <a
            href="#configurator-v2"
            className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-xl shadow-amber-500/25 transition border border-amber-300/40"
          >
            Anfrage Starten ➔
          </a>
        </div>
      </div>
    </header>
  );
}
