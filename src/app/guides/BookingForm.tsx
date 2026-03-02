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
      <div className="rounded border border-green-200 bg-green-50 p-6 text-center">
        <p className="text-lg font-semibold text-green-800">提交成功</p>
        <p className="mt-1 text-sm text-green-700">我们会在 24 小时内与您联系，请留意您的消息。</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 rounded bg-slate-900 px-4 py-2 text-sm text-white"
        >
          继续提交
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <input type="hidden" name="source" value="guides-page" />

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">姓名 *</span>
          <input name="name" required className="w-full rounded border p-2" placeholder="您的姓名" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">联系方式 *</span>
          <input name="contact" required className="w-full rounded border p-2" placeholder="微信号 / LINE / 手机号 / 邮箱" />
        </label>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">目的城市 *</span>
          <select name="city" required className="w-full rounded border bg-white p-2">
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
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">服务类型 *</span>
          <select name="category" required className="w-full rounded border bg-white p-2">
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

      <div className="grid gap-4 md:grid-cols-3">
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">人数 *</span>
          <input name="people" type="number" min={1} required className="w-full rounded border p-2" placeholder="1" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">出发日期 *</span>
          <input name="startDate" type="date" required className="w-full rounded border p-2" />
        </label>
        <label className="block space-y-1">
          <span className="text-sm font-medium text-slate-700">结束日期</span>
          <input name="endDate" type="date" className="w-full rounded border p-2" />
        </label>
      </div>

      <label className="block space-y-1">
        <span className="text-sm font-medium text-slate-700">特殊需求</span>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded border p-2"
          placeholder="请描述您的具体需求，如想去的景点、饮食偏好、特殊要求等..."
        />
      </label>

      {status === 'error' && (
        <p className="text-sm text-red-600">提交失败，请稍后重试或通过微信联系我们。</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded bg-slate-900 px-4 py-3 text-white disabled:opacity-50 md:w-auto md:px-8"
      >
        {status === 'loading' ? '提交中...' : '提交预约咨询'}
      </button>
    </form>
  );
}
