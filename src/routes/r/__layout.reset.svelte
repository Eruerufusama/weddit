<script lang="ts" context="module">
    //  Imports
    import sanitizeData from '$lib/functions/sanitizeData';
    import { postsStore } from '$lib/stores/data/stores';
    import type { RedditPosts } from '$lib/types/subredditPosts';

    //  Logic
    export async function load({ url }) {
        const response = await fetch(`https://www.reddit.com/${url.pathname}.json`);

        if (response.ok) {
            const posts: RedditPosts = sanitizeData(await response.json());
            postsStore.set(posts);

            return { props: { posts, url: url.pathname } };
        }
    };
</script>

<script lang="ts">
    import Settings from "$lib/components/Settings/Settings.svelte";

</script>


<div>
    <aside><Settings /></aside>
    <main><slot>Missing main section :(</slot></main>
</div>


<style lang="scss">
    $settings-size: 5.8rem;
    div {
        display: grid;
        main, aside {
            grid-column: 1;
            grid-row: 1;
        }
        main {
        //  Layout
            margin-top: $settings-size;
            display: grid;
            place-items: center;
        }
    }
</style>