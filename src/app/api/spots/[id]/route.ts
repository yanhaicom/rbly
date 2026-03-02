import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  const spot = await prisma.spot.findUnique({ where: { id: Number(params.id) }, include: { images: true, city: true } });
  if (!spot) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(spot);
}

export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = await prisma.spot.update({ where: { id: Number(params.id) }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  await prisma.spot.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}
