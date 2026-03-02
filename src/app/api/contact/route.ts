// 联系表单 API：当前只打印，后续可接邮件/工单
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let payload: Record<string, unknown> = {};
  const contentType = req.headers.get('content-type') || '';

  // 兼容表单提交与 JSON 提交
  if (contentType.includes('application/json')) {
    payload = await req.json();
  } else {
    const form = await req.formData();
    form.forEach((v, k) => {
      payload[k] = v.toString();
    });
  }

  console.log('联系表单：', payload);
  return NextResponse.json({ ok: true });
}
