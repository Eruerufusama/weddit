<script lang="ts">
import Close from "../SVGs/Close.svelte";

    export let subreddit;
</script>


<li>
    <h3><a href={`/r/${subreddit}`}>
        { subreddit }
    </a></h3>
    <button on:click>
        <Close />
    </button>
</li>


<style lang="scss">
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.25rem;
        border-radius: 0.625rem;
        background-color: var(--color-background-1);
    }
    h3 {
        padding: 1.25rem;
    }
    button {
        color: var(--color-foreground-dimmed)
    }


</style>