import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';
import { PRICE_DISCLOSURE } from '@/lib/pricing';

export const metadata = {
  title: 'AGB V2 | Aurevia Estate Solar',
};

export default function V2AgbPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-6 text-sm text-slate-300">
        <h1 className="font-serif text-3xl font-bold text-white mb-6">Allgemeine Geschäftsbedingungen (AGB)</h1>
        <p>Geltungsbereich für alle Angebote der {COMPANY.legalName}.</p>
        <p>{PRICE_DISCLOSURE}</p>
      </main>
    </div>
  );
}
