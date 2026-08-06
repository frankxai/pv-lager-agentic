'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BrandLogoV2 } from './BrandLogoV2';
import { PhoneCall, Zap, Warehouse, Menu, X } from 'lucide-react';

export function NavV2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#000000]/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-amber-500/10 border-b border-white/5 py-2 px-4 text-center text-xs font-sans text-slate-300 flex items-center justify-between sm:justify-center gap-4">
        <span className="inline-flex items-center gap-2 text-amber-300 font-medium truncate">
          <Warehouse className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          Zentrallager Seesen (Harz) · Sofort lieferbare Solar-Komponenten
        </span>
        <span className="hidden md:inline text-slate-600">•</span>
        <span className="hidden md:inline text-slate-300">
          Statisch geprüft nach Schneelastzone 3
        </span>
        <span className="hidden md:inline text-slate-600">•</span>
        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-medium text-[11px] border border-emerald-500/20 shrink-0">
          0% MwSt. § 12 (3) UStG befreit
        </span>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/v2" className="hover:opacity-90 transition">
          <BrandLogoV2 />
        </Link>

        {/* Desktop Links (Apple-style Sentence Case) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-sans text-slate-300">
          <Link href="/v2#vision" className="hover:text-white transition">
            Architektur &amp; Vision
          </Link>
          <Link href="/v2#configurator" className="hover:text-amber-300 transition text-amber-400 font-medium flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>Carport Konfigurator</span>
          </Link>
          <Link href="/v2/analyse" className="hover:text-white transition">
            Autarkie-Analyse
          </Link>
          <Link href="/v2/referenzen" className="hover:text-white transition">
            Referenzen
          </Link>
          <Link href="/v2/herkunft" className="hover:text-white transition">
            Zentrallager
          </Link>
        </nav>

        {/* Right Action Controls */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+49538198000"
            className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-medium text-xs border border-white/10 transition"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-mono text-xs">+49 5381 98000</span>
          </a>

          <Link
            href="/v2#configurator"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition shadow-lg shadow-amber-500/20 border border-amber-300/30 inline-flex items-center gap-1.5"
          >
            <span>Carport konfigurieren</span>
          </Link>

          {/* Mobile Drawer Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 lg:hidden hover:text-white"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#000000] border-b border-white/10 p-6 space-y-4 font-sans text-sm">
          <Link
            href="/v2#vision"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/5"
          >
            Architektur &amp; Vision
          </Link>
          <Link
            href="/v2#configurator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-amber-400 font-medium py-2 border-b border-white/5"
          >
            Carport Konfigurator
          </Link>
          <Link
            href="/v2/analyse"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/5"
          >
            Autarkie-Analyse (€190)
          </Link>
          <Link
            href="/v2/referenzen"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-300 hover:text-amber-400 py-2 border-b border-white/5"
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
