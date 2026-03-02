import { prisma } from '@/lib/prisma';

export default async function AdminServices() {
  const services = await prisma.service.findMany({ orderBy: { createdAt: 'desc' } });
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">服务管理</h1>
      <p className="text-sm text-slate-600">可扩展价格、类型、上下线等编辑功能。</p>
      <table className="w-full text-sm rounded border bg-white">
        <thead>
          <tr className="border-b text-left">
            <th className="p-2">名称</th>
            <th>类型</th>
            <th>发布</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s) => (
            <tr key={s.id} className="border-b">
              <td className="p-2">{s.nameZh}</td>
              <td>{s.serviceType}</td>
              <td>{s.isPublished ? '是' : '否'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
