<script lang="ts">
	// Stores
	import { showAllImages, showAllSelfposts, showAllVideos } from '$lib/stores/settings/autoShow';
	import { isCompact } from '$lib/stores/settings/postStyles';
	// Types
	import type { RedditPost } from '$lib/types/subredditPosts';
	// Components
	import Comments from '$lib/components/Post/SubComponents/_Comments.svelte';
	import Thumbnail from '$lib/components/Post/SubComponents/_Thumbnail.svelte';
	import Metadata from '$lib/components/Post/SubComponents/_Metadata.svelte';
	import Title from '$lib/components/Post/SubComponents/_Title.svelte';
	import Button from '$lib/components/Post/SubComponents/_Button.svelte';
	import Selftext from '$lib/components/Post/SubComponents/_Selftext.svelte';
	import Video from '$lib/components/Post/SubComponents/_Video.svelte';
	import BigPost from '$lib/components/Post/styles/BigPost.svelte';
	import CompactPost from '$lib/components/Post/styles/CompactPost.svelte';
	import Image from '$lib/components/common/Image/Image.svelte';
	// Functions
	import { appendDataOfImage } from '$lib/functions/isImage';

	// Props
	export let post: RedditPost;

	const {
		thumbnail,
		title,
		created,
		author,
		num_comments,
		url,
		permalink,
		is_self,
		selftext,
		secure_media
	} = post;
	const image = appendDataOfImage(url);
	const video = secure_media?.reddit_video?.fallback_url;

	// States
	$: showImage = $showAllImages;
	$: showSelftext = $showAllSelfposts;
	$: showVideo = $showAllVideos;
	$: isPostCompact = $isCompact;

	let PostWrapper = isPostCompact ? CompactPost : BigPost;
</script>

<svelte:component this={PostWrapper}>
	<svelte:fragment slot="top">
		<Thumbnail {thumbnail} />
		<Title {title} url={is_self ? permalink : url} />
	</svelte:fragment>

	<svelte:fragment slot="button">
		{#if selftext}
			<Button on:click={() => (showSelftext = !showSelftext)} isOpen={showSelftext} />{/if}
		{#if image.isImage}
			<Button on:click={() => (showImage = !showImage)} isOpen={showImage} />
		{/if}
		{#if video} <Button on:click={() => (showVideo = !showVideo)} isOpen={showVideo} /> {/if}
	</svelte:fragment>

	<svelte:fragment slot="middle">
		{#if selftext} <Selftext {selftext} {showSelftext} /> {/if}
		{#if image.isImage} <Image {image} {showImage} /> {/if}
		{#if video} <Video {video} {showVideo} /> {/if}
	</svelte:fragment>

	<svelte:fragment slot="bottom">
		<Metadata {created} {author} />
		<Comments {num_comments} {permalink} />
	</svelte:fragment>
</svelte:component>
