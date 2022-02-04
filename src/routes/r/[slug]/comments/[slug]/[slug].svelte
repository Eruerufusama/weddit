<script lang="ts">
	import Comments from '$lib/components/Comment/Comments.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	import { submissionStore } from '$lib/stores/data/stores';

	const post = $submissionStore[0].data.children[0].data;
	const data = $submissionStore[1];
</script>

<svelte:head>
	<title>Reddited - {post.subreddit} - {post.title}</title>
</svelte:head>
<div>
	<aside><Post {post} /></aside>
	<main><Comments {data} /></main>
</div>

<style lang="scss">
	div {
		display: grid;
		place-items: center;
		gap: 2.5rem;
		main, aside {
			width: min(960px, 95vw);
		}
		main {
			display: flex;
			flex-direction: column;
			gap: 1.25rem;
		}
	}
</style>
