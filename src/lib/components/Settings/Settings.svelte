<script lang="ts">
    import { showAllImagesStore, showAllSelfpostsStore, showAllVideosStore } from '$lib/stores/settings/autoShow';
    import Cog from "$lib/components/SVGs/Cog.svelte";
    import Checkbox from './_Checkbox.svelte';
import Category from './_Category.svelte';

    let toggleImages = $showAllImagesStore;
    let toggleVideos = $showAllVideosStore;
    let toggleSelfposts = $showAllSelfpostsStore;

    let isOpen = false;
    
    $: showAllImagesStore.update(() => toggleImages)
    $: showAllVideosStore.update(() => toggleVideos)
    $: showAllSelfpostsStore.update(() => toggleSelfposts)
</script>
<section class={isOpen && 'is-open'}>
    <div>
        <Category title="Show all...">
            <Checkbox toggle={toggleImages} name="img" on:click={() => toggleImages = !toggleImages}>
                Images
            </Checkbox>
            <Checkbox toggle={toggleVideos} name="vid" on:click={() => toggleVideos = !toggleVideos}>
                Videos
            </Checkbox>
            <Checkbox toggle={toggleSelfposts} name="self" on:click={() => toggleSelfposts = !toggleSelfposts}>
                Self-posts
            </Checkbox>
        </Category>
    </div>
    <Cog on:click={() => isOpen = !isOpen} {isOpen} />
</section>

<style lang="scss">
    section {
        display: flex;
        margin-left: -50vw;
        transition: margin-left 0.25s;
        position: fixed;
        transition: margin-left 0.5s;
    }
    .is-open {
        margin-left: 0;
    }
    div {
        background-image: linear-gradient(hsla(0, 0%, 0%, 0.5), rgba(255, 0, 204, 0));
        height: 100%;
        box-sizing: border-box;
        padding: 2.5rem 2.5rem;
        height: 100vh;
        width: 50vw;
    }
</style>