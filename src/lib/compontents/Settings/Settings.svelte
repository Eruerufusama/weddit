<script lang="ts">
    import { showAllImagesStore, showAllSelfpostsStore, showAllVideosStore } from '$lib/stores/settings/autoShow';

    let toggleImages = $showAllImagesStore;
    let toggleVideos = $showAllVideosStore;
    let toggleSelfposts = $showAllSelfpostsStore;
    
    $: showAllImagesStore.update(() => toggleImages)
    $: showAllVideosStore.update(() => toggleVideos)
    $: showAllSelfpostsStore.update(() => toggleSelfposts)
</script>

<ul>
    <li on:click={() => toggleImages = !toggleImages}>
        <label for="img">Show all images</label>
        <input name="img" type="checkbox" bind:checked={toggleImages} />
    </li>
    <li on:click={() => toggleVideos = !toggleVideos}>
        <label for="vid">Show all videos</label>
        <input name="vid" type="checkbox" bind:checked={toggleVideos} />
    </li>
    <li on:click={() => toggleSelfposts = !toggleSelfposts}>
        <label for="self">Show all self-posts</label>
        <input name="self" type="checkbox" bind:checked={toggleSelfposts} />
    </li>
</ul>

<style lang="scss">
    ul {
        display: flex;
        // flex-direction: column;
        gap: 0.625rem;

        li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 1.25rem;
            padding: 1.25rem;
            background-color: var(--color-background-1);
            border-radius: 0.5rem;
            color: var(--color-foreground-dimmed);
            transition: color 0.25s;

            &:hover {
                color: var(--color-foreground-2);
                transition: color 0.25s;
            }
        }
    }
</style>