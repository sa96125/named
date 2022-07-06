import PrismaClient from '$lib/prisma';

const prisma = new PrismaClient();

export async function get() {
	const celebrities = await prisma.celebrity.findMany({
		
	});

	console.log(celebrities);

	return {
		body: {
			celebrities
		}
	};
}
