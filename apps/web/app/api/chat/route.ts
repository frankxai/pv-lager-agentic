import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content || '';

    // Solar Engineering & Sales Copilot Knowledge Base Logic
    let reply = 'Für Einzel- & Doppelcarports empfehlen wir unser Heavy-Duty 100x100mm Aluminium-Profil mit integrierter Smart-Regenrinne. Es ist statisch geprüft für Schneelastzone 3 und erfordert minimale Wartung.';

    const lower = lastMessage.toLowerCase();
    if (lower.includes('preis') || lower.includes('kosten') || lower.includes('angebot')) {
      reply = 'Unsere Doppel-Carport Komplettsysteme mit 18 bifazialen Glas-Glas Modulen (7.83 kWp) starten bei ca. €8.400 netto (0% MwSt. gemäß §12 Abs. 3 UStG). Gerne erstellen wir Ihnen eine maßgeschneiderte ERP-Stückliste.';
    } else if (lower.includes('speicher') || lower.includes('akku') || lower.includes('batterie')) {
      reply = 'Wir bieten modulare 5 kWh bis 30 kWh Smart-Batteriespeicher mit LiFePO4 Zellchemie. Ein 10 kWh Speicher steigert den Eigenverbrauch Ihres Carports von 35% auf ca. 82%.';
    } else if (lower.includes('steuer') || lower.includes('mwst') || lower.includes('ustg')) {
      reply = 'Gemäß § 12 Abs. 3 UStG gilt in Deutschland der Nullsteuersatz (0% MwSt.) für Photovoltaikanlagen und wesentliche Komponenten wie Wechselrichter, Carport-Unterkonstruktionen und Speicher für Wohngebäude.';
    } else if (lower.includes('lager') || lower.includes('seesen') || lower.includes('lieferung')) {
      reply = 'Unser Zentrallager in Seesen (Harz) hält derzeit über 1.400 bifaziale Trina Solar Module und 18 Alu-Carport Bausätze sofort abrufbereit. Die Lieferzeit beträgt deutschlandweit ca. 3–5 Werktage.';
    }

    return NextResponse.json({ reply });
  } catch (error) {
    return NextResponse.json({ reply: 'Vielen Dank für Ihre Anfrage. Unser Expertenteam im Zentrallager Seesen steht Ihnen gerne telefonisch unter +49 5381 98000 zur Verfügung.' });
  }
}
