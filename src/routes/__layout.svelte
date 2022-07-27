<script>
	import { navigating } from '$app/stores';
	import { loading } from '$store';
	import '../app.css';
	import Header from '$lib/components/header.svelte';
	import Loading from '$lib/components/loading.svelte';

	$: loading.setNavigate(!!$navigating);
</script>

<Header />
<Loading />
<div style:min-height="80vh">
	<slot />
</div>
