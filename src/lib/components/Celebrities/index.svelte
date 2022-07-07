<script>
	import { session } from '$app/stores';
	import CelebrityPreview from './CelebrityPreview.svelte';
	export let celebrities;

</script>

{#if celebrities.length === 0}
	<div class="article-preview">No articles are here... yet.</div>
{:else}
	<div>
		{#each celebrities as celebrity (celebrity.id)}
			<CelebrityPreview {celebrity}  />
		{/each}
	</div>
{/if}
