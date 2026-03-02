import type { Metadata } from 'next';
import BookingForm from './BookingForm';

export const metadata: Metadata = {
  title: '日本导游服务 - 私人导游·团队向导·专业翻译 | rbly.com',
  description:
    '提供日本全境中文私人导游、团队向导、高尔夫陪打、夜游向导及专业翻译服务。覆盖东京、大阪、京都、北海道等主要城市，一对一定制行程，价格透明，免费餐厅和SPA预定。',
  keywords: [
    '日本导游',
    '日本私人导游',
    '日本中文导游',
    '东京导游',
    '大阪导游',
    '京都导游',
    '日本翻译',
    '日本向导服务',
    '日本旅游导游',
  ],
  alternates: { canonical: 'https://rbly.com/guides' },
  openGraph: {
    title: '日本导游服务 - 私人导游·团队向导·专业翻译',
    description:
      '提供日本全境中文私人导游、团队向导、高尔夫陪打、夜游向导及专业翻译服务。覆盖东京、大阪、京都、北海道等主要城市。',
    url: 'https://rbly.com/guides',
    siteName: 'rbly.com',
    locale: 'zh_CN',
    type: 'website',
  },
};

/* ---------- JSON-LD 结构化数据 ---------- */

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: '日本导游服务',
  description: '提供日本全境中文私人导游、团队向导、高尔夫陪打、夜游向导及专业翻译服务',
  provider: { '@type': 'Organization', name: 'rbly.com', url: 'https://rbly.com' },
  serviceType: 'Tour Guide Service',
  areaServed: { '@type': 'Country', name: 'Japan' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '导游服务价目',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '私人向导（半天）' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'JPY', price: '20000' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '私人向导（全天）' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'JPY', price: '35000' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '团队导游' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'JPY', price: '45000' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '商务翻译' }, priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'JPY', price: '50000' } },
    ],
  },
};

const faqItems = [
  { q: '日本导游一天多少钱？', a: '私人向导半天（4小时）20,000日元起，全天（8小时）35,000日元起。团队导游全天45,000日元起。具体价格根据人数、城市和服务内容有所不同，详见页面价格表。' },
  { q: '导游会说中文吗？', a: '我们所有导游均为中日双语流利，可以用中文和日文与您和当地人无障碍沟通。部分导游还可提供英文服务。' },
  { q: '可以临时修改行程吗？', a: '完全可以。我们的导游服务以灵活著称，您可以在旅途中随时调整行程安排，导游会根据实际情况为您推荐替代方案。' },
  { q: '如何预约导游服务？', a: '您可以通过页面底部的预约表单提交需求，或通过微信/LINE联系我们。提交后24小时内会收到定制方案和报价。' },
  { q: '导游服务包含交通费吗？', a: '导游服务费不包含交通费。导游在陪同过程中产生的交通费由客户承担（实报实销），包括电车、出租车等公共交通费用。' },
  { q: '团队导游最多可以带多少人？', a: '普通团队导游可服务10人以内的团队。10-30人的大团可安排专业团队导游。超过30人建议安排多名导游协同服务。' },
  { q: '可以指定特定的导游吗？', a: '可以。如果您有认识或指定的导游，我们可以优先安排。也可以根据您的需求（性别、年龄、专长等）匹配最合适的导游。' },
  { q: '恶劣天气如何处理？', a: '如遇台风等极端天气，导游会提前与您沟通调整行程，改为室内景点或推荐替代方案。因不可抗力取消的服务可免费改期。' },
  { q: '导游可以帮忙购物和砍价吗？', a: '当然可以。导游可以帮您在药妆店、电器店等进行翻译沟通，协助退税流程，推荐性价比高的购物地点。日本商店通常不砍价，但导游会帮您找到最优惠的价格。' },
  { q: '你们覆盖日本哪些城市？', a: '我们的服务覆盖日本全境，包括东京、大阪、京都、北海道、冲绳、九州、名古屋、仙台等所有主要旅游城市和地区。' },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: 'https://rbly.com' },
    { '@type': 'ListItem', position: 2, name: '服务', item: 'https://rbly.com/services' },
    { '@type': 'ListItem', position: 3, name: '日本导游', item: 'https://rbly.com/guides' },
  ],
};

/* ---------- 数据常量 ---------- */

const serviceCards = [
  { title: '私人 1:1 向导', titleJa: 'プライベートガイド', desc: '专属导游一对一陪同，完全自由定制行程，按您的节奏深度体验日本', price: '¥20,000~/半天' },
  { title: '团队导游', titleJa: 'グループガイド', desc: '适合家族旅行、公司团建、修学旅行，专业讲解深度游览', price: '¥45,000~/天' },
  { title: '高尔夫陪打', titleJa: 'ゴルフアテンド', desc: '日本顶级球场预约代办，全程陪同翻译，球具租赁协助', price: '¥30,000~/场' },
  { title: '夜游向导', titleJa: 'ナイトガイド', desc: '体验地道日本夜生活，居酒屋、酒吧、夜景导览一站搞定', price: '¥25,000~/4h' },
  { title: '商务翻译陪同', titleJa: 'ビジネス通訳', desc: '商务会议、展会参观、工厂考察，专业翻译+商务礼仪指导', price: '¥50,000~/天' },
  { title: '主题深度游', titleJa: 'テーマツアー', desc: '温泉、美食、动漫圣地、购物、摄影——按兴趣定制专属路线', price: '¥20,000~/半天' },
];

const detailedServices = [
  {
    title: '主题向导',
    desc: '根据您的兴趣量身定制专属旅行体验，深入探索日本文化的各个层面。',
    features: ['温泉巡游 — 精选露天温泉与秘汤', '美食探店 — 寿司、拉面、怀石料理', '动漫圣地巡礼 — 秋叶原、吉卜力、圣地打卡', '购物达人 — 药妆、奥特莱斯、中古名品', '摄影向导 — 最佳拍摄点位与时间推荐', '短视频/直播拍摄 — 场地协调与翻译支持'],
    price: '¥10,000~/项目',
  },
  {
    title: '私人导游',
    desc: '一对一专属陪同，从机场接机到行程结束，全程无忧。最多可服务 6 人小团。',
    features: ['行程 100% 自由定制', '机场接送协助', '餐厅、酒店预约代办', '购物翻译与退税协助', '突发情况全程协调', '公务陪同与会展服务'],
    price: '¥15,000~/5h · ¥25,000~/10h',
  },
  {
    title: '团队导游',
    desc: '专业团队导游服务，适合家庭聚会、企业团建、学生修学旅行等大型团体。最多 45 人。',
    features: ['专业景点讲解', '团队行程统筹管理', '安全保障与应急处理', '集体餐饮安排', '巴士行程协调', '修学旅行课程配合'],
    price: '¥25,000~/10h',
  },
  {
    title: '专业翻译',
    desc: '提供各类场景的专业翻译服务，确保跨语言沟通顺畅无阻。',
    features: ['陪同翻译 — 商务会议、工厂参观', '交替传译 — 研讨会、讲座', '医学翻译 — 体检、就医陪同', '法律翻译 — 合同、房产交易', '同声传译 — 大型会议（需提前预约）', '房产考察 — 看房、签约全程翻译'],
    price: '¥20,000~/1h',
  },
];

const pricingData = [
  { service: '私人向导（半天）', duration: '4 小时', price: '¥20,000~', includes: '行程规划 + 陪同 + 翻译' },
  { service: '私人向导（全天）', duration: '8 小时', price: '¥35,000~', includes: '行程规划 + 陪同 + 翻译 + 餐厅预约' },
  { service: '私人向导加时', duration: '每小时', price: '¥3,000', includes: '超出时间按小时计费' },
  { service: '团队导游（10人内）', duration: '8 小时', price: '¥45,000~', includes: '专业讲解 + 行程管理' },
  { service: '团队导游（10-30人）', duration: '8 小时', price: '¥60,000~', includes: '专业讲解 + 行程管理 + 安全保障' },
  { service: '高尔夫陪打', duration: '1 场', price: '¥30,000~', includes: '球场预约 + 陪同 + 翻译' },
  { service: '夜游向导', duration: '4 小时', price: '¥25,000~', includes: '夜景/居酒屋/文化体验' },
  { service: '商务翻译（全天）', duration: '8 小时', price: '¥50,000~', includes: '会议翻译 + 商务礼仪指导' },
  { service: '交替传译', duration: '1 小时', price: '¥20,000~', includes: '研讨会/讲座' },
];

const extraFees = [
  { item: '导游交通费', price: '实报实销' },
  { item: '地方出差住宿', price: '¥6,000/晚' },
  { item: '导游餐补', price: '¥3,600/日' },
];

const coverageAreas = [
  { region: '关东地区', cities: ['东京', '横滨', '镰仓', '日光', '箱根'] },
  { region: '关西地区', cities: ['大阪', '京都', '奈良', '神户'] },
  { region: '北海道', cities: ['札幌', '小樽', '函馆', '富良野'] },
  { region: '九州地区', cities: ['福冈', '长崎', '�的児岛', '别府'] },
  { region: '冲绳', cities: ['那霸', '恩纳', '名护'] },
  { region: '中部地区', cities: ['名古屋', '高山', '金泽'] },
  { region: '东北地区', cities: ['仙台', '青森', '秋田'] },
];

const advantages = [
  { title: '持证导游', desc: '全员持有日本国家导游资格证，专业素养有保障' },
  { title: '双语服务', desc: '中文/日文流利沟通，消除语言障碍，畅游无忧' },
  { title: '本地经验', desc: '在日生活多年，深谙当地文化、交通与隐藏好去处' },
  { title: '价格透明', desc: '无隐形消费，所有费用出发前明确告知，拒绝套路' },
  { title: '灵活定制', desc: '行程 100% 可调整，随时满足您的需求和临时想法' },
  { title: '售后保障', desc: '24 小时客服响应，服务不满意可协商退款' },
];

const freeServices = [
  { title: '特色餐厅预定', desc: '日本特色餐厅免费代预定，包括米其林、怀石料理、烤肉等热门餐厅', points: ['不需要保证金', '免费取消更改', '可指定餐厅'] },
  { title: 'SPA / 温泉预定', desc: '各类 SPA 会所、温泉旅馆免费代预定，享受正宗日式放松体验', points: ['不需要保证金', '免费取消更改', '可指定服务项目'] },
  { title: '高尔夫球场预定', desc: '日本 2000+ 高尔夫球场免费代预定，涵盖各价位与难度', points: ['不需要保证金', '免费取消更改', '可指定球场'] },
  { title: '门票 / 体验预约', desc: '热门景点门票、和服体验、茶道课程等活动代预约', points: ['免排队购票', '热门项目提前锁定', '团体优惠协助'] },
  { title: '行程规划咨询', desc: '根据您的时间和预算，免费提供专业行程规划建议', points: ['不限次数咨询', '路线优化建议', '当季推荐'] },
];

const steps = [
  { step: '1', title: '提交需求', desc: '填写页面预约表单，或通过微信 / LINE 联系我们' },
  { step: '2', title: '方案确认', desc: '24 小时内收到定制方案及详细报价' },
  { step: '3', title: '支付定金', desc: '确认方案后支付 50% 定金，锁定导游档期' },
  { step: '4', title: '出发准备', desc: '出发前 3 天收到详细行程单及导游联系方式' },
  { step: '5', title: '开始旅程', desc: '导游准时接待，开启您的完美日本之旅' },
];

const paymentMethods = [
  { title: '微信支付', desc: '支持微信直接转账，方便快捷' },
  { title: '支付宝', desc: '支持支付宝扫码或转账支付' },
  { title: '银行转账', desc: '支持中国及日本银行账户转账，可开具收据' },
];

const cancellationRules = [
  { period: '出发 7 天以上', refund: '全额退款' },
  { period: '出发 3-7 天', refund: '退还 70%' },
  { period: '出发 1-3 天', refund: '退还 50%' },
  { period: '出发当天', refund: '不予退款' },
  { period: '导游方原因取消', refund: '全额退款 + 优先重新安排' },
];

/* ---------- 页面组件 ---------- */

export default function GuidesPage() {
  return (
    <>
      {/* JSON-LD 结构化数据 */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="space-y-12">
        {/* 面包屑导航 */}
        <nav aria-label="面包屑导航" className="text-sm text-slate-500">
          <ol className="flex items-center gap-1">
            <li><a href="/" className="hover:text-slate-900">首页</a></li>
            <li>/</li>
            <li><a href="/services" className="hover:text-slate-900">服务</a></li>
            <li>/</li>
            <li className="text-slate-900">日本导游</li>
          </ol>
        </nav>

        {/* Hero */}
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">日本导游服务 / 日本ガイドサービス</h1>
          <p className="text-lg text-slate-600">
            以专业的中日双语服务，为您提供私人向导、团队导游、高尔夫陪打、夜游向导及专业翻译等全方位日本旅行陪同服务。覆盖日本全境主要城市，从行程规划到实地陪同，让您的日本之旅无忧无虑。
          </p>
          <a href="#booking-form" className="inline-block rounded bg-slate-900 px-6 py-3 text-white">
            立即预约咨询
          </a>
        </section>

        {/* 服务概览卡片 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">服务类型</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s) => (
              <div key={s.title} className="rounded border p-4 hover:bg-slate-50">
                <div className="font-semibold">{s.title} <span className="text-sm font-normal text-slate-500">/ {s.titleJa}</span></div>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                <p className="mt-2 text-sm font-medium text-slate-900">{s.price}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 服务详细介绍 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">服务详情</h2>
          {detailedServices.map((s) => (
            <div key={s.title} className="space-y-2 rounded border p-4">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-slate-600">{s.desc}</p>
              <ul className="grid gap-1 text-sm text-slate-700 md:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f} className="before:mr-1 before:content-['•']">{f}</li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm font-medium">参考价格：{s.price}</span>
                <a href="#booking-form" className="text-sm text-blue-700 hover:underline">预约咨询 →</a>
              </div>
            </div>
          ))}
        </section>

        {/* 覆盖区域 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">服务覆盖区域</h2>
          <p className="text-slate-600">我们的导游服务覆盖日本全境，以下为主要服务城市和地区：</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coverageAreas.map((area) => (
              <div key={area.region} className="rounded border p-4 bg-slate-50">
                <div className="font-semibold">{area.region}</div>
                <p className="mt-1 text-sm text-slate-600">{area.cities.join(' · ')}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">以上仅列出热门城市，日本其他地区也可提供服务，欢迎咨询。</p>
        </section>

        {/* 为什么选择我们 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">为什么选择我们</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {advantages.map((a) => (
              <div key={a.title} className="rounded border p-4">
                <div className="font-semibold">{a.title}</div>
                <p className="mt-1 text-sm text-slate-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 价格明细 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">价格明细</h2>

          {/* 桌面端表格 */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-slate-50 text-left">
                  <th className="p-3 font-medium">服务类型</th>
                  <th className="p-3 font-medium">时长</th>
                  <th className="p-3 font-medium">价格（日元）</th>
                  <th className="p-3 font-medium">包含内容</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((p, i) => (
                  <tr key={i} className="border-b">
                    <td className="p-3">{p.service}</td>
                    <td className="p-3 text-slate-600">{p.duration}</td>
                    <td className="p-3 font-medium">{p.price}</td>
                    <td className="p-3 text-slate-600">{p.includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 移动端卡片 */}
          <div className="space-y-3 md:hidden">
            {pricingData.map((p, i) => (
              <div key={i} className="rounded border p-3">
                <div className="font-semibold">{p.service}</div>
                <div className="mt-1 flex justify-between text-sm">
                  <span className="text-slate-600">{p.duration}</span>
                  <span className="font-medium">{p.price}</span>
                </div>
                <p className="mt-1 text-xs text-slate-500">{p.includes}</p>
              </div>
            ))}
          </div>

          {/* 其他费用 */}
          <div className="rounded border bg-slate-50 p-4">
            <h3 className="font-semibold">其他费用说明</h3>
            <ul className="mt-2 space-y-1 text-sm text-slate-700">
              {extraFees.map((f) => (
                <li key={f.item} className="flex justify-between">
                  <span>{f.item}</span>
                  <span className="font-medium">{f.price}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 免费增值服务 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">免费增值服务</h2>
          <p className="text-slate-600">预约导游或翻译服务，即可享受以下免费代办服务：</p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {freeServices.map((s) => (
              <div key={s.title} className="rounded border p-4">
                <div className="font-semibold">{s.title}</div>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-500">
                  {s.points.map((p) => (
                    <li key={p} className="before:mr-1 before:content-['✓']">{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 预约流程 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">预约流程</h2>
          <div className="space-y-4">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                  {s.step}
                </div>
                <div>
                  <div className="font-semibold">{s.title}</div>
                  <p className="text-sm text-slate-600">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 支付方式 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">支付方式</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {paymentMethods.map((m) => (
              <div key={m.title} className="rounded border p-4 bg-slate-50">
                <div className="font-semibold">{m.title}</div>
                <p className="mt-1 text-sm text-slate-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 取消退款政策 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">取消与退款政策</h2>
          <div className="rounded border bg-slate-50 p-4">
            <ul className="space-y-2 text-sm">
              {cancellationRules.map((r) => (
                <li key={r.period} className="flex justify-between">
                  <span className="text-slate-700">{r.period}</span>
                  <span className="font-medium">{r.refund}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">常见问题</h2>
          <div className="space-y-3">
            {faqItems.map((f) => (
              <details key={f.q} className="group rounded border p-4">
                <summary className="cursor-pointer font-semibold">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 预约咨询表单 */}
        <section id="booking-form" className="space-y-4 scroll-mt-8">
          <h2 className="text-2xl font-bold">预约咨询</h2>
          <p className="text-slate-600">填写以下表单，我们将在 24 小时内为您提供定制方案和报价。</p>
          <BookingForm />
        </section>

        {/* 相关内容内链 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">探索更多日本旅游内容</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a href="/cities" className="rounded border p-4 hover:bg-slate-50">
              <div className="font-semibold">热门城市</div>
              <p className="text-sm text-slate-600">东京、大阪、京都、北海道...探索日本各大城市的魅力</p>
            </a>
            <a href="/routes" className="rounded border p-4 hover:bg-slate-50">
              <div className="font-semibold">推荐线路</div>
              <p className="text-sm text-slate-600">精心规划的多日游线路，涵盖经典景点与小众秘境</p>
            </a>
            <a href="/spots" className="rounded border p-4 hover:bg-slate-50">
              <div className="font-semibold">人气景点</div>
              <p className="text-sm text-slate-600">不容错过的日本景点推荐，附带实用游览攻略</p>
            </a>
            <a href="/articles" className="rounded border p-4 hover:bg-slate-50">
              <div className="font-semibold">旅游攻略</div>
              <p className="text-sm text-slate-600">签证、交通、美食、购物...全面的日本旅行实用指南</p>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
