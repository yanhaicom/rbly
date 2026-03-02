import { prisma } from '@/lib/prisma';

export default async function sitemap() {
  const base = 'https://rbly.com';
  const [cities, spots, routes, articles, services] = await Promise.all([
    prisma.city.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
    prisma.spot.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
    prisma.route.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
    prisma.article.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
    prisma.service.findMany({ where: { isPublished: true }, select: { slug: true, updatedAt: true } }),
  ]);

  return [
    { url: `${base}/`, lastModified: new Date() },
    ...cities.map((c) => ({ url: `${base}/cities/${c.slug}`, lastModified: c.updatedAt })),
    ...spots.map((s) => ({ url: `${base}/spots/${s.slug}`, lastModified: s.updatedAt })),
    ...routes.map((r) => ({ url: `${base}/routes/${r.slug}`, lastModified: r.updatedAt })),
    ...articles.map((a) => ({ url: `${base}/articles/${a.slug}`, lastModified: a.updatedAt })),
    ...services.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified: s.updatedAt })),
  ];
}
