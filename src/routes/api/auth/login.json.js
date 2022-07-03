import { sign } from 'jsonwebtoken';

// TODO Persist in database
const account = {
	id: '1',
	email: 'sa96125@gmail.com',
	password: '1234'
};

export const post = async ({ request }) => {
	const data = await request.formData();

	// TODO: Find ID
	// - !user return no user error.
	if (account.email !== data.get('email') || account.password !== data.get('password')) {
		return {
			status: 404,
			headers: {
				Location: '/login'
			},
			body: 'account is not available'
		};
	}

	const body = {
		user: {
			id: '1'
		}
	};

	// TODO: check password
	// - !passwordCorrect  return incorrect error.

	// TODO: return JWT(id)
	const jwt = sign(body.user.id, import.meta.env.VITE_SECRET_KEY);
	return {
		status: 302,
		headers: {
			'set-cookie': `jwt=${jwt}; Path=/; HttpOnly`,
			Location: '/'
		},
		body: {
			ok: true
		}
	};
};
