<script lang="ts">
    export let video;
    export let showVideo;
</script>

{#if showVideo}
    <video
        autoplay={true}
        src={video}
        playsinline={true}  
        webkit-playsinline="true"
        preload="auto"
        loop={true}
    ><track kind="captions"></video>
{/if}

<style lang="scss">
    video {
        max-width: 100%;
        padding: 0.25rem min(2.5rem, 3vw) 2rem min(2.5rem, 3vw);
    }
</style>