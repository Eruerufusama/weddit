<script lang="ts">
    import Comments from "$lib/compontents/Comment/Comments.svelte";
    import { submissionStore } from "$lib/stores";
</script>

<div>
    <aside>
        Hello world
    </aside>
    <main>
        <Comments data={$submissionStore[1]} />
    </main>
</div>

<style lang="scss">
    div {
        display: grid;
        place-items: center;
        main {
            width: 960px;
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }
    }
</style>