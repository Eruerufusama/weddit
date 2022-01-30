<script>
    import { onMount } from "svelte";

    export let image;
    export let showImage;

    let loaded = false;
    let img;

    onMount(() => {
        img.onload = () => {
            loaded = true;
        }
    })
</script>

{#if showImage}
    <img src={image.url} alt="Reddit submission" bind:this={img} />
{/if}

<style lang="scss">
    img {
        max-width: 100%;
        padding: 0.25rem min(2.5rem, 3vw) 2rem min(2.5rem, 3vw);
    }
</style>