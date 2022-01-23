<script lang="ts">
    import type { RedditPost } from '$lib/types/subredditPosts';
    import Comments from './SubComponents/_Comments.svelte';
    import Image from './SubComponents/_Image.svelte';
    import Metadata from './SubComponents/_Metadata.svelte';
    import Title from './SubComponents/_Title.svelte';

    export let post: RedditPost;

    const { thumbnail, title, created, author, num_comments, url, permalink } = post;
</script>

<article>
    <section class="top-section">
        <Image {thumbnail} />
        <Title {title} {url} />
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

        section {
            display: flex;
            align-items: center;

        }
        .top-section {
            gap: 2rem;
            padding: 1rem;
            background-color: var(--color-bg-3);
            border-top-left-radius: $rounding;
            border-top-right-radius: $rounding;

        }
        .bottom-section {
            justify-content: space-between;
            padding: 0.75rem 1rem;
            background-color: var(--color-bg-1);
            border-bottom-left-radius: $rounding;
            border-bottom-right-radius: $rounding;
        }
    }
</style>