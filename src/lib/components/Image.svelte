<script>
	import { onMount } from 'svelte'

	export let src;
	let loaded = false;
	let failed = false;
	let loading = false;

	onMount(() => {
			const img = new Image();
			img.src = src;
			loading = true;

			img.onload = () => {
					loading = false;
					loaded = true;
			};
			img.onerror = () => {
					loading = false;
					failed = true;
			};
	})
</script>

{#if loaded}
<img class="w-full h-full bg-slate-100 rounded-full" {src} alt="Document" />
{:else if failed}
<img class="w-full h-full bg-slate-100 rounded-full" src="https://icon-library.com/images/not-found-icon/not-found-icon-20.jpg" alt="Not Found" />
{:else if loading}
<img class="w-full h-full bg-slate-100 rounded-full" src="https://c.tenor.com/On7kvXhzml4AAAAi/loading-gif.gif" alt="Loading..." />
{/if}