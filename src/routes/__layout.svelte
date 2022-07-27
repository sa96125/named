<script>
	import { navigating } from '$app/stores';
	import { loading } from '$store';
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Loader from '$lib/components/loader.svelte';

	$: loading.setNavigate(!!$navigating);
</script>

<Header />
<Loader />
<div style:min-height="80vh">
	<slot />
</div>
