import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RIAL Energy Group | Aurevia Solar & PV Lager Seesen',
  description: 'Photovoltaik-Lagerware sofort verfügbar aus dem Zentrallager Seesen (Harz). Solar Carports, Bifaziale Trina Module, AC/DC Solar Klimaanlagen & schlüsselfertige Montage.',
  keywords: ['PV Lager Seesen', 'Solar Carport', 'Bifaziale PV Module', 'Trina Solar', 'AC DC Klimaanlage', 'RIAL Energy', 'VR Gebäudetechnik'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className="dark">
      <body className="bg-[#0A0E17] text-slate-100 min-h-screen flex flex-col">
        {/* Header Navigation */}
        <header className="sticky top-0 z-50 bg-[#0A0E17]/90 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 font-bold flex items-center justify-center text-lg shadow-md">
                PV
              </div>
              <div>
                <span className="font-bold text-base tracking-tight text-white">RIAL Energy Group</span>
                <span className="text-[10px] text-amber-400 block font-mono">PV Lager Seesen · Aurevia Solar</span>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-300">
              <a href="#lagerbestand" className="hover:text-amber-400 transition">Lagerbestand Seesen</a>
              <a href="#carport" className="hover:text-amber-400 transition">Solar Carport & Terrasse</a>
              <a href="#klima" className="hover:text-amber-400 transition">AC/DC Solar Klima</a>
              <a href="#diagnose" className="hover:text-amber-400 transition">Readiness Scan</a>
            </nav>

            <a
              href="#diagnose"
              className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition"
            >
              Anfrage Starten ➔
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="border-t border-white/10 bg-[#070A10] py-10 text-xs text-slate-400">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left sm:flex sm:justify-between sm:items-center">
            <div>
              <p className="font-bold text-slate-200">RIAL Energy GmbH · PV Lager Seesen</p>
              <p className="text-[11px] text-slate-500 mt-0.5">Zentrallager: Seesen (Harz) · Montage durch VR Gebäudetechnik</p>
            </div>
            <div className="flex justify-center gap-6 text-[11px] text-slate-400">
              <a href="#impressum" className="hover:text-white">Impressum</a>
              <a href="#datenschutz" className="hover:text-white">Datenschutz</a>
              <a href="#gobd" className="hover:text-white">0% MwSt. Hinweis (§12 (3) UStG)</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
