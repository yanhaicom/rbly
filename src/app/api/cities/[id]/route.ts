import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  const city = await prisma.city.findUnique({ where: { id: Number(params.id) } });
  if (!city) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(city);
}

export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = await prisma.city.update({ where: { id: Number(params.id) }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  await prisma.city.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}
