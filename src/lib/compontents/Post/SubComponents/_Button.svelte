<script>
    import Plus from '$lib/compontents/SVGs/Plus.svelte'
    import Minus from '$lib/compontents/SVGs/Minus.svelte';

    export let isOpen;
</script>

<button on:click>
    {#if isOpen}
        <Minus />
    {:else}
        <Plus />
    {/if}
</button>

<style lang="scss">
    button {
        font-size: 2rem;
        margin-top: -2.25rem;
        padding: 0.75rem 1.25rem;
        background-color: var(--color-background-1);
        color: var(--color-foreground-2);
        border-radius: 2.5rem;
    }
</style>