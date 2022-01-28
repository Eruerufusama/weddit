<script lang="ts">
    export let toggle;
    export let name;
</script>

<li on:click>
    <label for={name}><slot /></label>
    <input {name} type="checkbox" bind:checked={toggle} />
</li>

<style lang="scss">
    li {
        display: flex;
        flex-grow: 1 0;
        justify-content: space-between;
        align-items: center;
        gap: 1.25rem;
        padding: 1.25rem;
        background-color: var(--color-background-1);
        border-radius: 0.5rem;
        color: var(--color-foreground-dimmed);
        transition: color 0.25s;
        box-sizing: border-box;

        label {
            flex-grow: 1;
            text-align: center;
            font-size: 1.5rem;
        }

        &:hover {
            color: var(--color-foreground-2);
        }
    }
</style>