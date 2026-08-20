import React from 'react';

interface BrandLogoV2Props {
  variant?: 'full' | 'icon' | 'badge';
  className?: string;
}

export function BrandLogoV2({ variant = 'full', className = '' }: BrandLogoV2Props) {
  if (variant === 'icon') {
    return (
      <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-xl shadow-amber-500/20 border border-amber-300/40 ${className}`}>
        <div className="w-full h-full rounded-[10px] bg-[#000000] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-emerald-500/10" />
          <svg viewBox="0 0 100 100" className="w-5 h-5 text-amber-400 fill-current relative z-10">
            <polygon points="50,10 90,32 90,68 50,90 10,68 10,32" fill="none" stroke="currentColor" strokeWidth="6" />
            <polygon points="50,22 80,72 20,72" fill="#F59E0B" />
            <circle cx="50" cy="52" r="5" fill="#000000" />
          </svg>
        </div>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/90 border border-amber-400/35 text-amber-300 text-[11px] font-medium tracking-wide ${className}`}>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>PV Lager Seesen · Zentrallager Harz</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 p-0.5 shadow-xl shadow-amber-500/20 border border-amber-300/40">
        <div className="w-full h-full rounded-[10px] bg-[#000000] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-emerald-500/10" />
          <svg viewBox="0 0 100 100" className="w-5 h-5 text-amber-400 fill-current relative z-10">
            <polygon points="50,10 90,32 90,68 50,90 10,68 10,32" fill="none" stroke="currentColor" strokeWidth="6" />
            <polygon points="50,22 80,72 20,72" fill="#F59E0B" />
            <circle cx="50" cy="52" r="5" fill="#000000" />
          </svg>
        </div>
      </div>

      <div>
        <div className="flex items-baseline gap-1.5">
          <span className="font-sans font-black text-lg text-white tracking-tight leading-none uppercase">
            PV Lager<span className="text-amber-400 font-black ml-1">Seesen</span>
          </span>
          <span className="text-emerald-400 font-sans font-semibold text-[10px] tracking-wider uppercase bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">
            Harz
          </span>
        </div>
        <span className="text-[10px] text-slate-400 tracking-wide font-normal block mt-0.5">
          RIAL Energy GmbH · Zentrallager
        </span>
      </div>
    </div>
  );
}
