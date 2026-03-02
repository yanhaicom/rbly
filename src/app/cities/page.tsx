import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '城市列表 | rbly', description: '日本主要城市与地区介绍' };

export default async function CitiesPage() {
  const cities = await prisma.city.findMany({ where: { isPublished: true } });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">城市列表</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {cities.map((c) => (
          <a key={c.id} href={`/cities/${c.slug}`} className="rounded border p-4 hover:bg-slate-50">
            <div className="font-semibold">
              {c.nameZh} / {c.nameJa}
            </div>
            <p className="text-sm text-slate-600">{c.summaryZh}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
