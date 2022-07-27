<script>
	import { loading } from '$store';

	$: if ($loading.status === 'NAVIGATING') {
		setTimeout(() => {
			if ($loading.status === 'NAVIGATING') {
				loading.setLoading(true);
			}
		}, 400);
	}
</script>

{#if $loading.status === 'LOADING'}
	<div class="z-10 absolute top-0 left-0 w-full h-full flex-center flex-col">
		<div class="p-10 text-[#f11919] text-4xl font-extrabold font-display flex-center flex-col">
			<p>L O A D I N G</p>
		</div>
	</div>
{/if}
