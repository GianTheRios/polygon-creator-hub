import { NextResponse } from 'next/server';

export async function GET() {
  // Placeholder metrics; replace with real data source
  const data = {
    totalTx: 5300000000,
    uniqueAddresses: 117000000,
    tvl: 2100000000,
    gasGwei: 30,
    lastUpdated: new Date().toISOString(),
  };
  return NextResponse.json(data, { headers: { 'Cache-Control': 'public, s-maxage=60' } });
}


