import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { HeroV2 } from '@/components/v2/HeroV2';
import { LagerbestandTrackerV2 } from '@/components/v2/LagerbestandTrackerV2';
import { ConfiguratorV2 } from '@/components/v2/ConfiguratorV2';
import { AutarkieCalculatorV2 } from '@/components/v2/AutarkieCalculatorV2';
import { DigitalTwinViewerV2 } from '@/components/v2/DigitalTwinViewerV2';
import { FleetParkPlannerV2 } from '@/components/v2/FleetParkPlannerV2';
import { MobileStickyBarV2 } from '@/components/v2/MobileStickyBarV2';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';

export const metadata = {
  title: 'Aurevia Solar | V2 Luxury Solar Carports & Zentrallager Seesen',
  description: 'Ultra-exclusive Solar Carport Architecture & PV Zentrallager Seesen (Harz). Statisch geprüfte Alu-Profilsysteme, bifaziale Glas-Glas PV-Module & 25-Jahre Ertragsrechnung.',
};

export default function V2Page() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24 lg:pb-10">
      <NavV2 />

      <main className="space-y-24 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroV2 />

        {/* Certified Partners */}
        <section className="border-y border-white/10 py-8 bg-slate-950/80 backdrop-blur rounded-2xl px-6">
          <p className="text-center text-xs font-sans text-slate-400 mb-5 font-normal">
            Zertifizierte Komponenten &amp; offizielle Industriepartner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-80 hover:opacity-100 transition">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500 text-slate-950 font-serif font-bold flex items-center justify-center text-sm">
                A
              </div>
              <span className="font-serif font-bold text-base text-white tracking-tight">
                Aurevia<span className="text-amber-400 font-sans text-xs ml-1 font-normal">Solar</span>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://static.wixstatic.com/media/fab3ae_2a52989356354450890bfae642c49cef~mv2.png" alt="PV Lager Seesen Logo" className="h-6 w-auto" />
              <span className="text-xs font-medium text-slate-200 font-sans">PV Lager Seesen</span>
            </div>
            <div className="flex items-center gap-2">
              <img src="https://le-cdn.website-editor.net/s/40ba10645f184fabbd7e8191cbbeb355/dms3rep/multi/opt/logo_website_w-1920w.png" alt="SolarCarport.tech Logo" className="h-6 w-auto" />
              <span className="text-xs font-medium text-slate-200 font-sans">SolarCarport.tech</span>
            </div>
            <span className="text-xs font-medium text-slate-300 font-sans">Trina Solar</span>
            <span className="text-xs font-medium text-slate-300 font-sans">Huawei</span>
            <span className="text-xs font-medium text-slate-300 font-sans">BYD Battery</span>
            <span className="text-xs font-medium text-slate-300 font-sans">Panasonic</span>
          </div>
        </section>

        <LagerbestandTrackerV2 />
        <ConfiguratorV2 />
        <AutarkieCalculatorV2 />
        <DigitalTwinViewerV2 />
        <FleetParkPlannerV2 />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#000000] py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24 text-xs text-slate-400 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/10 pb-8">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold text-base text-white tracking-tight">Aurevia Solar</span>
            <span className="text-xs font-sans text-amber-400">v2 Luxury Edition</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-sans text-xs">
            <Link href="/v2/impressum" className="hover:text-amber-400">Impressum</Link>
            <Link href="/v2/datenschutz" className="hover:text-amber-400">Datenschutz</Link>
            <Link href="/v2/agb" className="hover:text-amber-400">AGB</Link>
            <Link href="/v2/widerruf" className="hover:text-amber-400">Widerruf</Link>
          </div>
        </div>
        <div className="text-center font-sans text-xs text-slate-500">
          © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city} ({COMPANY.region}). Alle Rechte vorbehalten.
        </div>
      </footer>

      <MobileStickyBarV2 />
    </div>
  );
}
