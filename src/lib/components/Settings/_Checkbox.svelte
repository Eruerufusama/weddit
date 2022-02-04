<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let isChecked: Writable<boolean>;
	export let name: string;

	$: isChecked.update((n) => n);
</script>

<li on:click={() => ($isChecked = !$isChecked)}>
	<label for={name}>
		<slot>Missing label</slot>
	</label>
	<input {name} type="checkbox" bind:checked={$isChecked} />
</li>

<style lang="scss">
	li {
		display: flex;
		flex-grow: 1 0;
		justify-content: space-between;
		align-items: center;
		gap: 1.25rem;
		padding: 1.25rem;
		background-color: var(--color-background-1);
		border-radius: 0.5rem;
		color: var(--color-foreground-dimmed);
		transition: color 0.25s;
		box-sizing: border-box;

		label {
			flex-grow: 1;
			text-align: center;
			font-size: 1.5rem;
		}

		&:hover {
			color: var(--color-foreground-2);
		}
	}
</style>
