import * as cookie from 'cookie';
import { verify } from 'jsonwebtoken';

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const uid = cookies.jwt && verify(cookies.jwt, import.meta.env.VITE_SECRET_KEY);
	event.locals.userId = uid ? uid : null;
	return await resolve(event);
}

export function getSession({ locals }) {
	return {
		userId: locals.userId
	};
}
