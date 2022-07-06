export function post() {
	return {
		status: 302,
		headers: {
			'set-cookie': 'jwt=deleted; Path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT',
			Location: '/'
		},
		body: {
			ok: true
		}
	};
}
