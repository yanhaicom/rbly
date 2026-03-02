import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '景点列表 | rbly', description: '按城市筛选日本景点' };

type Props = { searchParams?: { city?: string } };

export default async function SpotsPage({ searchParams }: Props) {
  const city = searchParams?.city;
  const cities = await prisma.city.findMany({ where: { isPublished: true } });
  const spots = await prisma.spot.findMany({
    where: { isPublished: true, ...(city ? { city: { slug: city } } : {}) },
    include: { city: true },
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">景点列表</h1>
      <div className="flex gap-2 text-sm">
        <span className="text-slate-600">按城市：</span>
        <a className={`rounded px-2 ${!city ? 'bg-slate-900 text-white' : 'border'}`} href="/spots">
          全部
        </a>
        {cities.map((c) => (
          <a
            key={c.id}
            href={`/spots?city=${c.slug}`}
            className={`rounded px-2 ${city === c.slug ? 'bg-slate-900 text-white' : 'border'}`}
          >
            {c.nameZh}
          </a>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {spots.map((s) => (
          <a key={s.id} href={`/spots/${s.slug}`} className="rounded border p-4 hover:bg-slate-50">
            <div className="font-semibold">
              {s.nameZh} / {s.nameJa}
            </div>
            <p className="text-xs text-slate-500">{s.city?.nameZh}</p>
            <p className="text-sm text-slate-600">{s.summaryZh}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
