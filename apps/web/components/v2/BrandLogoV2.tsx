import React from 'react';

export function BrandLogoV2({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Gold Monogram Crest */}
      <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 flex items-center justify-center shadow-xl shadow-amber-500/20 border border-amber-200/50 group hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-slate-950 fill-current">
          <polygon points="50,10 90,85 10,85" />
          <polygon points="50,26 75,75 25,75" fill="#030712" />
          <polygon points="50,40 64,68 36,68" fill="#F59E0B" />
        </svg>
        <div className="absolute inset-0 rounded-2xl bg-amber-400/10 blur-sm pointer-events-none"></div>
      </div>
      
      <div>
        <div className="flex items-center gap-1.5">
          <span className="font-serif font-bold text-lg text-white tracking-widest leading-none">
            AUREVIA
          </span>
          <span className="font-sans font-black text-[10px] tracking-widest text-amber-400 uppercase bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
            ESTATE
          </span>
        </div>
        <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase block mt-0.5">
          Solar Architecture & Private Estate
        </span>
      </div>
    </div>
  );
}
