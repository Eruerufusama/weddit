<script>
    export let selftext;
    export let showSelftext;
</script>
{#if showSelftext}
    <p class="selftext">
        { selftext }
    </p>
{/if}

<style lang="scss">
    .selftext {
        padding: 0.25rem min(2.5rem, 3vw) 2rem min(2.5rem, 3vw);
        line-height: 2rem;
    }
</style>