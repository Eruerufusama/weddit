<!-- Load reddit-page and save to store -->
<script lang="ts" context="module">
	import { submissionStore } from '$lib/stores/data/stores'

	export async function load({ url }) {
		const response = await fetch(`https://www.reddit.com/${url.pathname}.json`)

		if (response.ok) {
			const submission = await response.json()
			submissionStore.set(submission)

			return { props: { submission } }
		}
	}
</script>

<script lang="ts">
	//  imports
	import Footer from '$lib/components/Footer/Footer.svelte'
	import Header from '$lib/components/Header/Header.svelte'

	//  props
	export let submission
</script>

<Header />
<slot>No page, only layout. Big sad.</slot>
<Footer />
