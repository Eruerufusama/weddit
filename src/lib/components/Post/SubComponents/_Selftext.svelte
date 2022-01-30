<script lang="ts">
    import { marked } from 'marked';

    export let selftext: string;
    export let showSelftext: boolean;

</script>
{#if showSelftext}
    <div class="selftext">
        {@html marked(selftext) }
    </div>
{/if}

<style lang="scss">
    .selftext {
        padding: 2rem min(2.5rem, 3vw) 2rem min(2.5rem, 3vw);
        line-height: 2rem;
    }
</style>