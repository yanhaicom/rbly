// 景点列表与创建
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const city = searchParams.get('cityId');
  const where = city ? { cityId: Number(city) } : {};
  const spots = await prisma.spot.findMany({ where, orderBy: { createdAt: 'desc' }, include: { city: true } });
  return NextResponse.json(spots);
}

export async function POST(req: Request) {
  const data = await req.json();
  const created = await prisma.spot.create({ data });
  return NextResponse.json(created);
}
