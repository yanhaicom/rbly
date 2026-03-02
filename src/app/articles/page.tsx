import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: '旅游攻略 | rbly', description: '日本旅游攻略与资讯' };

export default async function ArticlesPage() {
  const articles = await prisma.article.findMany({ where: { isPublished: true }, orderBy: { publishedAt: 'desc' } });

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">旅游攻略</h1>
      <div className="space-y-3">
        {articles.map((a) => (
          <a key={a.id} href={`/articles/${a.slug}`} className="block rounded border p-3 hover:bg-slate-50">
            <div className="font-semibold">
              {a.titleZh} / {a.titleJa}
            </div>
            <p className="text-sm text-slate-600">{a.summaryZh}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
