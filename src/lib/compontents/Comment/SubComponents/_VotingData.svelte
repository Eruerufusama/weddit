<script>
    export let score;
</script>

<div class="votes">
    <p class="votes__total">
        <strong>{ score }</strong>
        points
    </p>
</div>

<style lang="scss">
    .votes {
        font-family: 'Roboto Condensed';
        color: var(--color-foreground-dimmed);
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding-right: 1.25rem;
    }
</style>