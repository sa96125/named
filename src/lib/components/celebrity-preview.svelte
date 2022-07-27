<script>
	import { slide } from 'svelte/transition';
	
	export let celebrity;

	let isOpen = false;
	const toggle = () => {
		isOpen = !isOpen;
	};
</script>

<article id={celebrity.id} class="py-12 relative fix" >
	<div  on:click={toggle} class=" cursor-pointer" aria-expanded={isOpen}>
		<div class="flex justify-between items-center">
			<div class=" flex items-center gap-3">
				<span class="w-7 h-7 overflow-hidden bg-slate-100 rounded-full">
					<img class="h-full w-full" src={celebrity.thumbnail} alt="thumbnail" />
				</span>
				<span class="info">
					<p class="author">{celebrity.name}</p>
				</span>
			</div>

			<ul class="flex gap-5 text-zinc-700">
				{#each celebrity.platforms as platform}
					<li>
						<img
							class="w-6"
							src={`icons/${platform.name.toLowerCase()}.svg`}
							alt={platform.name}
						/>
					</li>
				{/each}
			</ul>
		</div>

		<div class="my-4 flex flex-col gap-2">
			<h1 class="text-2xl font-semibold text-zinc-700">{celebrity.title}</h1>
			<p class="text-md text-zinc-500 font-light">{celebrity.description}</p>
		</div>


		<ul class="flex gap-2 mt-2">
			{#each celebrity.tags as tag}
				<li class="border-[1px] px-3 py-1">
					<p class=" text-zinc-600 text-xs font-thin">{tag.name}</p>
				</li>
			{/each}
		</ul>
	</div>

	{#if isOpen}
		<div class="w-full h-auto mt-5" transition:slide={{ duration: 400 }}>
			<img class="w-full mx-auto" src="/images/wwdc22.jpeg" alt="" />

			<div class="font-work my-10">
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta enim odit sed
					veritatis alias, laudantium aperiam voluptatum doloribus quis facere aut
					consequuntur vitae dolor blanditiis necessitatibus deserunt repudiandae animi
					culpa cumque qui ex illo fuga. Laboriosam eveniet iusto amet assumenda id
					minima? Pariatur repellat minima consectetur nisi ex autem odit eveniet eum
					soluta rem. Aliquam porro temporibus quae repellat pariatur dignissimos autem
					vel dicta nemo, impedit consequatur nisi earum possimus maiores quia culpa
					cumque explicabo itaque laudantium tempore quidem labore! Tempora iusto
					voluptatibus beatae error repudiandae porro quis sit non velit reprehenderit
					nisi, totam maxime? Corrupti hic debitis quaerat aperiam.
				</p>
			</div>

			<div class="font-work my-10">
				<h4>
					My camping trip to Yosemite tomorrow got cancelled and I'm already in SF. Any
					ideas for last minute alternatives?
				</h4>
				<p>
					Fires caused the camping trip I booked at Yosemite to be cancelled. I've now got
					2-4 days without agenda and want to arrange a last minute outdoors trip before
					my vacation ends. Not strictly against day trips since I don't have my own
					camping gear or car (although I could rent the latter if absolutely necessary
					but I'd prefer not to).
				</p>
			</div>

			<div class="font-work my-10">
				<h4>
					My camping trip to Yosemite tomorrow got cancelled and I'm already in SF. Any
					ideas for last minute alternatives?
				</h4>
				<p>
					Fires caused the camping trip I booked at Yosemite to be cancelled. I've now got
					2-4 days without agenda and want to arrange a last minute outdoors trip before
					my vacation ends. Not strictly against day trips since I don't have my own
					camping gear or car (although I could rent the latter if absolutely necessary
					but I'd prefer not to).
				</p>
			</div>

			<div class="font-work my-10">
				<h4>
					My camping trip to Yosemite tomorrow got cancelled and I'm already in SF. Any
					ideas for last minute alternatives?
				</h4>
				<p>
					Fires caused the camping trip I booked at Yosemite to be cancelled. I've now got
					2-4 days without agenda and want to arrange a last minute outdoors trip before
					my vacation ends. Not strictly against day trips since I don't have my own
					camping gear or car (although I could rent the latter if absolutely necessary
					but I'd prefer not to).
				</p>
			</div>

			<div class=" flex-center  mt-15 mb-5 gap-3 ">
				<img class="w-8" src={'icons/heart.svg'} alt="recommand" />
				<p class=" text-lg font-thin font-mono">102</p>
			</div>


			<div class=" border-[1px] border-black  round-lg w-full h-auto ">
				<div class= "font-work h-[50px] bg-[#ffb52b] border-b-[1px] border-black p-3 font-bold">
					What do you think? :) 
				</div>
				<textarea class="h-[250px] w-full"></textarea>

			</div>
		</div>
	{/if}
</article>

