<script lang="ts">

//  Props
    export let num_comments: number;
    export let permalink: string
    const suffix = num_comments === 1 ? '' : 's';

</script>

<p>
    <a href={permalink}>
        <strong>{ num_comments }</strong>
        comment{ suffix }
    </a>
</p>

<style lang="scss">
    p {
        color: var(--color-foreground-dimmed);
        a {
            color: inherit;
        }
    }
</style>