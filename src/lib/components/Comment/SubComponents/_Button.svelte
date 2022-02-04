<button on:click aria-label="Toggle collapsable state of comment-chain">
	<slot>Missing button-text</slot>
</button>

<style lang="scss">
	button {
		//  Layout
		padding: 0 1.25rem;
		font-size: 2rem;
		//  Styling
		border: none;
		background-color: var(--color-background-1);
		color: inherit;
	}
</style>
