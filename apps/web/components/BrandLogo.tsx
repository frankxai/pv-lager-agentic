import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'icon' | 'pvlager' | 'dual';
  className?: string;
}

export function BrandLogo({ variant = 'full', className = '' }: BrandLogoProps) {
  if (variant === 'pvlager') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <img
          src="https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png"
          alt="PV Lager Seesen"
          className="h-8 w-auto filter drop-shadow-md"
        />
        <div className="flex flex-col">
          <span className="font-mono font-bold text-xs tracking-wider text-slate-100 uppercase">PV LAGER</span>
          <span className="text-[9px] font-mono text-emerald-400 tracking-widest uppercase">Zentrallager Seesen</span>
        </div>
      </div>
    );
  }

  if (variant === 'icon') {
    return (
      <div className={`relative w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-500/20 border border-amber-300/40 ${className}`}>
        <svg viewBox="0 0 100 100" className="w-6 h-6 text-slate-950 fill-current">
          <polygon points="50,12 90,85 10,85" />
          <polygon points="50,28 75,75 25,75" fill="#0F172A" />
          <polygon points="50,42 63,68 37,68" fill="#F59E0B" />
        </svg>
      </div>
    );
  }

  if (variant === 'dual') {
    return (
      <div className={`flex items-center gap-6 ${className}`}>
        <div className="flex items-center gap-3">
          <img
            src="https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png"
            alt="PV Lager Seesen"
            className="h-8 w-auto"
          />
          <div>
            <span className="font-sans font-black text-base text-white tracking-wider block leading-none uppercase">
              PV LAGER<span className="text-amber-400 font-bold text-xs ml-1">SEESEN</span>
            </span>
            <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase block mt-0.5">Zentrallager Harz</span>
          </div>
        </div>

        <div className="h-6 w-px bg-white/20 hidden sm:block" />

        <div className="hidden sm:flex items-center gap-2">
          <img
            src="https://le-cdn.website-editor.net/s/40ba10645f184fabbd7e8191cbbeb355/dms3rep/multi/opt/logo_website_w-1920w.png"
            alt="SolarCarport.tech"
            className="h-6 w-auto"
          />
          <div className="flex flex-col">
            <span className="font-mono font-bold text-xs text-slate-200">SOLARCARPORT.TECH</span>
            <span className="text-[8px] font-mono text-emerald-400 uppercase tracking-wider">RIAL Energy</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png"
        alt="PV Lager Seesen"
        className="h-9 w-auto"
      />
      <div>
        <span className="font-sans font-black text-lg text-white tracking-wider block leading-none uppercase">
          PV LAGER<span className="bg-gradient-to-r from-amber-400 to-amber-200 bg-clip-text text-transparent font-bold text-sm ml-1">SEESEN</span>
        </span>
        <span className="text-[10px] font-mono text-amber-400/90 tracking-widest uppercase block mt-1">
          RIAL Energy GmbH · Harz
        </span>
      </div>
    </div>
  );
}
