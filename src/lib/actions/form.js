export const enhance = (form, { result }) => {
	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const body = new FormData(form);
			const response = await fetch(form.action, {
				method: form.method,
				heather: {
					accept: 'application/json'
				},
				body
			});

			if (response.ok) {
				result();
			} else {
				console.log('Fetch Error : ', await response.text());
			}
		} catch (error) {
			console.error('Could not submit the form: ', error);
		}
	};

	form.addEventListener('submit', handleSubmit);

	return {
		destroy() {
			form.removeEventListener('submit', handleSubmit);
		}
	};
};
