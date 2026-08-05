import { NextResponse } from 'next/server';
import { REAL_PRODUCT_CATALOG } from '@/lib/stock-data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const query = searchParams.get('q')?.toLowerCase();

  let results = REAL_PRODUCT_CATALOG;

  if (category && category !== 'all') {
    results = results.filter((item) => item.category === category);
  }

  if (query) {
    results = results.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.sku.toLowerCase().includes(query) ||
        item.brand.toLowerCase().includes(query)
    );
  }

  return NextResponse.json({
    warehouse: 'Zentrallager Seesen (Harz)',
    status: 'Operational',
    totalItems: results.length,
    timestamp: new Date().toISOString(),
    catalog: results,
  });
}
