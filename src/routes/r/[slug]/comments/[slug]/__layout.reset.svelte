<!-- Load reddit-page and save to store -->
<script lang="ts" context="module">
	import { submissionStore } from '$lib/stores/data/stores';

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
	import Footer from '$lib/components/Footer/Footer.svelte';
	import Header from '$lib/components/Header/Header.svelte';

	//  props
	export let submission;
</script>

<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,700;1,300&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
</svelte:head>

<Header />
<slot>No page, only layout. Big sad.</slot>
<Footer />
