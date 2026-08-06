'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogoV2 } from './BrandLogoV2';
import { PhoneCall, Zap, ShieldCheck, Warehouse, Menu, X, Sparkles } from 'lucide-react';

export function NavV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-2xl border-b border-amber-500/20 shadow-2xl transition-all">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-amber-500/20 border-b border-white/10 py-1.5 px-4 text-center text-[11px] font-mono text-slate-300 flex items-center justify-between sm:justify-center gap-4">
        <span className="inline-flex items-center gap-1.5 text-amber-300 font-semibold truncate">
          <Warehouse className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          Zentrallager Seesen (Harz) · 100% Sofort Verfügbar
        </span>
        <span className="hidden md:inline text-slate-600">•</span>
        <span className="hidden md:inline text-slate-300">
          Statisch geprüft Schneelastzone 3 (Harz-Standard)
        </span>
        <span className="hidden md:inline text-slate-600">•</span>
        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] border border-emerald-500/30 shrink-0">
          0% MwSt. § 12 (3) UStG
        </span>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/v2" className="hover:opacity-95 transition">
          <BrandLogoV2 />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-slate-300">
          <Link href="/v2#vision" className="hover:text-amber-400 transition flex items-center gap-1">
            <span>Architektur &amp; Vision</span>
          </Link>
          <Link href="/v2#configurator" className="hover:text-amber-400 transition text-amber-300 flex items-center gap-1 font-bold">
            <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>60s Konfigurator</span>
          </Link>
          <Link href="/v2/analyse" className="hover:text-amber-400 transition">
            Autarkie-Analyse
          </Link>
          <Link href="/v2/referenzen" className="hover:text-amber-400 transition">
            Referenzen
          </Link>
          <Link href="/v2/herkunft" className="hover:text-amber-400 transition">
            Zentrallager
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+49538198000"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-bold text-xs border border-amber-500/30 transition shadow-lg"
          >
            <PhoneCall className="w-4 h-4 text-amber-400" />
            <span className="font-mono text-[11px]">+49 5381 98000</span>
          </a>

          <Link
            href="/v2#configurator"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl shadow-amber-500/25 transition border border-amber-300/40 inline-flex items-center gap-1.5"
          >
            <span>ERP Konfigurator</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 lg:hidden hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#030712] border-b border-amber-500/30 p-6 space-y-4 font-mono text-sm">
          <Link
            href="/v2#vision"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/10"
          >
            Architektur &amp; Vision
          </Link>
          <Link
            href="/v2#configurator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-amber-400 font-bold py-2 border-b border-white/10"
          >
            60s Carport Konfigurator
          </Link>
          <Link
            href="/v2/analyse"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/10"
          >
            Autarkie-Analyse (€190)
          </Link>
          <Link
            href="/v2/referenzen"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/10"
          >
            Estate Referenzen
          </Link>
          <Link
            href="/v2/herkunft"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 py-2"
          >
            Zentrallager Seesen (Harz)
          </Link>
        </div>
      )}
    </header>
  );
}
