// robots.txt 返回简单爬虫配置
export function GET() {
  return new Response(`User-agent: *\nAllow: /\nSitemap: https://rbly.com/sitemap.xml`, {
    headers: { 'Content-Type': 'text/plain' },
  });
}
