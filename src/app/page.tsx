// 首页展示推荐内容，便于 SEO
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本旅游指南 | rbly.com',
  description: '精选城市、景点与线路，提供中文/日文内容。',
};

export default async function Home() {
  const [cities, spots, routes] = await Promise.all([
    prisma.city.findMany({ where: { isPublished: true }, take: 4 }),
    prisma.spot.findMany({ where: { isPublished: true, isRecommended: true }, take: 4, include: { city: true } }),
    prisma.route.findMany({ where: { isPublished: true, isRecommended: true }, take: 4 }),
  ]);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-bold mb-2">推荐城市</h1>
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
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">推荐景点</h2>
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
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-2">推荐线路</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {routes.map((r) => (
            <a key={r.id} href={`/routes/${r.slug}`} className="rounded border p-4 hover:bg-slate-50">
              <div className="font-semibold">
                {r.titleZh} / {r.titleJa}
              </div>
              <p className="text-sm text-slate-600">{r.summaryZh}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
