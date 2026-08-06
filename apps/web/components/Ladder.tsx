import Link from 'next/link';
import { PRICING, PRICE_DISCLOSURE } from '@/lib/pricing';

const stufen = [
  {
    stufe: 'Stufe 1',
    name: 'Autarkie-Analyse',
    price: PRICING.analyse.display,
    priceNote: PRICING.analyse.note,
    body: 'Sie beschreiben Ihr Anwesen und Ihren Verbrauch. Sie erhalten ein belastbares Konzeptpapier: Erzeugungsprognose, Speicherdimensionierung, Notstromfähigkeit, Einbindung von Wärmepumpe und Ladeinfrastruktur — mit einer Komponentenliste, die aus tatsächlich verfügbarem Bestand kalkuliert ist.',
    detail: 'Ohne Termin. Ohne Vertreterbesuch.',
    href: '/analyse',
    cta: 'Analyse starten',
  },
  {
    stufe: 'Stufe 2',
    name: 'Autarkie-Konzept',
    price: PRICING.konzept.display,
    priceNote: PRICING.konzept.note,
    body: 'Ein Ingenieur prüft die Analyse vor Ort, validiert Dach- und Flächengeometrie, Netzanschluss und genehmigungsrechtliche Randbedingungen. Ergebnis ist ein umsetzungsreifes Konzept mit Phasenplan und Festpreisrahmen.',
    detail: 'Inklusive Zugang zum Planungsassistenten für eigene Szenarien.',
    href: '/konzept',
    cta: 'Konzept ansehen',
  },
  {
    stufe: 'Stufe 3',
    name: 'Realisierung',
    price: PRICING.realisierung.display,
    priceNote: PRICING.realisierung.note,
    body: 'Beschaffung, Montage, Netzanmeldung und Inbetriebnahme. Ausgeführt durch die RIAL Energy GmbH mit eigenem Lager in Seesen und eigener Gebäudetechnik. Aurevia bleibt Ihr einziger Ansprechpartner.',
    detail: 'Auf Wunsch mit anschließender Betriebsführung.',
    href: '/realisierung',
    cta: 'Ablauf ansehen',
  },
];

export function Ladder() {
  return (
    <section className="border-t border-rule bg-paper-2">
      <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <p className="au-label">Der Weg</p>
        <h2 className="mt-5 max-w-[24ch] font-display text-title font-semibold">
          Drei Stufen. Jede rechnet sich auf die nächste an.
        </h2>

        <ol className="mt-12 flex flex-col">
          {stufen.map((s) => (
            <li
              key={s.stufe}
              className="grid gap-x-10 gap-y-4 border-t border-rule py-9 lg:grid-cols-[8rem_minmax(0,1fr)_13rem]"
            >
              <p className="au-label pt-1 text-copper-text">{s.stufe}</p>

              <div>
                <h3 className="font-display text-2xl font-semibold">{s.name}</h3>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-2">{s.body}</p>
                <p className="mt-3 text-sm text-ink-3">{s.detail}</p>
              </div>

              <div className="lg:text-right">
                <p className="au-measure text-2xl font-semibold text-ink">{s.price}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-2 lg:ml-auto lg:max-w-[18ch]">
                  {s.priceNote}
                </p>
                <Link
                  href={s.href}
                  className="mt-5 inline-flex min-h-[44px] items-center text-sm font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
                >
                  {s.cta}
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 border-t border-rule pt-6 text-xs text-ink-3">{PRICE_DISCLOSURE}</p>
      </div>
    </section>
  );
}
