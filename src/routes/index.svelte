<script context="module">
	// URL의 params도 같이 붙여서 넘긴다.
	export async function load({ url, fetch }) {
		const [{ articles }, { tags }] = await Promise.all([
			fetch(`/api/articles.json${url.search}`, { credentials: 'include' }).then((response) => response.json()),
			fetch('/api/tags.json').then((response) => response.json())
		]);

		return {
			props: {
				articles,
				tags
			}
		};
	}
</script>

<script>
	import { page } from '$app/stores';
	import Articles from '$lib/components/Articles/index.svelte';
	import SideCard from '$lib/components/SideCard.svelte'
	export let articles;
	export let tags;
	// $: tag = $page.url.searchParams.get('tag');
	// $: p = +$page.url.searchParams.get('p') || 1;
	// $: page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
</script>

<svelte:head>
	<title>Welcome to Dementor</title>
</svelte:head>

<!-- * hero -->
<div class="bg-[#fffefa] h-96 text-black overflow-hidden border-b-[1px] border-black">
	<div class="max-w-7xl m-auto py-10 font-pixel font-bold text-8xl text-[#ff0000]">
		<p>Don't pay for develop.</p>
		<p>Just do Somthing.</p> 
		<!-- <p class="font-sans text-2xl">당신이 꿈꾸는 개발자가 되도록</p>
		-->
	</div>
</div>


<!-- * content -->
<div class="max-w-7xl m-auto ">
	 <div class="grid grid-cols-12 gap-16 py-10">
		 <div class="feeds col-span-8">
			<div class="nav flex gap-5 font-mono border-b-[1px] ">
				<a class="bg-black text-white p-2" href="/">#all</a>
				{#each tags as tag}
						<a class="nav-item p-2 text-zinc-400 hover:bg-black hover:text-white { tag ? '':''}" href="/?tag={tag}" rel="prefetch"> #{tag} </a>
				{/each}
			</div>
			 <Articles {articles} />
		 </div>
	
		 <div class="side col-span-4">
			 <SideCard />

			 <div class="chart my-10">
				
			 </div>
		 </div>
	 </div>
</div>

<footer>

</footer>

