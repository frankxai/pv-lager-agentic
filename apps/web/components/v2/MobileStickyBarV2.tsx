import React from 'react';
import Link from 'next/link';
import { Zap, PhoneCall } from 'lucide-react';

export function MobileStickyBarV2() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#000000]/95 backdrop-blur-2xl border-t border-white/10 p-3 lg:hidden shadow-2xl">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <a
          href="tel:+49538198000"
          className="flex-1 py-3 px-4 rounded-full bg-slate-900 text-slate-200 font-medium text-xs flex items-center justify-center gap-2 border border-white/10"
        >
          <PhoneCall className="w-4 h-4 text-amber-400" />
          <span>Hotline Seesen</span>
        </a>
        <Link
          href="/v2#configurator"
          className="flex-1 py-3 px-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-lg shadow-amber-500/20"
        >
          <Zap className="w-4 h-4 fill-current" />
          <span>Konfigurator</span>
        </Link>
      </div>
    </div>
  );
}
