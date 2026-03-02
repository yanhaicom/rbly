// 线路列表与创建
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const routes = await prisma.route.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(routes);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.route.create({ data: body });
  return NextResponse.json(created);
}
