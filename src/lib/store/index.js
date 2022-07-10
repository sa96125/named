import { writable } from 'svelte/store';

const createLoading = () => {
	const { subscribe, update, set } = writable({
		status: 'IDLE',
		message: ''
	});

	function setNavigate(isNavigating) {
		update(() => {
			return {
				status: isNavigating ? 'NAVIGATING' : 'IDLE',
				message: ''
			};
		});
	}

	function setLoading(isLoading, message = '') {
		update(() => {
			return {
				status: isLoading ? 'LOADING' : 'IDLE',
				message: isLoading ? message : ''
			};
		});
	}

	return {
		subscribe,
		update,
		set,
		setNavigate,
    setLoading
	};
};

export const loading = createLoading();
