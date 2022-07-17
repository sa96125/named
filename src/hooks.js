import { sequence } from '@sveltejs/kit/hooks';
import { useCachePage } from '../src/services/middleware/useCachePage';
import { useErrors } from '../src/services/middleware/useErrors';

export const handle = sequence(useErrors, useCachePage);

export function getSession({ locals }) {
	return {
		userId: locals.userId
	};
}
