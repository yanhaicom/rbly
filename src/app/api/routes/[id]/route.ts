import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = { params: Promise<{ id: string }> };

export async function GET(_: Request, { params }: Params) {
  const { id } = await params;
  const route = await prisma.route.findUnique({
    where: { id: Number(id) },
    include: { routeSpots: { include: { spot: true }, orderBy: [{ dayIndex: 'asc' }, { orderIndex: 'asc' }] } },
  });
  if (!route) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(route);
}

export async function PUT(req: Request, { params }: Params) {
  const { id } = await params;
  const body = await req.json();
  const updated = await prisma.route.update({ where: { id: Number(id) }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  const { id } = await params;
  await prisma.route.delete({ where: { id: Number(id) } });
  return NextResponse.json({ ok: true });
}
