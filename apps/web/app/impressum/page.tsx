import type { Metadata } from 'next';
import { COMPANY, ODR_URL } from '@/lib/company';
import { PageHeader, LegalProse } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Impressum',
  description: `Angaben gemäß § 5 DDG für ${COMPANY.legalName}, ${COMPANY.city}.`,
  robots: { index: true, follow: false },
};

export default function Impressum() {
  return (
    <>
      <PageHeader label="Rechtliches" title="Impressum" />

      <LegalProse>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address className="not-italic">
          {COMPANY.legalName}
          <br />
          {COMPANY.street}
          <br />
          {COMPANY.postalCode} {COMPANY.city}
        </address>

        <p>
          Aurevia ist eine Marke der {COMPANY.legalName}. Verantwortlich für alle über diese
          Website angebotenen Leistungen ist die {COMPANY.legalName}.
        </p>

        <h2>Vertreten durch</h2>
        <p>Geschäftsführer: {COMPANY.managingDirector}</p>

        <h2>Kontakt</h2>
        <dl className="grid grid-cols-[7rem_minmax(0,1fr)] gap-x-4 gap-y-2">
          <dt>Telefon</dt>
          <dd>
            <a href={`tel:${COMPANY.phoneHref}`}>{COMPANY.phone}</a>
          </dd>
          <dt>E-Mail</dt>
          <dd>
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </dd>
        </dl>

        <h2>Registereintrag</h2>
        <dl className="grid grid-cols-[10rem_minmax(0,1fr)] gap-x-4 gap-y-2">
          <dt>Registergericht</dt>
          <dd>{COMPANY.register}</dd>
          <dt>Umsatzsteuer-ID</dt>
          <dd>
            {COMPANY.vatId} <span className="text-ink-3">(gemäß § 27 a UStG)</span>
          </dd>
          <dt>Steuernummer</dt>
          <dd>{COMPANY.taxNumber}</dd>
        </dl>

        <h2>Redaktionell verantwortlich</h2>
        <p>
          {COMPANY.legalName}, {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city}
        </p>

        <h2>EU-Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a href={ODR_URL} target="_blank" rel="noopener noreferrer">
            {ODR_URL}
          </a>
          . Unsere E-Mail-Adresse finden Sie oben.
        </p>

        <h2>Verbraucherstreitbeilegung</h2>
        <p>
          Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
          Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche
          Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
          Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
          dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
          der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung der {COMPANY.legalName}. Sämtliche Anlagenfotografien auf dieser Website zeigen
          von der {COMPANY.legalName} ausgeführte Projekte.
        </p>
      </LegalProse>
    </>
  );
}
