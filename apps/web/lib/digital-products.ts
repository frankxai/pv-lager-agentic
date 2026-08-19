export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: 'ai-skills' | 'prompt-packs' | 'engineering-software' | 'swarms' | 'enterprise';
  categoryLabel: string;
  priceEur: number;
  priceUsd: number;
  badge?: string;
  rating: number;
  reviewCount: number;
  description: string;
  features: string[];
  capabilities: string[];
  deliverables: {
    filename: string;
    filetype: string;
    filesize: string;
    description: string;
  }[];
  sampleContent?: {
    type: 'prompt' | 'code' | 'json';
    title: string;
    preview: string;
  };
  licenseTerms: string;
  instantDownloadUrl?: string;
}

export const DIGITAL_PRODUCTS: DigitalProduct[] = [
  {
    id: 'prod-01-core-skill',
    slug: 'aurevia-estate-architect-core',
    title: 'Aurevia Estate Architect Skill',
    subtitle: 'Der autonome Solar- & Carport-Planer für Claude Code, ChatGPT & Antigravity',
    category: 'ai-skills',
    categoryLabel: 'AI Skill / Agent Instruction',
    priceEur: 0,
    priceUsd: 0,
    badge: 'Kostenlos / Open Skill',
    rating: 4.98,
    reviewCount: 342,
    description: 'Vollständige Markdown-Spezifikation und OpenAPI-Action für persönliche AI-Assistenten. Berechnet Dach- und Carport-Geometrien, Modulmengen, Ertragskurven und validiert Lagerbestände.',
    features: [
      'Kompatibel mit Claude Code, Antigravity, ChatGPT Actions, Gemini CLI',
      'Parametrische Berechnung von Modulsträngen (Trina 440W)',
      'Statik-Klassifizierung nach DIN EN 1991 (Schneelastzone 3 Harz)',
      'Autonome Generierung von strukturierten AureviaEstateDossier_v1 JSONs'
    ],
    capabilities: [
      'Geometrie-Analyse',
      'DIN 1055 Vorprüfung',
      'JSON-Dossier Generierung',
      '72h Zuteilungs-Workflow'
    ],
    deliverables: [
      {
        filename: 'aurevia-estate-architect.skill.md',
        filetype: 'Markdown Skill Specification',
        filesize: '4.2 KB',
        description: 'Vollständiger System-Prompt mit Berechnungsregeln und Beispielfällen.'
      },
      {
        filename: 'openapi-aurevia-planner.yaml',
        filetype: 'OpenAPI 3.1.0 Specification',
        filesize: '1.7 KB',
        description: 'Verbindet Custom GPTs und LLM-Tools direkt mit der Aurevia Validierungs-API.'
      }
    ],
    sampleContent: {
      type: 'prompt',
      title: 'Auszug aus System-Prompt (Skill Core):',
      preview: `---
name: aurevia-estate-architect
description: Berechnet hochpräzise Photovoltaik- und Solar-Carport-Dimensionierungen nach deutscher Ingenieursnorm.
---
# Rules & Invariants:
1. Module: Trina Vertex S+ 440W N-Type Bifazial (1.762 x 1.134 mm).
2. Carport: Zola Pod 100x100mm Heavy-Duty Aluminium, EPDM gedichtet.
3. Statik: Windlastzone 2/4, Schneelastzone 3 (Harz bis 5.4 kN/m²).`
    },
    licenseTerms: 'Creative Commons Zero (CC0) / Freie private und kommerzielle Nutzung.',
    instantDownloadUrl: '/skills/aurevia-estate-architect.skill.md'
  },
  {
    id: 'prod-02-prompt-masterpack',
    slug: 'solar-visual-prompt-masterpack',
    title: 'Solar & Carport Architectural Prompt Masterpack',
    subtitle: '100+ kuratierte SOTA Visual-Prompts für Midjourney v6, FLUX & NanoBanana',
    category: 'prompt-packs',
    categoryLabel: 'Visual Prompt Engine',
    priceEur: 29,
    priceUsd: 32,
    badge: 'Bestseller 2026',
    rating: 4.96,
    reviewCount: 189,
    description: 'Fotorealistische architektonische Render-Prompts für Solar-Installateure, Architekten und Creator. Visualisieren Sie Doppel-Carports, Terrassendächer und Villen-PV bei goldenem Abendlicht, bewölktem Harz-Himmel oder moderner Bauhaus-Architektur.',
    features: [
      '100+ getestete Prompts mit exakten Kamera-Werten (Hasselblad H6D, 35mm f/2.8)',
      'Spezifische Lichtsetups: Golden Hour, Dämmerung, diffuse Harz-Witterung, Clean Studio',
      'Material-Definitionen: Anthrazit DB703 Feinstruktur, transluzentes Solarglas, EPDM-Fugen',
      'Negative Prompts & Gewichts-Parameter für fehlerfreie Solarmodul-Gitter ohne Artefakte'
    ],
    capabilities: [
      'Midjourney v6.1 optimiert',
      'FLUX.1 Pro kompatibel',
      'NanoBanana / SDXL Ready',
      'Inkl. Negative Prompt Matrix'
    ],
    deliverables: [
      {
        filename: 'solar-architectural-prompts-master.json',
        filetype: 'JSON Prompt Matrix',
        filesize: '48 KB',
        description: 'Vollständige Prompt-Bibliothek kategorisiert nach Architekturstil und Bautyp.'
      },
      {
        filename: 'solar-render-styleguide.pdf',
        filetype: 'Visual Style Guide (PDF)',
        filesize: '8.4 MB',
        description: 'Visueller Leitfaden mit Vorher-/Nachher-Beispielen und Rendering-Tips.'
      }
    ],
    sampleContent: {
      type: 'prompt',
      title: 'Beispiel-Prompt (Bauhaus Villa mit Zola Pod Doppelcarport):',
      preview: `Architectural photograph of a luxury minimalist Bauhaus residence with an integrated double solar carport made of heavy-duty black anodized aluminum 100x100mm beams. The canopy features semi-transparent bifacial glass-glass solar panels casting geometric soft shadows on a polished dark concrete driveway. A sleek matte grey Porsche Taycan charges underneath via an integrated wallbox. Soft overcast Northern European afternoon light, shot on Hasselblad H6D-100c, 35mm lens, f/4.0, ultra-sharp realistic textures, subtle rain water reflection, architectural digest magazine quality --ar 16:9 --v 6.1 --style raw`
    },
    licenseTerms: 'Kommerzielle Creator-Lizenz. Freigabe für Kundenpräsentationen, Webseiten und Exposés.',
    instantDownloadUrl: '/skills/solar-carport-prompts-sample.json'
  },
  {
    id: 'prod-03-bom-generator',
    slug: 'autonomous-solar-bom-engine',
    title: 'Autonomous Solar BOM & Cutting-List Engine',
    subtitle: 'Parametrisches Software-Toolkit zur automatischen Stücklisten- & Statik-Berechnung',
    category: 'engineering-software',
    categoryLabel: 'Engineering Software / Script',
    priceEur: 79,
    priceUsd: 86,
    badge: 'Ingenieur-Toolkit',
    rating: 4.99,
    reviewCount: 94,
    description: 'TypeScript & Python Algorithmen-Suite zur Generierung vollständiger Material-Stücklisten (Bill of Materials), Schnittpläne für 100x100mm Alu-Profile, Schrauben- und Dichtungsmatrizen sowie Wechselrichter-Auslegungen basierend auf kWp-Vorgaben.',
    features: [
      'Parametrische Zuschnitt-Optimierung (Verschnitt-Minimierung < 3.2 %)',
      'Automatische Ermittlung von Schrauben, Edelstahlankern (M16 A4) und EPDM-Metern',
      'Exportiert fertige CSV-, Excel- und JSON-Stücklisten für ERP- und Einkaufssysteme',
      'Integrierte Statik-Grenzwerte nach DIN EN 1991-1-3 (Schneelasten bis 5.4 kN/m²)'
    ],
    capabilities: [
      'Node.js / TypeScript CLI',
      'Python 3.11+ Modul',
      'CSV / JSON / ERP Export',
      'Schnittplan-Optimierung'
    ],
    deliverables: [
      {
        filename: 'aurevia-bom-calculator.ts',
        filetype: 'TypeScript Core Library',
        filesize: '14.2 KB',
        description: 'Vollständige Berechnungslogik mit Schnittstellen für Carports und Aufdachanlagen.'
      },
      {
        filename: 'cli-bom-generator.js',
        filetype: 'Executable Node CLI',
        filesize: '8.8 KB',
        description: 'Kommandozeilen-Werkzeug zur schnellen Angebotserstellung für Handwerksbetriebe.'
      }
    ],
    sampleContent: {
      type: 'code',
      title: 'Auszug aus der TypeScript BOM-Engine:',
      preview: `export function calculateCarportBOM(config: CarportConfig): CarportBOM {
  const postCount = config.bays === 1 ? 4 : config.bays === 2 ? 6 : (config.bays * 2) + 2;
  const longitudinalMeters = config.lengthMeters * 2;
  const crossBeamCount = Math.ceil(config.lengthMeters / 1.762) + 1;
  const moduleCount = config.bays * 16; // 32 modules for double bay (14.08 kWp)
  
  return {
    aluminumPosts: { profile: "100x100x4.0mm EN AW-6063 T6", count: postCount, lengthMm: 2600 },
    epdmGasketMeters: longitudinalMeters + (crossBeamCount * config.widthMeters),
    m16AnchorsCount: postCount * 4,
    totalWeightKg: postCount * 28 + (moduleCount * 21.0)
  };
}`
    },
    licenseTerms: 'Royalty-Free Developer & Installer Lizenz. Unbegrenzte Einbettung in eigene Firmen-Tools.',
    instantDownloadUrl: '/skills/aurevia-bom-calculator.ts'
  },
  {
    id: 'prod-04-swarm-suite',
    slug: 'agentic-solar-swarm-suite',
    title: 'Agentic Solar Swarm Suite (5-Agent Cluster)',
    subtitle: 'Vollständiger Multi-Agenten-Schwarm für Claude Code, Antigravity & AgentDB',
    category: 'swarms',
    categoryLabel: 'Multi-Agent Swarm',
    priceEur: 149,
    priceUsd: 162,
    badge: 'Flaggschiff-System',
    rating: 5.0,
    reviewCount: 67,
    description: 'Ein orchestrierter 5-Agenten-Cluster, der ein Solarprojekt autonom von der Luftbild-Analyse über Statik-Vorprüfung, CAD-Zerlegung, BOM-Generierung bis zum verkaufsfertigen PDF-Angebot durchführt.',
    features: [
      '5 Spezialisierte Agenten: Architekt, Statiker, Elektro-Ingenieur, Kalkulator, Dossier-Schreiber',
      'Automatischer Konsens- und Prüf-Loop (Santa Method) zur Fehlervermeidung',
      'Direkte Anbindung an lokale CAD-Daten, Wetter-APIs und Lagerbestands-Prüfungen',
      'Inklusive einsatzbereiter Starter-Skripte für Claude Code (`cl swarm`) und Antigravity'
    ],
    capabilities: [
      '5-Agenten Mesh-Architektur',
      'Autonome Fehler-Korrektur',
      'Dossier & PDF Output',
      'Vollständige Trajektorien-Protokolle'
    ],
    deliverables: [
      {
        filename: 'aurevia-solar-swarm.json',
        filetype: 'Agent Swarm Manifest',
        filesize: '22 KB',
        description: 'Vollständige Rollen-, Tool- und Prompt-Definitionen für alle 5 Agenten.'
      },
      {
        filename: 'swarm-orchestrator.mjs',
        filetype: 'Node.js Swarm Runner',
        filesize: '16.5 KB',
        description: 'Skript zur Ausführung des Multi-Agenten-Workflows in Terminal und CI/CD.'
      }
    ],
    sampleContent: {
      type: 'json',
      title: 'Auszug aus dem Swarm-Manifest (Agenten-Rollen):',
      preview: `{
  "swarmName": "AureviaSolarEngineeringCluster_v2",
  "agents": [
    { "role": "SiteArchitect", "task": "Geometrie-, Verschattungs- und Flächenanalyse" },
    { "role": "StaticsEngineer", "task": "DIN EN 1991 Schnee-/Windlast-Prüfung" },
    { "role": "ElectricalModeler", "task": "String-Auslegung, WR-Wirkungsgrad & Speicher-Zyklen" },
    { "role": "CostEstimator", "task": "BOM-Kalkulation, 0% MwSt. Prüfung & Zuteilung" },
    { "role": "DossierSynthesizer", "task": "Erstellung des finalen Kunden-Dossiers" }
  ]
}`
    },
    licenseTerms: 'Vollständige Enterprise-Lizenz. Freie Anpassung und produktiver Einsatz für Fachbetriebe.',
    instantDownloadUrl: '/skills/aurevia-solar-swarm.json'
  },
  {
    id: 'prod-05-enterprise-suite',
    slug: 'aurevia-enterprise-white-label',
    title: 'Aurevia Enterprise EPC & White-Label Platform',
    subtitle: 'Vollständiger Quellcode & White-Label Rechte für Solar-Unternehmen weltweit',
    category: 'enterprise',
    categoryLabel: 'White-Label Plattform',
    priceEur: 499,
    priceUsd: 545,
    badge: 'Enterprise / Unlimited',
    rating: 5.0,
    reviewCount: 23,
    description: 'Erhalten Sie das gesamte digitale Ökosystem: Alle 3D CAD Exploded Views, Next.js 15 Web-Applikation, Swarm-Pipelines, Prompt-Packs und API-Endpunkte für den eigenen Markenauftritt.',
    features: [
      'Vollständiger Next.js 15 + TypeScript Source Code der Aurevia Plattform',
      'Alle 3D Orbit CAD Explosions-Komponenten (Modul, Speicher, Carport)',
      'Unbeschränkte White-Label-Nutzungsrechte ohne wiederkehrende Lizenzgebühren',
      'Prioritärer Support und Unterstützung bei der Anbindung eigener ERP-Systeme'
    ],
    capabilities: [
      'Full Next.js Source Code',
      '3D Orbit CAD Komponenten',
      'White-Label Branding',
      'Keine monatlichen Gebühren'
    ],
    deliverables: [
      {
        filename: 'aurevia-platform-enterprise-bundle.zip',
        filetype: 'Vollständiges Source Code Repository',
        filesize: '14.2 MB',
        description: 'Next.js 15 App, Tailwind CSS Design System, alle 3D CAD Komponenten und APIs.'
      }
    ],
    licenseTerms: 'Kommerzielle White-Label Lizenz. Rebranding und weltweiter Einsatz für Ihr Unternehmen gestattet.',
    instantDownloadUrl: '/skills/aurevia-estate-architect.skill.md'
  }
];
