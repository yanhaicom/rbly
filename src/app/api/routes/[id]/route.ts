import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  const route = await prisma.route.findUnique({
    where: { id: Number(params.id) },
    include: { routeSpots: { include: { spot: true }, orderBy: [{ dayIndex: 'asc' }, { orderIndex: 'asc' }] } },
  });
  if (!route) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(route);
}

export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = await prisma.route.update({ where: { id: Number(params.id) }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  await prisma.route.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}
