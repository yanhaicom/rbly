'use client';
import { useState } from 'react';

export default function AdminLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const submit = async () => {
    setErr('');
    const res = await fetch('/api/admin/login', { method: 'POST', body: JSON.stringify({ email, password }) });
    if (res.ok) window.location.href = '/admin/dashboard';
    else setErr('登录失败，请检查邮箱/密码');
  };

  return (
    <div className="mx-auto max-w-md space-y-4 rounded border bg-white p-6 shadow-sm">
      <h1 className="text-xl font-bold">管理员登录</h1>
      <label className="block space-y-1">
        <span className="text-sm text-slate-600">邮箱</span>
        <input className="w-full rounded border p-2" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label className="block space-y-1">
        <span className="text-sm text-slate-600">密码</span>
        <input className="w-full rounded border p-2" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      {err && <p className="text-sm text-red-600">{err}</p>}
      <button onClick={submit} className="w-full rounded bg-slate-900 p-2 text-white">
        登录
      </button>
    </div>
  );
}
