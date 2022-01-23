<script lang="ts" context="module">

//  Imports
    import sanitizeData from '$lib/functions/sanitizeData';
    import { postsStore } from '$lib/stores';
    
    import type { RedditPosts } from '$lib/types/subredditPosts';
    
//  Logic
    export async function load({ url }) {
        const response = await fetch(`https://www.reddit.com/${url.pathname}.json`);

        if (response.ok) {
            const posts: RedditPosts = sanitizeData(await response.json());
            postsStore.set(posts);

            return { props: { posts } };
        }
    };
</script>

<svelte:head>
    <!-- Preconnect to google fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <!-- Import Roboto typeface -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <!-- Import Roboto Condensed typeface -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet">
    <!-- Import Roboto Mono typeface -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"> 
</svelte:head>

<slot />