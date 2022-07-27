<script>
    export let tags
    export let selectedTag
</script>

<div class="nav flex flex-wrap gap-5 font-mono border-b-[1px] w-full">
	<a
		href="/"
		class="nav-item p-2 hover:bg-black hover:text-white {selectedTag
			? 'text-zinc-400 bg-white'
			: 'bg-black text-white'}"
		>#all
	</a>
	{#each tags as tag}
		<a
			href="/?tag={tag}"
			rel="prefetch"
			class="nav-item p-2  hover:bg-black hover:text-white {tag === selectedTag
				? 'bg-black text-white'
				: 'text-zinc-400'}"
		>
			#{tag}
		</a>
	{/each}
</div>
