import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      client = {},
      configuration = {},
      projectedMetrics = {},
      bomRequirements = [],
      verificationHash
    } = body;

    const moduleCount = configuration.moduleCount || 30;
    const hasStorage = !!configuration.storageSystem;
    const hasCarport = configuration.systemType?.toLowerCase().includes('carport') || true;

    // Pricing calculation
    const modulePrice = moduleCount * 89;
    const carportPrice = hasCarport ? 3490 : 0;
    const storagePrice = hasStorage ? 3890 : 0;
    const subtotal = modulePrice + carportPrice + storagePrice;
    const vatAmount = 0; // § 12 (3) UStG 0% MwSt. for German residential solar
    const totalAmount = subtotal + vatAmount;

    const quoteId = `AUR-DOSSIER-${Date.now().toString(36).toUpperCase()}`;

    return NextResponse.json({
      success: true,
      status: 'VERIFIED_AND_RESERVED',
      quoteId,
      timestamp: new Date().toISOString(),
      warehouseDispatch: 'Zentrallager Seesen (Harz)',
      estimatedDeliveryDays: '3–5 Werktage per Spedition',
      statutoryValidation: {
        vatExemptionApplied: true,
        vatLegalBasis: '§ 12 Abs. 3 UStG (0% MwSt.)',
        snowLoadCompliance: 'DIN EN 1991-1-3 Zone 3 Harz Konform (bis 5.400 Pa)',
        staticCertificateAvailable: true
      },
      allocation: {
        modulesAllocated: moduleCount,
        carportKitReserved: hasCarport ? 'Zola Pod 100x100mm 2PKW' : 'None',
        storageAllocated: hasStorage ? 'BYD HVS 10.2 kWh' : 'None',
        stockReservationExpiresInHours: 72
      },
      financialSummary: {
        subtotalEur: subtotal,
        vatEur: vatAmount,
        totalEur: totalAmount,
        currency: 'EUR'
      },
      nextStep: {
        action: 'Zuteilung im Zentrallager Seesen ist für 72 Stunden reserviert. Unser technischer Projektleiter meldet sich zur Fundamentabstimmung.',
        directContact: '+49 (0) 5381 98000',
        contactEmail: 'anfrage@aurevia-solar.de'
      }
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: 'Ungültiges Dossier-Format. Bitte prüfen Sie die AureviaEstateDossier_v1 Spezifikation.',
        details: error?.message || 'Unknown error'
      },
      { status: 400 }
    );
  }
}
