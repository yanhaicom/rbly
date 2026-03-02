// 服务列表与创建
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(services);
}

export async function POST(req: Request) {
  const body = await req.json();
  const created = await prisma.service.create({ data: body });
  return NextResponse.json(created);
}
