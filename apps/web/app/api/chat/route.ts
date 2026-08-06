import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const query = (message || '').toLowerCase();

    let responseText = '';

    if (query.includes('lager') || query.includes('stock') || query.includes('seesen') || query.includes('lieferzeit')) {
      responseText =
        'Im Zentrallager Seesen (Harz) sind derzeit 1.420 Trina Vertex S+ 440W Bifazial-Module und 18 Zola Pod Doppel-Carport Alu-Bausätze sofort verfügbar. Speditionsversand erfolgt innerhalb von 24–48 Stunden.';
    } else if (query.includes('preis') || query.includes('kosten') || query.includes('mwst') || query.includes('angebot')) {
      responseText =
        'Alle Solar-Carports und PV-Komponenten sind nach § 12 Abs. 3 UStG komplett von der Mehrwertsteuer (0% MwSt.) befreit. Der Doppel-Carport Zola Pod startet ab 3.490 € inkl. statischem Zertifikat für Schneelastzone 3.';
    } else if (query.includes('statik') || query.includes('schnee') || query.includes('harz') || query.includes('wind')) {
      responseText =
        'Unsere 100x100mm Aluminium-Tragwerke sind nach DIN EN 1991-1-3 statisch für Schneelastzone 3 (bis zu 3.0 kN/m² Schneelast im Harz) sowie Windlastzone 2/3 zertifiziert. 30 Jahre Garantie auf das Alu-Profil.';
    } else {
      responseText =
        'Guten Tag! Ich bin der KI-Concierge von Aurevia Solar & Zentrallager Seesen. Ich berate Sie zu bifazialen Glas-Glas Modulen, Alu-Carport Statik und 0% MwSt. Steuerfreistellungen. Wie kann ich Ihr Anwesen unterstützen?';
    }

    return NextResponse.json({
      reply: responseText,
      agent: 'Aurevia Sovereign AI Copilot',
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json({ reply: 'Entschuldigung, ein temporärer Systemfehler ist aufgetreten.' }, { status: 500 });
  }
}
