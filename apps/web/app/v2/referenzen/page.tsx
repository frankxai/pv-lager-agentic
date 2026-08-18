import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { ShieldCheck, MapPin, Zap } from 'lucide-react';

export const metadata = {
  title: 'Referenzen | Aurevia Manor Solar',
  description: 'Gebaute Solar-Carports, Anwesen & Gewerbe-Überdachungen.',
};

export default function V2ReferenzenPage() {
  const caseStudies = [
    {
      title: 'Zola Manor Doppel-Carport',
      location: 'Privatanwesen Goslar (Harz)',
      specs: '7.83 kWp · 18 Trina Glas-Glas Module · Schneelastzone 3',
      desc: 'Bespoke Doppel-Carport mit integrierter LED-Beleuchtung und 10 kWh BYD Speicher zur Vollversorgung von zwei Elektrofahrzeugen.',
      img: '/images/estate-mansion.jpg',
    },
    {
      title: 'Executive 100x100mm Alu-Profil Bauwerk',
      location: 'Villa Braunschweig',
      specs: '6.0 x 6.0 m · 11 kW Wallbox · Unsichtbare Entwässerung',
      desc: 'Freistehende Aluminium-Konstruktion mit pulverbeschichteter Oberfläche in Anthrazit DB 703 und Smart-Meter Anbindung.',
      img: '/images/luxury-carport.jpg',
    },
    {
      title: 'Bifaziales Glas-Glas Terrassendach',
      location: 'Wohnresidenz Hannover',
      specs: 'Transluzente N-Type Module · +25% Mehrertrag',
      desc: 'Lichtdurchflutetes Terrassendach mit regendichten Gummidichtungen und direktem Eigenverbrauch für Wärmepumpe.',
      img: '/images/luxury-terrace.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-sans text-amber-400 font-medium tracking-wide">
            Realisierte Projekte &amp; Architektur
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Ausgewählte Referenzen &amp; Fallstudien
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Einblicke in realisierte Privatanwesen und Gewerbeprojekte. Jedes Bauwerk statisch berechnet und gefertigt aus massivem Aluminium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl hover:border-amber-500/30 transition flex flex-col justify-between group"
            >
              <div className="relative h-64 overflow-hidden bg-black">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-white/10 text-[11px] font-sans text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition">
                    {item.title}
                  </h3>
                  <span className="text-xs text-amber-300/90 font-mono block">
                    {item.specs}
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal pt-1">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-sans">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Statisch abgenommen</span>
                  </span>
                  <Link href="/v2#configurator" className="text-amber-400 hover:text-amber-300 font-medium">
                    Ähnlich planen →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-10 px-4 max-w-7xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
