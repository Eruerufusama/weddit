<script lang="ts">
    import { isCompactStore } from '$lib/stores/settings/postStyles';

    export let thumbnail;
</script>

<img
    src={
            (thumbnail === 'self' || thumbnail === 'default' || thumbnail === 'nsfw')
                ? '/reddit-icon.png'
                : thumbnail
        }
    alt="Thumbnail"
    class={$isCompactStore && 'compact'}
>

<style lang="scss">
    img {
        //  Layout
            height: 96px;
            width: 96px;
        //  Styling
            border-radius: 0.5rem;

        @media (max-width: 640px) {
            //  Layout
                height: 64px;
                width: 64px;
            //  Styling
                border-radius: 1rem;
        }
        @media (max-width: 380px) {
            display: none;
        }
    }
    .compact {
        width: 64px;
        height: 64px;
    }
</style>