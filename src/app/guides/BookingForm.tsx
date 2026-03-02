'use client';
import { useState } from 'react';

export default function BookingForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'ok' | 'error'>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(Object.fromEntries(form)),
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus(res.ok ? 'ok' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div className="animate-fade-in rounded-2xl bg-gradient-to-br from-[#059669]/10 to-[#059669]/5 p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#059669]/20">
          <svg className="h-8 w-8 text-[#059669]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-4 text-lg font-semibold text-[#059669]">提交成功</p>
        <p className="mt-2 text-sm text-[#5a5a5a]">我们会在 24 小时内与您联系，请留意您的消息。</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 rounded-full bg-[#1e3a5f] px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-[#2a4f7a] hover:shadow-md"
        >
          继续提交
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm md:p-8">
      <form onSubmit={submit} className="space-y-5">
        <input type="hidden" name="source" value="guides-page" />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-[#2d2d2d]">姓名 *</span>
            <input
              name="name"
              required
              className="w-full rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all placeholder:text-[#b0a898] focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
              placeholder="您的姓名"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-[#2d2d2d]">联系方式 *</span>
            <input
              name="contact"
              required
              className="w-full rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all placeholder:text-[#b0a898] focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
              placeholder="微信号 / LINE / 手机号 / 邮箱"
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-[#2d2d2d]">目的城市 *</span>
            <select
              name="city"
              required
              className="w-full appearance-none rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            >
              <option value="">请选择城市</option>
              <option value="东京">东京</option>
              <option value="大阪">大阪</option>
              <option value="京都">京都</option>
              <option value="北海道">北海道</option>
              <option value="冲绳">冲绳</option>
              <option value="九州">九州</option>
              <option value="名古屋">名古屋</option>
              <option value="其他">其他</option>
            </select>
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-[#2d2d2d]">服务类型 *</span>
            <select
              name="category"
              required
              className="w-full appearance-none rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            >
              <option value="">请选择服务</option>
              <option value="私人向导">私人 1:1 向导</option>
              <option value="团队导游">团队导游</option>
              <option value="高尔夫陪打">高尔夫陪打</option>
              <option value="夜游向导">夜游向导</option>
              <option value="商务翻译">商务翻译陪同</option>
              <option value="主题深度游">主题深度游</option>
            </select>
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-[#2d2d2d]">人数 *</span>
            <input
              name="people"
              type="number"
              min={1}
              required
              className="w-full rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all placeholder:text-[#b0a898] focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
              placeholder="1"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-[#2d2d2d]">出发日期 *</span>
            <input
              name="startDate"
              type="date"
              required
              className="w-full rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="text-sm font-medium text-[#2d2d2d]">结束日期</span>
            <input
              name="endDate"
              type="date"
              className="w-full rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            />
          </label>
        </div>

        <label className="block space-y-1.5">
          <span className="text-sm font-medium text-[#2d2d2d]">特殊需求</span>
          <textarea
            name="message"
            rows={4}
            className="w-full rounded-xl border border-[#e8e4df] bg-[#faf8f6] px-4 py-2.5 text-sm transition-all placeholder:text-[#b0a898] focus:border-[#1e3a5f] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/20"
            placeholder="请描述您的具体需求，如想去的景点、饮食偏好、特殊要求等..."
          />
        </label>

        {status === 'error' && (
          <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
            提交失败，请稍后重试或通过微信联系我们。
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-full bg-gradient-to-r from-[#1e3a5f] to-[#2d1b69] px-8 py-3.5 font-medium text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 md:w-auto"
        >
          {status === 'loading' ? '提交中...' : '提交预约咨询'}
        </button>
      </form>
    </div>
  );
}
