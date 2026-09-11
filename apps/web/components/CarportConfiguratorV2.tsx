'use client';

import React, { useState } from 'react';
import {
  Zap,
  ShieldCheck,
  Award,
  CheckCircle2,
  Sliders,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Building2,
  Car,
  Layers,
  Thermometer,
  FileCheck,
  PhoneCall
} from 'lucide-react';

interface CarportConfiguratorV2Props {
  onCompleteLead?: (data: any) => void;
}

export function CarportConfiguratorV2({ onCompleteLead }: CarportConfiguratorV2Props) {
  const [step, setStep] = useState<number>(1);

  // Configuration Choices
  const [carportType, setCarportType] = useState<'doppel' | 'einzel' | 'terrasse' | 'flotte'>('doppel');
  const [finish, setFinish] = useState<'obsidian' | 'champagne' | 'silver'>('obsidian');
  const [moduleTech, setModuleTech] = useState<'bifacial' | 'translucent' | 'monocrystal'>('bifacial');
  const [storageCapacity, setStorageCapacity] = useState<'10kwh' | '15kwh' | '20kwh' | 'none'>('15kwh');
  const [hasClimate, setHasClimate] = useState<boolean>(true);

  // Customer Contact Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Compute Computed Metrics
  const baseKwp = carportType === 'doppel' ? 10.8 : carportType === 'einzel' ? 5.4 : carportType === 'terrasse' ? 8.2 : 36.0;
  const kwp = Math.round(baseKwp * 10) / 10;
  const annualKwh = Math.round(kwp * 960);
  const autarkyPercent = storageCapacity === '20kwh' ? 96 : storageCapacity === '15kwh' ? 89 : storageCapacity === '10kwh' ? 78 : 52;
  const basePrice = carportType === 'doppel' ? 3490 : carportType === 'einzel' ? 2190 : carportType === 'terrasse' ? 2890 : 12900;
  const storagePrice = storageCapacity === '20kwh' ? 6800 : storageCapacity === '15kwh' ? 4900 : storageCapacity === '10kwh' ? 3890 : 0;
  const climatePrice = hasClimate ? 899 : 0;
  const totalPrice = basePrice + storagePrice + climatePrice;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (onCompleteLead) {
      onCompleteLead({
        carportType,
        finish,
        moduleTech,
        storageCapacity,
        hasClimate,
        kwp,
        totalPrice,
        name,
        email,
        phone,
        location
      });
    }
  };

  return (
    <div className="bg-[#070B14] border border-amber-500/35 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-2xl relative overflow-hidden">
      {/* Background Subtle Shimmer */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-500/10 via-emerald-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Header & Step Indicator */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-amber-500/20 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>3D Sovereign Configurator V2</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-wide">
            Ihre Anwesens-Autarkie in 60 Sekunden
          </h2>
        </div>

        {/* Step Progress Pills */}
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              onClick={() => setStep(s)}
              className={`w-9 h-9 rounded-xl font-mono text-xs font-bold transition flex items-center justify-center border ${
                step === s
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 border-amber-300 shadow-lg scale-105'
                  : step > s
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* STEP CONTENT */}
      {step === 1 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl text-white">Schritt 1: Wählen Sie die Bauform Ihres Anwesens</h3>
            <p className="text-xs text-slate-300">Statisch kalkuliert für Harzer Schneelastzone 3 und freistehende oder angebundene Montage.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: 'doppel', name: 'Zola Pod Doppel-Carport', desc: 'Für 2 SUV / Elektrofahrzeuge (6x6m)', price: '3.490 €', icon: Car },
              { id: 'einzel', name: 'Zola Pod Einzel-Carport', desc: 'Für 1 PKW (3.5x6m)', price: '2.190 €', icon: Car },
              { id: 'terrasse', name: 'Smart Bismuth Terrassendach', desc: 'Transluzentes Glas-Glas Dach (4x6m)', price: '2.890 €', icon: Layers },
              { id: 'flotte', name: 'B2B Multi-Bay Gewerbepark', desc: 'Ab 4 bis 50 Stellplätze mit EV-Laden', price: 'ab 12.900 €', icon: Building2 },
            ].map((opt) => {
              const Icon = opt.icon;
              return (
                <div
                  key={opt.id}
                  onClick={() => setCarportType(opt.id as any)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-4 ${
                    carportType === opt.id
                      ? 'bg-slate-900 border-amber-400/80 ring-2 ring-amber-500/40 shadow-2xl'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    {carportType === opt.id && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-white text-base">{opt.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{opt.desc}</p>
                  </div>
                  <span className="font-mono font-bold text-sm text-amber-300 pt-2 border-t border-slate-800">{opt.price}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl text-white">Schritt 2: Aluminium-Tragwerk (100x100mm) & Veredelung</h3>
            <p className="text-xs text-slate-300">Gezogene Aluminium-Profile mit 30 Jahren Garantie gegen Verzug, Rost und Schneelast.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'obsidian', name: 'Obsidian Eloxal (Schwarz)', desc: 'Mattschwarze Anodisierung für moderne Villenarchitektur.' },
              { id: 'champagne', name: 'Champagne Bismuth Eloxal', desc: 'Edle Champagner-Gold Veredelung mit Metallic-Effekt.' },
              { id: 'silver', name: 'Aluminium Natur Gebürstet', desc: 'Klassisches Technisches Silber für zeitlose Eleganz.' },
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => setFinish(opt.id as any)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  finish === opt.id
                    ? 'bg-slate-900 border-amber-400/80 ring-2 ring-amber-500/40 shadow-2xl'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs font-mono uppercase text-slate-400">Oberfläche</span>
                  {finish === opt.id && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                </div>
                <h4 className="font-serif font-bold text-white text-base">{opt.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl text-white">Schritt 3: Photovoltaik Glas-Glas Modultechnologie</h3>
            <p className="text-xs text-slate-300">Lichtdurchlässig oder vollflächig belegt mit N-Type i-TOPCon Technologie für 25% Mehrertrag.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: 'bifacial', name: 'Trina Vertex S+ 440W Bifazial', desc: 'Doppelglas-Modul mit Rückseiten-Lichteinfall für maximalen Tagesertrag.', tag: 'Bestseller' },
              { id: 'translucent', name: 'Bismuth Translucent (40% Licht)', desc: 'Teiltransparent für angenehmen Schattenwurf auf Terrassen.', tag: 'Architektur' },
              { id: 'monocrystal', name: 'Full-Black Monokristallin 445W', desc: 'Vollflächig schwarzes Glas für maximale optische Homogenität.', tag: 'Executive' },
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => setModuleTech(opt.id as any)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  moduleTech === opt.id
                    ? 'bg-slate-900 border-amber-400/80 ring-2 ring-amber-500/40 shadow-2xl'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono uppercase font-bold border border-emerald-500/40">
                    {opt.tag}
                  </span>
                  {moduleTech === opt.id && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                </div>
                <h4 className="font-serif font-bold text-white text-base">{opt.name}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl text-white">Schritt 4: Stromspeicher & AC/DC Direct Solar Klima</h3>
            <p className="text-xs text-slate-300">Modulare BYD Speicher und speichergekoppelte Solar-Klimasysteme für 95%+ Autarkie.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { id: '15kwh', name: 'BYD Battery-Box 15.3 kWh', desc: 'Empfohlen für Doppel-Carport & Wärmepumpe', price: '+4.900 €' },
              { id: '20kwh', name: 'BYD Battery-Box 20.4 kWh', desc: 'Maximale Autarkie für große Anwesen', price: '+6.800 €' },
              { id: '10kwh', name: 'BYD Battery-Box 10.2 kWh', desc: 'Basis-Speicher für Nachtverbrauch', price: '+3.890 €' },
              { id: 'none', name: 'Ohne Speicher', desc: 'Nur Netzeinspeisung & Eigenverbrauch', price: '0 €' },
            ].map((opt) => (
              <div
                key={opt.id}
                onClick={() => setStorageCapacity(opt.id as any)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                  storageCapacity === opt.id
                    ? 'bg-slate-900 border-amber-400/80 ring-2 ring-amber-500/40 shadow-2xl'
                    : 'bg-slate-950/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono uppercase text-slate-400">Speichersystem</span>
                  {storageCapacity === opt.id && <CheckCircle2 className="w-4 h-4 text-amber-400" />}
                </div>
                <h4 className="font-serif font-bold text-white text-sm">{opt.name}</h4>
                <p className="text-[11px] text-slate-400">{opt.desc}</p>
                <span className="font-mono font-bold text-xs text-amber-300 pt-2 border-t border-slate-800">{opt.price}</span>
              </div>
            ))}
          </div>

          {/* Optional Direct PV Climate Toggle */}
          <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <Thermometer className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-white text-sm">AC/DC Direct-PV Solar Klimaanlage (+899 €)</h4>
                <p className="text-xs text-slate-400">Betreibt Kühlung & Heizung im Sommer ohne Wechselrichter-Verluste.</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setHasClimate(!hasClimate)}
              className={`px-4 py-2 rounded-xl font-mono text-xs font-bold transition border ${
                hasClimate
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-slate-900 text-slate-500 border-slate-800'
              }`}
            >
              {hasClimate ? 'Inklusive' : 'Hinzufügen'}
            </button>
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6">
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-xl text-white">Schritt 5: ERP-Stückliste & VIP Bau-Passport Anfordern</h3>
            <p className="text-xs text-slate-300">Erhalten Sie Ihre fertige Stückliste inkl. Statiknachweis & Lagerbestand Seesen innerhalb von 2 Stunden.</p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Ihr Vor- & Nachname</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Dr. Maximilian von Berg"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Ihre E-Mail-Adresse</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="maximilian@anwesen-harz.de"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Telefonnummer für Rückfragen</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+49 171 1234567"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">Standort / PLZ des Anwesens</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="38700 Braunlage / Harz"
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wider shadow-2xl shadow-amber-500/30 transition flex items-center justify-center gap-2 border border-amber-300/40"
                >
                  <Zap className="w-5 h-5 fill-current" />
                  <span>Kostenfreie ERP-Stückliste & Bau-Passport Anfordern</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-slate-950 flex items-center justify-center mx-auto text-2xl font-black">
                <FileCheck className="w-7 h-7" />
              </div>
              <h4 className="font-serif font-bold text-white text-2xl">Vielen Dank für Ihre Konfiguration!</h4>
              <p className="text-xs text-slate-300 max-w-lg mx-auto leading-relaxed">
                Ihre ERP-Stückliste wurde an unsere Ingenieure im Zentrallager Seesen übermittelt. Wir senden Ihnen den geprüften Bau-Passport inklusive Schneelast-Statik an <strong className="text-amber-300">{email}</strong>.
              </p>
            </div>
          )}
        </div>
      )}

      {/* LIVE CALCULATED SOVEREIGN METRICS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-950 border border-slate-800">
        <div>
          <span className="text-[10px] font-mono uppercase text-slate-400 block">Systemleistung</span>
          <span className="font-serif font-bold text-xl text-white">{kwp} kWp</span>
          <span className="text-[10px] text-slate-500 block">{annualKwh} kWh / Jahr</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase text-slate-400 block">Erwartete Autarkie</span>
          <span className="font-serif font-bold text-xl text-emerald-400">{autarkyPercent}%</span>
          <span className="text-[10px] text-slate-500 block">Netzunabhängigkeit</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase text-slate-400 block">Statik Zertifikat</span>
          <span className="font-serif font-bold text-xl text-amber-300">Schneelast 3</span>
          <span className="text-[10px] text-slate-500 block">Harz Norm DIN 1055</span>
        </div>

        <div>
          <span className="text-[10px] font-mono uppercase text-slate-400 block">Richtpreis Ab Lager</span>
          <span className="amber-gradient-text font-bold font-mono text-xl">{totalPrice.toLocaleString()} €</span>
          <span className="text-[10px] text-emerald-400 block">0% MwSt. (§12 UStG)</span>
        </div>
      </div>

      {/* FOOTER STEP NAVIGATION */}
      <div className="flex justify-between items-center pt-4 border-t border-slate-800">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs border border-slate-700 transition"
          >
            ← Zurück
          </button>
        ) : (
          <div />
        )}

        {step < 5 && (
          <button
            onClick={() => setStep(step + 1)}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg transition flex items-center gap-1.5"
          >
            <span>Nächster Schritt</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
