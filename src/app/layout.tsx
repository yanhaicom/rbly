import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RBLY 日本旅游内容站',
  description: '覆盖城市、景点、线路、攻略与服务的日本旅游站点',
};

const navLinks = [
  { href: '/cities', label: '城市' },
  { href: '/spots', label: '景点' },
  { href: '/routes', label: '线路' },
  { href: '/articles', label: '攻略' },
  { href: '/services', label: '服务' },
  { href: '/guides', label: '导游' },
  { href: '/about', label: '关于' },
  { href: '/contact', label: '联系' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[#f7f5f3] text-[#2d2d2d]">
        {/* ===== Header ===== */}
        <header className="sticky top-0 z-50 border-b border-[#e8e4df] bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            {/* Brand */}
            <a href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-[#1e3a5f]">rbly.com</span>
              <span className="hidden text-xs text-[#8a8a8a] sm:inline">日本旅游</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-sm text-[#5a5a5a] transition-colors hover:text-[#1e3a5f] after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-[#e8a0bf] after:transition-all after:duration-300 hover:after:w-4/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/guides#booking-form"
                className="ml-2 rounded-full bg-[#1e3a5f] px-4 py-1.5 text-sm text-white transition-all hover:bg-[#2a4f7a] hover:shadow-md"
              >
                预约导游
              </a>
            </nav>

            {/* Mobile Menu Toggle (CSS-only) */}
            <label htmlFor="mobile-menu" className="cursor-pointer p-2 md:hidden" aria-label="菜单">
              <svg className="h-6 w-6 text-[#1e3a5f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>

          {/* Mobile Menu */}
          <input type="checkbox" id="mobile-menu" className="mobile-menu-toggle peer" aria-hidden="true" />
          <nav className="mobile-menu border-t border-[#e8e4df] px-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm text-[#5a5a5a] transition-colors hover:bg-[#f7f5f3] hover:text-[#1e3a5f]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/guides#booking-form"
                className="mt-2 rounded-full bg-[#1e3a5f] px-4 py-2.5 text-center text-sm text-white"
              >
                预约导游
              </a>
            </div>
          </nav>
        </header>

        {/* ===== Main ===== */}
        <main>{children}</main>

        {/* ===== Footer ===== */}
        <footer className="mt-16 border-t border-[#e8e4df] bg-[#f0ece7]">
          <div className="mx-auto max-w-6xl px-4 py-12">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Brand Column */}
              <div className="space-y-3">
                <div className="text-lg font-bold text-[#1e3a5f]">rbly.com</div>
                <p className="text-sm leading-relaxed text-[#5a5a5a]">
                  您的日本旅行伙伴。提供城市指南、景点推荐、线路规划及专业导游服务，让每一次日本之旅都成为难忘的体验。
                </p>
              </div>

              {/* Quick Links Column */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-[#2d2d2d]">快速链接</div>
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-sm text-[#5a5a5a] transition-colors hover:text-[#1e3a5f]"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Column */}
              <div className="space-y-3">
                <div className="text-sm font-semibold text-[#2d2d2d]">联系我们</div>
                <div className="space-y-2 text-sm text-[#5a5a5a]">
                  <p>微信：rbly-japan</p>
                  <p>LINE：@rbly</p>
                  <p>邮箱：info@rbly.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="border-t border-[#e0dbd5] py-4 text-center text-xs text-[#8a8a8a]">
            &copy; {new Date().getFullYear()} rbly.com — 日本旅游内容站
          </div>
        </footer>
      </body>
    </html>
  );
}
