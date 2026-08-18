import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen | Aurevia Manor Solar',
};

export default function V2AgbPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8 text-xs text-slate-300">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl leading-relaxed">
          <div>
            <h2 className="text-white font-semibold text-sm mb-1">§ 1 Geltungsbereich &amp; Vertragspartner</h2>
            <p className="text-slate-300">
              Für alle Lieferungen von Photovoltaik-Komponenten, Solar-Carport Bausätzen und Ingenieurleistungen durch die {COMPANY.legalName} gelten diese Allgemeinen Geschäftsbedingungen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">§ 2 Umsatzsteuerbefreiung (0% MwSt.)</h2>
            <p className="text-slate-300">
              Gemäß § 12 Abs. 3 UStG gilt für die Lieferung von Solarmodulen, Speichern und wesentlichen Komponenten für begünstigte Wohngebäude und öffentliche Gebäude ein Steuersatz von 0%. Der Kunde bestätigt bei der Bestellung das Vorliegen der gesetzlichen Voraussetzungen.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">§ 3 Lieferung &amp; Gefahrübergang</h2>
            <p className="text-slate-300">
              Die Lieferung erfolgt ab unserem Zentrallager in Seesen per Spedition oder zur Abholung vor Ort.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
