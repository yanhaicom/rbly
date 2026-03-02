'use client';
import useSWR from 'swr';
import { useState } from 'react';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function AdminCities() {
  const { data, mutate } = useSWR('/api/cities', fetcher);
  const [form, setForm] = useState({ slug: '', nameZh: '', nameJa: '', summaryZh: '' });

  const submit = async () => {
    await fetch('/api/cities', { method: 'POST', body: JSON.stringify({ ...form, isPublished: true }) });
    setForm({ slug: '', nameZh: '', nameJa: '', summaryZh: '' });
    mutate();
  };

  const remove = async (id: number) => {
    await fetch(`/api/cities/${id}`, { method: 'DELETE' });
    mutate();
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">城市管理</h1>

      <div className="rounded border bg-white p-4 space-y-3">
        <div className="font-semibold">新建/编辑城市</div>
        <div className="grid gap-2 md:grid-cols-2">
          {['slug', 'nameZh', 'nameJa', 'summaryZh'].map((key) => (
            <label key={key} className="text-sm text-slate-600">
              {key}
              <input
                className="w-full rounded border p-2"
                value={(form as any)[key]}
                onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              />
            </label>
          ))}
        </div>
        <button onClick={submit} className="rounded bg-slate-900 px-4 py-2 text-white">
          保存
        </button>
      </div>

      <div className="rounded border bg-white p-4">
        <div className="font-semibold mb-2">城市列表</div>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b">
              <th>名称</th>
              <th>Slug</th>
              <th>发布</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((c: any) => (
              <tr key={c.id} className="border-b">
                <td>{c.nameZh}</td>
                <td>{c.slug}</td>
                <td>{c.isPublished ? '是' : '否'}</td>
                <td>
                  <button onClick={() => remove(c.id)} className="text-red-600">
                    删除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
