import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const spot = await prisma.spot.findUnique({ where: { slug: params.slug } });
  if (!spot) return {};
  return {
    title: spot.seoTitleZh ?? `${spot.nameZh} | rbly`,
    description: spot.seoDescriptionZh ?? spot.summaryZh ?? undefined,
  };
}

export default async function SpotDetail({ params }: Props) {
  const spot = await prisma.spot.findUnique({
    where: { slug: params.slug },
    include: { images: true, city: true },
  });
  if (!spot) notFound();

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        {spot.nameZh} / {spot.nameJa}
      </h1>
      <p className="text-sm text-slate-500">{spot.city?.nameZh}</p>
      <p className="text-slate-700">{spot.summaryZh}</p>
      <article className="prose max-w-none">
        <p>{spot.descriptionZh}</p>
      </article>
      <div className="grid gap-2 md:grid-cols-2">
        {spot.images.map((img) => (
          <div key={img.id} className="rounded border p-2">
            <img src={img.imageUrl} alt={img.altTextZh || img.altTextJa || ''} className="h-48 w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="space-y-2 text-sm">
        <div>地址：{spot.addressZh}</div>
        <div>开放时间：{spot.openTime}</div>
        <div>门票：{spot.ticketInfo}</div>
      </div>
      <div className="h-64 rounded border bg-slate-100 flex items-center justify-center">地图占位（后续接地图 API）</div>
    </div>
  );
}
