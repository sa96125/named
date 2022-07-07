<script>
	export let celebrity;
</script>

<article class="py-12">
	<div class="flex justify-between items-center">
		<div class=" flex items-center gap-3">
			<span class="w-10 h-10 bg-slate-100 rounded-full">
				<!-- <img class=" bg-slate-100 w-10 h-10" alt={article.author.username} /> -->
			</span>
			<span class="info">
				<p class="author">{celebrity.name}</p>
			</span>
		</div>

		<ul class="flex gap-5 text-zinc-300">
			{#each celebrity.platforms as platform}
				<li>
					<p class=" shadow-2xl" href="/?tag={platform.name}">{platform.name}</p>
				</li>
			{/each}
			<li class=" shadow-2xl">[like] 995</li>
		</ul>
	</div>

	<div class="my-4">
		<h1 class="text-3xl font-semibold">{celebrity.title}</h1>
		<p class="text-xl text-zinc-500">{celebrity.description}</p>
	</div>

	<ul class="flex gap-2 mt-2">
		{#each celebrity.tags as tag}
			<li class="bg-[#f1ede0bd] px-2">
				<p class=" text-zinc-500 text-sm">{tag.name}</p>
			</li>
		{/each}
	</ul>
</article>
