import React from 'react';

interface BrandLogoV2Props {
  variant?: 'full' | 'icon' | 'badge';
  className?: string;
}

export function BrandLogoV2({ variant = 'full', className = '' }: BrandLogoV2Props) {
  if (variant === 'icon') {
    return (
      <div className={`relative w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#B48E28] to-[#785E1A] p-0.5 shadow-2xl shadow-amber-500/20 border border-amber-300/60 ${className}`}>
        <div className="w-full h-full rounded-[10px] bg-[#070B14] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-emerald-500/10" />
          <svg viewBox="0 0 100 100" className="w-6 h-6 text-amber-300 fill-current relative z-10 filter drop-shadow">
            {/* Royal Sovereign Crest / Architectural Monogram */}
            <path d="M50 8 L88 30 L88 70 L50 92 L12 70 L12 30 Z" fill="none" stroke="currentColor" strokeWidth="4" />
            <polygon points="50,22 75,75 25,75" fill="none" stroke="#F59E0B" strokeWidth="5" />
            <polygon points="50,38 65,70 35,70" fill="#D4AF37" />
            <circle cx="50" cy="52" r="4" fill="#070B14" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0B1220]/90 border border-amber-400/40 text-amber-300 font-mono text-[10px] uppercase tracking-widest ${className}`}>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>AUREVIA SOVEREIGN V2 · SEESEN LOGISTICS</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-2xl shadow-amber-500/25 border border-amber-300/60">
        <div className="w-full h-full rounded-[10px] bg-[#070B14] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-emerald-500/15" />
          <svg viewBox="0 0 100 100" className="w-6 h-6 text-amber-300 fill-current relative z-10">
            <path d="M50 8 L88 30 L88 70 L50 92 L12 70 L12 30 Z" fill="none" stroke="currentColor" strokeWidth="4" />
            <polygon points="50,22 75,75 25,75" fill="none" stroke="#F59E0B" strokeWidth="5" />
            <polygon points="50,38 65,70 35,70" fill="#D4AF37" />
            <circle cx="50" cy="52" r="4" fill="#070B14" />
          </svg>
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif font-black text-2xl text-white tracking-widest leading-none">
            AUREVIA
          </span>
          <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200 bg-clip-text text-transparent font-mono font-extrabold text-xs tracking-widest uppercase">
            SOVEREIGN V2
          </span>
        </div>
        <span className="text-[9px] font-mono text-amber-300/80 tracking-widest uppercase block mt-1">
          RIAL Energy Group · Zentrallager Seesen
        </span>
      </div>
    </div>
  );
}
