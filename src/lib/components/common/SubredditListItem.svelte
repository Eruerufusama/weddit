<script lang="ts">
    import Close from "../SVGs/Close.svelte";

    export let subreddit;
</script>


<li>
    <h3>
        <a href={`/r/${subreddit}`}><span>/R/</span>{ subreddit.toUpperCase() }</a>
    </h3>
    <button on:click>
        <Close />
    </button>
</li>


<style lang="scss">
    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0.625rem 1.25rem;
        gap: 1.25rem;
        border-radius: 0.625rem;
        background-color: var(--color-background-1);
        min-width: min(90vw, 300px);
    }
    a {
        color: inherit;
    }
    span {
        color: var(--color-foreground-dimmed);
        font-weight: 200;
        font-size: 2rem;
    }
    h3 {
        padding: 1.25rem;
        font-weight: 800;
    }
    button {
        color: var(--color-foreground-dimmed);
        display: flex;

        &:hover {
            color: var(--color-foreground-2);
        }
    }


</style>