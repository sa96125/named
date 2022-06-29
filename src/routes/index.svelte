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
	import MentorList from '$lib/components/MentorList/index.svelte';
	import MentorCard from '$lib/components/MentorList/MentorCard.svelte';
	import Pagination from '$lib/components/Pagenation.svelte';

	export let articles;
	export let pages;
	export let tags;

	// url에 담긴 값을 기준으로 tag, tab값을 셋팅
	$: p = +$page.url.searchParams.get('p') || 1;
	$: tag = $page.url.searchParams.get('tag');
	$: tab = $page.url.searchParams.get('tab') || 'all';
	$: page_link_base = tag ? `tag=${tag}` : `tab=${tab}`;
</script>

<svelte:head>
	<title>Welcome to Dementor</title>
</svelte:head>

<div class="home-page">
	{#if !$session.user}
		<div class=" bg-[#ffcd1b] text-black h-auto pb-5 overflow-hidden border-b-[1px] border-black">
			<div class="container px-40 py-5 ">
				<p class="logo-font text-8xl">Don't pay for develop.</p>
				<p class="logo-font text-6xl">A place to share your knowledge.</p>
				<p class="logo-font text-6xl">A place to share your knowledge.</p>
				<p class="logo-font text-6xl">A place to share your knowledge.</p>
				<p class="logo-font text-6xl">A place to share your knowledge.</p>
			</div>
		</div>
	{/if}

	<div class="container px-40  page">
		<div class="row">
			<div class="col-md-9">
				<div class="feed-toggle">
					<ul class="nav nav-pills outline-active">
						<li class="nav-item">
							<a
								href="/?tab=all"
								rel="prefetch"
								class="nav-link"
								class:active={tab === 'all' && !tag}
							>
								Instructor
							</a>
						</li>

						<li class="nav-item">
							<a 
								href="/?tab=blog" 
								rel="prefetch" 
								class="nav-link" 
								class:active={tab === 'blog'}
							>
								Blog
							</a>
						</li>
					</ul>
				</div>

				<MentorList {articles} />
				<Pagination {pages} {p} href={(p) => `/?${page_link_base}&page=${p}`} />
			</div>

			<div class="col-md-3">
				<MentorCard />
			</div>
		</div>
	</div>
</div>
