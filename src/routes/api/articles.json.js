import * as api from '$lib/api';
import { page_size } from '$lib/constants';

export async function get({ url: { searchParams }, locals }) {
	const tab = searchParams.get('tab') || 'all';
	const tag = searchParams.get('tag');
	const page = +searchParams.get('page') || 1;

	const endpoint = tab === 'feed' ? 'articles/feed' : 'articles';

	const q = new URLSearchParams();
	if (tag) q.set('tag', tag);
	q.set('limit', page_size);
	// 가져올 데이터의 시작 번호
	q.set('offset', (page - 1) * page_size);

	// articlesCount는 총갯수를 의미할 뿐이고 페이지네이션의 UI를 그리기 위함.
	const { articles, articlesCount } = await api.get(
		`${endpoint}?${q}`,
		locals.user && locals.user.token
	);

	return {
		body: {
			articles,
			pages: Math.ceil(articlesCount / page_size)
		}
	};
}
