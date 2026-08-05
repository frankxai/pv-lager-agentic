'use client';

import React, { useState } from 'react';
import { X, Mic, Volume2, MicOff, Sparkles, CheckCircle } from 'lucide-react';

interface VoiceAgentWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VoiceAgentWidget({ isOpen, onClose }: VoiceAgentWidgetProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [agentResponse, setAgentResponse] = useState(
    'Sprechen Sie direkt mit dem PV Lager Sprach-Assistenten. Sagen Sie beispielsweise: "Ich benötige ein Doppelcarport für 2 Elektroautos mit 10 kW Speicher."'
  );

  if (!isOpen) return null;

  const toggleMic = () => {
    if (!isListening) {
      setIsListening(true);
      setAgentResponse('Sprachaufzeichnung aktiv... (Sprechen Sie jetzt)');
      setTimeout(() => {
        setIsListening(false);
        setTranscript('Ich brauche ein Doppel-Carport in Seesen mit 18 Modulen und Ladesäule.');
        setAgentResponse(
          'Verstanden! Ich habe ein Doppel-Carport mit 18 bifazialen Trina Modulen (7.83 kWp) und 11kW Wallbox vorkonfiguriert. Möchten Sie die Festpreis-Stückliste direkt einsehen?'
        );
      }, 3500);
    } else {
      setIsListening(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-md bg-[#0F172A] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden p-6 text-slate-100 space-y-5">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
              <Mic className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white">ElevenLabs Voice AI Agent</span>
                <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                  Live Stream
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Interaktive Sprachberatung & Konfiguration</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dynamic Voice Visualizer */}
        <div className="bg-slate-900/90 rounded-2xl p-6 border border-slate-800 text-center space-y-4">
          <div className="relative flex items-center justify-center">
            <div
              className={`w-20 h-20 rounded-full flex items-center justify-center transition-all ${
                isListening
                  ? 'bg-emerald-500/30 text-emerald-400 animate-ping'
                  : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
              }`}
            >
              <button
                onClick={toggleMic}
                className="w-16 h-16 rounded-full bg-emerald-500 text-slate-950 flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:scale-105 transition-transform"
              >
                {isListening ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
              </button>
            </div>
          </div>

          <span className="text-[11px] text-slate-400 font-mono block">
            {isListening ? 'Zuhören & Konfiguration erfassen...' : 'Klicken Sie auf das Mikrofon, um zu sprechen'}
          </span>

          <div className="bg-slate-950 p-4 rounded-xl text-left border border-slate-800 text-xs space-y-2">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <Volume2 className="w-3.5 h-3.5" />
              <span>Voice Agent Antwort:</span>
            </div>
            <p className="text-slate-200 leading-relaxed">{agentResponse}</p>

            {transcript && (
              <div className="pt-2 border-t border-slate-800 text-[11px] text-amber-300">
                <strong>Erkannt:</strong> "{transcript}"
              </div>
            )}
          </div>
        </div>

        {/* Feature Pill */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Der Voice Agent wandelt Ihre gesprochenen Anforderungen direkt in die ERP-Stückliste um.</span>
        </div>
      </div>
    </div>
  );
}
