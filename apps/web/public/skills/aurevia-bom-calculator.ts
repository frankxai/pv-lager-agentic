/**
 * Aurevia Autonomous Solar BOM & Cutting-List Engine
 * Version: 2.0.0
 * Provenance: German Solar Engineering (Zentrallager Seesen)
 * License: Royalty-Free Developer & Installer License
 */

export interface CarportDimensionInput {
  bays: 1 | 2 | 3 | 4; // 1 = Single (1 PKW), 2 = Double (2 PKW), etc.
  roofType: 'bifacial-glass' | 'trapezoidal-pv';
  postHeightMm?: number; // default: 2600 mm
  wallboxCount?: number;
  snowLoadZone?: 1 | 2 | 3;
}

export interface BOMItem {
  sku: string;
  name: string;
  category: 'Structure' | 'Solar' | 'Fasteners' | 'Sealing' | 'Electrical';
  quantity: number;
  unit: 'Stk' | 'Meter' | 'Set';
  specification: string;
  weightKgTotal: number;
}

export interface GeneratedBOM {
  timestamp: string;
  configuration: CarportDimensionInput;
  totalKwp: number;
  moduleCount: number;
  totalWeightKg: number;
  snowLoadCapacityPa: number;
  billOfMaterials: BOMItem[];
  cuttingSchedule: {
    profile: string;
    cutLengthsMm: number[];
    standardBarLengthMm: number;
    barsNeeded: number;
    wastePercentage: number;
  }[];
}

export function calculateCarportBOM(input: CarportDimensionInput): GeneratedBOM {
  const postHeight = input.postHeightMm || 2600;
  const postCount = input.bays === 1 ? 4 : input.bays === 2 ? 6 : (input.bays * 2) + 2;
  const modulesPerBay = 16;
  const moduleCount = input.bays * modulesPerBay;
  const totalKwp = Number(((moduleCount * 440) / 1000).toFixed(2));
  
  const lengthMm = input.bays === 1 ? 3500 : input.bays === 2 ? 6000 : input.bays * 2900;
  const widthMm = 5800;
  const longitudinalMeters = (lengthMm / 1000) * 2;
  const crossBeamCount = Math.ceil(lengthMm / 1762) + 1;
  const crossBeamMeters = crossBeamCount * (widthMm / 1000);

  const items: BOMItem[] = [
    {
      sku: 'ALU-POST-100X100',
      name: 'Struktur-Pfosten 100x100x4.0 mm',
      category: 'Structure',
      quantity: postCount,
      unit: 'Stk',
      specification: `EN AW-6063 T6 eloxiert, L=${postHeight} mm`,
      weightKgTotal: postCount * 24.5
    },
    {
      sku: 'ALU-BEAM-100X100',
      name: 'Längs- & Querträger 100x100 mm',
      category: 'Structure',
      quantity: Math.ceil((longitudinalMeters + crossBeamMeters) / 6),
      unit: 'Stk',
      specification: '6.0 m Stangen EN AW-6063 T6 Qualanod',
      weightKgTotal: (longitudinalMeters + crossBeamMeters) * 4.2
    },
    {
      sku: 'MOD-TRINA-440W',
      name: 'Trina Vertex S+ 440W Bifazial Glas-Glas',
      category: 'Solar',
      quantity: moduleCount,
      unit: 'Stk',
      specification: '1.762 x 1.134 x 30 mm, N-Type TOPCon',
      weightKgTotal: moduleCount * 21.0
    },
    {
      sku: 'SEAL-EPDM-KLICK',
      name: 'EPDM Dichtungsband mit Klick-Profil',
      category: 'Sealing',
      quantity: Math.ceil(longitudinalMeters + crossBeamMeters),
      unit: 'Meter',
      specification: 'UV- und witterungsbeständig (-30 bis +90 °C)',
      weightKgTotal: (longitudinalMeters + crossBeamMeters) * 0.4
    },
    {
      sku: 'FAST-ANCHOR-M16',
      name: 'Schwerlast-Fundamentanker M16 A4',
      category: 'Fasteners',
      quantity: postCount * 4,
      unit: 'Stk',
      specification: 'Edelstahl A4-80 nach DIN EN ISO 3506',
      weightKgTotal: postCount * 4 * 0.35
    },
    {
      sku: 'WALLBOX-INTEGRATION',
      name: '22 kW Wallbox-Integrationskit',
      category: 'Electrical',
      quantity: input.wallboxCount || (input.bays >= 2 ? 2 : 1),
      unit: 'Set',
      specification: 'Passend für Innenführung im 100x100mm Pfosten',
      weightKgTotal: 6.0
    }
  ];

  const totalWeightKg = Math.round(items.reduce((sum, i) => sum + i.weightKgTotal, 0));

  return {
    timestamp: new Date().toISOString(),
    configuration: input,
    totalKwp,
    moduleCount,
    totalWeightKg,
    snowLoadCapacityPa: input.snowLoadZone === 3 ? 5400 : 3600,
    billOfMaterials: items,
    cuttingSchedule: [
      {
        profile: '100x100x4.0 mm Aluminiumprofil',
        cutLengthsMm: Array(postCount).fill(postHeight),
        standardBarLengthMm: 6000,
        barsNeeded: Math.ceil((postCount * postHeight) / 5800),
        wastePercentage: 2.8
      }
    ]
  };
}
