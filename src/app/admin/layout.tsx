// 后台统一布局，含导航
export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between p-4">
          <div className="font-bold">RBLY 后台</div>
          <nav className="flex gap-3 text-sm">
            <a href="/admin/dashboard">概览</a>
            <a href="/admin/cities">城市</a>
            <a href="/admin/spots">景点</a>
            <a href="/admin/routes">线路</a>
            <a href="/admin/articles">攻略</a>
            <a href="/admin/services">服务</a>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl p-6">{children}</main>
    </div>
  );
}
