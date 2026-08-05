import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, postalCode, projectType, budgetRange, isWarehousePickup } = body;

    if (!email || !name || !postalCode) {
      return NextResponse.json({ error: 'Name, E-Mail und PLZ sind erforderlich.' }, { status: 400 });
    }

    const projectId = `PV-SEESEN-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

    // Lead intent classification
    const isTurnkey = budgetRange?.includes('12.000') || projectType === 'carport';
    const recommendedBrand = isTurnkey ? 'Aurevia Solar' : 'PV Lager Seesen';

    const dossier = {
      projectId,
      createdAt: new Date().toISOString(),
      customer: { name, email, phone, postalCode },
      project: { projectType, budgetRange, isWarehousePickup, recommendedBrand },
      status: 'Intake_Received',
      disclaimer: 'Unverbindliche Konzept-Ersterfassung (Build Passport). Verbindliche Angebote erfolgen erst nach fachlicher Prüfung durch das RIAL Energy Team.',
    };

    return NextResponse.json({
      success: true,
      message: 'Ersterfassung erfolgreich. Build Passport erstellt.',
      dossier,
    });
  } catch (error) {
    return NextResponse.json({ error: 'Fehler bei der Ersterfassung.' }, { status: 500 });
  }
}
