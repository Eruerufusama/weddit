<script lang="ts">
    import { getTimeSincePosted } from '$lib/functions/time';

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
        gap: 0.25rem 1rem;

        p {
            display: inline;
        }

        @media (max-width: 540px) {
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