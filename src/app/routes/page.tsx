import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '线路列表 | rbly', description: '精选日本旅行线路' };

type Props = { searchParams?: { recommended?: string } };

export default async function RoutesPage({ searchParams }: Props) {
  const recommended = searchParams?.recommended === '1';
  const routes = await prisma.route.findMany({
    where: { isPublished: true, ...(recommended ? { isRecommended: true } : {}) },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">线路列表</h1>
      <div className="flex gap-2 text-sm">
        <a className={`rounded px-2 ${!recommended ? 'bg-slate-900 text-white' : 'border'}`} href="/routes">
          全部
        </a>
        <a className={`rounded px-2 ${recommended ? 'bg-slate-900 text-white' : 'border'}`} href="/routes?recommended=1">
          推荐
        </a>
      </div>
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
    </div>
  );
}
