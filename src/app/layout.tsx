import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RBLY 日本旅游内容站',
  description: '覆盖城市、景点、线路、攻略与服务的日本旅游站点',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white text-slate-900">
        <header className="border-b">
          <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
            <a className="text-xl font-bold" href="/">
              rbly.com
            </a>
            <nav className="flex gap-4 text-sm">
              <a href="/cities">城市</a>
              <a href="/spots">景点</a>
              <a href="/routes">线路</a>
              <a href="/articles">攻略</a>
              <a href="/services">服务</a>
              <a href="/about">关于</a>
              <a href="/contact">联系</a>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-5xl p-4">{children}</main>
        <footer className="border-t p-4 text-center text-sm text-slate-500">© rbly.com</footer>
      </body>
    </html>
  );
}
