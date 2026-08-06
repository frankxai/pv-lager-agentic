'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Zap, ShieldCheck, Truck, Award, FileCheck, Sparkles, BookOpen, Maximize2, X, Download } from 'lucide-react';

export function HeroV2() {
  const [pdfModalOpen, setPdfModalOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <section id="vision" className="relative rounded-3xl overflow-hidden bg-black border border-white/10 p-8 sm:p-16 lg:p-20 grid lg:grid-cols-12 gap-12 items-center shadow-2xl">
        {/* Background Mansion Photography */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/estate-mansion.jpg"
            alt="Aurevia Manor Anwesen Solar Carport"
            className="w-full h-full object-cover filter brightness-[0.25] contrast-110 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#000000]/90 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/60 to-transparent"></div>
        </div>

        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent rounded-full blur-[180px] pointer-events-none"></div>

        {/* Narrative Content */}
        <div className="lg:col-span-7 space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-950/90 border border-white/10 text-slate-300 text-xs font-sans shadow-2xl backdrop-blur-xl">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span className="font-medium text-amber-300 font-sans">Solar Architektur Kollektion 2026</span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">Zentrallager Seesen (Harz)</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.05]">
            Sonne. Aluminium.
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent font-serif italic block mt-2 font-normal">
              Souveränität.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 leading-relaxed font-normal max-w-2xl">
            Bespoke Solar-Carports und Alu-Bauwerke aus massivem Aluminium. Statisch geprüft für Schneelastzone 3 im Harz. Erzeugen Sie Ihren eigenen Strom in höchster architektonischer Ästhetik.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/v2#configurator"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-sm transition-all flex items-center justify-center gap-2.5 shadow-2xl shadow-amber-500/20 transform hover:scale-[1.02] border border-amber-300/40"
            >
              <Zap className="w-4.5 h-4.5 fill-current" />
              <span>Carport konfigurieren</span>
            </Link>

            <button
              onClick={() => setPdfModalOpen(true)}
              className="px-7 py-4 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-200 font-medium text-sm border border-white/10 transition flex items-center justify-center gap-2.5 backdrop-blur-xl shadow-xl"
            >
              <BookOpen className="w-4.5 h-4.5 text-amber-400" />
              <span>Solar Kaufkompass 2026</span>
            </button>
          </div>

          {/* Feature Grid */}
          <div className="pt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/10">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs text-slate-300 font-normal">Harz Schneelast 3 Statik</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="text-xs text-slate-300 font-normal">Spedition ab Lager Seesen</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="text-xs text-slate-300 font-normal">30 Jahre Profil-Garantie</span>
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
            <div
              onClick={() => setLightboxOpen(true)}
              className="relative h-72 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
              <img
                src="/images/luxury-carport.jpg"
                alt="Zola Manor Executive Solar Carport"
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
                <span className="text-slate-400 block font-sans text-xs">Aurevia Manor Bestseller</span>
                <span className="font-serif font-bold text-white text-base">Alu-Carport 100x100mm mit Bifazial-Dach</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-sans text-xs font-medium">
                Ab Lager Seesen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Modal */}
      {pdfModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 max-w-md w-full space-y-6 shadow-2xl relative text-center">
            <button onClick={() => setPdfModalOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
              <X className="w-5 h-5" />
            </button>

            <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
              <BookOpen className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-sans text-amber-400 font-normal block">Kostenfreier Ratgeber 2026</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">Solar Kaufkompass Seesen</h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Der umfassende 28-Seiten Leitfaden für Alu-Tragwerke, Schneelastzone 3 Statik, Bifazial-Erträge und Steuerfreistellung.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Vielen Dank! Der Kaufkompass PDF wird an Ihre E-Mail gesendet.');
                setPdfModalOpen(false);
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                placeholder="Ihre E-Mail Adresse..."
                className="w-full px-5 py-3.5 rounded-full bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-semibold text-xs transition shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>PDF Kaufkompass kostenlos anfordern</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Image Lightbox */}
      {lightboxOpen && (
        <div onClick={() => setLightboxOpen(false)} className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 cursor-pointer">
          <div className="relative max-w-5xl w-full">
            <button className="absolute -top-12 right-0 text-white p-2 text-sm font-sans flex items-center gap-1">
              <X className="w-6 h-6" /> Schließen
            </button>
            <img src="/images/luxury-carport.jpg" alt="Zola Manor Executive Solar Carport HD" className="w-full h-auto rounded-3xl border border-white/20 shadow-2xl" />
          </div>
        </div>
      )}
    </>
  );
}
