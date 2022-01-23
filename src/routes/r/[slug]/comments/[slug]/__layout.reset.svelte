<!-- Load reddit-page and save to store -->
<script lang="ts" context="module">
    import { submissionStore } from '$lib/stores';

    export async function load({ url }) {
        const response = await fetch(`https://www.reddit.com/${url.pathname}.json`);

        if (response.ok) {
            const submission = await response.json();
            submissionStore.set(submission);

            return { props: { submission } };
        }
    }
</script>

<script lang="ts">
//  imports
    import Footer from '$lib/compontents/Footer/Footer.svelte';
    import Header from '$lib/compontents/Header/Header.svelte';

//  props
    export let submission;
</script>


<Header />
<slot />
<Footer />