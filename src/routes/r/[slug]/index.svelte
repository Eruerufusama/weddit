<script lang="ts">
	import Post from '$lib/components/Post/Post.svelte';
	import { postsStore } from '$lib/stores/data/stores';

	let isActive = true;
</script>

<svelte:head>
	<title>Reddited - {$postsStore[0].subreddit}</title>
</svelte:head>
<div class="page">
	<!-- <ul>
		<li class:active={isActive}><a href={`${$postsStore[0].subreddit}/hot`}>HOT</a></li>
		<li><a href={`${$postsStore[0].subreddit}/new`}>NEW</a></li>
		<li><a href={`${$postsStore[0].subreddit}/rising`}>RISING</a></li>
		<li><a href={`${$postsStore[0].subreddit}/controversial`}>CONTROVERSIAL</a></li>
		<li><a href="/top">TOP</a></li>
	</ul> -->
	<div>
		{#each $postsStore as post}
			<Post {post} />
		{/each}
	</div>
</div>

<style lang="scss">
	.page {
		//  Layout
		display: grid;
		gap: 1.25rem;
		width: min(960px, 90vw);
	}

	ul {
		background-color: var(--color-background-2);
		color: var(--color-foreground-dimmed);

		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: 0;
		padding: 0;
		list-style: none;
		gap: clamp(0.625rem, 2.5vw, 5rem);
		font-family: 'Roboto Condensed';
		font-weight: 700;

		@media (max-width: 380px) {
			flex-direction: column;
			max-width: 75vw;
			margin: auto;
		}

		li {
			width: 100%;
			display: grid;
			place-items: center;
			border: 4px solid var(--color-background-2);
			border-radius: 2.5rem;
			font-size: 1.25rem;
			transition: border-color 0.25s;

			a {
				color: inherit;
				padding: 0.625rem 0rem;
				transition: color 0.25s;
				width: 100%;
				text-align: center;
				&:hover {
					color: var(--color-foreground-2);
				}
			}
			&:hover {
				border-color: var(--color-background-1);
			}
		}
		.active {
			color: var(--color-foreground-1);
			background-color: var(--color-background-1);
			border-color: var(--color-background-1);
		}
	}
</style>
