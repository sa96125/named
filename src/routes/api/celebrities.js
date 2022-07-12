import PrismaClient from '$lib/prisma';
// import Redis from "ioredis";
// import { createPrismaRedisCache } from "prisma-redis-middleware";


// const redis = new Redis();
const prisma = new PrismaClient();

// const cacheMiddleware = createPrismaRedisCache({
//   models: [
//     { model: "Celebrity", excludeMethods: ["findMany"] },
//   ],
//   storage: { type: "memory", options: { size: 2048 }, log: console },
//   cacheTime: 300,
//   excludeModels: ["Product", "Cart"],
//   excludeMethods: ["count", "groupBy"],
//   onHit: (key) => console.log("hit", key),
//   onMiss: (key) => console.log("miss", key),
//   onError: (key) => console.log("error", key),
// });

const loggingMiddleware = async (params, next) => {
  const before = Date.now()
  const result = await next(params)
  const after = Date.now()
  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
  return result
}

// prisma.$use(cacheMiddleware);
prisma.$use(loggingMiddleware)

export async function get({ url: { searchParams } }) {
	const tag = searchParams.get('tag');
	const page = searchParams.get('page') || 0;
	// const page = +searchParams.get('page') || 1;
	// const jwt = locals.user && locals.user.token;
	// pages: Math.ceil(articlesCount / page_size)
	let celebrities;

	if (tag) {
		celebrities = await prisma.celebrity.findMany({
			where: {
				tags: {
					some: {
						name: tag
					}
				}
			},
			include: {
				tags: true,
				platforms: true
			},
			take: 5
		});
	} else {
		celebrities = await prisma.celebrity.findMany({
			skip: 5 * page,
			include: {
				tags: true,
				platforms: true
			},
			take: 5
		});
	}

	return {
		body: {
			celebrities
		}
	};
}
