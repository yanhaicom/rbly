import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Params = { params: { id: string } };

export async function GET(_: Request, { params }: Params) {
  const article = await prisma.article.findUnique({ where: { id: Number(params.id) } });
  if (!article) return NextResponse.json({ error: 'not found' }, { status: 404 });
  return NextResponse.json(article);
}

export async function PUT(req: Request, { params }: Params) {
  const body = await req.json();
  const updated = await prisma.article.update({ where: { id: Number(params.id) }, data: body });
  return NextResponse.json(updated);
}

export async function DELETE(_: Request, { params }: Params) {
  await prisma.article.delete({ where: { id: Number(params.id) } });
  return NextResponse.json({ ok: true });
}
