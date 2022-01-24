<script lang="ts">

//  Imports
    import { getTimeSincePosted } from '$lib/functions/time';

//  Props
    export let created: number;
    export let author: string;
    const { time, format } = getTimeSincePosted(created)
    const suffix = time === 1 ? '' : 's';

</script>

<div>
    <p>
        Posted <strong>{ time } { format }{ suffix } ago</strong>
    </p>
    <p>
        by <em>{ author }</em>
    </p>
</div>

<style lang="scss">
    div {
        //  Layout
            gap: 0.25rem 1rem;

        p {
            display: inline;
            color: var(--color-foreground-dimmed);
            font-family: 'Roboto Condensed', sans-serif;
        }

        @media (max-width: 540px) {
            //  Layout
                display: flex;
                flex-direction: column;

            p {
                display: inline;
            }
        }
        @media (max-width: 380px) {
            display: none;
        }
    }
</style>