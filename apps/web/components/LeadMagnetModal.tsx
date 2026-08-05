'use client';

import React, { useState } from 'react';
import { X, CheckCircle, Download, BookOpen, ShieldCheck, ArrowRight, FileSpreadsheet } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LeadMagnetModal({ isOpen, onClose }: LeadMagnetModalProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl bg-[#0F172A] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-amber-500/20 via-slate-900 to-emerald-500/20 p-6 border-b border-white/10 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-2xl shadow-lg shadow-amber-500/30">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-mono uppercase tracking-wider font-bold">
                Kostenloser Praxis-Leitfaden (Jay Abraham Doktrin)
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Der ehrliche Solar-Kaufkompass für Deutschland (2026)
              </h2>
              <p className="text-xs text-slate-400">
                Vor dem Kauf verstehen, wann sich Carports, Speicher & Alu-Profile wirklich lohnen – und wann nicht.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 text-xs text-slate-300 max-h-[75vh] overflow-y-auto">
          {!submitted ? (
            <>
              <div className="bg-slate-900/90 rounded-xl p-4 border border-slate-800 space-y-3">
                <h3 className="font-semibold text-amber-400 text-sm flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Was Sie in diesem 24-seitigen Report & Excel-Rechner erfahren:
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Statik & Windlasten:</strong> Warum Alu-Profile 100x100mm gegenüber Standard-Holz oder dünnem Stahl statisch überlegen sind.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Bifaziale Glas-Glas Module:</strong> Wie 20-30% Mehrertrag durch Lichtdurchlässigkeit auf Carport-Dächern erzielt wird.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>0% Steuerrecht 2026:</strong> Rechtssichere Anwendung der Nullsteuer (§12 (3) UStG) ohne steuerliche Nachzahlungsfallen.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Die Gegenprüfung (Bear Case):</strong> Wann sich ein Batteriespeicher erst nach 12 Jahren amortisiert & wann Sie lieber warten sollten.</span>
                  </li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-200 mb-1">
                    Ihre E-Mail-Adresse für den Download & Rechner-Zugang:
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@unternehmen.de"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-xs transition"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 pt-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Kein Spam. Jederzeit mit 1 Klick abbestellbar.</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition flex items-center gap-2"
                  >
                    <span>Kaufkompass Kostenlos Herunterladen</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/40">
                <Download className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-lg font-bold text-white">Vielen Dank! Ihr Kompass ist freigeschaltet.</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Wir haben eine Kopie an <span className="text-amber-400 font-mono">{email}</span> gesendet. Sie können den Leitfaden und den Excel-BOM Rechner direkt hier herunterladen:
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
                <a
                  href="#download-pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Download gestartet: Der_ehrliche_Solar_Kaufkompass_2026.pdf');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  <span>PDF Download (24 Seiten)</span>
                </a>

                <a
                  href="#download-excel"
                  onClick={(e) => {
                    e.preventDefault();
                    alert('Download gestartet: RIAL_Solar_Carport_ERP_BOM_Calculator.xlsx');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs flex items-center justify-center gap-2 border border-slate-700"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-400" />
                  <span>Excel Statik & ERP-BOM Modell</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
