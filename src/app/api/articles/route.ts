// 攻略列表与创建
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(articles);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.article.create({ data: body });
  return NextResponse.json(created);
}
