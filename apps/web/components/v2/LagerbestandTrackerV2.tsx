'use client';

import React from 'react';
import { Warehouse, CircleCheck, Clock, ArrowRight } from 'lucide-react';

export function LagerbestandTrackerV2() {
  const inventory = [
    {
      name: 'Trina Vertex S+ Bifazial Glas-Glas 440W',
      category: 'Bifaziales PV Modul',
      stock: 1420,
      price: '89 € / Modul',
      badge: 'Sofort Lieferbar',
      img: '/images/pvlager/fab3ae_52b99309068b4d81af21193f2c00f9eb.png',
      spedition: '24-48 Std. Spedition',
    },
    {
      name: 'Zola Pod Heavy-Duty Alu 100x100mm Kits',
      category: 'Alu Carport Bausatz',
      stock: 18,
      price: 'ab 2.190 €',
      badge: 'Harz Schneelast 3 Statik',
      img: '/images/pvlager/fab3ae_08c181c1910c4e4d91466a56650493dd.png',
      spedition: '3-5 Werktage',
    },
    {
      name: 'BYD Battery-Box Premium HVS Speicher',
      category: 'Hochvolt Batteriespeicher',
      stock: 34,
      price: '3.890 €',
      badge: '100% Lagerware',
      img: '/images/pvlager/fab3ae_e20b32fb926943c4ada6b544d378579c.png',
      spedition: '24-48 Std.',
    },
    {
      name: 'Panasonic Aquarea T-CAP 9kW Wärmepumpen',
      category: 'Luft-Wasser Wärmepumpe',
      stock: 12,
      price: '4.250 €',
      badge: 'Heizung bis -20°C',
      img: '/images/pvlager/fab3ae_6c1ad0456761472ab5346a2b2310dd83.png',
      spedition: '3 Werktage',
    },
  ];

  return (
    <div id="lagerbestand" className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-[#030712] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold flex items-center gap-1.5">
              <Warehouse className="w-4 h-4" /> Live Lagerbestand Zentrallager Seesen (Harz)
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
              Sofort Verfügbare Photovoltaik-Lagerware
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-mono text-emerald-400 font-bold">Lagerbestand Live Aktiv</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {inventory.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3 hover:border-amber-500/40 transition shadow-xl"
            >
              <div className="relative h-36 rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-500/90 text-slate-950 font-mono text-[10px] font-bold">
                  {item.stock} Stk. auf Lager
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-xs text-white leading-snug">{item.name}</h3>
                <span className="text-amber-400 font-mono font-bold text-xs block">{item.price}</span>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CircleCheck className="w-3.5 h-3.5" />
                  <span>{item.badge}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Spedition: {item.spedition}</span>
                </div>
              </div>

              <a
                href="/v2#configurator"
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center justify-center gap-1 border border-slate-700 transition"
              >
                <span>Reservieren</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
