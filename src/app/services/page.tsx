import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '旅游服务 | rbly', description: '包车、酒店、签证等服务介绍' };

export default async function ServicesPage() {
  const services = await prisma.service.findMany({ where: { isPublished: true } });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">旅游服务</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s) => (
          <a key={s.id} href={`/services/${s.slug}`} className="rounded border p-4 hover:bg-slate-50">
            <div className="font-semibold">
              {s.nameZh} / {s.nameJa}
            </div>
            <p className="text-sm text-slate-600">{s.descriptionZh}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
