// 管理员登录/登出接口
import { NextResponse } from 'next/server';
import { login, logout } from '@/lib/auth';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const session = await login(email, password);
  if (!session) return NextResponse.json({ error: '邮箱或密码错误' }, { status: 401 });
  return NextResponse.json({ ok: true, user: session });
}

export async function DELETE() {
  await logout();
  return NextResponse.json({ ok: true });
}
