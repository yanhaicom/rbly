// 首页展示推荐内容，便于 SEO
import { prisma } from '@/lib/prisma';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '日本旅游指南 | rbly.com',
  description: '精选城市、景点与线路，提供中文/日文内容。',
};

/* ---------- 渐变色数组 — 给城市卡片配色 ---------- */
const cityGradients = [
  'from-[#1e3a5f] to-[#2d5a8e]',
  'from-[#2d1b69] to-[#5b3a8e]',
  'from-[#1a4a3a] to-[#2d7a5e]',
  'from-[#5a2d3a] to-[#8e4a5e]',
];

export default async function Home() {
  const [cities, spots, routes] = await Promise.all([
    prisma.city.findMany({ where: { isPublished: true }, take: 4 }),
    prisma.spot.findMany({ where: { isPublished: true, isRecommended: true }, take: 4, include: { city: true } }),
    prisma.route.findMany({ where: { isPublished: true, isRecommended: true }, take: 4 }),
  ]);

  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="bg-hero-gradient relative overflow-hidden px-4 py-20 text-white md:py-28">
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/5" />
        <div className="pointer-events-none absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/5" />

        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="animate-fade-in-up text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            探索日本之美
          </h1>
          <p className="animate-fade-in-up delay-200 mx-auto mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
            从繁华的东京到宁静的京都，从北海道雪国到冲绳碧海 —— 我们为您提供最全面的日本旅行指南
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up delay-300 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/cities"
              className="rounded-full bg-white px-8 py-3 font-medium text-[#1e3a5f] shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              查看城市
            </a>
            <a
              href="/guides"
              className="rounded-full border-2 border-white/40 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-all hover:border-white/80 hover:bg-white/20"
            >
              预约导游
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-in-up delay-400 mt-12 flex items-center justify-center gap-8 text-sm text-white/70 md:gap-12">
            <div>
              <span className="block text-2xl font-bold text-white">{cities.length}+</span>
              热门城市
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <span className="block text-2xl font-bold text-white">{spots.length}+</span>
              精选景点
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <span className="block text-2xl font-bold text-white">{routes.length}+</span>
              旅行线路
            </div>
          </div>
        </div>
      </section>

      {/* ===== 特色服务 ===== */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2d2d2d]">我们的服务</h2>
            <p className="mt-2 text-[#5a5a5a]">三大核心服务，助您畅游日本</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: '\u{1F3EF}',
                title: '城市与景点指南',
                desc: '覆盖日本主要城市和热门景点的详细中文介绍，包含交通、门票、最佳游览时间等实用信息。',
                href: '/cities',
              },
              {
                icon: '\u{1F5FA}',
                title: '线路规划',
                desc: '精心设计的多日游线路推荐，从经典观光到深度体验，满足不同需求和预算。',
                href: '/routes',
              },
              {
                icon: '\u{1F464}',
                title: '专业导游',
                desc: '持证中日双语导游一对一陪同，行程灵活定制，价格透明，让您安心游日本。',
                href: '/guides',
              },
            ].map((s) => (
              <a
                key={s.title}
                href={s.href}
                className="card-hover group rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="text-4xl">{s.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-[#1e3a5f] group-hover:text-[#2a4f7a]">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5a5a5a]">{s.desc}</p>
                <span className="mt-4 inline-block text-sm font-medium text-[#e8a0bf]">
                  了解更多 &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 推荐城市 ===== */}
      <section className="bg-section-warm px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#2d2d2d]">热门目的地</h2>
              <p className="mt-2 text-[#5a5a5a]">探索日本最受欢迎的旅行城市</p>
            </div>
            <a href="/cities" className="hidden text-sm font-medium text-[#1e3a5f] hover:underline md:block">
              查看全部 &rarr;
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {cities.map((c, i) => (
              <a
                key={c.id}
                href={`/cities/${c.slug}`}
                className="card-hover group relative overflow-hidden rounded-2xl shadow-sm"
                style={{ minHeight: '220px' }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cityGradients[i % cityGradients.length]} transition-all duration-500 group-hover:scale-105`} />
                {/* Content overlay */}
                <div className="relative flex h-full min-h-[220px] flex-col justify-end p-6 text-white">
                  <div className="text-xs uppercase tracking-wider text-white/60">
                    {c.nameJa}
                  </div>
                  <h3 className="mt-1 text-2xl font-bold">{c.nameZh}</h3>
                  <p className="mt-2 line-clamp-2 text-sm text-white/80">{c.summaryZh}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <a href="/cities" className="text-sm font-medium text-[#1e3a5f] hover:underline">
              查看全部城市 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ===== 推荐景点 ===== */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#2d2d2d]">不容错过的景点</h2>
              <p className="mt-2 text-[#5a5a5a]">精选人气景点，附带实用游览攻略</p>
            </div>
            <a href="/spots" className="hidden text-sm font-medium text-[#1e3a5f] hover:underline md:block">
              查看全部 &rarr;
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {spots.map((s) => (
              <a
                key={s.id}
                href={`/spots/${s.slug}`}
                className="card-hover group rounded-2xl bg-white p-5 shadow-sm"
              >
                {/* City tag */}
                {s.city && (
                  <span className="inline-block rounded-full bg-[#f7f5f3] px-3 py-1 text-xs text-[#5a5a5a]">
                    {s.city.nameZh}
                  </span>
                )}
                <h3 className="mt-3 font-semibold text-[#2d2d2d] group-hover:text-[#1e3a5f]">
                  {s.nameZh}
                </h3>
                <p className="mt-1 text-xs text-[#8a8a8a]">{s.nameJa}</p>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#5a5a5a]">{s.summaryZh}</p>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <a href="/spots" className="text-sm font-medium text-[#1e3a5f] hover:underline">
              查看全部景点 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ===== 推荐线路 ===== */}
      <section className="bg-section-warm px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-[#2d2d2d]">精选旅行线路</h2>
              <p className="mt-2 text-[#5a5a5a]">精心规划的多日游线路，涵盖经典与小众</p>
            </div>
            <a href="/routes" className="hidden text-sm font-medium text-[#1e3a5f] hover:underline md:block">
              查看全部 &rarr;
            </a>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {routes.map((r) => (
              <a
                key={r.id}
                href={`/routes/${r.slug}`}
                className="card-hover group rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-[#2d2d2d] group-hover:text-[#1e3a5f]">
                      {r.titleZh}
                    </h3>
                    <p className="mt-1 text-xs text-[#8a8a8a]">{r.titleJa}</p>
                  </div>
                </div>
                <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-[#5a5a5a]">{r.summaryZh}</p>
              </a>
            ))}
          </div>

          <div className="mt-6 text-center md:hidden">
            <a href="/routes" className="text-sm font-medium text-[#1e3a5f] hover:underline">
              查看全部线路 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ===== 导游 CTA ===== */}
      <section className="bg-cta-gradient px-4 py-16 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold">需要专业导游陪同？</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            持证中日双语导游，提供私人向导、团队导游、商务翻译等全方位服务。覆盖日本全境，行程100%灵活定制，价格透明无隐形消费。
          </p>
          <a
            href="/guides"
            className="mt-8 inline-block rounded-full bg-[#e8a0bf] px-10 py-3.5 font-medium text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-[#d48aab] hover:shadow-xl"
          >
            了解导游服务
          </a>
        </div>
      </section>

      {/* ===== 信任指标 ===== */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-[#2d2d2d]">为什么选择 rbly.com</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: '\u{2714}\u{FE0F}', title: '内容可靠', desc: '所有信息均由在日华人实地验证' },
              { icon: '\u{1F30F}', title: '中日双语', desc: '中文详解 + 日文原名，沟通无障碍' },
              { icon: '\u{1F4B0}', title: '价格透明', desc: '导游服务明码标价，无隐形消费' },
              { icon: '\u{1F91D}', title: '售后保障', desc: '24小时客服响应，不满意可退款' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-3 font-semibold text-[#1e3a5f]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#5a5a5a]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
