<script>
    export let symbol;
</script>

<button on:click>
    { symbol }
</button>

<style lang="scss">
    button {
        padding: 0 1.25rem;
        font-size: 2rem;

        border: none;
        background-color: var(--color-bg-3);
        color: inherit;
    }
</style>