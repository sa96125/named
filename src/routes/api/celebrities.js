import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient();

export async function get({ url: { searchParams } }) {
	const tag = searchParams.get('tag');
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
			}
		});
	} else {
		celebrities = await prisma.celebrity.findMany({
			include: {
				tags: true,
				platforms: true
			}
		});
	}

	return {
		headers: {
			'cache-control': 'public, max-age=300'
		},
		body: {
			celebrities
		}
	};
}
