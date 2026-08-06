'use client';

import React, { useState } from 'react';
import { Warehouse, CircleCheck, Clock, ArrowRight, X, ShieldCheck, Check } from 'lucide-react';

export function LagerbestandTrackerV2() {
  const [reservationItem, setReservationItem] = useState<string | null>(null);

  const inventory = [
    {
      name: 'Trina Vertex S+ Bifazial Glas-Glas 440W',
      category: 'Bifaziales PV Modul',
      stock: 1420,
      price: '89 € / Modul',
      badge: 'Sofort lieferbar',
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
    <>
      <div id="lagerbestand" className="w-full max-w-7xl mx-auto my-16 px-4 sm:px-6">
        <div className="bg-[#000000] border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
            <div>
              <span className="text-xs font-sans uppercase text-amber-400 tracking-widest font-medium flex items-center gap-2">
                <Warehouse className="w-4 h-4" /> Live Lagerbestand Zentrallager Seesen (Harz)
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
                Sofort verfügbare Photovoltaik-Lagerware
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-sans text-emerald-400 font-medium">Lagerbestand live aktiv</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {inventory.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-white/10 rounded-3xl p-5 flex flex-col justify-between space-y-4 hover:border-amber-500/30 transition shadow-xl group"
              >
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white/10 bg-black">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                  <div className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-sans text-xs font-semibold">
                    {item.stock} Stk. auf Lager
                  </div>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-bold text-sm text-white leading-snug">{item.name}</h3>
                  <span className="text-amber-300 font-mono font-semibold text-xs block">{item.price}</span>
                </div>

                <div className="pt-3 border-t border-white/10 text-xs text-slate-400 space-y-1.5 font-sans">
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <CircleCheck className="w-3.5 h-3.5" />
                    <span>{item.badge}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Spedition: {item.spedition}</span>
                  </div>
                </div>

                <button
                  onClick={() => setReservationItem(item.name)}
                  className="w-full py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium text-xs flex items-center justify-center gap-1.5 border border-white/10 transition cursor-pointer"
                >
                  <span>Komponente reservieren</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation Modal */}
      {reservationItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-slate-950 border border-white/10 rounded-3xl p-8 max-w-md w-full space-y-6 shadow-2xl relative">
            <button onClick={() => setReservationItem(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white p-2">
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-sans text-amber-400 font-medium block">Direktreservierung Zentrallager</span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">{reservationItem}</h3>
              <p className="text-xs text-slate-400 mt-2">
                Sichern Sie sich diese Ware für 48 Stunden unverbindlich ab Zentrallager Seesen (Harz).
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(`Vielen Dank! ${reservationItem} wurde erfolgreich für 48 Std. reserviert.`);
                setReservationItem(null);
              }}
              className="space-y-3"
            >
              <input
                type="text"
                required
                placeholder="Ihr Name..."
                className="w-full px-5 py-3.5 rounded-full bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
              />
              <input
                type="email"
                required
                placeholder="E-Mail Adresse..."
                className="w-full px-5 py-3.5 rounded-full bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
              />
              <input
                type="tel"
                required
                placeholder="Telefonnummer..."
                className="w-full px-5 py-3.5 rounded-full bg-slate-900 border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-semibold text-xs transition shadow-xl shadow-amber-500/20"
              >
                Kostenfrei &amp; unverbindlich reservieren
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
