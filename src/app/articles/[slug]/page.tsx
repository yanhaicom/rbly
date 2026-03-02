import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await prisma.article.findUnique({ where: { slug: params.slug } });
  if (!article) return {};
  return {
    title: article.seoTitleZh ?? `${article.titleZh} | rbly`,
    description: article.seoDescriptionZh ?? article.summaryZh ?? undefined,
  };
}

export default async function ArticleDetail({ params }: Props) {
  const article = await prisma.article.findUnique({ where: { slug: params.slug } });
  if (!article) notFound();
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        {article.titleZh} / {article.titleJa}
      </h1>
      <p className="text-slate-600">{article.summaryZh}</p>
      <article className="prose max-w-none">
        <p>{article.contentZh}</p>
      </article>
    </div>
  );
}
