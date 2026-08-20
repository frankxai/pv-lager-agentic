import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Datenschutzerklärung | PV Lager Seesen · RIAL Energy',
  description: 'Datenschutzerklärung und DSGVO-Informationen der RIAL Energy GmbH (PV Lager Seesen).',
};

export default function V2DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white border-b border-white/10 pb-6">
          Datenschutzerklärung
        </h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 text-sm text-slate-300 font-sans leading-relaxed shadow-2xl">
          <div>
            <strong className="text-white block text-base font-serif font-bold">1. Datenschutz auf einen Blick</strong>
            <p className="mt-2">
              Der Schutz Ihrer persönlichen Daten ist uns ein zentrales Anliegen. Die {COMPANY.legalName} behandelt Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO).
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">2. Verantwortliche Stelle</strong>
            <p className="mt-1 font-medium text-slate-200">
              {COMPANY.legalName}<br />
              {COMPANY.address}<br />
              {COMPANY.postalCode} {COMPANY.city}<br />
              E-Mail: {COMPANY.email}
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">3. Datenerfassung auf unserer Website</strong>
            <p className="mt-1">
              Wir erfassen Ihre Daten, wenn Sie uns diese im Carport-Konfigurator, Warenkorb oder Kontaktformular übermitteln (z.B. Name, E-Mail, Lieferadresse, Modulwünsche). Diese Daten werden ausschließlich zur Angebotserstellung, Statikprüfung und Auftragsabwicklung genutzt.
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">4. Ihre Rechte (Auskunft, Löschung, Sperrung)</strong>
            <p className="mt-1">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
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
