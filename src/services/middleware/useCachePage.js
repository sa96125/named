import { getCachedPage, setCachedPage } from '../../services/queries/page-caches.js';
import { streamToString } from '$lib/util/streamToString.js';

const cacheableRoutes = ['/', '/login', '/sign-up'];

export const useCachePage = async ({ event, resolve }) => {
	console.log(event.url.pathname)
	if (!cacheableRoutes.includes(event.url.pathname)) {
		return resolve(event);
	}

	const page = await getCachedPage(event.url.pathname);
	if (page) {
		return new Response(page, {
			headers: {
				'content-type': 'text/html'
			}
		});
	}

	event.request.headers.set('if-none-match', Math.random().toString());
	const res = await resolve(event);

	const resCache = res.clone();
	const body = await streamToString(resCache.body);
	await setCachedPage(event.url.pathname, body);

	return res;
};
