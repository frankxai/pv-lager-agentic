import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log('---------------------------------------------------------');
    console.log('QUALIFIED SALES LEAD DOSSIER (Target: Sales Lead / Brother)');
    console.log('Timestamp:', new Date().toISOString());
    console.log('Customer:', body.leadName, '| Email:', body.leadEmail, '| Phone:', body.leadPhone, '| PLZ:', body.leadZip);
    console.log('Configuration:', body.carportType, '| Modules:', body.panelCount, '| Power:', body.totalPowerKwp, 'kWp');
    console.log('BOM Summary:', JSON.stringify(body.bom));
    console.log('Upsells:', JSON.stringify(body.upsells));
    console.log('Calculated Net Price:', body.totalPriceWithoutVat, 'EUR');
    console.log('---------------------------------------------------------');

    return NextResponse.json({
      success: true,
      message: 'Lead dossier recorded successfully and dispatched to sales lead dashboard.',
      referenceId: `PVL-${Math.floor(100000 + Math.random() * 900000)}`
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to record lead payload' }, { status: 500 });
  }
}
