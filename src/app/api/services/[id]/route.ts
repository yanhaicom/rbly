import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  const service = await prisma.service.findUnique({ where: { id: Number(params.id) } });
  if (!service) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(service);
}

export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = await prisma.service.update({ where: { id: Number(params.id) }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  await prisma.service.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}
