import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Widerrufsbelehrung | Aurevia Manor Solar',
};

export default function V2WiderrufPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8 text-xs text-slate-300">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">Widerrufsbelehrung</h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 shadow-2xl leading-relaxed">
          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Widerrufsrecht für Verbraucher</h2>
            <p className="text-slate-300">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter die Waren in Besitz genommen haben.
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Ausschluss des Widerrufsrechts</h2>
            <p className="text-slate-300">
              Das Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung durch den Verbraucher maßgeblich ist (Sonderanfertigungen nach Maß).
            </p>
          </div>

          <div>
            <h2 className="text-white font-semibold text-sm mb-1">Widerrufsadresse</h2>
            <p className="text-slate-300">
              {COMPANY.legalName}<br />
              {COMPANY.address}<br />
              {COMPANY.postalCode} {COMPANY.city}<br />
              E-Mail: {COMPANY.email}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
