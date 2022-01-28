<script lang="ts">
    import Post from "$lib/components/Post/Post.svelte";
    import { postsStore } from "$lib/stores/data/stores";
</script>


<div>
    {#each $postsStore as post}
        <Post {post} />
    {/each}
</div>


<style lang="scss">
    div {
        //  Layout
            display: grid;
            gap: 1rem;
            width: min(960px, 90vw);
    }
</style>