import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const city = await prisma.city.findUnique({ where: { slug: params.slug } });
  if (!city) return {};
  return {
    title: city.seoTitleZh ?? `${city.nameZh} | rbly`,
    description: city.seoDescriptionZh ?? city.summaryZh ?? undefined,
  };
}

export default async function CityDetail({ params }: Props) {
  const city = await prisma.city.findUnique({
    where: { slug: params.slug },
    include: {
      spots: { where: { isPublished: true, isRecommended: true }, take: 6 },
    },
  });
  if (!city) notFound();

  const routes = await prisma.route.findMany({
    where: { isPublished: true, isRecommended: true },
    take: 6,
  });

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold">
          {city.nameZh} / {city.nameJa}
        </h1>
        <p className="text-slate-600">{city.summaryZh}</p>
      </header>
      <article className="prose max-w-none">
        <p>{city.descriptionZh}</p>
      </article>
      <section>
        <h2 className="text-xl font-semibold mb-2">推荐景点</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {city.spots.map((s) => (
            <a key={s.id} href={`/spots/${s.slug}`} className="rounded border p-3 hover:bg-slate-50">
              <div className="font-semibold">{s.nameZh}</div>
              <p className="text-sm text-slate-600">{s.summaryZh}</p>
            </a>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-2">推荐线路</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {routes.map((r) => (
            <a key={r.id} href={`/routes/${r.slug}`} className="rounded border p-3 hover:bg-slate-50">
              <div className="font-semibold">{r.titleZh}</div>
              <p className="text-sm text-slate-600">{r.summaryZh}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
