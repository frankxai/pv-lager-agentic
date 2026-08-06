import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY } from '@/lib/company';
import { PRICE_DISCLOSURE } from '@/lib/pricing';
import { PageHeader, LegalProse } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB für Planungsleistungen und Realisierung.',
  robots: { index: true, follow: false },
};

/**
 * Scoped deliberately to the PLANNING ladder (Analyse / Konzept), which is what this
 * site actually sells. Werkvertrag terms for the physical installation are a different
 * legal animal (VOB/B, Abnahme, Gewährleistung, Sicherheitseinbehalt) and are handled
 * in the individual contract — this document says so rather than pretending to cover it.
 */
export default function AGB() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Allgemeine Geschäftsbedingungen"
        lead="Diese Bedingungen gelten für die über diese Website beauftragten Planungsleistungen. Für die bauliche Realisierung gilt ergänzend der jeweils individuell geschlossene Vertrag."
      />

      <LegalProse>
        <h2>§ 1 Geltungsbereich und Vertragspartner</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, die über diese Website
          zwischen Ihnen und der {COMPANY.legalName}, {COMPANY.street}, {COMPANY.postalCode}{' '}
          {COMPANY.city} (nachfolgend „wir") geschlossen werden. Aurevia ist eine Marke der{' '}
          {COMPANY.legalName}.
        </p>
        <p>
          Abweichende Bedingungen des Kunden werden nicht Vertragsbestandteil, es sei denn, wir
          stimmen ihrer Geltung ausdrücklich in Textform zu.
        </p>

        <h2>§ 2 Gegenstand der Leistungen</h2>
        <p>
          Gegenstand ist die Erstellung von Planungsunterlagen zur Energieversorgung von Gebäuden
          und Grundstücken, insbesondere die <strong>Autarkie-Analyse</strong> und das darauf
          aufbauende <strong>Autarkie-Konzept</strong>.
        </p>
        <p>
          Die Autarkie-Analyse ist eine konzeptionelle Vorplanung auf Grundlage der von Ihnen
          gemachten Angaben. Sie ersetzt keine Objektbegehung, keine Elektroplanung nach VDE, keine
          Statik und keine Genehmigungsplanung. Erzeugungs- und Ertragswerte sind Prognosen auf
          Basis anerkannter Rechenverfahren und meteorologischer Durchschnittsdaten; sie stellen
          keine zugesicherte Eigenschaft im Sinne des § 443 BGB dar.
        </p>

        <h2>§ 3 Vertragsschluss</h2>
        <p>
          Die Darstellung der Leistungen auf dieser Website ist kein bindendes Angebot, sondern eine
          Aufforderung zur Bestellung. Mit Absenden des Bestellformulars geben Sie ein verbindliches
          Angebot ab. Der Vertrag kommt mit unserer Auftragsbestätigung in Textform zustande.
        </p>

        <h2>§ 4 Preise und Zahlung</h2>
        <p>
          Es gelten die zum Zeitpunkt der Bestellung ausgewiesenen Preise. {PRICE_DISCLOSURE}
        </p>
        <p>
          Das Entgelt für die Autarkie-Analyse wird bei Beauftragung fällig. Wird auf Grundlage der
          Analyse innerhalb von zwölf Monaten ein Autarkie-Konzept beauftragt, rechnen wir das
          bereits gezahlte Entgelt vollständig auf dieses an. Entsprechendes gilt für die Anrechnung
          des Konzepts auf eine anschließende Realisierung.
        </p>
        <p>
          Für Photovoltaikanlagen auf und an Wohngebäuden kann nach § 12 Abs. 3 UStG der
          Nullsteuersatz Anwendung finden. Ob die Voraussetzungen im Einzelfall vorliegen, weisen
          wir im Angebot gesondert aus.
        </p>

        <h2>§ 5 Mitwirkung des Kunden</h2>
        <p>
          Die Qualität der Planung hängt unmittelbar von der Richtigkeit Ihrer Angaben ab. Sie sagen
          zu, Verbrauchsdaten, Flächenangaben, Bestandsanlagen und bauliche Gegebenheiten
          vollständig und zutreffend anzugeben. Beruhen Planungsfehler auf unrichtigen oder
          unvollständigen Angaben, haften wir hierfür nicht.
        </p>

        <h2>§ 6 Leistungszeit</h2>
        <p>
          Die Autarkie-Analyse wird in der Regel innerhalb von zehn Werktagen nach Eingang aller
          erforderlichen Angaben und der Zahlung erstellt. Angegebene Fristen sind unverbindlich,
          sofern sie nicht ausdrücklich als verbindlich vereinbart wurden.
        </p>

        <h2>§ 7 Nutzungsrechte</h2>
        <p>
          Sie erhalten an den gelieferten Unterlagen ein einfaches, zeitlich und räumlich
          unbeschränktes Nutzungsrecht für das darin bezeichnete Objekt — einschließlich des Rechts,
          die Unterlagen Dritten wie Steuerberatern, Architekten oder Zweitanbietern vorzulegen. Die
          Weitergabe zur gewerblichen Verwertung oder zur Verwendung an anderen Objekten bedarf
          unserer Zustimmung in Textform.
        </p>

        <h2>§ 8 Widerrufsrecht</h2>
        <p>
          Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Einzelheiten, insbesondere zum
          vorzeitigen Erlöschen bei digitalen Dienstleistungen, finden Sie in unserer{' '}
          <Link href="/widerruf">Widerrufsbelehrung</Link>.
        </p>

        <h2>§ 9 Haftung</h2>
        <p>
          Wir haften unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei der Verletzung von
          Leben, Körper oder Gesundheit. Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung
          einer wesentlichen Vertragspflicht — also einer Pflicht, deren Erfüllung die
          ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung
          Sie regelmäßig vertrauen dürfen — und der Höhe nach begrenzt auf den bei Vertragsschluss
          vorhersehbaren, vertragstypischen Schaden. Die Haftung nach dem Produkthaftungsgesetz
          bleibt unberührt.
        </p>

        <h2>§ 10 Realisierung</h2>
        <p>
          Die bauliche Umsetzung ist nicht Gegenstand dieser Bedingungen. Sie wird auf Grundlage
          eines gesonderten Werkvertrags ausgeführt, der Leistungsumfang, Vergütung, Abnahme,
          Gewährleistung und Fristen abschließend regelt.
        </p>

        <h2>§ 11 Schlussbestimmungen</h2>
        <p>
          Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts. Bei
          Verbrauchern gilt diese Rechtswahl nur, soweit dadurch der Schutz zwingender Vorschriften
          des Staates des gewöhnlichen Aufenthalts nicht entzogen wird. Ist der Kunde Kaufmann,
          juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen, ist
          Gerichtsstand unser Geschäftssitz.
        </p>
        <p>
          Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen
          unberührt.
        </p>
      </LegalProse>
    </>
  );
}
