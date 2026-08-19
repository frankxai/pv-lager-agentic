import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { ShopCatalogV2 } from '@/components/v2/ShopCatalogV2';
import { COMPANY } from '@/lib/company';
import { ShoppingBag, ShieldCheck, Truck, Warehouse, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Hardware Großhandel & Solar-Carport Shop | Aurevia Manor Seesen',
  description: 'Bifaziale PV-Module, Zola Pod Solar-Carport Kits, Speicher & Inverter direkt ab Zentrallager Seesen (Harz).',
};

export default function V2ShopPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24">
      <NavV2 />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Shop Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs text-amber-300 font-sans">
            <Warehouse className="w-4 h-4 text-amber-400" />
            <span>Zentrallager Seesen (Harz) · Sofort lieferbare Hardware</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Solar-Hardware &amp; Bausatz Großhandel
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Direktbezug ohne Zwischenhändler. B2C-Endkunden profitieren von <strong className="text-emerald-400">0% MwSt.</strong> nach § 12 (3) UStG. B2B-Installateure erhalten Mengenstaffeln ab 1 Palette.
          </p>
        </div>

        {/* Value Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-sans">
          <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <Truck className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <strong className="text-white block font-medium">24–48h Bereitstellung</strong>
              <span className="text-slate-400 text-[11px]">Direktversand ab Seesen</span>
            </div>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <strong className="text-white block font-medium">Harz Schneelast 3</strong>
              <span className="text-slate-400 text-[11px]">DIN EN 1991 Typenstatik</span>
            </div>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <strong className="text-white block font-medium">0% MwSt. Befreit</strong>
              <span className="text-slate-400 text-[11px]">Für private Wohngebäude</span>
            </div>
          </div>

          <div className="bg-slate-950/80 border border-white/10 rounded-2xl p-4 flex items-center gap-3">
            <Warehouse className="w-5 h-5 text-amber-300 shrink-0" />
            <div>
              <strong className="text-white block font-medium">Click &amp; Collect</strong>
              <span className="text-slate-400 text-[11px]">Abholung im Zentrallager</span>
            </div>
          </div>
        </div>

        {/* Main Catalog with Live Cart Drawer */}
        <ShopCatalogV2 />
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
