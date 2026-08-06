'use client';

import React, { useState } from 'react';
import { BookOpen, X, Download, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

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
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl">
      <div className="relative w-full max-w-lg bg-[#070B14] border border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-bold">
            <BookOpen className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest block font-bold">Jay Abraham Preeminence Guide</span>
          <h3 className="font-serif text-2xl font-bold text-white">Solar Kaufkompass 2026 (PDF Leitfaden)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Neutrales Ingenieurwissen zu Schneelastzonen im Harz, Bifazialitäts-Ertrag, Aluminium 100x100mm & Speicher-Kalkulationen.
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-mono text-slate-400 mb-1">E-Mail-Adresse für PDF-Zustellung</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="anwesen@harz.de"
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl transition flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>PDF Leitfaden Jetzt Kostenfrei Laden</span>
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-3">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
            <h4 className="font-serif font-bold text-white text-lg">Leitfaden Erfolgreich Gesendet!</h4>
            <p className="text-xs text-slate-300">
              Der Solar Kaufkompass 2026 wird an <strong className="text-amber-300">{email}</strong> zugestellt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
