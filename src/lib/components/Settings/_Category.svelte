<script lang="ts">
    export let title: string;
</script>

<div>
    <h3>{ title }</h3>
    <ul>
        <slot />
    </ul>
</div>

<style lang="scss">
    div {
        font-family: 'Roboto Condensed';
        display: flex;
        align-items: center;
        
        h3 {
            border-left: 0.25rem solid white;
            padding-left: 1.25rem;
        }
    }

    ul {
        display: flex;
        gap: 1.25rem;
        justify-content: space-between;
        flex-grow: 1;
    }
</style>