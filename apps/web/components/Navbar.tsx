'use client';

import React from 'react';
import { ShieldCheck, PhoneCall, Zap, BookOpen, Bot, Mic } from 'lucide-react';

interface NavbarProps {
  onOpenLeadMagnet: () => void;
  onOpenCopilot: () => void;
  onOpenVoice: () => void;
}

export function Navbar({ onOpenLeadMagnet, onOpenCopilot, onOpenVoice }: NavbarProps) {
  return (
    <header className="sticky top-[41px] z-40 bg-[#0B0F19]/90 backdrop-blur-xl border-b border-slate-800/80">
      {/* Live Stock Ticker */}
      <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px]">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-semibold text-emerald-400">Zentrallager Seesen (Harz):</span>
            <span className="truncate">1.420x Trina Bifazial 435W · 18x Solar-Carport Alu-Kits ab Lager versandbereit</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 0% MwSt. (§12 (3) UStG)
            </span>
            <span className="text-slate-500">|</span>
            <a href="tel:+49538198000" className="hover:text-amber-400 flex items-center gap-1 transition">
              <PhoneCall className="w-3 h-3 text-amber-400" /> Direktvertrieb Seesen
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand identity */}
        <a href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black flex items-center justify-center text-xl shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
            PV
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                PV Lager
              </span>
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-medium border border-emerald-500/30">
                RIAL Energy
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block">Solar-Carports & Aluminium-Profilsysteme</span>
          </div>
        </a>

        {/* Navigation & Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLeadMagnet}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs border border-slate-700 transition"
            title="Jay Abraham Solar Kaufkompass"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Solar Kaufkompass</span>
          </button>

          <button
            onClick={onOpenVoice}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-500/30 transition"
            title="ElevenLabs Voice Agent Intake"
          >
            <Mic className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span className="hidden sm:inline font-mono">Voice AI</span>
          </button>

          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/30 transition"
            title="Vercel AI SDK Seller Copilot"
          >
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline font-mono">AI Copilot</span>
          </button>

          <a
            href="#configurator"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 transition-all flex items-center gap-1.5"
          >
            <Zap className="w-4 h-4 text-slate-950 fill-current" />
            <span>Carport Konfigurieren</span>
          </a>
        </div>
      </div>
    </header>
  );
}
