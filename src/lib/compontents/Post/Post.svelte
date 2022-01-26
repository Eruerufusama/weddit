<script lang="ts">

//  Imports
    import Comments from './SubComponents/_Comments.svelte';
    import Thumbnail from './SubComponents/_Thumbnail.svelte';
    import Metadata from './SubComponents/_Metadata.svelte';
    import Title from './SubComponents/_Title.svelte';
    import Button from './SubComponents/_Button.svelte';
    import Selftext from './SubComponents/_Selftext.svelte';
    import Image from './SubComponents/_Image.svelte';
    import Video from './SubComponents/_Video.svelte';
    import { appendDataOfImage } from '$lib/functions/isImage';
    import type { RedditPost } from '$lib/types/subredditPosts';
    import { showAllImagesStore, showAllSelfpostsStore } from '$lib/stores/settings/autoShow';

//  Props
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
    
//  States
    $: showImage = $showAllImagesStore;
    $: showSelftext = $showAllSelfpostsStore;
    $: showVideo = true;

</script>
 

<article>
    <section class="top-section">
        <Thumbnail {thumbnail} />
        <Title {title} url={is_self ? permalink : url} />
    </section>

    <section class="middle-section">
        {#if selftext}
            <Button on:click={() => showSelftext = !showSelftext} isOpen={showSelftext}/>
            <Selftext {selftext} {showSelftext} />
        {/if}

        {#if image.isImage}
            <Button on:click={() => showImage = !showImage} isOpen={showImage}/>
            <Image {image} {showImage} />
        {/if}
        {#if video}
            <Video {video} {showVideo} />
        {/if}
    </section>

    <section class="bottom-section">
        <Metadata {created} {author} />
        <Comments {num_comments} {permalink} />
    </section>
</article>


<style lang="scss">
    $rounding: 0.5rem;
    article {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        box-shadow: 0px 0 15px 0px var(--color-shadow);
        section {
            display: flex;
            align-items: center;
        }
        .top-section {
            gap: 2rem;
            padding: 1rem;
            background-color: var(--color-background-1);
            border-top-left-radius: $rounding;
            border-top-right-radius: $rounding;
        }
        .middle-section {
            display: grid;
            place-items: center;
        }
        .bottom-section {
            justify-content: space-between;
            padding: 0.75rem 1rem;
            background-color: var(--color-background-3);
            border-bottom-left-radius: $rounding;
            border-bottom-right-radius: $rounding;
        }
    }
</style>