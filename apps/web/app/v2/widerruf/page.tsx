import React from 'react';
import { NavV2 } from '@/components/v2/NavV2';
import { COMPANY } from '@/lib/company';

export const metadata = {
  title: 'Widerrufsbelehrung | PV Lager Seesen · RIAL Energy',
  description: 'Widerrufsbelehrung und Muster-Widerrufsformular der RIAL Energy GmbH (PV Lager Seesen).',
};

export default function V2WiderrufPage() {
  return (
    <div className="min-h-screen bg-[#000000] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      <NavV2 />
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 space-y-8">
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white border-b border-white/10 pb-6">
          Widerrufsbelehrung
        </h1>
        <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-8 sm:p-10 space-y-6 text-sm text-slate-300 font-sans leading-relaxed shadow-2xl">
          <div>
            <strong className="text-white block text-base font-serif font-bold">Widerrufsrecht für Verbraucher</strong>
            <p className="mt-2">
              Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag, an dem Sie oder ein von Ihnen benannter Dritter, der nicht der Beförderer ist, die Waren in Besitz genommen haben bzw. hat.
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">Ausübung des Widerrufs</strong>
            <p className="mt-1">
              Um Ihr Widerrufsrecht auszuüben, müssen Sie uns ({COMPANY.legalName}, {COMPANY.address}, {COMPANY.postalCode} {COMPANY.city}, E-Mail: {COMPANY.email}) mittels einer eindeutigen Erklärung über Ihren Entschluss informieren.
            </p>
          </div>

          <div>
            <strong className="text-white block font-semibold">Folgen des Widerrufs</strong>
            <p className="mt-1">
              Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen erhalten haben, einschließlich der Lieferkosten, unverzüglich und spätestens binnen vierzehn Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf bei uns eingegangen ist.
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
