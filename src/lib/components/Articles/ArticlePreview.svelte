<script>
	import * as api from '$lib/api.js';
	export let article;


	const onClickArticle = () => {
		console.log(article)
	}
</script>

<article class="py-12">
	<div class="article-meta flex justify-between items-center">
		<div>
			<span>
				<img class='' src={article.author.image} alt={article.author.username} />
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
		<h1 class="text-3xl font-bold">{article.title}</h1>
		<p class="text-xl text-zinc-500">{article.description}</p>
	</div>

	<ul class="flex gap-2 mt-2">
		{#each article.tagList as tag} 
			<li class="bg-[#f1ede0bd] px-2"><a class=" text-zinc-500 text-sm" href="/?tag={tag}">{tag}</a></li>
		{/each}
	</ul>
</article>
