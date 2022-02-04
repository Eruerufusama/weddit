<script>
	export let score;
	export let score_hidden;
</script>

<div class="votes">
	<p class="votes__total">
		{#if score_hidden}
			Score hidden
		{:else}
			<strong>{score}</strong>
			points
		{/if}
	</p>
</div>

<style lang="scss">
	.votes {
		font-family: 'Roboto Condensed';
		color: var(--color-foreground-dimmed);
		display: flex;
		align-items: center;
		gap: 1.25rem;
		padding-right: 1.25rem;
	}
</style>
