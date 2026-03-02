import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = await prisma.service.findUnique({ where: { slug } });
  if (!service) return {};
  return {
    title: service.seoTitleZh ?? `${service.nameZh} | rbly`,
    description: service.seoDescriptionZh ?? service.descriptionZh ?? undefined,
  };
}

export default async function ServiceDetail({ params }: Props) {
  const { slug } = await params;
  const service = await prisma.service.findUnique({ where: { slug } });
  if (!service) notFound();
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        {service.nameZh} / {service.nameJa}
      </h1>
      <p className="text-slate-700">{service.descriptionZh}</p>
      <div className="text-sm text-slate-600">类型：{service.serviceType}</div>
      <div className="rounded border p-4 bg-slate-50">可在此放置咨询/购买 CTA</div>
    </div>
  );
}
