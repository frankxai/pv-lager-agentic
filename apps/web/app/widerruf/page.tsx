import type { Metadata } from 'next';
import { COMPANY } from '@/lib/company';
import { PageHeader, LegalProse } from '@/components/PageHeader';

export const metadata: Metadata = {
  title: 'Widerrufsbelehrung',
  description: 'Widerrufsrecht für Verbraucher und Muster-Widerrufsformular.',
  robots: { index: true, follow: false },
};

/**
 * Follows the statutory model instruction (Anlage 1 zu Art. 246a § 1 Abs. 2 EGBGB).
 * The digital-service carve-out matters here: the Autarkie-Analyse is a paid digital
 * service, so § 356 Abs. 4 BGB governs when the right lapses — that is why the
 * checkout must capture express consent, not just a tickbox.
 */
export default function Widerruf() {
  return (
    <>
      <PageHeader
        label="Rechtliches"
        title="Widerrufsbelehrung"
        lead="Diese Belehrung gilt für Verbraucher — also für jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können."
      />

      <LegalProse>
        <h2>Widerrufsrecht</h2>
        <p>
          Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
          widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
        </p>
        <p>
          Um Ihr Widerrufsrecht auszuüben, müssen Sie uns
        </p>
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
          mittels einer eindeutigen Erklärung (z. B. ein mit der Post versandter Brief oder eine
          E-Mail) über Ihren Entschluss, diesen Vertrag zu widerrufen, informieren. Sie können dafür
          das unten stehende Muster-Widerrufsformular verwenden, das jedoch nicht vorgeschrieben
          ist.
        </p>
        <p>
          Zur Wahrung der Widerrufsfrist reicht es aus, dass Sie die Mitteilung über die Ausübung
          des Widerrufsrechts vor Ablauf der Widerrufsfrist absenden.
        </p>

        <h2>Folgen des Widerrufs</h2>
        <p>
          Wenn Sie diesen Vertrag widerrufen, haben wir Ihnen alle Zahlungen, die wir von Ihnen
          erhalten haben, einschließlich der Lieferkosten (mit Ausnahme der zusätzlichen Kosten, die
          sich daraus ergeben, dass Sie eine andere Art der Lieferung als die von uns angebotene,
          günstigste Standardlieferung gewählt haben), unverzüglich und spätestens binnen vierzehn
          Tagen ab dem Tag zurückzuzahlen, an dem die Mitteilung über Ihren Widerruf dieses Vertrags
          bei uns eingegangen ist. Für diese Rückzahlung verwenden wir dasselbe Zahlungsmittel, das
          Sie bei der ursprünglichen Transaktion eingesetzt haben, es sei denn, mit Ihnen wurde
          ausdrücklich etwas anderes vereinbart; in keinem Fall werden Ihnen wegen dieser
          Rückzahlung Entgelte berechnet.
        </p>

        <h2>Vorzeitiges Erlöschen bei digitalen Leistungen</h2>
        <p>
          Die Autarkie-Analyse ist eine digitale Dienstleistung. Ihr Widerrufsrecht erlischt bei
          einem Vertrag über die Erbringung von Dienstleistungen vorzeitig, wenn wir die Leistung
          vollständig erbracht haben <em>und</em> Sie vor Beginn der Ausführung
        </p>
        <ul>
          <li>ausdrücklich zugestimmt haben, dass wir vor Ablauf der Widerrufsfrist beginnen, und</li>
          <li>
            Ihre Kenntnis davon bestätigt haben, dass Sie durch die vollständige Vertragserfüllung
            Ihr Widerrufsrecht verlieren.
          </li>
        </ul>
        <p>
          Solange Sie diese Zustimmung nicht erteilen, beginnen wir mit der Erstellung Ihrer Analyse
          erst nach Ablauf der Widerrufsfrist. Sie entscheiden das im Bestellvorgang aktiv — es gibt
          keine Voreinstellung.
        </p>
        <p>
          Verlangen Sie ausdrücklich, dass wir vor Fristablauf beginnen, und widerrufen Sie danach,
          schulden Sie uns einen Betrag, der dem Anteil der bis zum Widerruf bereits erbrachten
          Leistung entspricht.
        </p>

        <h2>Ausschluss des Widerrufsrechts</h2>
        <p>
          Ein Widerrufsrecht besteht nicht bei Verträgen zur Lieferung von Waren, die nicht
          vorgefertigt sind und für deren Herstellung eine individuelle Auswahl oder Bestimmung
          durch den Verbraucher maßgeblich ist oder die eindeutig auf die persönlichen Bedürfnisse
          des Verbrauchers zugeschnitten sind (§ 312g Abs. 2 Nr. 1 BGB). Das betrifft insbesondere
          maßgefertigte Unterkonstruktionen und zugeschnittene Aluminiumprofile.
        </p>

        <h2>Muster-Widerrufsformular</h2>
        <p className="text-ink-3">
          Wenn Sie den Vertrag widerrufen wollen, füllen Sie bitte dieses Formular aus und senden
          Sie es zurück.
        </p>
        <div className="border border-rule bg-surface p-6 text-[15px] leading-relaxed">
          <p>
            An {COMPANY.legalName}, {COMPANY.street}, {COMPANY.postalCode} {COMPANY.city}, E-Mail:{' '}
            {COMPANY.email}
          </p>
          <p className="mt-4">
            Hiermit widerrufe(n) ich/wir (*) den von mir/uns (*) abgeschlossenen Vertrag über den
            Kauf der folgenden Waren (*) / die Erbringung der folgenden Dienstleistung (*)
          </p>
          <p className="mt-4">Bestellt am (*) / erhalten am (*)</p>
          <p className="mt-4">Name des/der Verbraucher(s)</p>
          <p className="mt-4">Anschrift des/der Verbraucher(s)</p>
          <p className="mt-4">
            Unterschrift des/der Verbraucher(s) (nur bei Mitteilung auf Papier)
          </p>
          <p className="mt-4">Datum</p>
          <p className="mt-6 text-ink-3">(*) Unzutreffendes streichen.</p>
        </div>
      </LegalProse>
    </>
  );
}
