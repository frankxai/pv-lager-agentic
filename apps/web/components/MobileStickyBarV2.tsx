'use client';

import React from 'react';
import { Layers, ShoppingBag, Cpu, Sparkles, Home } from 'lucide-react';

export function MobileStickyBarV2() {
  return (
    <div className="fixed bottom-3 inset-x-3 z-50 lg:hidden">
      <div className="bg-[#070B14]/95 backdrop-blur-3xl border border-amber-500/40 rounded-2xl shadow-2xl p-2 flex items-center justify-around text-[10px] font-mono font-bold">
        <a
          href="/"
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-white px-2 py-1 transition"
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
        </a>

        <a
          href="/shop"
          className="flex flex-col items-center gap-1 text-amber-300 hover:text-amber-200 px-2 py-1 transition"
        >
          <ShoppingBag className="w-4 h-4 text-amber-400" />
          <span>Shop & Skills</span>
        </a>

        <a
          href="/atelier"
          className="flex flex-col items-center gap-1 text-slate-300 hover:text-white px-2 py-1 transition"
        >
          <Layers className="w-4 h-4 text-amber-400" />
          <span>3D Atelier</span>
        </a>

        <a
          href="/dossier"
          className="flex flex-col items-center gap-1 text-emerald-300 hover:text-emerald-200 px-2 py-1 transition"
        >
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span>AI Ingestion</span>
        </a>
      </div>
    </div>
  );
}
