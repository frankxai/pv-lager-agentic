'use client';

import React, { useState } from 'react';
import { Database, FileText, CheckCircle, Download } from 'lucide-react';

export function WeclappErpEngineV2() {
  const [loading, setLoading] = useState(false);
  const [quoteGenerated, setQuoteGenerated] = useState(false);

  const generateErpQuote = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setQuoteGenerated(true);
    }, 1200);
  };

  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
      <div className="bg-[#000000] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="text-xs font-sans uppercase text-amber-400 tracking-widest font-medium flex items-center gap-2">
              <Database className="w-4 h-4 text-amber-400" />
              Direktangebot &amp; Stücklisten
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
              ERP Live-Kalkulation &amp; Material-Aufstellung
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-sans font-medium">
            0% MwSt. § 12 (3) UStG befreit
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif font-bold text-xl text-white">Transparente Komponenten-Berechnung</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Aufschlüsselung aller Baukomponenten ab Zentrallager Seesen: Massiv-Aluminium 6063-T6, Trina Bifazial-Glas-Glas Eindeckung, BYD Speicher und Edelstahl-Zubehör.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 space-y-3 text-xs font-sans">
              <div className="flex justify-between items-center text-slate-300 border-b border-white/10 pb-2">
                <span>Alu Carport-Tragwerk 100x100mm (Zola Manor):</span>
                <span className="font-mono font-medium text-amber-300">3.490 €</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 border-b border-white/10 pb-2">
                <span>18x Trina Vertex S+ Bifazial 440W Module:</span>
                <span className="font-mono font-medium text-amber-300">1.602 €</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 border-b border-white/10 pb-2">
                <span>BYD Battery-Box HVS 10.2 kWh Speicher:</span>
                <span className="font-mono font-medium text-emerald-400">3.890 €</span>
              </div>
              <div className="flex justify-between items-center text-slate-300 border-b border-white/10 pb-2">
                <span>11kW EV Wallbox Ladestation:</span>
                <span className="font-mono font-medium text-cyan-400">890 €</span>
              </div>
              <div className="flex justify-between items-center font-bold text-sm text-white pt-2">
                <span>Gesamtbetrag (0% MwSt. § 12 UStG):</span>
                <span className="font-mono text-xl text-amber-400">9.872 €</span>
              </div>
            </div>

            <button
              onClick={generateErpQuote}
              disabled={loading}
              className="w-full py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-semibold text-xs transition-all shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>{loading ? 'Erstelle Angebot PDF...' : 'Offizielles Angebot PDF erstellen'}</span>
            </button>
          </div>

          <div className="lg:col-span-6">
            {quoteGenerated ? (
              <div className="bg-slate-950/90 border border-emerald-500/30 rounded-3xl p-8 space-y-6 shadow-2xl animate-in fade-in">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                  <div>
                    <h4 className="font-bold text-white text-base">Angebot erfolgreich generiert</h4>
                    <span className="text-xs text-slate-400 font-mono">BOM-SEESEN-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  Ihr individuelles Angebot liegt vor. Alle Komponenten sind für 14 Tage ab Zentrallager Seesen vorreserviert.
                </p>

                <div className="p-4 rounded-2xl bg-black border border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Preisgarantie:</span>
                    <span className="text-white font-mono">14 Tage</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Speditionsversand:</span>
                    <span className="text-emerald-400 font-mono">Inklusive</span>
                  </div>
                </div>

                <button
                  onClick={() => alert('PDF-Angebot wird jetzt heruntergeladen.')}
                  className="w-full py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs transition flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>Angebot PDF Herunterladen</span>
                </button>
              </div>
            ) : (
              <div className="bg-slate-950/60 border border-white/10 rounded-3xl p-8 text-center space-y-4 backdrop-blur-xl">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-white/10 text-slate-400 mx-auto flex items-center justify-center">
                  <FileText className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-white text-base">Vorschau für Direktangebot</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">
                  Erzeugen Sie ein verbindliches PDF-Angebot inkl. Steuerbefreiung und Lieferzeitauskunft.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
