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
        display: grid;
        place-items: center;
        div {
            display: grid;
            gap: 1rem;
            max-width: 960px;
        }
    }
</style>