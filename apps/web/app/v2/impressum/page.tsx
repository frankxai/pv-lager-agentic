import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY, ODR_URL } from '@/lib/company';

export const metadata = {
  title: 'Impressum | Aurevia Manor Solar',
};

export default function V2ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8 text-xs text-slate-300">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">Impressum</h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl">
          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Angaben gemäß § 5 TMG:</h2>
            <p className="text-slate-300 leading-relaxed">
              <strong>{COMPANY.legalName}</strong><br />
              {COMPANY.address}<br />
              {COMPANY.postalCode} {COMPANY.city} ({COMPANY.region})
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Vertreten durch:</h2>
            <p className="text-slate-300 leading-relaxed">{COMPANY.managingDirector}</p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Kontakt:</h2>
            <p className="text-slate-300 leading-relaxed">
              Telefon: {COMPANY.phone}<br />
              E-Mail: {COMPANY.email}<br />
              Web: https://www.pvlager.com
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Registereintrag:</h2>
            <p className="text-slate-300 leading-relaxed">
              Registergericht: {COMPANY.register}<br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: {COMPANY.vatId}
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Online-Streitbeilegung:</h2>
            <p className="text-slate-300 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href={ODR_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                {ODR_URL}
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
