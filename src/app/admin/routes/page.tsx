import { prisma } from '@/lib/prisma';

export default async function AdminRoutes() {
  const routes = await prisma.route.findMany({ orderBy: { createdAt: 'desc' } });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">线路管理</h1>
      <p className="text-sm text-slate-600">此处可扩展编辑功能（选择景点、设置天数等）。</p>
      <table className="w-full text-sm rounded border bg-white">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">标题</th>
            <th>天数</th>
            <th>推荐</th>
            <th>发布</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((r) => (
            <tr key={r.id} className="border-b">
              <td className="p-2">{r.titleZh}</td>
              <td>{r.days}</td>
              <td>{r.isRecommended ? '是' : '否'}</td>
              <td>{r.isPublished ? '是' : '否'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
