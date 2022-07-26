<script>
	import { navigating } from '$app/stores';
	import viewport from '$lib/actions/useViewportAction';
	import CelebritySkeletonCard from './celebrity-skeleton-card.svelte';
	export let celebrities;

	const celebrityPreviewPromise = import('./celebrity-preview.svelte');

	let page = 0;

	$: if (!!$navigating) {
		page = 0;
	}

	const getNextCelebrities = async () => {
		page += 1;
		const { celebrities: nextCelebrities } = await fetch(`/api/celebrities/?page=${page}`,{
			credentials: 'include'
		}).then((response) => response.json());
		celebrities = [...celebrities, ...nextCelebrities];
	};
</script>

{#if celebrities.length === 0}
	<div class="article-preview">No articles are here... yet.</div>
{:else}
	{#each celebrities as celebrity, index (celebrity.id)}
		{#await celebrityPreviewPromise}
			<CelebritySkeletonCard />
		{:then { default: CelebrityPreview }}
			<CelebrityPreview {celebrity} />
		{/await}
		{#if celebrities.length - 1 === index && celebrities.length >= 5}
			<div use:viewport on:enterViewport={() => getNextCelebrities()} />
		{/if}
	{/each}
{/if}
