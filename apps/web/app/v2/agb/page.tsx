import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen (AGB) | PV Lager Seesen · RIAL Energy',
  description: 'Allgemeine Geschäftsbedingungen der RIAL Energy GmbH für Lieferungen und Montagedienstleistungen.',
};

export default function V2AgbPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white border-b border-white/10 pb-6">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 text-sm text-slate-300 font-sans leading-relaxed shadow-2xl">
          <div>
            <strong className="text-white block text-base font-serif font-bold">§ 1 Geltungsbereich</strong>
            <p className="mt-2">
              Für alle Lieferungen von Solar-Carports, Photovoltaik-Modulen, Speichersystemen und Zubehör durch die {COMPANY.legalName} (nachfolgend „Verkäufer“) an Verbraucher (§ 13 BGB) und Unternehmer (§ 14 BGB) gelten ausschließlich diese AGB.
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">§ 2 Vertragsschluss &amp; Stufenmodell</strong>
            <p className="mt-1">
              Die Präsentation der Produkte im Online-Shop oder Konfigurator stellt kein rechtlich bindendes Angebot dar, sondern eine Aufforderung zur Bestellung. Beauftragungen für Stufe 1 (Autarkie-Analyse) oder Stufe 2 (Konzept) werden bei anschließender Realisierung zu 100% auf den Gesamtpreis angerechnet.
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">§ 3 Steuerbefreiung nach § 12 Abs. 3 UStG (Nullsteuersatz)</strong>
            <p className="mt-1">
              Für Lieferungen von Photovoltaik-Komponenten an Betreiber privater Wohngebäude oder öffentlicher Einrichtungen gilt der gesetzliche Umsatzsteuersatz von 0%, sofern die gesetzlichen Voraussetzungen des Jahressteuergesetzes erfüllt sind.
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">§ 4 Lieferung &amp; Gefahrübergang</strong>
            <p className="mt-1">
              Die Lieferung erfolgt ab Zentrallager Seesen (Bornhäuser Str. 18, 38723 Seesen) per Spedition oder durch Bereitstellung zur Selbstabholung.
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-[#000000] py-10 px-4 max-w-4xl mx-auto mt-20 text-xs text-slate-500 text-center">
        © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
