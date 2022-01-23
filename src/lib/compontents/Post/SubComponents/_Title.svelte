<script lang="ts">
    export let title: string;
    export let url: string;
</script>

<h3>
    <a href={url}>{ title }</a>
</h3>

<style lang="scss">
    h3 {
        font-size: 1.8rem;
        
        @media (max-width: 640px) {
            font-size: 1.5rem;
        }
    }
</style>