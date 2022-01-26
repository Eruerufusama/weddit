<script lang="ts">
    import { showAllImagesStore, showAllSelfpostsStore } from '$lib/stores/settings/autoShow';
</script>

<div>
    <button on:click={() => {showAllImagesStore.update(() => !$showAllImagesStore)}}>
        Show/Hide Images
    </button>
    <button on:click={() => {showAllSelfpostsStore.update(() => !$showAllSelfpostsStore)}}>
        Show/Hide Self-posts
    </button>
</div>

<style lang="scss">
    div {
        padding: 2.5rem;
        display: flex;
        gap: 1.25rem;

        button {
            color: var(--color-foreground-2);
            background-color: var(--color-background-1);
            padding: 1.25rem;
            border: 2px solid var(--color-foreground-dimmed);
            border-radius: 2.5rem;
        }
    }
</style>