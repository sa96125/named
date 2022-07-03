<script>
	import { page, session } from '$app/stores';
	import { enhance } from '$lib/actions/form';
	let y;

	const processDeleteSession = () => {
		$session.userId = null;
	};
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="z-10 py-4 bg-[#ffaf1c] border-b-[1px] sticky top-0 border-black transition duration-500 ease-linear 
	{y > 150 || $page.url.pathname !== '/' ? 'bg-[#252521] text-white text-xs py-1' : ''}"
>
	<div class=" max-w-7xl m-auto flex items-center justify-between">
		<span class=" flex items-center justify-between gap-5">
			<a
				class="font-display text-2xl border-black
				{y > 150 || $page.url.pathname !== '/' ? 'text-white text-sm py-1' : ''}"
				href="/"
			>
				P h i
			</a>
		</span>
		<span class="text-md focus:font-semibold flex gap-7 items-center ">
			<a href="/studykit">Blog</a>
			<a href="/studykit">Let's learn</a>
			<a href="/studykit">Community</a>
			<a href="/studykit">Support us</a>
			{#if !$session.userId}
				<a class="bg-black text-xs font-mono text-neutral-50 px-5 py-2 rounded-sm" href="/login"
					>Sign In</a
				>
			{:else}
				<form
					action="/api/auth/logout.json"
					method="post"
					use:enhance={{ result: processDeleteSession }}
				>
					<button
						class="bg-black text-xs font-mono text-neutral-50 px-5 py-2 rounded-sm"
						type="submit"
					>Sign Out
					</button>
				</form>
			{/if}
		</span>
	</div>
</nav>
