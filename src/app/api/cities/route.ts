// 城市列表与创建接口
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const cities = await prisma.city.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(cities);
}

export async function POST(req: Request) {
  const data = await req.json();
  // 可接入 zod 校验，这里为示例从简
  const created = await prisma.city.create({ data });
  return NextResponse.json(created);
}
