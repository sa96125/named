<script>
	import { loading } from '$store';

	$: if ($loading.status === 'NAVIGATING') {
		setTimeout(() => {
			if ($loading.status === 'NAVIGATING') {
				$loading.status = 'LOADING';
			}
		}, 200);
	}
</script>

{#if $loading.status === 'LOADING'}
	<div class="absolute w-full h-full flex-center">loading</div>
{/if}