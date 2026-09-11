'use client';

import React, { useState } from 'react';
import { Warehouse, CheckCircle2, ShieldCheck, Clock, ArrowRight, Package } from 'lucide-react';
import { pvlagerImages } from '../lib/pvlager-media';

export function LagerbestandTracker() {
  const stockItems = [
    {
      name: "Trina Vertex S+ Bifazial Glas-Glas 440W",
      stock: 1420,
      unit: "Stk. auf Lager",
      status: "Sofort lieferbar",
      dispatchTime: "24-48 Std. Spedition",
      img: pvlagerImages.bifacialModules,
      price: "89 € / Modul"
    },
    {
      name: "Zola Pod Heavy-Duty Alu 100x100mm Kits",
      stock: 18,
      unit: "Komplett-Bausätze",
      status: "Harz Schneelast 3 Statik",
      dispatchTime: "3-5 Werktage",
      img: pvlagerImages.carportKitDouble,
      price: "ab 2.190 €"
    },
    {
      name: "BYD Battery-Box Premium HVS Speicher",
      stock: 34,
      unit: "Speicher-Einheiten",
      status: "100% Lagerware",
      dispatchTime: "24-48 Std.",
      img: pvlagerImages.storageBatteryBYD,
      price: "3.890 €"
    },
    {
      name: "Panasonic Aquarea T-CAP 9kW Wärmepumpen",
      stock: 12,
      unit: "Außengeräte",
      status: "Heizung bis -20°C",
      dispatchTime: "3 Werktage",
      img: pvlagerImages.heatPumpPanasonic,
      price: "4.250 €"
    }
  ];

  return (
    <div id="lagerbestand" className="w-full max-w-7xl mx-auto my-12 px-4 sm:px-6">
      <div className="bg-[#080C14] border border-amber-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono uppercase text-amber-400 tracking-widest font-bold flex items-center gap-1.5">
              <Warehouse className="w-4 h-4" /> Live Lagerbestand Zentrallager Seesen (Harz)
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white mt-1">
              Verfügbare Photovoltaik-Lagerware
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-mono text-emerald-400 font-bold">Lagerbestand Aktiv Aktualisiert</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stockItems.map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between space-y-3 hover:border-amber-500/40 transition shadow-xl"
            >
              <div className="relative h-36 rounded-xl overflow-hidden border border-white/10 bg-slate-950">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded bg-emerald-500/90 text-slate-950 font-mono text-[10px] font-bold">
                  {item.stock} {item.unit}
                </div>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-xs text-white leading-snug">{item.name}</h3>
                <span className="amber-gradient-text font-mono font-bold text-xs block">{item.price}</span>
              </div>

              <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{item.status}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Spedition: {item.dispatchTime}</span>
                </div>
              </div>

              <a
                href="#configurator"
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
