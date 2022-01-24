<script lang="ts">
    import Post from "$lib/compontents/Post/Post.svelte";
    import { postsStore } from "$lib/stores";

</script>
<main>
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
                width: min(1440px, 95vw);
        }
    }
</style>