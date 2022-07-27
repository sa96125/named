<script context="module">
	export async function load({ url, fetch }) {
		const [{ celebrities }, { tags }] = await Promise.all([
			fetch(`/api/celebrities${url.search}`, { credentials: 'include' }).then((response) => response.json()),
			fetch('/api/tags').then((response) => response.json())
		]);

		return {
			props: {
				celebrities,
				tags
			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import AboutUs from '$lib/components/about-us.svelte';
	import Celebrities from '$lib/components/celebrities.svelte';
	import Tags from '$lib/components/tags.svelte';
	import Grid from '$lib/components/grid.svelte';

	export let tags;
	export let celebrities;

	$: selectedTag = $page.url.searchParams.get('tag');
</script>

<svelte:head>
	<title>Welcome to Dementor</title>
</svelte:head>



<!-- * Contents -->
<div class="container mx-auto">
	<Grid>
		<section class="col-span-8">
			<Tags {tags} {selectedTag} />
			<Celebrities {celebrities} />
		</section>

		<aside class="col-span-4">
			<AboutUs />
		</aside>
	</Grid>
</div>
