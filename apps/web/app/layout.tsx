import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Outfit } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800']
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'RIAL Energy Group | Solar-Carports & PV Zentrallager Seesen',
  description: 'Photovoltaik-Lagerware & Solar Carport Komplett-Bausätze sofort verfügbar aus dem Zentrallager Seesen (Harz). Bifaziale Trina Module, Heavy-Duty Alu-Profile & ERP Live-Statik.',
  keywords: ['PV Lager Seesen', 'Solar Carport', 'Bifaziale PV Module', 'Trina Solar', 'AC DC Klimaanlage', 'RIAL Energy', 'VR Gebäudetechnik', 'Schneelast 3 Statik'],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#080C14',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`dark ${plusJakarta.variable} ${outfit.variable}`}>
      <body className="bg-[#080C14] text-slate-100 min-h-screen flex flex-col font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Global Footer */}
        <footer className="border-t border-amber-500/20 bg-[#05080E] py-12 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
              <div>
                <p className="font-extrabold text-sm text-white tracking-tight">RIAL Energy GmbH · PV Lager Seesen</p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Zentrallager Harz: Bornhäuser Str. 18, 38723 Seesen · Fachmontage durch VR Gebäudetechnik
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-[11px] text-slate-300 font-medium">
                <a href="#configurator" className="hover:text-amber-400 transition">60s Konfigurator</a>
                <a href="#impressum" className="hover:text-amber-400 transition">Impressum</a>
                <a href="#datenschutz" className="hover:text-amber-400 transition">Datenschutz</a>
                <span className="text-emerald-400 font-mono font-bold">✓ 0% MwSt. (§12 (3) UStG) Befreit</span>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-900 text-center text-[10px] text-slate-500">
              © {new Date().getFullYear()} RIAL Energy GmbH. Alle Rechte vorbehalten. Technisches Ertragsmodell & Statik-Software V3.4.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
