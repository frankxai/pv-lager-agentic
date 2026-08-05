export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category: 'bifacial-modules' | 'carports' | 'climate' | 'heat-pumps' | 'inverters' | 'batteries';
  brand: string;
  description: string;
  specs: Record<string, string>;
  stockSeesen: number;
  pricePvlager: number; // Wholesale price
  priceAurevia: number; // Turnkey engineering package price
  unit: string;
  isHeavyAction?: boolean;
}

export const REAL_PRODUCT_CATALOG: ProductItem[] = [
  {
    id: 'prod-01',
    sku: 'TRN-440-BF',
    name: 'Trina Vertex S+ 440W Doppelglas Bifazial N-Type',
    category: 'bifacial-modules',
    brand: 'Trina Solar',
    description: 'Hochleistungs-Glas-Glas Modul mit i-TOPCon Technologie. Bis zu 25% Mehrertrag durch bifaziale Rückseite.',
    specs: { 'Leistung': '440 Wp', 'Garantie': '25 Jahre Produkt / 30 Jahre Leistung', 'Schneelast': '5.400 Pa', 'Zelltyp': 'N-Type i-TOPCon' },
    stockSeesen: 1420,
    pricePvlager: 89.00,
    priceAurevia: 119.00,
    unit: 'Stück',
    isHeavyAction: true
  },
  {
    id: 'prod-02',
    sku: 'ZOLA-CARPORT-2P',
    name: 'Solar-Carport Zola Pod (2 Stellplätze, Alu-Konstruktion)',
    category: 'carports',
    brand: 'SolarCarport.tech / RIAL',
    description: 'Modulares Aluminium-PV-Carport mit integriertem Smart Rain Channel System und Doppelglas-Modulen.',
    specs: { 'Stellplätze': '2 Fahrzeuge', 'Abmessung': '5.90m x 5.50m', 'Regenrinne': 'Smart Rain Channel', 'Schneelastzone': 'Zone 2 & 3 geeignet' },
    stockSeesen: 12,
    pricePvlager: 3490.00,
    priceAurevia: 4890.00,
    unit: 'Komplettkit',
    isHeavyAction: true
  },
  {
    id: 'prod-03',
    sku: 'RIAL-ACDC-KLIMA-12',
    name: 'AC/DC Solar Multi-Split Klimaanlage (Direct PV)',
    category: 'climate',
    brand: 'RIAL Energy',
    description: 'Direkt-PV betriebenes Klimasystem. Speist Solarstrom direkt ohne Wechselrichter-Umwandlung ein.',
    specs: { 'Kühlleistung': '12.000 BTU / 3.5 kW', 'DC-Einspeisung': '80V - 380V Direct', 'SEER': '22.0', 'Kältemittel': 'R32' },
    stockSeesen: 34,
    pricePvlager: 899.00,
    priceAurevia: 1290.00,
    unit: 'Set',
    isHeavyAction: true
  },
  {
    id: 'prod-04',
    sku: 'PNS-AQ-9KW-MONO',
    name: 'Panasonic Aquarea T-CAP 9kW Monoblock Wärmepumpe',
    category: 'heat-pumps',
    brand: 'Panasonic',
    description: 'Konstante Heizleistung bis -20°C Außentemperatur. Perfekt abgestimmt auf PV-Kopplung.',
    specs: { 'Heizleistung': '9.0 kW', 'COP': '4.85', 'Vorlauf': 'bis 65°C', 'Stromanschluss': '400V 3-Phasig' },
    stockSeesen: 8,
    pricePvlager: 4250.00,
    priceAurevia: 5490.00,
    unit: 'Gerät'
  },
  {
    id: 'prod-05',
    sku: 'BYD-HVS-10.2',
    name: 'BYD Battery-Box Premium HVS 10.2 kWh Speicher',
    category: 'batteries',
    brand: 'BYD',
    description: 'Modularer Hochvolt-Lithium-Eisenphosphat (LiFePO4) Speicher. Maximale Sicherheit und Lebensdauer.',
    specs: { 'Kapazität': '10.24 kWh', 'Zellchemie': 'LiFePO4', 'Wirkungsgrad': '>96%', 'Garantie': '10 Jahre' },
    stockSeesen: 24,
    pricePvlager: 3890.00,
    priceAurevia: 4690.00,
    unit: 'Paket'
  },
  {
    id: 'prod-06',
    sku: 'HUA-SUN2000-10KTL',
    name: 'Huawei SUN2000 10KTL-M1 Hybrid-Wechselrichter',
    category: 'inverters',
    brand: 'Huawei',
    description: 'Dreiphasiger Hybrid-Wechselrichter mit integriertem Lichtbogenschutz (AI Arc Fault Detection).',
    specs: { 'AC-Leistung': '10.0 kW', 'MPPT': '2 Unabhängige Tracker', 'Effizienz': '98.6%', 'Schutzart': 'IP65 Outdoor' },
    stockSeesen: 42,
    pricePvlager: 1190.00,
    priceAurevia: 1490.00,
    unit: 'Stück'
  }
];
