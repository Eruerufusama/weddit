<script>
import Downvote from "$lib/compontents/SVGs/Downvote.svelte";
import Upvote from "$lib/compontents/SVGs/Upvote.svelte";

//  Props
    export let score;
    export let ups;
    export let downs;
    export let detailed = true;
</script>

<div class="votes">

    <p class="votes__total"><strong>{ score }</strong> points</p>

    {#if detailed }
        <div class="votes__up">
            <Upvote />
            <p>{ups}</p>
        </div>
        <div class="votes__down">
            <Downvote />
            <p>{downs}</p>
        </div>
    {/if}

</div>

<style lang="scss">
    .votes {
        font-family: 'Roboto Condensed';
        color: var(--color-foreground-dimmed);
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding-right: 1.25rem;

        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        &__up {
            color: var(--color-upvotes);
        }
        &__down {
            color: var(--color-downvotes);
        }
    }
</style>