import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import Link from 'next/link';
import { MapPin, Award, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Referenzen & Realisierte Bauvorhaben | PV Lager Seesen · RIAL Energy',
  description: 'Solar-Carport und Gewerbepark-Projekte realisiert durch PV Lager Seesen und RIAL Energy GmbH.',
};

export default function V2ReferenzenPage() {
  const projects = [
    {
      title: 'Zola Pod Doppel-Carport mit 8.8 kWp Bifazial',
      location: 'Goslar (Harz)',
      power: '8.8 kWp',
      battery: '10.2 kWh BYD HVS',
      desc: 'Freistehender Doppel-Solarcarport mit 100x100mm Anthrazit-Aluminiumprofilen, ausgelegt für Schneelastzone 3 im Oberharz.',
      image: 'https://images.unsplash.com/photo-1558441719-67450807e909?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Gewerbe-FleetPark mit 16 Stellplätzen & 44kW Ladehub',
      location: 'Braunschweig / Salzgitter',
      power: '64 kWp',
      battery: '40 kWh Gewerbespeicher',
      desc: 'Mitarbeiter- und Flottenüberdachung für mittelständischen Logistiker. VDE-zertifizierte Netzeinspeisung und DC-Schnellladepunkte.',
      image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Solar-Carport mit integrierter RIAL AC/DC Klimatisierung',
      location: 'Seesen (Zentrallager Nähe)',
      power: '12.4 kWp',
      battery: '15 kWh Huawei LUNA',
      desc: 'Einfamilienhaus mit 3-Stellplatz Carport und direkter Sektorkopplung zur autarken Sommerkühlung und Winterbeheizung.',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 pb-24">
      <NavV2 />
      <main className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto border-b border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs text-amber-300 font-sans">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Erfolgreich realisierte Bauprojekte</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white">
            Referenzen in Niedersachsen &amp; Harz
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Über 120 erfolgreich montierte Solar-Carports und gewerbliche PV-Überdachungen sprechen für die statische und handwerkliche Qualität von PV Lager Seesen und RIAL Energy GmbH.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-slate-950/80 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group hover:border-amber-500/30 transition">
              <div className="relative h-56 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur border border-white/10 text-xs text-amber-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{p.location}</span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-lg text-white group-hover:text-amber-300 transition">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="pt-4 border-t border-white/10 flex justify-between text-xs font-mono">
                  <span className="text-amber-300">{p.power}</span>
                  <span className="text-emerald-400">{p.battery}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <Link
            href="/v2#configurator"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-semibold text-xs transition shadow-xl shadow-amber-500/20"
          >
            <span>Jetzt eigenes Projekt konfigurieren</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-12 px-4 max-w-6xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
