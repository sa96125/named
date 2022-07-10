<script>
	import { page, session } from '$app/stores';
	import { enhance } from '$lib/actions/form';
	let y;

	const configLogoutForm = {
		action: '/api/auth/logout',
		method: 'post'
	};

	const processDeleteSession = () => {
		$session.userId = null;
	};
</script>

<svelte:window bind:scrollY={y} />

<nav
	class="z-10 py-4 bg-[#fffefa] border-b-[1px] sticky top-0 border-black transition duration-500 ease-linear 
	{y > 480 || $page.url.pathname !== '/' ? 'bg-[#ffd1b9] text-xs py-1' : ''}"
>
	<div class=" max-w-7xl m-auto flex items-center justify-between">
		<span class=" flex items-center justify-between gap-5">
			<a
				rel="prefetch"
				class="flex gap-2 font-mono font-medium text-xl border-black
				{y > 480 || $page.url.pathname !== '/' ? 'text-sm py-1' : ''}"
				href="/"
			>
				<img class="w-6" src="/icons/crown.svg" alt="">
			</a>
		</span>
		<span class=" font-mono focus:font-semibold flex gap-7 items-center 
		{y > 480 || $page.url.pathname !== '/' ? 'text-md py-1' : 'text-sm'}">
			<a rel="prefetch" href="/studykit">Learn</a>
			<a rel="prefetch" href="/studykit">Community</a>
			{#if !$session.userId}
				<a sveltekit:prefetch href="/login">Sign-In</a>
			{:else}
				<form {...configLogoutForm} use:enhance={{ result: processDeleteSession }}>
					<button type="submit">Sign-Out</button>
				</form>
			{/if}
			<a
				class="bg-black text-xs font-mono text-neutral-50 px-5 py-2 rounded-sm"
				href="/studykit">Join</a
			>
		</span>
	</div>
</nav>
