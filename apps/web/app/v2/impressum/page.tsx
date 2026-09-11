import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Impressum | PV Lager Seesen · RIAL Energy',
  description: 'Impressum und gesetzliche Pflichtangaben der RIAL Energy GmbH (PV Lager Seesen).',
};

export default function V2ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white border-b border-white/10 pb-6">
          Impressum
        </h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 text-sm text-slate-300 font-sans leading-relaxed shadow-2xl">
          <div>
            <strong className="text-white block text-base font-serif font-bold">Angaben gemäß § 5 TMG:</strong>
            <p className="mt-2 font-medium text-slate-200">
              {COMPANY.legalName}<br />
              {COMPANY.address}<br />
              {COMPANY.postalCode} {COMPANY.city}
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">Vertreten durch:</strong>
            <p className="mt-1">{COMPANY.managingDirector}</p>
          </div>

          <div>
            <strong className="text-white block font-semibold">Kontakt:</strong>
            <p className="mt-1 font-mono text-xs">
              Telefon: {COMPANY.phone}<br />
              E-Mail: {COMPANY.email}<br />
              Web: https://pvlager.de / https://solarcarport.tech
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">Registereintrag &amp; Umsatzsteuer:</strong>
            <p className="mt-1">
              Handelsregister: {COMPANY.register}<br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG: <span className="font-mono">{COMPANY.vatId}</span>
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong>
            <p className="mt-1">
              {COMPANY.managingDirector}<br />
              {COMPANY.address}<br />
              {COMPANY.postalCode} {COMPANY.city}
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
