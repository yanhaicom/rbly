import type { Metadata } from 'next';

export const metadata: Metadata = { title: '关于我们 | rbly', description: '关于 rbly 日本旅游团队' };

export default function AboutPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">关于我们</h1>
      <p className="text-slate-700">
        rbly 专注日本目的地内容与行程设计，提供中文/日文双语服务。这里可补充团队介绍、资质、联系方式等。
      </p>
    </div>
  );
}
