<script lang="ts">
    export let video;
    export let showVideo;

    let isMuted = false;
</script>

{#if showVideo}
    <video
        autoplay
        playsinline 
        webkit-playsinline
        preload="auto"
        loop={true}
        controls
    >
        <track kind="captions">
        <source src={video} />
    </video>
{/if}

<style lang="scss">
    video {
        max-width: 100%;
        padding: 0.25rem min(2.5rem, 3vw) 2rem min(2.5rem, 3vw);
    }
</style>