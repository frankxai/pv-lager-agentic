import React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, Truck, Award, FileCheck, Sparkles, BookOpen, Maximize2 } from 'lucide-react';

export function HeroV2() {
  return (
    <section id="vision" className="relative rounded-3xl overflow-hidden bg-slate-950 border border-amber-500/40 p-6 sm:p-14 grid lg:grid-cols-12 gap-8 items-center shadow-2xl">
      {/* Background Mansion Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/estate-mansion.jpg"
          alt="Aurevia Solar Estate Mansion"
          className="w-full h-full object-cover filter brightness-[0.3] contrast-125 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/70 to-transparent"></div>
      </div>

      {/* Gold Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-amber-500/20 via-emerald-500/10 to-transparent rounded-full blur-[160px] pointer-events-none"></div>

      {/* Hero Content */}
      <div className="lg:col-span-7 space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold tracking-widest uppercase shadow-2xl backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Architectural Solar Infrastructure · Edition 2026</span>
          <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[10px] border border-emerald-500/30">
            0% MwSt. § 12 (3) UStG
          </span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
          Autarke Solar-Carports &amp; Alu-Bauwerke.
          <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-amber-500 bg-clip-text text-transparent font-serif italic block mt-1">
            Ingenieurskunst aus Seesen.
          </span>
        </h1>

        <p className="text-sm sm:text-lg text-slate-200 leading-relaxed font-light">
          Für anspruchsvolle Privatanwesen, Architekten &amp; gewerbliche Fuhrparks. Berechnen Sie in <strong className="text-amber-400 font-semibold">60 Sekunden</strong> Ihre statisch geprüfte Aluminium-Stückliste, bifaziale Glas-Glas PV-Eindeckung &amp; 25-Jahre Ertragsrechnung.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
          <Link
            href="/v2#configurator"
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-black text-xs sm:text-sm uppercase tracking-widest shadow-2xl shadow-amber-500/30 transition-all flex items-center justify-center gap-2 transform hover:scale-105 border border-amber-200/50"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>60s Carport Konfigurator Starten</span>
          </Link>

          <a
            href="tel:+49538198000"
            className="px-6 py-4 rounded-xl bg-slate-950/90 hover:bg-slate-900 text-slate-200 font-bold text-xs sm:text-sm border border-amber-500/30 hover:border-amber-400 transition flex items-center justify-center gap-2 backdrop-blur-md shadow-xl"
          >
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Direktberatung Seesen: +49 5381 98000</span>
          </a>
        </div>

        {/* Feature Icons */}
        <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-left border-t border-white/15">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[11px] text-slate-300 font-medium">Harz Schneelast 3 Statik</span>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-[11px] text-slate-300 font-medium">Direktversand ab Seesen</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-[11px] text-slate-300 font-medium">30 Jahre Alu-Profil Garantie</span>
          </div>
          <div className="flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-[11px] text-slate-300 font-medium">0% MwSt. § 12 (3) UStG</span>
          </div>
        </div>
      </div>

      {/* Luxury Showcase Card */}
      <div className="lg:col-span-5 relative z-10">
        <div className="bg-slate-900/90 border border-amber-500/40 p-4 rounded-2xl space-y-3 shadow-2xl backdrop-blur-xl">
          <div className="relative h-64 rounded-xl overflow-hidden border border-white/10 group cursor-pointer">
            <img
              src="/images/luxury-carport.jpg"
              alt="Zola Pod Executive Solar Carport"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute top-2.5 left-2.5 px-3 py-1 rounded bg-slate-950/85 backdrop-blur border border-amber-500/40 text-amber-300 font-mono text-[10px] font-bold tracking-wider">
              ZOLA MANOR EXECUTIVE EDITION
            </div>
            <div className="absolute bottom-2.5 right-2.5 p-2 rounded-lg bg-slate-950/80 text-amber-400 border border-amber-500/30">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          <div className="flex justify-between items-center text-xs px-1">
            <div>
              <span className="text-slate-400 block font-mono text-[9px] uppercase">Zentrallager Seesen Bestseller</span>
              <span className="font-serif font-bold text-white text-sm">Alu-Carport 100x100mm mit Bifazial-Dach</span>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-[11px] font-bold">
              Sofort Lieferbar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
