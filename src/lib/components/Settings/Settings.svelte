<script lang="ts">
	// Stores
	import { showAllImages, showAllSelfposts, showAllVideos } from '$lib/stores/settings/autoShow';
	import { isCompact } from '$lib/stores/settings/postStyles';
	// Use-directives
	import { clickOutside } from '$lib/functions/clickOutside';
	// Components
	import Cog from '$lib/components/SVGs/Cog.svelte';
	import Checkbox from './_Checkbox.svelte';
	import Category from './_Category.svelte';

	let isOpen = false;
</script>

<section class:isOpen>
	<div use:clickOutside on:outclick={() => (isOpen = false)}>
		<Category title="Show all...">
			<Checkbox isChecked={showAllImages} name="img">Images</Checkbox>
			<Checkbox isChecked={showAllVideos} name="vid">Videos</Checkbox>
			<Checkbox isChecked={showAllSelfposts} name="img">Self-posts</Checkbox>
		</Category>
		<Category title="Post style">
			<Checkbox isChecked={isCompact} name="compact">Compact</Checkbox>
		</Category>
	</div>
	<Cog on:click={() => (isOpen = !isOpen)} {isOpen} />
</section>

<style lang="scss">
	section {
		display: flex;

		margin-left: clamp(-640px, -50vw, -280px);
		transition: margin-left 0.25s;
		position: fixed;
		transition: margin-left 0.5s;
	}
	.isOpen {
		margin-left: 0;

		div {
			box-shadow: 5px 0 10px 5px var(--color-shadow);
		}
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: stretch;

		background-color: var(--color-background-2);
		height: 100%;
		box-sizing: border-box;
		padding: 2.5rem 2.5rem;
		height: 100vh;
		width: clamp(280px, 50vw, 640px);
		// border-right: 1.25rem solid var(--color-background-1);
	}
</style>
