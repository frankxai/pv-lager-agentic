'use client';

import React from 'react';
import { Zap, PhoneCall, Sparkles, BookOpen } from 'lucide-react';

interface MobileStickyBarV2Props {
  onOpenLeadMagnet: () => void;
  onOpenCopilot: () => void;
}

export function MobileStickyBarV2({ onOpenLeadMagnet, onOpenCopilot }: MobileStickyBarV2Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#070B14]/95 backdrop-blur-3xl border-t border-amber-500/40 p-3 shadow-2xl px-5">
      <div className="grid grid-cols-4 gap-2 items-center text-center">
        <a
          href="#configurator-v2"
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold active:scale-95 transition shadow-lg"
        >
          <Zap className="w-4 h-4 fill-current mb-0.5" />
          <span className="text-[10px] font-semibold">3D Planer</span>
        </a>

        <a
          href="tel:+49538198000"
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 active:scale-95 transition"
        >
          <PhoneCall className="w-4 h-4 text-amber-400 mb-0.5" />
          <span className="text-[10px] font-semibold">Direktruf</span>
        </a>

        <button
          onClick={onOpenCopilot}
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-slate-900 border border-cyan-500/40 text-cyan-300 active:scale-95 transition"
        >
          <Sparkles className="w-4 h-4 text-cyan-400 mb-0.5" />
          <span className="text-[10px] font-semibold">Concierge</span>
        </button>

        <button
          onClick={onOpenLeadMagnet}
          className="flex flex-col items-center justify-center p-2 rounded-2xl bg-slate-900 border border-emerald-500/40 text-emerald-300 active:scale-95 transition"
        >
          <BookOpen className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[10px] font-semibold">Leitfaden</span>
        </button>
      </div>
    </div>
  );
}
