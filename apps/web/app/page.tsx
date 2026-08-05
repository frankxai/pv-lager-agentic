'use client';

import React, { useState } from 'react';
import { REAL_PRODUCT_CATALOG, ProductItem } from '@/lib/stock-data';
import { Truck, CheckCircle2, Shield, Package, Wrench, PhoneCall, Zap } from 'lucide-react';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [plz, setPlz] = useState('');
  const [projectType, setProjectType] = useState('carport');
  const [budget, setBudget] = useState('12k-25k');
  const [submitting, setSubmitting] = useState(false);
  const [submittedDossier, setSubmittedDossier] = useState<any>(null);

  const filteredCatalog = activeCategory === 'all'
    ? REAL_PRODUCT_CATALOG
    : REAL_PRODUCT_CATALOG.filter(p => p.category === activeCategory);

  const handleSubmitDiagnostic = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/quiz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          postalCode: plz,
          projectType,
          budgetRange: budget,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSubmittedDossier(data.dossier);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-16 py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 1. HERO SECTION */}
      <section className="text-center space-y-6 pt-6 pb-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-semibold">
          <Truck className="w-3.5 h-3.5" /> Lagernde Ware · Sofort Verfügbar in Seesen (Harz)
        </div>
        
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
          Photovoltaik & Solar-Carports direkt ab Lager. <br className="hidden sm:inline" />
          <span className="text-amber-400">Auf Wunsch mit schlüsselfertiger Montage.</span>
        </h1>
        
        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Spezialist für Bifaziale Trina Glas-Glas Module, Zola Solar-Carports, AC/DC Solar Klimaanlagen und Wärmepumpen. Großhandelspreise für Heimwerker & Handwerk – schlüsselfertige Abwicklung durch VR Gebäudetechnik.
        </p>

        {/* Feature Highlights */}
        <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <Package className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Zentrallager Seesen</div>
              <div className="text-[11px] text-slate-400">Sofortige Abholung / Versand</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <Wrench className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">VR Gebäudetechnik</div>
              <div className="text-[11px] text-slate-400">Montage & Netzprüfung</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <Shield className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">0% MwSt. Regelung</div>
              <div className="text-[11px] text-slate-400">Gemäß § 12 (3) UStG</div>
            </div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
            <Zap className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="text-xs font-bold text-white">Direct-PV Klima</div>
              <div className="text-[11px] text-slate-400">Kühlen direkt per Solar</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DUAL BRAND OFFER MATRIX */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-white/10 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">Zwei Wege für Ihr Solarprojekt</h2>
          <p className="text-xs text-slate-400">Wählen Sie zwischen reinem Komponenten-Großhandel oder schlüsselfertigem Ingenieur-Service.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Option A: PV Lager */}
          <div className="p-6 rounded-xl bg-slate-950 border border-amber-500/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono font-bold">PV LAGER SEESEN</span>
              <span className="text-xs text-slate-400">Großhandel & Selbstabholer</span>
            </div>
            <h3 className="text-lg font-bold text-white">Direktbezug Komponenten</h3>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Trina 440W Bifaziale Module ab 89,00 €/Stk.</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Sofortige Abholung im Lager Seesen möglich</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-400" /> Ideal für Elektriker, Dachdecker & DIY-Bauherren</li>
            </ul>
            <a href="#lagerbestand" className="block text-center py-2.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-bold text-xs border border-amber-500/40 transition">
              Lagerbestand Prüfen ➔
            </a>
          </div>

          {/* Option B: Aurevia Solar */}
          <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/30 space-y-4">
            <div className="flex justify-between items-center">
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 text-xs font-mono font-bold">AUREVIA SOLAR</span>
              <span className="text-xs text-slate-400">Schlüsselfertig & Montage</span>
            </div>
            <h3 className="text-lg font-bold text-white">Turnkey PV-Carport & Gesamtsystem</h3>
            <ul className="text-xs text-slate-300 space-y-2">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zola Pod Solar-Carport & PV-Terrassen</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Komplettabwicklung inkl. Statik & Netzbetreiber-Anmeldung</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Regionale Installation durch VR Gebäudetechnik</li>
            </ul>
            <a href="#diagnose" className="block text-center py-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-bold text-xs border border-emerald-500/40 transition">
              Erstdiagnose & Beratung ➔
            </a>
          </div>
        </div>
      </section>

      {/* 3. REAL WAREHOUSE STOCK CATALOG */}
      <section id="lagerbestand" className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-white">Aktueller Lagerbestand Seesen</h2>
            <p className="text-xs text-slate-400">Alle Preise verstehen sich inkl. 0% MwSt. gemäß § 12 (3) UStG für berechtigte PV-Installationen.</p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 text-xs font-medium">
            {[
              { id: 'all', label: 'Alle Komponenten' },
              { id: 'bifacial-modules', label: 'PV-Module' },
              { id: 'carports', label: 'Carports & Terrassen' },
              { id: 'climate', label: 'Solar-Klima' },
              { id: 'heat-pumps', label: 'Wärmepumpen' },
              { id: 'batteries', label: 'Speicher & Inverter' },
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg transition whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-slate-950 font-bold'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCatalog.map(item => (
            <div key={item.id} className="p-5 rounded-xl bg-slate-900/90 border border-white/10 flex flex-col justify-between hover:border-amber-500/40 transition">
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-[11px] font-mono text-slate-400">{item.sku}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                    {item.stockSeesen} auf Lager
                  </span>
                </div>
                <h3 className="font-bold text-white text-base leading-snug">{item.name}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.description}</p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10 space-y-3">
                <div className="text-[11px] font-mono bg-slate-950 p-2.5 rounded space-y-1 text-slate-300">
                  {Object.entries(item.specs).map(([k, v]) => (
                    <div key={k} className="flex justify-between">
                      <span className="text-slate-400">{k}:</span>
                      <span className="text-white font-medium">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-1">
                  <div>
                    <span className="text-[10px] text-slate-400 block uppercase">Ab Lager Seesen</span>
                    <span className="text-lg font-bold text-amber-400">{item.pricePvlager.toFixed(2)} €</span>
                    <span className="text-[10px] text-slate-400"> / {item.unit}</span>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition"
                  >
                    Details / Anfrage
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. READINESS SCAN / QUIZ DIAGNOSTIC FORM */}
      <section id="diagnose" className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-amber-500/30 space-y-6 max-w-3xl mx-auto">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">Erstdiagnose & Bau-Passport</span>
          <h2 className="text-2xl font-bold text-white">Projekt-Readiness Scan Starten</h2>
          <p className="text-xs text-slate-400">Filtern Sie Vor-Ort-Anforderungen für Seesen, Harz und Umgebung.</p>
        </div>

        {!submittedDossier ? (
          <form onSubmit={handleSubmitDiagnostic} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Welches PV-System ist geplant?</label>
              <select
                value={projectType}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="carport">Solar-Carport (Zola Pod, 2 Fahrzeuge)</option>
                <option value="terrasse">PV-Terrassenüberdachung (Smart Rain Channel)</option>
                <option value="rooftop">Dach-PV & Speicher-Komplettset</option>
                <option value="klima">AC/DC Solar Multi-Split Klimaanlage</option>
                <option value="diy">Nur Komponenten-Abholung (PV Lager Seesen)</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Vollständiger Name</label>
                <input
                  type="text"
                  required
                  placeholder="Max Mustermann"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">E-Mail Adresse</label>
                <input
                  type="email"
                  required
                  placeholder="max@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Telefonnummer (für Rückfragen)</label>
                <input
                  type="tel"
                  placeholder="0171 1234567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">Postleitzahl (PLZ)</label>
                <input
                  type="text"
                  required
                  placeholder="38723 (z.B. Seesen / Harz)"
                  value={plz}
                  onChange={(e) => setPlz(e.target.value)}
                  className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Geplanter Budgetrahmen</label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full bg-slate-950 border border-white/10 rounded-lg p-3 text-xs text-white focus:border-amber-500 focus:outline-none"
              >
                <option value="3k-5k">3.000 € – 5.000 € (Selbstinstallation / Komponenten)</option>
                <option value="5k-12k">5.000 € – 12.000 € (Standard Dach-PV Paket)</option>
                <option value="12k-25k">12.000 € – 25.000+ € (Schlüsselfertig / Carport Komplett)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md transition"
            >
              {submitting ? 'Verarbeite Anfrage...' : 'Erstdiagnose Absenden & Build Passport Erstellen ➔'}
            </button>
          </form>
        ) : (
          <div className="p-6 rounded-xl bg-slate-950 border border-emerald-500/40 space-y-4 text-center">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Build Passport # {submittedDossier.projectId} Erstellt</h3>
            <p className="text-xs text-slate-300">
              Vielen Dank, {submittedDossier.customer.name}. Empfohlenes Service-Modell: <strong className="text-amber-400">{submittedDossier.project.recommendedBrand}</strong>.
            </p>
            <p className="text-[11px] text-slate-400 bg-slate-900 p-3 rounded text-left border border-white/10">
              {submittedDossier.disclaimer}
            </p>
            <button
              onClick={() => setSubmittedDossier(null)}
              className="text-xs text-amber-400 underline font-semibold"
            >
              Neue Diagnose starten
            </button>
          </div>
        )}
      </section>

      {/* MODAL FOR PRODUCT DETAILS */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-white/10 rounded-2xl max-w-lg w-full p-6 space-y-4 relative">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-amber-400">{selectedProduct.sku}</span>
                <h3 className="text-lg font-bold text-white">{selectedProduct.name}</h3>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="text-slate-400 hover:text-white text-sm font-bold">
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-300">{selectedProduct.description}</p>
            <div className="bg-slate-950 p-3 rounded text-xs space-y-1 font-mono text-slate-300">
              {Object.entries(selectedProduct.specs).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span className="text-slate-400">{k}:</span>
                  <span className="text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center pt-2">
              <div>
                <span className="text-[10px] text-slate-400 block">Ab Lager Seesen</span>
                <span className="text-xl font-bold text-amber-400">{selectedProduct.pricePvlager.toFixed(2)} €</span>
              </div>
              <a
                href="#diagnose"
                onClick={() => setSelectedProduct(null)}
                className="px-4 py-2 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow"
              >
                Anfrage Stellen ➔
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
