export interface ProductItem {
  id: string;
  sku: string;
  name: string;
  category: 'bifacial-modules' | 'carports' | 'climate' | 'heat-pumps' | 'inverters' | 'batteries';
  brand: string;
  imageUrl: string;
  description: string;
  specs: Record<string, string>;
  stockSeesen: number;
  pricePvlager: number; // Wholesale / Direct warehouse price
  priceTurnkey: number; // Turnkey engineering & installation package price
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
    imageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    description: 'Hochleistungs-Glas-Glas Modul mit i-TOPCon Technologie. Bis zu 25% Mehrertrag durch bifaziale Rückseite. Extrem widerstandsfähig gegen Hagel und Schneelast.',
    specs: { 'Leistung': '440 Wp', 'Garantie': '25 Jahre Produkt / 30 Jahre Leistung', 'Schneelast': '5.400 Pa', 'Zelltyp': 'N-Type i-TOPCon' },
    stockSeesen: 1420,
    pricePvlager: 89.00,
    priceTurnkey: 119.00,
    unit: 'Stück',
    isHeavyAction: true
  },
  {
    id: 'prod-02',
    sku: 'ZOLA-CARPORT-2P',
    name: 'Solar-Carport Zola Pod (2 Stellplätze, Alu-Konstruktion)',
    category: 'carports',
    brand: 'SolarCarport.tech / RIAL',
    imageUrl: 'https://images.unsplash.com/photo-1558441719-67450807e909?auto=format&fit=crop&w=800&q=80',
    description: 'Modulares Aluminium-PV-Carport mit integriertem Smart Rain Channel System, LED-Ambientebeleuchtung und 22kW Wallbox Vorbereitung.',
    specs: { 'Stellplätze': '2 Fahrzeuge', 'Material': 'Aluminium 6063-T6 pulverbeschichtet', 'Statik': 'Schneelastzone 3 Harz (3.0 kN/m²)', 'Modulkapazität': '10-15 Module' },
    stockSeesen: 12,
    pricePvlager: 3490.00,
    priceTurnkey: 5490.00,
    unit: 'Komplettkit',
    isHeavyAction: true
  },
  {
    id: 'prod-03',
    sku: 'RIAL-ACDC-KLIMA-12',
    name: 'AC/DC Solar Multi-Split Klimaanlage (Direct PV)',
    category: 'climate',
    brand: 'RIAL Energy',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Direkt-PV betriebenes Klimasystem. Speist Solarstrom direkt ohne Wechselrichter-Umwandlungsverluste für Kühlen & Heizen ein.',
    specs: { 'Kühlleistung': '12.000 BTU / 3.5 kW', 'DC-Spannungsbereich': '90 - 380 V DC', 'SEER / SCOP': 'A+++ / 6.1', 'Kältemittel': 'R32 umweltfreundlich' },
    stockSeesen: 34,
    pricePvlager: 899.00,
    priceTurnkey: 1450.00,
    unit: 'Set'
  },
  {
    id: 'prod-04',
    sku: 'PNS-AQ-9KW-MONO',
    name: 'Panasonic Aquarea T-CAP 9kW Monoblock Wärmepumpe',
    category: 'heat-pumps',
    brand: 'Panasonic',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    description: 'Konstante Heizleistung bis -20°C Außentemperatur im Harzer Winter. Perfekt abgestimmt auf PV-Kopplung und Fußbodenheizungen.',
    specs: { 'Heizleistung': '9.0 kW (A7/W35)', 'COP': '4.84', 'Kältemittel': 'R32', 'Smart Grid Ready': 'Ja (PV-Optimiert)' },
    stockSeesen: 8,
    pricePvlager: 4250.00,
    priceTurnkey: 6800.00,
    unit: 'Gerät'
  },
  {
    id: 'prod-05',
    sku: 'BYD-HVS-10.2',
    name: 'BYD Battery-Box Premium HVS 10.2 kWh Speicher',
    category: 'batteries',
    brand: 'BYD',
    imageUrl: 'https://images.unsplash.com/photo-1569012871812-a386454f226c?auto=format&fit=crop&w=800&q=80',
    description: 'Modularer Hochvolt-Lithium-Eisenphosphat (LiFePO4) Speicher. Maximale Sicherheit, hohe Entladerate und 10 Jahre Herstellergarantie.',
    specs: { 'Nettokapazität': '10.24 kWh', 'Spannung': '409 V', 'Batterietyp': 'LiFePO4 (Kobaltfrei)', 'Wirkungsgrad': '>= 96%' },
    stockSeesen: 24,
    pricePvlager: 3890.00,
    priceTurnkey: 4990.00,
    unit: 'Paket'
  },
  {
    id: 'prod-06',
    sku: 'HUA-SUN2000-10KTL',
    name: 'Huawei SUN2000 10KTL-M1 Hybrid-Wechselrichter',
    category: 'inverters',
    brand: 'Huawei',
    imageUrl: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=800&q=80',
    description: 'Dreiphasiger Hybrid-Wechselrichter mit integriertem Lichtbogenschutz (AI Arc Fault Detection) und direkter Speicherunterstützung.',
    specs: { 'AC-Nennleistung': '10.0 kW', 'MPP-Tracker': '2 unabhängige Tracker', 'Max. Wirkungsgrad': '98.6%', 'Schutzart': 'IP65 Outdoor' },
    stockSeesen: 42,
    pricePvlager: 1190.00,
    priceTurnkey: 1690.00,
    unit: 'Stück'
  },
  {
    id: 'prod-07',
    sku: 'RIAL-WALLBOX-22KW',
    name: 'SolarCarport Smart Wallbox 22kW (PV-Überschussladen)',
    category: 'climate',
    brand: 'SolarCarport.tech / RIAL',
    imageUrl: 'https://images.unsplash.com/photo-1558441719-67450807e909?auto=format&fit=crop&w=800&q=80',
    description: 'Intelligente Ladestation für Solar-Carports mit dynamischer Phasenumschaltung (1-Phasig / 3-Phasig) und RFID-Freischaltung.',
    specs: { 'Ladeleistung': 'Bis 22 kW (regelbar)', 'Kabel': '7.5m Typ 2 integriert', 'Konnektivität': 'WLAN, LAN, OCPP 1.6J', 'Montage': 'Direkt an Carport-Pfosten' },
    stockSeesen: 50,
    pricePvlager: 690.00,
    priceTurnkey: 990.00,
    unit: 'Stück'
  }
];
