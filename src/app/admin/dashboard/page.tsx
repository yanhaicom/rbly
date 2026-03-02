import { prisma } from '@/lib/prisma';

export default async function Dashboard() {
  const [cities, spots, routes, articles] = await Promise.all([
    prisma.city.count(),
    prisma.spot.count(),
    prisma.route.count(),
    prisma.article.count(),
  ]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">数据概览</h1>
      <div className="grid gap-4 md:grid-cols-4">
        {[
          ['城市', cities],
          ['景点', spots],
          ['线路', routes],
          ['攻略', articles],
        ].map(([label, val]) => (
          <div key={label} className="rounded border bg-white p-4 shadow-sm">
            <div className="text-sm text-slate-500">{label}</div>
            <div className="text-2xl font-bold">{val as number}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
