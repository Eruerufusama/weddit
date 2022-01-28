<script>
    import { marked } from 'marked';

    export let selftext;
    export let showSelftext;
</script>
{#if showSelftext}
    <div class="selftext">
        {@html marked(selftext) }
    </div>
{/if}

<style lang="scss">
    .selftext {
        padding: 0.25rem min(2.5rem, 3vw) 2rem min(2.5rem, 3vw);
        // line-height: 2rem;
    }
</style>