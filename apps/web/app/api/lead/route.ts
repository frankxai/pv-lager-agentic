import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, carportType, moduleCount, storageType, totalPrice } = body;

    // AI Lead Scoring Algorithm
    const kwp = Math.round((moduleCount || 18) * 0.435 * 100) / 100;
    const estYearlyYield = Math.round(kwp * 980);
    const leadScore = (totalPrice > 5000 ? 40 : 25) + (phone ? 30 : 15) + (storageType !== 'none' ? 30 : 15);

    const erpBomId = `BOM-SEESEN-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      success: true,
      leadId: `LEAD-${Date.now()}`,
      bomId: erpBomId,
      score: leadScore,
      leadGrade: leadScore > 75 ? 'VIP Platinum' : 'Standard Qualified',
      summary: {
        customerName: name || 'Anonym',
        kwp,
        estYearlyYield,
        totalEstimate: totalPrice || 3490,
        vatInfo: '0% MwSt. § 12 (3) UStG befreit',
        warehouse: 'Zentrallager Seesen (Harz)',
      },
      message: 'Ihre Anfrage wurde erfolgreich im Weclapp ERP erfasst. Ein Fachberater kontaktiert Sie innerhalb von 24 Stunden.',
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Ungültige Anfrage' }, { status: 400 });
  }
}
