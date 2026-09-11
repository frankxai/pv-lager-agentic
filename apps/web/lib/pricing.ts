export const PRICING = {
  analyse: {
    display: '190 €',
    amount: 190,
    currency: '€',
    note: 'Vollständige Anrechnung bei Beauftragung von Konzept oder Realisierung'
  },
  konzept: {
    display: '490 €',
    amount: 490,
    currency: '€',
    note: 'Entwurfsplanung & statische Vorprüfung vor Ort'
  },
  realisierung: {
    display: 'Festpreis nach Konzept',
    amount: 0,
    currency: '€',
    note: 'Schlüsselfertige Montage durch eigenes Lager & eigene Gebäudetechnik'
  },
  carportSingle: {
    title: 'Einzel-Carport Zola Pod',
    basePrice: 2190,
    currency: '€'
  },
  carportDouble: {
    title: 'Doppel-Carport Zola Pod',
    basePrice: 3490,
    currency: '€'
  },
  moduleTrina440: {
    title: 'Trina Vertex S+ 440W Bifazial',
    pricePerUnit: 89,
    currency: '€'
  },
  vatRate: 0, // 0% MwSt (§12 (3) UStG)
  vatNote: '0% MwSt. Befreit gem. § 12 Abs. 3 UStG für Photovoltaikanlagen'
};

export const PRICE_DISCLOSURE = 'Alle angegebenen Preise für Photovoltaikanlagen und Komponenten verstehen sich gem. § 12 Abs. 3 UStG mit 0% MwSt. Kostenlose Abholung im Zentrallager Seesen (Harz) oder Speditionsversand nach Aufwand.';
