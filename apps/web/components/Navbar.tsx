'use client';

import React from 'react';
import { ShieldCheck, PhoneCall, Zap, BookOpen, Bot, Mic } from 'lucide-react';
import { pvlagerImages } from '../lib/pvlager-media';

interface NavbarProps {
  onOpenLeadMagnet: () => void;
  onOpenCopilot: () => void;
  onOpenVoice: () => void;
}

export function Navbar({ onOpenLeadMagnet, onOpenCopilot, onOpenVoice }: NavbarProps) {
  return (
    <header className="sticky top-[41px] z-40 bg-[#080C14]/95 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl">
      {/* Live Stock Ticker */}
      <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 border-b border-amber-500/20 text-amber-300 text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between font-mono text-[11px]">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-bold text-emerald-400">Zentrallager Seesen (Harz):</span>
            <span className="truncate text-slate-200">1.420x Trina Bifazial 435W · 18x Heavy-Duty Carport Kits ab Lager versandbereit</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1 text-slate-200 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 0% MwSt. (§12 (3) UStG) Befreit
            </span>
            <span className="text-slate-600">|</span>
            <a href="tel:+49538198000" className="hover:text-amber-400 flex items-center gap-1 transition text-amber-300">
              <PhoneCall className="w-3 h-3 text-amber-400" /> Direktvertrieb: +49 (0) 5381 98000
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a href="/" className="flex items-center gap-3.5 group">
          <div className="h-12 w-auto bg-slate-900/80 p-1.5 rounded-xl border border-amber-500/30 group-hover:border-amber-400 transition">
            <img
              src={pvlagerImages.brandLogo}
              alt="PV Lager Logo"
              className="h-full w-auto object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-amber-400 transition-colors">
                PV LAGER
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold border border-emerald-500/30">
                RIAL Energy GmbH
              </span>
            </div>
            <span className="text-[11px] text-slate-400 block font-mono">Zentrallager Seesen · Solar-Carports & Profile</span>
          </div>
        </a>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenLeadMagnet}
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 text-xs border border-amber-500/30 hover:border-amber-400 transition shadow-md"
            title="Jay Abraham Solar Kaufkompass"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span className="font-semibold">Solar Kaufkompass 2026</span>
          </button>

          <button
            onClick={onOpenVoice}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs border border-emerald-500/40 transition shadow-md"
            title="ElevenLabs Voice Agent Intake"
          >
            <Mic className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span className="hidden sm:inline font-mono font-bold">Voice Agent</span>
          </button>

          <button
            onClick={onOpenCopilot}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 text-xs border border-cyan-500/40 transition shadow-md"
            title="Vercel AI SDK Seller Copilot"
          >
            <Bot className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline font-mono font-bold">AI Copilot</span>
          </button>

          <a
            href="#configurator"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs shadow-xl shadow-amber-500/30 transition-all flex items-center gap-2 transform hover:scale-105"
          >
            <Zap className="w-4 h-4 text-slate-950 fill-current" />
            <span>Carport Konfigurieren</span>
          </a>
        </div>
      </div>
    </header>
  );
}
