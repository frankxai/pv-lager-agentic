import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Plate } from '@/components/Figure';
import { COMPANY } from '@/lib/company';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Realisierung',
  description: `Stufe 3: Beschaffung, Montage, Netzanmeldung und Inbetriebnahme durch die ${COMPANY.legalName} — mit Aurevia als einzigem Ansprechpartner.`,
};

const phasen = [
  {
    title: 'Beschaffung',
    body: `Die im Konzept festgelegten Komponenten werden aus dem Zentrallager in ${COMPANY.city} disponiert. Was nicht vorrätig ist, wird vor Montagebeginn beschafft — nicht während.`,
  },
  {
    title: 'Montage',
    body: 'Unterkonstruktion, Modulmontage und Gebäudetechnik durch eigene Monteure. Elektroarbeiten und Netzanschluss durch eingetragene Fachbetriebe.',
  },
  {
    title: 'Anmeldung und Inbetriebnahme',
    body: 'Anmeldung beim Netzbetreiber, Eintragung im Marktstammdatenregister, Inbetriebnahmeprotokoll und Einweisung in das Energiemanagement.',
  },
  {
    title: 'Übergabe',
    body: 'Dokumentation, Nachweise und Gewährleistungsunterlagen in einer Mappe. Auf Wunsch anschließende Betriebsführung mit Ertragskontrolle.',
  },
];

export default function Realisierung() {
  return (
    <>
      <PageHeader
        label={`Stufe 3 · ${PRICING.realisierung.display}`}
        title="Realisierung"
        lead={`Ausgeführt durch die ${COMPANY.legalName} mit eigenem Lager, eigener Montage und eigener Gebäudetechnik. Aurevia bleibt Ihr einziger Ansprechpartner — auch dann, wenn mehrere Gewerke beteiligt sind.`}
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-block sm:px-8">
        <Plate
          slug="dji-fly-20241130-115920-0236-1732973889561-photo"
          alt="Luftaufnahme einer fertiggestellten Solarüberdachung"
          priority
          ratio="21 / 9"
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <dl className="grid gap-x-16 gap-y-0 lg:grid-cols-2">
          {phasen.map((p) => (
            <div key={p.title} className="au-row py-7">
              <dt className="font-display text-xl font-semibold text-ink">{p.title}</dt>
              <dd className="mt-3 max-w-prose leading-relaxed text-ink-2">{p.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="au-label">Vertragliche Grundlage</p>
              <h2 className="mt-5 font-display text-title font-semibold">
                Festpreis auf Basis des Konzepts.
              </h2>
            </div>
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                Die Realisierung wird auf Grundlage eines gesonderten Werkvertrags ausgeführt, der
                Leistungsumfang, Vergütung, Termine, Abnahme und Gewährleistung abschließend regelt.
              </p>
              <p>
                Weil das Konzept Mengen, Fabrikate und Randbedingungen bereits geklärt hat, ist der
                Preis zum Zeitpunkt der Beauftragung belastbar — und nicht an eine
                Preisgleitklausel gebunden.
              </p>
              <p className="text-ink">
                Für Photovoltaik auf und an Wohngebäuden kann der Nullsteuersatz nach § 12 Abs. 3
                UStG greifen. Ob die Voraussetzungen vorliegen, weisen wir im Angebot gesondert aus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="max-w-[24ch] font-display text-title font-semibold">
            Der Weg dorthin beginnt mit einer Analyse.
          </h2>
          <Link
            href="/analyse"
            className="mt-9 inline-flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Autarkie-Analyse starten
          </Link>
        </div>
      </section>
    </>
  );
}
