'use client';

import React, { useState } from 'react';
import { Mic, X, MicOff, Volume2, ShieldCheck } from 'lucide-react';

interface VoiceAgentWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceAgentWidget({ isOpen, onClose }: VoiceAgentWidgetProps) {
  const [isListening, setIsListening] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-xl">
      <div className="relative w-full max-w-md bg-[#070B14] border border-emerald-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="space-y-2">
          <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-widest inline-block">
            ElevenLabs Voice Agent V2
          </span>
          <h3 className="font-serif text-xl font-bold text-white">Sprachgeführte Intelligente Beratung</h3>
          <p className="text-xs text-slate-300">
            Sprechen Sie direkt mit der KI, um Fahrzeuganzahl, Stellplätze & Speicherbedarfe freihändig zu erfassen.
          </p>
        </div>

        <div className="py-6">
          <button
            onClick={() => setIsListening(!isListening)}
            className={`w-24 h-24 rounded-full mx-auto flex items-center justify-center transition-all shadow-2xl ${
              isListening
                ? 'bg-emerald-500 text-slate-950 scale-110 animate-pulse ring-8 ring-emerald-500/30'
                : 'bg-slate-900 text-emerald-400 border border-emerald-500/40 hover:bg-slate-800'
            }`}
          >
            {isListening ? <Volume2 className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
          </button>
          <span className="text-[11px] font-mono text-slate-400 block mt-4">
            {isListening ? 'Zuhören & Verarbeiten...' : 'Klicken Sie zum Starten der Sprachverbindung'}
          </span>
        </div>
      </div>
    </div>
  );
}
