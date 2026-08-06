import type { Metadata } from 'next';
import { PageHeader } from '@/components/PageHeader';
import { AnalyseForm } from '@/components/AnalyseForm';
import { Deliverable } from '@/components/Deliverable';
import { PRICING } from '@/lib/pricing';

export const metadata: Metadata = {
  title: 'Autarkie-Analyse',
  description:
    'Die Autarkie-Analyse ist die belastbare Grundlage für jede weitere Entscheidung: Verbrauchsprofil, Erzeugungsprognose, Speicherauslegung und eine Komponentenliste aus tatsächlich verfügbarem Bestand.',
};

const einwaende = [
  {
    frage: 'Warum kostet eine Analyse überhaupt etwas?',
    antwort:
      'Weil sie Arbeit ist und nicht Akquise. Ein kostenloses Angebot muss verkaufen; eine bezahlte Analyse muss stimmen. Sie erhalten eine Herleitung, die auch dann trägt, wenn Sie am Ende mit jemand anderem bauen.',
  },
  {
    frage: 'Bin ich danach an Sie gebunden?',
    antwort:
      'Nein. Die Unterlagen gehören Ihnen und sind bewusst so aufgebaut, dass ein Zweitanbieter damit kalkulieren kann. Wir halten Sie über die Qualität der Planung, nicht über fehlende Vergleichbarkeit.',
  },
  {
    frage: 'Was, wenn ich danach doch baue?',
    antwort: `Dann werden die ${PRICING.analyse.display} vollständig auf das Konzept angerechnet, und das Konzept wiederum auf die Realisierung. Sie zahlen denselben Schritt nie zweimal.`,
  },
  {
    frage: 'Brauchen Sie einen Vor-Ort-Termin?',
    antwort:
      'Für die Analyse nicht. Sie beschreiben Ihr Anwesen, wir rechnen. Erst für das Konzept kommt ein Ingenieur — dann aber, um zu prüfen, nicht um zu verkaufen.',
  },
];

export default function Analyse() {
  return (
    <>
      <PageHeader
        label={`Stufe 1 · ${PRICING.analyse.display}`}
        title="Autarkie-Analyse"
        lead="Sie beschreiben Ihr Anwesen und Ihren Verbrauch. Sie erhalten ein Konzeptpapier, mit dem Sie arbeiten können — ohne Termin, ohne Vertreterbesuch, ohne Verpflichtung."
      />

      <section className="mx-auto w-full max-w-6xl px-5 pb-section sm:px-8">
        <div className="grid gap-x-20 gap-y-14 lg:grid-cols-[minmax(0,1fr)_22rem]">
          <div className="lg:order-2">
            <div className="lg:sticky lg:top-28">
              <p className="au-label">Was Sie erhalten</p>
              <ul className="mt-5 space-y-3 text-[15px] leading-relaxed text-ink-2">
                <li className="au-row pb-3">Erzeugungsprognose nach Ausrichtung und Verschattung</li>
                <li className="au-row pb-3">Speicher- und Notstromauslegung, getrennt betrachtet</li>
                <li className="au-row pb-3">Einbindung von Wärmepumpe und Ladeinfrastruktur</li>
                <li className="au-row pb-3">Komponentenliste aus verfügbarem Lagerbestand</li>
                <li className="pb-3">Phasenplan mit Budget je Ausbaustufe</li>
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-ink-3">
                Bearbeitung in der Regel innerhalb von zehn Werktagen nach Eingang aller Angaben.
              </p>
            </div>
          </div>

          <div className="lg:order-1">
            <h2 className="sr-only">Analyse anfragen</h2>
            <AnalyseForm />
          </div>
        </div>
      </section>

      <Deliverable />

      <section className="border-t border-rule bg-paper-2">
        <div className="mx-auto w-full max-w-6xl px-5 py-section sm:px-8">
          <p className="au-label">Was Sie sich jetzt fragen</p>
          <h2 className="mt-5 max-w-[22ch] font-display text-title font-semibold">
            Die vier Einwände, die berechtigt sind.
          </h2>

          <dl className="mt-12 grid gap-x-16 gap-y-0 lg:grid-cols-2">
            {einwaende.map((e) => (
              <div key={e.frage} className="au-row py-7">
                <dt className="text-lg font-medium text-ink">{e.frage}</dt>
                <dd className="mt-3 max-w-prose leading-relaxed text-ink-2">{e.antwort}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
