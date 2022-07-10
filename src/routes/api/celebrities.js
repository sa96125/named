import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient();

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
