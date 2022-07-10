import * as cookie from 'cookie';
import pkg from 'jsonwebtoken';
import { secretKey } from '$lib/constants';

const { verify } = pkg;

export async function handle({ event, resolve }) {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	const uid = cookies.jwt && verify(cookies.jwt, secretKey);
	event.locals.userId = uid ? uid : null;
	return await resolve(event);
}

export function getSession({ locals }) {
	return {
		userId: locals.userId
	};
}
