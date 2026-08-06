import React from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, Truck, Award, FileCheck, Sparkles, BookOpen, Maximize2 } from 'lucide-react';

export function HeroV2() {
  return (
    <section id="vision" className="relative rounded-3xl overflow-hidden bg-black border border-white/10 p-8 sm:p-16 lg:p-20 grid lg:grid-cols-12 gap-12 items-center shadow-2xl">
      {/* Background Mansion Image with Soft Lighting */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/estate-mansion.jpg"
          alt="Aurevia Solar Estate Mansion"
          className="w-full h-full object-cover filter brightness-[0.25] contrast-110 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent"></div>
      </div>

      {/* Warm Ambient Radial Light Spot */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/15 via-emerald-500/5 to-transparent rounded-full blur-[180px] pointer-events-none"></div>

      {/* Hero Narrative */}
      <div className="lg:col-span-7 space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/80 border border-amber-500/30 text-amber-300 text-xs font-sans font-medium shadow-2xl backdrop-blur-xl">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Architectural Solar Infrastructure Edition 2026</span>
          <span className="bg-emerald-500/15 text-emerald-300 px-2.5 py-0.5 rounded-full text-[11px] border border-emerald-500/20">
            0% MwSt. § 12 (3) UStG
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          Autarke Solar-Carports &amp; Alu-Bauwerke.
          <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent font-serif italic block mt-2 font-normal">
            Ingenieurskunst aus Seesen.
          </span>
        </h1>

        <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
          Für anspruchsvolle Privatanwesen, Architekten und gewerbliche Fuhrparks. Berechnen Sie in <strong className="text-amber-300 font-semibold">60 Sekunden</strong> Ihre statisch geprüfte Aluminium-Stückliste, bifaziale Glas-Glas PV-Eindeckung und 25-Jahre Ertragsrechnung.
        </p>

        {/* Action Buttons (Sentence Case) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
          <Link
            href="/v2#configurator"
            className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2.5 shadow-2xl shadow-amber-500/25 transform hover:scale-[1.02] border border-amber-300/40"
          >
            <Zap className="w-4.5 h-4.5 fill-current" />
            <span>Carport Konfigurator starten</span>
          </Link>

          <a
            href="tel:+49538198000"
            className="px-7 py-4 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-200 font-medium text-sm border border-white/10 transition flex items-center justify-center gap-2.5 backdrop-blur-xl shadow-xl"
          >
            <BookOpen className="w-4.5 h-4.5 text-amber-400" />
            <span>Direktberatung Seesen: +49 5381 98000</span>
          </a>
        </div>

        {/* Feature Icons Grid */}
        <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/10">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-300 font-normal">Harz Schneelast 3 Statik</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Truck className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="text-xs text-slate-300 font-normal">Direktversand ab Seesen</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-4 h-4 text-cyan-400 shrink-0" />
            <span className="text-xs text-slate-300 font-normal">30 Jahre Alu-Profil Garantie</span>
          </div>
          <div className="flex items-center gap-2.5">
            <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs text-slate-300 font-normal">0% MwSt. § 12 (3) UStG</span>
          </div>
        </div>
      </div>

      {/* Showcase Card */}
      <div className="lg:col-span-5 relative z-10">
        <div className="bg-slate-950/80 border border-white/10 p-5 rounded-3xl space-y-4 shadow-2xl backdrop-blur-2xl">
          <div className="relative h-72 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
            <img
              src="/images/luxury-carport.jpg"
              alt="Zola Pod Executive Solar Carport"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-amber-500/30 text-amber-300 font-sans text-xs font-medium">
              Zola Manor Executive Edition
            </div>
            <div className="absolute bottom-3 right-3 p-2.5 rounded-full bg-black/80 text-amber-400 border border-amber-500/20">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>

          <div className="flex justify-between items-center text-xs px-1">
            <div>
              <span className="text-slate-400 block font-sans text-xs">Zentrallager Seesen Bestseller</span>
              <span className="font-serif font-bold text-white text-base">Alu-Carport 100x100mm mit Bifazial-Dach</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-sans text-xs font-medium">
              Sofort lieferbar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
