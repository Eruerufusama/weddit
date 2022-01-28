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
        gap: 1.25rem;
        @media (max-width: 1200px) {
            flex-direction: column;
            align-items: stretch;
        }
        
        h3 {
            @media (min-width: 1201px) {
                border-left: 0.25rem solid white;
                padding-left: 1.25rem;
            }
            flex-grow: 1;
            text-align: center;
        }
    }

    ul {
        display: flex;
        gap: 1.25rem;
        justify-content: center;
        align-items: stretch;
        flex-grow: 1;
        padding: 0;
        flex-wrap: wrap;

        @media (max-width: 960px) {
            flex-direction: column;
        }
    }
</style>