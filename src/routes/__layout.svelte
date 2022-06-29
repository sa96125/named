<script>
	import { navigating } from '$app/stores';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import PreloadingIndicator from '$lib/components/PreloadingIndicator.svelte';
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<Nav />
<div class=" max-w-full">
	<slot />
</div>
