<script lang="ts">
    import Comments from "$lib/compontents/Comment/Comments.svelte";
    import Post from "$lib/compontents/Post/Post.svelte";
    import { submissionStore } from "$lib/stores";

    console.log($submissionStore);
</script>

<div>
    <aside>
        <Post post={$submissionStore[0].data.children[0].data} />
    </aside>
    <main>
        <Comments data={$submissionStore[1]} />
    </main>
</div>

<style lang="scss">
    div {
        //  Layout
            display: grid;
            place-items: center;
            gap: 2rem;

        main, aside {
            //  Layout
                width: min(960px, 95vw);
        }
        main {
            //  Layout
                display: flex;
                flex-direction: column;
                gap: 1.25rem;
        }
    }
</style>