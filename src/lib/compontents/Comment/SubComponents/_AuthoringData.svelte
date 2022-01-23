<script>
    import { getTimeSincePosted } from "$lib/functions/time";

    export let author;
    export let created;

    const { time, format } = getTimeSincePosted(created);
    const timeSuffix = time === 1 ? '' : 's';
</script>

<p>
    Posted
    <strong>
        { time } { format }{ timeSuffix } ago
    </strong>
    by
    <em>
        { author }
    </em>
</p>

<style lang="scss">
    p {
        padding: 0 1.25rem;
    }
</style>