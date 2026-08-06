import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY, ODR_URL } from '@/lib/company';

export const metadata = {
  title: 'Impressum V2 | Aurevia Estate Solar',
};

export default function V2ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-6 text-sm text-slate-300">
        <h1 className="font-serif text-3xl font-bold text-white mb-6">Impressum</h1>
        <p><strong>{COMPANY.legalName}</strong><br />{COMPANY.street}<br />{COMPANY.postalCode} {COMPANY.city}</p>
        <p>Telefon: {COMPANY.phone}<br />E-Mail: {COMPANY.email}</p>
        <p>Registergericht: {COMPANY.register}<br />Umsatzsteuer-ID: {COMPANY.vatId}</p>
        <p>Online-Streitbeilegung: <a href={ODR_URL} target="_blank" rel="noopener noreferrer" className="text-amber-400 underline">{ODR_URL}</a></p>
      </main>
    </div>
  );
}
