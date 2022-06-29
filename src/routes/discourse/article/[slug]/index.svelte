<script context="module">
	export async function load({ params, fetch }) {
		const { slug } = params;
		const [article] = await Promise.all([
			fetch(`/discourse/article/${slug}.json`).then((r) => r.json())
		]);
		return {
			props: { article, slug }
		};
	}
</script>

<script>
	import { marked } from 'marked';
	export let article;
	$: markup = marked(article.body);
</script>

<svelte:head>
	<title>{article.title}</title>
</svelte:head>

<div class="article-page">
	<div class="banner">
		<div class="container">
			<h1>{article.title}</h1>
		</div>
	</div>

	<div class="container page">
		<div class="row article-content">
			<div class="col-xs-12">
				<div>
					{@html markup}
				</div>

				<ul class="tag-list">
					{#each article.tagList as tag}
						<li class="tag-default tag-pill tag-outline">{tag}</li>
					{/each}
				</ul>
			</div>
		</div>

		<hr />

		<div class="article-actions" />
	</div>
</div>
