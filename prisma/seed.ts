// 基础种子数据，便于本地演示
import bcrypt from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const passwordHash = await bcrypt.hash('admin123', 10);
  await prisma.adminUser.upsert({
    where: { email: 'admin@rbly.com' },
    update: {},
    create: { email: 'admin@rbly.com', name: '超管', role: 'admin', passwordHash },
  });

  const tokyo = await prisma.city.upsert({
    where: { slug: 'tokyo' },
    update: {},
    create: {
      slug: 'tokyo',
      nameZh: '东京',
      nameJa: '東京',
      summaryZh: '日本首都，现代与传统交织',
      isPublished: true,
    },
  });

  const skytree = await prisma.spot.upsert({
    where: { slug: 'tokyo-skytree' },
    update: {},
    create: {
      slug: 'tokyo-skytree',
      nameZh: '晴空塔',
      nameJa: '東京スカイツリー',
      cityId: tokyo.id,
      summaryZh: '地标观景塔',
      isPublished: true,
      isRecommended: true,
    },
  });

  const route = await prisma.route.upsert({
    where: { slug: 'tokyo-3days' },
    update: {},
    create: {
      slug: 'tokyo-3days',
      titleZh: '东京3日游',
      titleJa: '東京3日間旅行',
      days: 3,
      isPublished: true,
      isRecommended: true,
    },
  });

  await prisma.routeSpot.upsert({
    where: { id: 1 },
    update: {},
    create: { routeId: route.id, spotId: skytree.id, dayIndex: 1, orderIndex: 1 },
  });

  await prisma.article.upsert({
    where: { slug: 'tokyo-food' },
    update: {},
    create: {
      slug: 'tokyo-food',
      titleZh: '东京美食攻略',
      titleJa: '東京グルメガイド',
      contentZh: '好吃的太多了...',
      isPublished: true,
    },
  });

  await prisma.service.upsert({
    where: { slug: 'airport-transfer' },
    update: {},
    create: {
      slug: 'airport-transfer',
      nameZh: '机场接送',
      nameJa: '空港送迎',
      serviceType: '包车',
      isPublished: true,
    },
  });

  console.log('seed 完成，管理员账号 admin@rbly.com / 密码 admin123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
