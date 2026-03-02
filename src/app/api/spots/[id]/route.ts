import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  const spot = await prisma.spot.findUnique({ where: { id: Number(id) }, include: { images: true, city: true } });
  if (!spot) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(spot);
}

export async function PUT(req: Request, { params }: Params) {
  const { id } = await params;
  const body = await req.json();
  const updated = await prisma.spot.update({ where: { id: Number(id) }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  const { id } = await params;
  await prisma.spot.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}
