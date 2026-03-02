import type { Metadata } from 'next';

export const metadata: Metadata = { title: '联系我们 | rbly', description: '提交旅游咨询表单' };

export default function ContactPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">联系方式</h1>
      <p className="text-slate-700">提交表单后会在服务端日志中打印，后续可接入邮件或工单。</p>
      <form className="space-y-3" action="/api/contact" method="post">
        <label className="block space-y-1 text-sm">
          <span>姓名</span>
          <input name="name" className="w-full rounded border p-2" required />
        </label>
        <label className="block space-y-1 text-sm">
          <span>邮箱</span>
          <input name="email" type="email" className="w-full rounded border p-2" required />
        </label>
        <label className="block space-y-1 text-sm">
          <span>需求</span>
          <textarea name="message" className="w-full rounded border p-2" rows={4} required />
        </label>
        <button className="rounded bg-slate-900 px-4 py-2 text-white" type="submit">
          提交
        </button>
      </form>
    </div>
  );
}
