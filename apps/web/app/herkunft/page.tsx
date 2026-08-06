import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Figure } from '@/components/Figure';
import { Measure } from '@/components/Measure';
import { COMPANY } from '@/lib/company';

export const metadata: Metadata = {
  title: 'Herkunft',
  description: `Aurevia ist eine Marke der ${COMPANY.legalName} in ${COMPANY.city} — mit eigenem Zentrallager, eigener Montage und eigener Gebäudetechnik.`,
};

export default function Herkunft() {
  return (
    <>
      <PageHeader
        label="Herkunft"
        title="Seesen, am Nordrand des Harzes."
        lead={`Aurevia ist keine Vermittlungsplattform. Hinter der Marke steht die ${COMPANY.legalName} — ein Betrieb mit eigenem Zentrallager, eigener Montage und eigener Gebäudetechnik.`}
      />

      <section className="border-y border-rule">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-rule-soft sm:grid-cols-3">
          <Measure
            value="Seesen"
            unit="Eigenes Zentrallager"
            note="Komponenten liegen vor Ort. Was geplant wird, ist verfügbar — nicht angekündigt."
          />
          <Measure
            value="1"
            unit="Verantwortlicher Betrieb"
            note="Planung, Beschaffung und Montage liegen in einer Hand. Keine Subunternehmerkette."
          />
          <Measure
            value="HRB 210762"
            unit="Amtsgericht Braunschweig"
            note={`${COMPANY.legalName}, geführt von ${COMPANY.managingDirector}. Nachprüfbar im Handelsregister.`}
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="au-label">Warum das zählt</p>
            <h2 className="mt-5 font-display text-title font-semibold">
              Ein Lager ist ein Versprechen, das man nicht brechen kann.
            </h2>
          </div>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Die häufigste Ursache für Verzögerungen im Anlagenbau ist nicht die Montage, sondern
              die Beschaffung. Ein Wechselrichter, der erst in vierzehn Wochen kommt, hält den
              Elektriker auf, der den Termin blockiert hat, der wiederum den Gerüstbauer aufhält.
            </p>
            <p>
              Weil die Komponenten in Seesen liegen, wird in der Analyse aus vorhandenem Bestand
              kalkuliert. Das ist der Grund, warum die Komponentenliste konkrete Fabrikate nennt und
              keine Platzhalter — und warum ein Phasenplan überhaupt belastbar sein kann.
            </p>
            <p className="text-ink">
              Aurevia übernimmt Planung und Verantwortung gegenüber dem Bauherrn. Die{' '}
              {COMPANY.legalName} liefert und baut. Für Sie bleibt es ein Ansprechpartner.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            <Figure
              slug="dji-20240906161612-0026-d"
              alt="Luftaufnahme einer ausgeführten Anlage in der Region"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="img-2945-kopie"
              alt="Aluminium-Unterkonstruktion einer Solarüberdachung"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="img-2951-kopie"
              alt="Detail der Trägerkonstruktion einer Überdachung"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="au-label">Kontakt</p>
          <h2 className="mt-5 max-w-[22ch] font-display text-title font-semibold">
            Lieber direkt sprechen?
          </h2>
          <address className="mt-7 not-italic text-lg leading-relaxed text-ink-2">
            {COMPANY.legalName}
            <br />
            {COMPANY.street}
            <br />
            {COMPANY.postalCode} {COMPANY.city}
          </address>
          <p className="mt-6 text-lg leading-relaxed text-ink-2">
            <a
              href={`tel:${COMPANY.phoneHref}`}
              className="text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
            >
              {COMPANY.phone}
            </a>
            <br />
            <a
              href={`mailto:${COMPANY.email}`}
              className="text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
            >
              {COMPANY.email}
            </a>
          </p>
          <Link
            href="/analyse"
            className="mt-10 inline-flex min-h-[52px] items-center justify-center bg-ink px-8 text-base font-medium text-paper transition-opacity duration-micro ease-au hover:opacity-85"
          >
            Autarkie-Analyse starten
          </Link>
        </div>
      </section>
    </>
  );
}
