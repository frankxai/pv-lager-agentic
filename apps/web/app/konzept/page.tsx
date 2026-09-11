import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { PRICING, PRICE_DISCLOSURE } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Autarkie-Konzept',
  description:
    'Stufe 2: Ein Ingenieur prüft die Analyse vor Ort und überführt sie in ein umsetzungsreifes Konzept mit Phasenplan und Festpreisrahmen.',
};

const schritte = [
  {
    n: '01',
    title: 'Objektbegehung',
    body: 'Aufmaß der Dach-, Fassaden- und Freiflächen, Prüfung der Verschattungssituation über den Jahresverlauf, Zustand der Unterkonstruktion und der bestehenden Elektroinstallation.',
  },
  {
    n: '02',
    title: 'Netzanschluss und Anmeldung',
    body: 'Klärung der verfügbaren Anschlussleistung mit dem Netzbetreiber, Prüfung der Zählerplatzsituation und des Anmeldewegs. Hier entscheidet sich, was tatsächlich genehmigungsfähig ist.',
  },
  {
    n: '03',
    title: 'Statik und Genehmigung',
    body: 'Bewertung von Schnee- und Windlast nach Standort, Nachweisführung für Unterkonstruktionen und Klärung, ob das Vorhaben verfahrensfrei ist oder eine Baugenehmigung erfordert.',
  },
  {
    n: '04',
    title: 'Systemtopologie',
    body: 'Festlegung von Wechselrichterkonzept, Netztrennstelle und Energiemanagement — abgeleitet aus der Autarkiestufe, die Sie tatsächlich erreichen wollen.',
  },
  {
    n: '05',
    title: 'Phasenplan und Festpreisrahmen',
    body: 'Was zuerst gebaut wird, was später ergänzt werden kann, und zu welchen Konditionen. Grundlage für den Werkvertrag der Realisierung.',
  },
];

export default function Konzept() {
  return (
    <>
      <PageHeader
        label={`Stufe 2 · ${PRICING.konzept.display}`}
        title="Autarkie-Konzept"
        lead="Die Analyse rechnet. Das Konzept prüft. Ein Ingenieur validiert vor Ort, was am Schreibtisch plausibel war — und überführt es in eine Planung, nach der gebaut werden kann."
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-section sm:px-8">
        <ol className="mt-4 flex flex-col">
          {schritte.map((s) => (
            <li
              key={s.n}
              className="grid gap-x-10 gap-y-3 border-t border-rule py-8 lg:grid-cols-[5rem_minmax(0,1fr)]"
            >
              <p className="au-measure au-label pt-1 text-copper-text">{s.n}</p>
              <div>
                <h2 className="font-display text-2xl font-semibold">{s.title}</h2>
                <p className="mt-3 max-w-prose leading-relaxed text-ink-2">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
            <div>
              <p className="au-label">Anrechnung</p>
              <h2 className="mt-5 font-display text-title font-semibold">
                Sie zahlen denselben Schritt nie zweimal.
              </h2>
            </div>
            <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
              <p>
                Das Entgelt der Autarkie-Analyse wird vollständig auf das Konzept angerechnet. Das
                Konzept wiederum wird vollständig auf die Realisierung angerechnet.
              </p>
              <p>
                Das ist kein Rabattmechanismus, sondern die logische Folge daraus, dass jede Stufe
                auf der vorherigen aufbaut: Es wäre unredlich, dieselbe Grundlagenermittlung zweimal
                in Rechnung zu stellen.
              </p>
              <p className="text-ink">
                Sie können nach jeder Stufe aufhören. Die Unterlagen bleiben Ihre.
              </p>
            </div>
          </div>
          <p className="mt-10 border-t border-rule pt-6 text-xs text-ink-3">{PRICE_DISCLOSURE}</p>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="max-w-[24ch] font-display text-title font-semibold">
            Das Konzept beginnt mit der Analyse.
          </h2>
          <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-2">
            Wir setzen eine Objektbegehung erst an, wenn die Grundlagen stehen — das spart Ihnen
            einen Termin, der sonst nur der Datenaufnahme dient.
          </p>
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
