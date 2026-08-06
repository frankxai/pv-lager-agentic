import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Widerrufsbelehrung V2 | Aurevia Estate Solar',
};

export default function V2WiderrufPage() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 font-sans">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-6 text-sm text-slate-300">
        <h1 className="font-serif text-3xl font-bold text-white mb-6">Widerrufsbelehrung</h1>
        <p>Verbraucher haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.</p>
        <p>Widerruf zu richten an: {COMPANY.legalName}, E-Mail: {COMPANY.email}.</p>
      </main>
    </div>
  );
}
