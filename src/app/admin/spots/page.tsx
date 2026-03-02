import { prisma } from '@/lib/prisma';

// 服务端渲染列表，简化示例；后续可改为 client + 表单
export default async function AdminSpots() {
  const spots = await prisma.spot.findMany({ include: { city: true }, orderBy: { createdAt: 'desc' } });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">景点管理</h1>
      <p className="text-sm text-slate-600">这里列出景点数据，后续可替换为可编辑表单/对话框。</p>
      <table className="w-full text-sm rounded border bg-white">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">名称</th>
            <th>城市</th>
            <th>推荐</th>
            <th>发布</th>
          </tr>
        </thead>
        <tbody>
          {spots.map((s) => (
            <tr key={s.id} className="border-b">
              <td className="p-2">{s.nameZh}</td>
              <td>{s.city?.nameZh}</td>
              <td>{s.isRecommended ? '是' : '否'}</td>
              <td>{s.isPublished ? '是' : '否'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
