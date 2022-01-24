<script lang="ts">

//  Imports
    import Comments from './SubComponents/_Comments.svelte';
    import Image from './SubComponents/_Image.svelte';
    import Metadata from './SubComponents/_Metadata.svelte';
    import Title from './SubComponents/_Title.svelte';
    import type { RedditPost } from '$lib/types/subredditPosts';

//  Props
    export let post: RedditPost;
    const { thumbnail, title, created, author, num_comments, url, permalink, is_self } = post;
</script>

<article>
    <section class="top-section">
        <Image {thumbnail} />
        <Title {title} url={is_self ? permalink : url} />
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
            box-shadow: 0px 0 15px 0px hsla(0, 0%, 0%, 0.2);

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
                background-color: var(--color-bg-3);
                border-top-left-radius: $rounding;
                border-top-right-radius: $rounding;
        }
        .bottom-section {
            //  Layout
                justify-content: space-between;
                padding: 0.75rem 1rem;
            //  Styling
                background-color: var(--color-bg-1);
                border-bottom-left-radius: $rounding;
                border-bottom-right-radius: $rounding;
        }
    }
</style>