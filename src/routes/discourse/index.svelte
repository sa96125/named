<script context="module">
	export async function load({ url, fetch }) {
		const [{ articles, pages }, { tags }] = await Promise.all([
			// URL의 params도 같이 붙여서 넘긴다.
			fetch(`/api/articles.json${url.search}`, { credentials: 'include' })
			.then((response) => response.json()),
			fetch('/api/tags.json')
			.then((response) => response.json())
		]);

		return {
			props: {
				articles,
				pages,
				tags
			}
		};
	}
</script>

<script>
	import { page, session } from '$app/stores';
	import Article from '$lib/components/Article/index.svelte';
	import Pagination from '$lib/components/Pagenation.svelte';

	export let articles;
	export let pages;
	export let tags;

	$: p = +$page.url.searchParams.get('p') || 1;
	$: tag = $page.url.searchParams.get('tag');
	$: tab = $page.url.searchParams.get('tab') || 'all';
	$: page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
</script>

<svelte:head>
	<title>Let's Discourse</title>
</svelte:head>

<main>
	<div class="container page">
		<div class="row">
			<div class="col-md-9">
				<div class="feed-toggle">
					<ul class="nav nav-pills outline-active">
						<li class="nav-item">
							<a
								href="/discourse/?tab=all"
								rel="prefetch"
								class="nav-link"
								class:active={tab === 'all' && !tag}
							>
								Instructor
							</a>
						</li>

						<li class="nav-item">
							<a 
								href="/discourse/?tab=blog" 
								rel="prefetch" 
								class="nav-link" 
								class:active={tab === 'blog'}
							>
								Blog
							</a>
						</li>
					</ul>
				</div>

				<Article {articles} />
				<Pagination {pages} {p} href={(p) => `/?${page_link_base}&page=${p}`} />
			</div>
		</div>
	</div>
</main>
