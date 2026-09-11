import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';
import { PageHeader, LegalProse } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 DSGVO.',
  robots: { index: true, follow: false },
};

/**
 * Describes what this site ACTUALLY does, not a generic template:
 *  - fonts are self-hosted by next/font at build time, so no Google CDN request
 *    is made from the visitor's browser (this is the single most-abgemahnt item
 *    on German sites and it is genuinely not happening here),
 *  - the only form is the Autarkie-Analyse intake at /api/quiz,
 *  - hosting is Vercel (US parent) → third-country transfer must be disclosed.
 * If analytics or a newsletter are added later, this file must be extended.
 */
export default function Datenschutz() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Datenschutz"
        lead="Diese Erklärung beschreibt, welche Daten diese Website tatsächlich verarbeitet — nicht, was eine Vorlage vorsieht."
      />

      <LegalProse>
        <h2>1. Verantwortlicher</h2>
        <address className="not-italic">
          {COMPANY.legalName}
          <br />
          {COMPANY.street}
          <br />
          {COMPANY.postalCode} {COMPANY.city}
          <br />
          E-Mail: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          <br />
          Telefon: <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
        </address>
        <p>
          Wir haben keinen Datenschutzbeauftragten bestellt, da die gesetzlichen
          Voraussetzungen hierfür nicht vorliegen.
        </p>

        <h2>2. Server-Logfiles</h2>
        <p>
          Beim Aufruf dieser Website werden durch unseren Hosting-Dienstleister automatisch
          Informationen erfasst, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit der
          Anfrage, aufgerufene Seite, Referrer-URL sowie Browser- und Betriebssystemkennung. Diese
          Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zum Zweck des sicheren
          und stabilen Betriebs. Die Daten werden nicht mit anderen Datenquellen zusammengeführt.
        </p>

        <h2>3. Hosting</h2>
        <p>
          Diese Website wird bei der Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA,
          betrieben. Dabei können personenbezogene Daten in die USA übermittelt werden. Grundlage
          der Übermittlung sind die Standardvertragsklauseln der EU-Kommission sowie ein mit Vercel
          geschlossener Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Es besteht das Risiko, dass
          US-Behörden auf Daten zugreifen können; ein dem europäischen Niveau entsprechender
          Rechtsschutz kann insoweit nicht in jedem Fall gewährleistet werden.
        </p>

        <h2>4. Autarkie-Analyse: Kontakt- und Projektdaten</h2>
        <p>
          Wenn Sie eine Autarkie-Analyse anfragen, verarbeiten wir die von Ihnen angegebenen Daten:
          Name, E-Mail-Adresse, Telefonnummer (freiwillig), Postleitzahl sowie Ihre Angaben zum
          Vorhaben.
        </p>
        <ul>
          <li>
            <strong>Zweck:</strong> Bearbeitung Ihrer Anfrage, Erstellung der Analyse und
            anschließende Beratung.
          </li>
          <li>
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Durchführung
            vorvertraglicher Maßnahmen bzw. Vertragserfüllung).
          </li>
          <li>
            <strong>Empfänger:</strong> Die Daten werden innerhalb der {COMPANY.legalName} an die
            für Planung und Ausführung zuständigen Mitarbeiter weitergegeben.
          </li>
          <li>
            <strong>Speicherdauer:</strong> Bis zur vollständigen Bearbeitung Ihrer Anfrage;
            darüber hinaus, soweit handels- und steuerrechtliche Aufbewahrungsfristen (6 bzw. 10
            Jahre, §§ 257 HGB, 147 AO) dies erfordern.
          </li>
        </ul>
        <p>
          Die Angabe der Daten ist für die Erstellung der Analyse erforderlich. Ohne sie können wir
          Ihre Anfrage nicht bearbeiten.
        </p>

        <h2>5. Schriftarten</h2>
        <p>
          Diese Website verwendet die Schriftarten Fraunces und Inter. Sie werden beim Erstellen der
          Website heruntergeladen und von unserem eigenen Server ausgeliefert. Beim Aufruf der Seite
          wird <strong>keine Verbindung zu Servern von Google</strong> hergestellt und Ihre
          IP-Adresse wird nicht an Google übermittelt.
        </p>

        <h2>6. Cookies und Analyse</h2>
        <p>
          Diese Website setzt keine Cookies zu Analyse-, Tracking- oder Werbezwecken ein und bindet
          keine Dienste Dritter zur Reichweitenmessung ein. Ein Cookie-Banner ist deshalb nicht
          erforderlich. Sollte sich das ändern, wird diese Erklärung vorab angepasst und Ihre
          Einwilligung nach § 25 TDDDG eingeholt.
        </p>

        <h2>7. Ihre Rechte</h2>
        <p>Sie haben uns gegenüber jederzeit das Recht auf</p>
        <ul>
          <li>Auskunft über die zu Ihrer Person gespeicherten Daten (Art. 15 DSGVO),</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO),</li>
          <li>Löschung (Art. 17 DSGVO),</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO),</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO) sowie</li>
          <li>
            Widerspruch gegen die Verarbeitung, die auf Art. 6 Abs. 1 lit. f DSGVO beruht (Art. 21
            DSGVO).
          </li>
        </ul>
        <p>
          Wenden Sie sich dazu formlos an die oben genannte Adresse. Zudem steht Ihnen ein
          Beschwerderecht bei einer Aufsichtsbehörde zu — für uns zuständig ist die
          Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover.
        </p>

        <h2>8. Stand</h2>
        <p className="text-ink-3">
          Diese Erklärung beschreibt den Stand der Website zum Zeitpunkt ihrer Veröffentlichung. Bei
          funktionalen Erweiterungen — insbesondere Zahlungsabwicklung, Newsletter oder
          Reichweitenmessung — wird sie vor Inbetriebnahme der jeweiligen Funktion aktualisiert.
        </p>
      </LegalProse>
    </>
  );
}
