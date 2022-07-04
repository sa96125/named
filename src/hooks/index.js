import * as cookie from 'cookie';
import pkg from 'jsonwebtoken';
const { verify } = pkg;

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const jwt = cookies.jwt && verify(cookies.jwt, import.meta.env.VITE_SECRET_KEY);
	event.locals.userId = jwt ? JSON.parse(jwt) : null;
	return await resolve(event);
}

export function getSession({ locals }) {
	return {
		userId: locals.userId
	};
}
