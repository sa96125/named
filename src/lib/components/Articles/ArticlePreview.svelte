<script>
	import * as api from '$lib/api.js';
	export let article;

	const onClickArticle = () => {
		console.log(article)
	}
</script>

<article class="py-12">
	<div class="flex justify-between items-center">
		<div class=" flex items-center gap-3">
			<span class="w-10 h-10 bg-slate-100 rounded-full">
				<!-- <img class=" bg-slate-100 w-10 h-10" alt={article.author.username} /> -->
			</span>
			<span class="info">
				<p class="author"> {article.author.username} </p>
			</span>
		</div>

		
		<span class="flex gap-5 text-zinc-300">
			<p class=" shadow-2xl">[youtube]</p>
			<p class=" shadow-2xl">[website]</p>
			<p class=" shadow-2xl">[community]</p>
			<p class=" shadow-2xl">[like] 995</p>
		</span>
	</div>

	<div on:click={onClickArticle} href="/article/{article.slug}" rel="prefetch" class="my-4">
		<h1 class="text-3xl font-semibold">{article.title}</h1>
		<p class="text-xl text-zinc-500">{article.description}</p>
	</div>

	<ul class="flex gap-2 mt-2">
		{#each article.tagList as tag} 
			<li class="bg-[#f1ede0bd] px-2"><a class=" text-zinc-500 text-sm" href="/?tag={tag}">{tag}</a></li>
		{/each}
	</ul>
</article>
