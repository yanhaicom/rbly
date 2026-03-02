import { prisma } from '@/lib/prisma';

export default async function AdminArticles() {
  const articles = await prisma.article.findMany({ orderBy: { createdAt: 'desc' } });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">攻略管理</h1>
      <p className="text-sm text-slate-600">后续可接入富文本/Markdown 编辑器。</p>
      <table className="w-full text-sm rounded border bg-white">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">标题</th>
            <th>分类</th>
            <th>发布</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((a) => (
            <tr key={a.id} className="border-b">
              <td className="p-2">{a.titleZh}</td>
              <td>{a.category}</td>
              <td>{a.isPublished ? '是' : '否'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
