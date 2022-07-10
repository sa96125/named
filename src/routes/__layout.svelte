<script>
	import { navigating } from '$app/stores';
	import { loading } from '$store';
	import '../app.css';

	$: loading.setNavigate(!!$navigating);
</script>

<Nav />
<Loading />
<div class=" max-w-full">
	<slot />
</div>
