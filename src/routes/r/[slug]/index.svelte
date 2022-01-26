<script lang="ts">
    import Post from "$lib/compontents/Post/Post.svelte";
    import Settings from "$lib/compontents/Settings/Settings.svelte";
    import { postsStore } from "$lib/stores/data/stores";
</script>


<main>
    <Settings />
    <div>
        {#each $postsStore as post}
            <Post {post} />
        {/each}
    </div>
</main>


<style lang="scss">
    main {
        //  Layout
            display: grid;
            place-items: center;

        div {
            //  Layout
                display: grid;
                gap: 1rem;
                width: min(960px, 90vw);
        }
    }
</style>