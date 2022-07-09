<script>
	import Image from '$lib/components/Image.svelte'

	export let celebrity;
</script>

<article class="py-12">
	<div class="flex justify-between items-center">
		<div class=" flex items-center gap-3">
			<span class="w-7 h-7 bg-slate-100 rounded-full" >
				<Image src={celebrity.thumbnail} />
			</span>
			<span class="info">
				<p class="author">{celebrity.name}</p>
			</span>
		</div>

		<ul class="flex gap-5 text-zinc-300">
			{#each celebrity.platforms as platform}
				<li>
					<img class="w-7" src={`icons/${platform.name.toLowerCase()}.svg`} alt={platform.name}>
				</li>
			{/each}
			<li class=" shadow-2xl flex-center gap-1">
				<img class="w-7" src={'icons/heart.svg'} alt="recommand">
				<p class=" font-thin">{celebrity.likes}</p>
			</li>
		</ul>
	</div>

	<div class="my-4 flex flex-col gap-2">
		<h1 class="text-2xl font-semibold text-zinc-700">{celebrity.title}</h1>
		<p class="text-md text-zinc-500 font-light">{celebrity.description}</p>
	</div>

	<ul class="flex gap-2 mt-2">
		{#each celebrity.tags as tag}
			<li class="bg-[#fffbf0] px-2">
				<p class=" text-zinc-400 text-xs font-thin">{tag.name}</p>
			</li>
		{/each}
	</ul>
</article>
