<script>
	import Plus from '$lib/components/SVGs/Plus.svelte';
	import Minus from '$lib/components/SVGs/Minus.svelte';

	export let isOpen;

	$: Svg = isOpen ? Minus : Plus;
</script>

<button on:click aria-label="Toggle visibility of submission-content">
	<svelte:component this={Svg} />
</button>

<style lang="scss">
	button {
		position: relative;
		font-size: 2rem;
		bottom: -2rem;
		margin-top: -4rem;
		padding: 0.75rem 1.25rem;

		background-color: var(--color-background-1);
		color: var(--color-foreground-2);
		border-radius: 2.5rem;
	}
</style>
