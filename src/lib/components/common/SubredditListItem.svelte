<script lang="ts">
    export let subreddit;
</script>


<li>
    <h3><a href={`/r/${subreddit}`}>
        { subreddit }
    </a></h3>
    <button on:click>
        X
    </button>
</li>


<style lang="scss">
    li {
        display: flex;
        justify-content: space-between;
        gap: 1.25rem;
    }

    button {
        font-size: 2rem;
        background-color: var(--color-foreground-dimmed);
        color: var(--color-background-3);
        padding: 0 1.25rem
    }
</style>