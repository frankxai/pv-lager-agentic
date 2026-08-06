import React from 'react';

interface BrandLogoV2Props {
  variant?: 'full' | 'icon' | 'badge';
  className?: string;
}

export function BrandLogoV2({ variant = 'full', className = '' }: BrandLogoV2Props) {
  if (variant === 'icon') {
    return (
      <div className={`relative w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-2xl shadow-amber-500/25 border border-amber-300/50 ${className}`}>
        <div className="w-full h-full rounded-[14px] bg-[#070B14] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-emerald-500/15" />
          <svg viewBox="0 0 100 100" className="w-6 h-6 text-amber-300 fill-current relative z-10 filter drop-shadow">
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
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1220]/90 border border-amber-400/35 text-amber-300 text-[11px] font-medium tracking-wide ${className}`}>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Aurevia Sovereign · Zentrallager Seesen</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-2xl shadow-amber-500/25 border border-amber-300/50">
        <div className="w-full h-full rounded-[14px] bg-[#070B14] flex items-center justify-center relative overflow-hidden">
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
        <div className="flex items-baseline gap-2">
          <span className="font-serif font-bold text-2xl text-white tracking-tight leading-none">
            Aurevia
          </span>
          <span className="text-amber-400 font-sans font-semibold text-xs tracking-widest uppercase">
            Sovereign
          </span>
        </div>
        <span className="text-[10px] text-slate-400 tracking-wide font-normal block mt-1">
          RIAL Energy GmbH · Harz
        </span>
      </div>
    </div>
  );
}
