import React from 'react';

export function BrandLogoV2({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Minimal Gold Monogram Emblem */}
      <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/10 border border-amber-300/30 group-hover:scale-105 transition-transform duration-300">
        <svg viewBox="0 0 100 100" className="w-5 h-5 text-slate-950 fill-current">
          <polygon points="50,12 88,82 12,82" />
          <polygon points="50,28 73,73 27,73" fill="#000000" />
          <polygon points="50,42 63,67 37,67" fill="#F59E0B" />
        </svg>
      </div>
      
      <div>
        <div className="flex items-center gap-2">
          <span className="font-serif text-base font-semibold text-white tracking-tight leading-none">
            Aurevia Solar
          </span>
          <span className="text-[10px] font-sans font-medium text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            Estate
          </span>
        </div>
        <span className="text-[10px] font-sans text-slate-400 font-normal block mt-0.5">
          Zentrallager Seesen &amp; Solar Architektur
        </span>
      </div>
    </div>
  );
}
