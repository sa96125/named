<script>
	import { session } from '$app/stores';
	import { goto } from '$app/navigation';
	import { post } from '$lib/fetch';
	import Button from '$lib/components/button.svelte';

	const onClick = async () => {
		await post('/api/sign-out');
		$session.userId = null;
		goto('/');
	};
</script>

<div class="z-10 py-7 bg-[#fd4343] border-b-[1px] sticky top-0 border-black transition duration-500 ease-linear">
	<div class="container mx-auto flex flex-row items-center justify-between">
		<a href="/">
			<h1 class="text-black text-9xl mb-4 font-display ">A place meet Senior.</h1>
		</a>
		<div class="flex items-center md:flex gap-4">
			{#if $session && $session.userId}
				<p>{$session.userId}</p>
				<Button on:click={onClick}>Logout</Button>
			{:else}
				<a href="/sign-in"><Button>Sign In</Button></a>
			{/if}
		</div>
	</div>
</div>
