
export const useErrors = async ({ event, resolve }) => {
	try {
		return await resolve(event);
	} catch (err) {
		console.error(err);

		return new Response(
			JSON.stringify({
				message: err.message
			}),
			{
				status: 500
			}
		);
	}
};
