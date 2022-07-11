<script context="module">
	export async function load({ url, fetch }) {
		const [{ celebrities }, { tags }] = await Promise.all([
			fetch(`/api/celebrities${url.search}` , { credentials: 'include' }).then((response) => response.json()),
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
	export let celebrities;
	export let tags;

	$: selectedTag = $page.url.searchParams.get('tag');
</script>

<svelte:head>
	<title>Welcome to Dementor</title>
</svelte:head>

<!-- * hero -->
<div class="bg-[#ffd1b9] h-auto text-black overflow-hidden border-b-[1px] border-black ">
	<div class="max-w-7xl m-auto py-40 font-pixel text-8xl text-black relative">
		<h1 class=" font-display text-center">A living network of curious minds.</h1>
		<img class=" animate-pulse absolute top-8 h-[500px] left-1/2 -translate-x-1/2" src="/images/bg.svg" alt="">
	</div>
</div>

<!-- * content -->
<div class="max-w-7xl m-auto">
	<div class="grid grid-cols-12 gap-16 py-10">
		<div class="feeds col-span-8">
			<div class="nav flex gap-5 font-mono border-b-[1px] ">
				<a class="nav-item p-2 hover:bg-black hover:text-white {selectedTag ? 'text-zinc-400 bg-white': 'bg-black text-white'}" href="/">#all</a>
				{#each tags as tag}
					<a href="/?tag={tag}" rel="prefetch" class="nav-item p-2  hover:bg-black hover:text-white {tag === selectedTag ? 'bg-black text-white': 'text-zinc-400'}">
						#{tag}
					</a>
				{/each}
			</div>
			<Celebrities {celebrities} />
		</div>

		<div class="side col-span-4">
			<SideCard />
		</div>
	</div>
</div>

<footer />
