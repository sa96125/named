<script>
	import { goto } from '$app/navigation';

	let email = '',
		password = '';

	$: submit = async () => {
		const response = await fetch('http://localhost:3000/api/login', {
			method: 'POST',
			body: JSON.stringify({ email, password })
		}).then((response) => response.json());

		if (response.status === 200) {
			goto('/');
		}
	};
</script>

<svelte:head>
	<title>Sign In, Dive In</title>
</svelte:head>

<main class="container mt-28 flex flex-col justify-center items-center">
	<div class="flex flex-col items-center">
		<h4 class=" font-mono text-xs my-2">D e m e n t o R</h4>

		<h2 class="font-serif text-3xl my-5">
			The community of <strong class=" text-zinc-900">779</strong>{' '}
			amazing developers.
		</h2>
	</div>

	<form
		class="w-full max-w-sm min-w-max p-8 h-auto flex flex-col items-center justify-center"
		on:submit|preventDefault={submit}
	>
		<div class="mb-4 w-full">
			<label class="text-xs font-extralight" for="email">e - m a i l</label>
			<input
				class="w-full focus:outline-none focus:outline-0 text-lg p-1 my-1 bg-none border-t border-l border-cyan-900"
				autoFocus
				id="email"
				type="text"
				bind:value={email}
			/>
		</div>

		<div class="mb-4 w-full">
			<label class="text-xs font-extralight" for="password">p a s s w o r d</label>
			<input
				class="w-full focus:outline-none focus:outline-0 text-lg p-1 my-1 bg-none border-b border-r border-cyan-900"
				id="password"
				type="text"
				bind:value={password}
			/>
		</div>

		<button class="bg-slate-900 font-mono text-neutral-50 w-full h-10 rounded-sm" type="submit">Login</button>
	</form>
</main>
