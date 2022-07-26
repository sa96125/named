import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient();

const loggingMiddleware = async (params, next) => {
  const before = Date.now()
  const result = await next(params)
  const after = Date.now()
  console.log(`Query ${params.model}.${params.action} took ${after - before}ms`)
  return result
}

prisma.$use(loggingMiddleware)

export const get = async ({ url: { searchParams } }) => {
	const tag = searchParams.get('tag');
	const page = searchParams.get('page') || 0;

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
