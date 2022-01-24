<script lang="ts">

//  Imports
    import Comments from './SubComponents/_Comments.svelte';
    import Image from './SubComponents/_Image.svelte';
    import Metadata from './SubComponents/_Metadata.svelte';
    import Title from './SubComponents/_Title.svelte';
    import type { RedditPost } from '$lib/types/subredditPosts';

//  Props
    export let post: RedditPost;
    export let isOpen = true;
    const { thumbnail, title, created, author, num_comments, url, permalink, is_self, selftext } = post;
</script>
 
<article>
    <section class="top-section">
        <Image {thumbnail} />
        <Title {title} url={is_self ? permalink : url} />
    </section>
    <section class="middle-section">
        {#if selftext }
            <button on:click={() => isOpen = !isOpen}>
                +
            </button>
            {#if isOpen }
                <p class="selftext">
                    { selftext }
                </p>
            {/if }
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
        //  Layout
            display: flex;
            flex-direction: column;
            min-width: 100%;

        //  Styling
            box-shadow: 0px 0 15px 0px var(--color-shadow);

        .selftext {
            padding: 0.25rem min(2.5rem, 3vw) 2rem min(2.5rem, 3vw);
            line-height: 2rem;
        }
        section {
            // Layout
                display: flex;
                align-items: center;
        }
        .top-section {
            //  Layout
                gap: 2rem;
                padding: 1rem;
            //  Styling
                background-color: var(--color-background-1);
                border-top-left-radius: $rounding;
                border-top-right-radius: $rounding;
        }
        .middle-section {
            display: grid;
            place-items: center;

            button {
                font-size: 2rem;
                margin-top: -2.25rem;
                padding: 0.75rem 1.25rem;
                background-color: var(--color-background-1);
                color: var(--color-foreground-2);
                border-radius: 2.5rem;
            }
        }
        .bottom-section {
            //  Layout
                justify-content: space-between;
                padding: 0.75rem 1rem;
            //  Styling
                background-color: var(--color-background-3);
                border-bottom-left-radius: $rounding;
                border-bottom-right-radius: $rounding;
        }
    }
</style>