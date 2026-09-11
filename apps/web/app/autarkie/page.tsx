import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/PageHeader';
import { Figure, Plate } from '@/components/Figure';
import { Measure } from '@/components/Measure';

export const metadata: Metadata = {
  title: 'Autarkie',
  description:
    'Was Energieautarkie tatsächlich bedeutet — und wo der Unterschied zwischen hohem Eigenverbrauch und echter Inselfähigkeit liegt.',
};

const grade = [
  {
    value: '60–75 %',
    unit: 'Eigenverbrauchsquote',
    note: 'Photovoltaik plus Speicher, netzparallel betrieben. Der übliche Ausbaustand. Bei Netzausfall steht die Anlage still.',
  },
  {
    value: '85–95 %',
    unit: 'Bilanzielle Autarkie',
    note: 'Zusätzlich Wärmepumpe und Ladeinfrastruktur im gemeinsamen Energiemanagement. Über das Jahr gerechnet nahezu unabhängig.',
  },
  {
    value: 'Inselfähig',
    unit: 'Echter Netzersatzbetrieb',
    note: 'Schwarzstartfähiger Wechselrichter, Netztrennstelle, ausgelegte Reserve. Das Haus läuft weiter, wenn die Straße dunkel ist.',
  },
];

export default function Autarkie() {
  return (
    <>
      <PageHeader
        label="Der Ansatz"
        title="Autarkie ist eine Auslegung, keine Ausstattung."
        lead={'Fast jede Anlage wird als „autark“ verkauft. Tatsächlich unterscheiden sich die Ausbaustufen erheblich — und der Unterschied fällt erst auf, wenn das Netz ausfällt.'}
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-block sm:px-8">
        <Plate
          slug="dji-0184"
          alt="Luftaufnahme eines Anwesens mit vollflächig belegter Solarüberdachung"
          priority
          ratio="21 / 9"
        />
      </section>

      <section className="border-y border-rule">
        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-rule-soft sm:grid-cols-3">
          {grade.map((g) => (
            <Measure key={g.unit} value={g.value} unit={g.unit} note={g.note} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-20">
          <div>
            <p className="au-label">Der teure Irrtum</p>
            <h2 className="mt-5 font-display text-title font-semibold">
              Ein größerer Speicher ersetzt keine Auslegung.
            </h2>
          </div>
          <div className="max-w-prose space-y-5 text-lg leading-relaxed text-ink-2">
            <p>
              Die häufigste Fehlinvestition, die uns begegnet, ist ein nachträglich vergrößerter
              Speicher an einer Anlage, die konstruktiv nie für Inselbetrieb vorgesehen war. Der
              Speicher ist dann größer, teurer — und bei Netzausfall trotzdem wirkungslos, weil der
              Wechselrichter nicht schwarzstartfähig ist und keine Netztrennstelle existiert.
            </p>
            <p>
              Die zweite ist die getrennte Beschaffung: Photovoltaik von einem Betrieb, Wärmepumpe
              vom zweiten, Wallbox vom dritten. Jede Komponente für sich korrekt dimensioniert, im
              Zusammenspiel aber ohne gemeinsame Regelung — und damit ohne den Effekt, für den
              bezahlt wurde.
            </p>
            <p className="text-ink">
              Deshalb steht bei uns die Auslegung vor der Beschaffung. Welche Autarkiestufe Sie
              tatsächlich wollen, entscheidet über Wechselrichtertopologie, Netztrennstelle und
              Reservebemessung — und diese Entscheidungen lassen sich später nur teuer korrigieren.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="au-label">Ausgeführte Anlagen</p>
          <h2 className="mt-5 max-w-[24ch] font-display text-title font-semibold">
            Jede Fläche, die Sie ohnehin bauen, kann Ertrag liefern.
          </h2>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-2">
            Carport, Terrassendach, Zaun, Pergola: Flächen, die auf einem Anwesen ohnehin entstehen,
            tragen Module, ohne dass ein Quadratmeter Dachfläche zusätzlich beansprucht wird.
          </p>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            <Figure
              slug="carport-u-berdachung-eggerling-8"
              alt="Solarcarport mit Aluminium-Unterkonstruktion"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="6x2-aufdach-terrasse-anton1"
              alt="Terrassenüberdachung mit teiltransparenten Modulen"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
            <Figure
              slug="zaun-muster-vor-haus-2-kopie-2"
              alt="Solarzaun als Grundstücksabgrenzung vor einem Wohnhaus"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
            />
          </div>

          <Link
            href="/referenzen"
            className="mt-12 inline-flex min-h-[44px] items-center text-base font-medium text-ink underline decoration-rule underline-offset-[6px] transition-colors duration-micro ease-au hover:decoration-ink"
          >
            Alle Referenzen ansehen
          </Link>
        </div>
      </section>

      <section className="border-t border-rule">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <h2 className="max-w-[20ch] font-display text-title font-semibold">
            Welche Stufe für Ihr Anwesen sinnvoll ist, ergibt die Analyse.
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
