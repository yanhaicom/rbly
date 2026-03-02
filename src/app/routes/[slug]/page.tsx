import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = await prisma.route.findUnique({ where: { slug } });
  if (!route) return {};
  return {
    title: route.seoTitleZh ?? `${route.titleZh} | rbly`,
    description: route.seoDescriptionZh ?? route.summaryZh ?? undefined,
  };
}

export default async function RouteDetail({ params }: Props) {
  const { slug } = await params;
  const route = await prisma.route.findUnique({
    where: { slug },
    include: { routeSpots: { include: { spot: true }, orderBy: [{ dayIndex: 'asc' }, { orderIndex: 'asc' }] } },
  });
  if (!route) notFound();

  // 将行程按天分组
  const grouped = route.routeSpots.reduce<Record<number, typeof route.routeSpots>>((acc, item) => {
    acc[item.dayIndex] = acc[item.dayIndex] ? [...acc[item.dayIndex], item] : [item];
    return acc;
  }, {});

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">
        {route.titleZh} / {route.titleJa}
      </h1>
      <p className="text-slate-600">{route.summaryZh}</p>
      <article className="prose max-w-none">
        <p>{route.descriptionZh}</p>
      </article>
      <div className="space-y-4">
        {Object.entries(grouped).map(([day, spots]) => (
          <div key={day} className="rounded border p-4">
            <div className="mb-2 font-semibold">第 {day} 天</div>
            <ol className="list-decimal list-inside space-y-1">
              {spots.map((s) => (
                <li key={s.id}>
                  <a className="text-blue-700" href={`/spots/${s.spot.slug}`}>
                    {s.spot.nameZh}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}
