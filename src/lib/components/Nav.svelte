<script>
	let y
</script>

<svelte:window bind:scrollY={y} />

<nav class="py-4 bg-[#ffaf1c] border-b-[1px] sticky top-0 border-black transition duration-500 ease-linear {y > 150 ? 'bg-[#252521] text-white text-xs py-1' : ''}">
	<div class=" max-w-7xl m-auto flex items-center justify-between">
		<span class=" flex items-center justify-between gap-5">
			<a class="font-display text-4xl border-black {y > 150 ? 'text-lg' : ''}"  href="/">P h i</a>
		</span>
		<span class="text-md focus:font-semibold flex gap-7 items-center ">
			<a href="/studykit">Blog</a>
			<a href="/studykit">Let's learn</a>
			<a href="/discourse">Community</a>
			<a href="/discourse">Support us</a>
			<a class="bg-black text-xs font-mono text-neutral-50 px-5 py-2 rounded-sm" href="/login">Sign In</a>
		</span>
	</div>
</nav>


