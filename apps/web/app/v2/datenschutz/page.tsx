import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Datenschutzerklärung | Aurevia Manor Solar',
};

export default function V2DatenschutzPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8 text-xs text-slate-300">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">Datenschutzerklärung</h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl leading-relaxed">
          <div>
            <h2 className="text-white font-semibold text-sm mb-1">1. Datenschutz auf einen Blick</h2>
            <p className="text-slate-300">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">2. Verantwortliche Stelle</h2>
            <p className="text-slate-300">
              {COMPANY.legalName}<br />
              {COMPANY.address}<br />
              {COMPANY.postalCode} {COMPANY.city}<br />
              E-Mail: {COMPANY.email}
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">3. Datenerfassung auf dieser Website</h2>
            <p className="text-slate-300">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Wenn Sie unser Kontaktformular oder den 3D-Konfigurator nutzen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
