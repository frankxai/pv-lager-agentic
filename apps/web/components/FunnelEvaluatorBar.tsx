'use client';

import React from 'react';
import { Sliders, BookOpen, Building2, Mic, Sparkles } from 'lucide-react';

export type FunnelMode = 'configurator' | 'lead-magnet' | 'b2b-fleet' | 'voice-ai';

interface FunnelEvaluatorBarProps {
  currentMode: FunnelMode;
  onSelectMode: (mode: FunnelMode) => void;
}

export function FunnelEvaluatorBar({ currentMode, onSelectMode }: FunnelEvaluatorBarProps) {
  return (
    <div className="sticky top-0 z-50 bg-[#070A11] border-b border-slate-800 text-xs py-2 px-4 shadow-xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300">
            Funnel Optimization Suite:
          </span>
          <span className="text-[11px] text-slate-500 hidden lg:inline">
            (Evaluate conversion & audience resonance across 4 marketing architectures)
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto max-w-full pb-1 md:pb-0">
          <button
            onClick={() => onSelectMode('configurator')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition ${
              currentMode === 'configurator'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Sliders className="w-3 h-3" />
            <span>Funnel 1: 60s Configurator</span>
          </button>

          <button
            onClick={() => onSelectMode('lead-magnet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition ${
              currentMode === 'lead-magnet'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <BookOpen className="w-3 h-3" />
            <span>Funnel 2: Jay Abraham Magnet</span>
          </button>

          <button
            onClick={() => onSelectMode('b2b-fleet')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition ${
              currentMode === 'b2b-fleet'
                ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Building2 className="w-3 h-3" />
            <span>Funnel 3: B2B Fleet Calculator</span>
          </button>

          <button
            onClick={() => onSelectMode('voice-ai')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition ${
              currentMode === 'voice-ai'
                ? 'bg-emerald-400 text-slate-950 font-bold shadow-md shadow-emerald-400/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Mic className="w-3 h-3 text-emerald-400" />
            <span>Funnel 4: AI Voice Intake</span>
          </button>
        </div>
      </div>
    </div>
  );
}
