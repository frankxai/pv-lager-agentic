'use client';

import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { PhoneCall, Sparkles, BookOpen, Mic, ShieldCheck, Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenLeadMagnet?: () => void;
  onOpenCopilot?: () => void;
  onOpenVoice?: () => void;
}

export function Navbar({ onOpenLeadMagnet, onOpenCopilot, onOpenVoice }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#080C14]/95 backdrop-blur-2xl border-b border-amber-500/25 shadow-2xl transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-amber-500/15 via-emerald-500/15 to-amber-500/15 border-b border-white/10 py-1.5 px-4 text-center text-[11px] font-mono text-slate-300 flex items-center justify-between sm:justify-center gap-3">
        <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold truncate">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          Zentrallager Seesen (Harz)
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <span className="hidden md:inline text-slate-300">
          Statisch geprüft Schneelastzone 3
        </span>
        <span className="hidden md:inline text-slate-500">•</span>
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30 shrink-0">
          0% MwSt. § 12 (3) UStG
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Dual Brand Monogram Logo */}
        <a href="/" className="hover:opacity-95 transition">
          <BrandLogo variant="dual" />
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-wider uppercase text-slate-300">
          <a href="#vision" className="hover:text-amber-400 transition flex items-center gap-1">
            <span>Vision & Architektur</span>
          </a>
          <a href="#configurator" className="hover:text-amber-400 transition text-amber-300 flex items-center gap-1 font-bold">
            <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>60s Konfigurator</span>
          </a>
          <a href="#showcase" className="hover:text-amber-400 transition">
            Lager-Sortiment
          </a>
          <a href="#kaufkompass" className="hover:text-amber-400 transition">
            Solar Kaufkompass
          </a>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onOpenVoice && (
            <button
              onClick={onOpenVoice}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-emerald-400 border border-emerald-500/30 transition shadow-lg flex items-center gap-1.5 text-xs font-bold"
              title="Voice AI Assistant"
            >
              <Mic className="w-4 h-4 animate-pulse" />
              <span className="hidden xl:inline">Voice Agent</span>
            </button>
          )}

          {onOpenCopilot && (
            <button
              onClick={onOpenCopilot}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-400 border border-cyan-500/30 transition shadow-lg flex items-center gap-1.5 text-xs font-bold"
              title="AI Sales Copilot"
            >
              <Sparkles className="w-4 h-4" />
              <span className="hidden xl:inline">AI Copilot</span>
            </button>
          )}

          <a
            href="tel:+49538198000"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-white/15 transition shadow-lg"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-[11px]">+49 5381 98000</span>
          </a>

          <a
            href="#configurator"
            className="px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition border border-amber-300/40"
          >
            Configurator ➔
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 lg:hidden hover:text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1322] border-b border-amber-500/30 px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-200">
            <a
              href="#configurator"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 rounded-xl bg-amber-500/10 text-amber-300 border border-amber-500/30 flex items-center gap-2"
            >
              <Zap className="w-4 h-4 fill-current text-amber-400" />
              <span>60s Carport Konfigurator</span>
            </a>
            <a
              href="#showcase"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-slate-900 transition"
            >
              Lager-Sortiment Seesen
            </a>
            <a
              href="#kaufkompass"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-slate-900 transition"
            >
              Solar Kaufkompass (PDF)
            </a>
            <a
              href="#vision"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl hover:bg-slate-900 transition"
            >
              Vision & Architektur
            </a>
          </nav>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="tel:+49538198000"
              className="w-full py-3 rounded-xl bg-slate-900 text-slate-200 font-bold text-xs border border-white/10 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Direktvertrieb: +49 (0) 5381 98000</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
