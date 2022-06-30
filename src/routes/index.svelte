<script lang="ts">
	import { favoriteSubredditsStore } from '$lib/stores/saved/subreddits'
	import DeletableItem from '../lib/components/common/DeletableItem.svelte'

	let newSub
	let subreddits = $favoriteSubredditsStore

	$: $favoriteSubredditsStore = subreddits

	const addSub = () => {
		if (newSub) {
			subreddits = [...subreddits, newSub]
			newSub = ''
		}
	}
</script>

<svelte:head>
	<title>Reddited - an edited reddit</title>
	<meta
		name="description"
		content="Reddited - Customize your reddit-browsing experience with our lackluster app."
	/>
</svelte:head>
<main>
	<ul>
		{#each subreddits as subreddit, index}
			<DeletableItem
				{subreddit}
				on:click={() => (subreddits = [...subreddits.filter((v, i) => i !== index)])}
			/>
		{/each}
	</ul>
	<section>
		<div class="input-field-and-button">
			<div class="input-wrapper">
				<p>/r/</p>
				<input name="add-sub-to-favorites" type="text" bind:value={newSub} placeholder="memes" />
			</div>
			<button on:click={addSub} aria-label="Add subreddit to favorites."> SAVE </button>
		</div>
		<label for="add-sub-to-favorites">
			ADD YOUR ❤️<span>FAVORITE</span>❤️ SUBREDDITS
		</label>
	</section>
</main>

<style lang="scss">
	main {
		font-family: 'Roboto Condensed';
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		place-items: center;
		height: 100vh;

		ul {
			display: flex;
			flex-wrap: wrap;
			flex-direction: row;
			gap: 2.5rem;
			padding: 2.5rem;
			justify-content: center;
			margin: 0;
		}

		section {
			width: 100%;
			display: grid;
			background-color: var(--color-background-3);
			padding: 5rem 0rem;
			gap: 1.25rem;
			font-size: 2.5rem;
			@media (max-width: 560px) {
				font-size: 1.5rem;
			}
		}
	}
	button {
		background-color: var(--color-background-1);
		border: 3px solid white;
		color: var(--color-foreground-1);
		padding: 0 2.5rem;
		border-radius: 3.5rem;
		margin-left: -3.5rem;
		font-size: inherit;
		font-family: inherit;
	}

	div {
		display: flex;
		justify-content: center;
	}
	.input-field-and-button {
		align-items: stretch;
	}
	.input-wrapper {
		align-items: center;
		background-color: white;
		border-top-left-radius: 3.5rem;
		border-bottom-left-radius: 3.5rem;
		border: none;
		padding: 1.25rem 2.5rem 1.25rem 2.5rem;
	}

	input[type='text'] {
		border-top-left-radius: 3.5rem;
		border-bottom-left-radius: 3.5rem;
		font-size: inherit;
		font-family: inherit;
		background-color: inherit;
		border: none;

		&:active,
		&:focus-visible {
			outline: none;
		}
		color: var(--color-background-1);
		@media (prefers-color-scheme: light) {
			color: var(--color-foreground-1);
		}
	}
	label {
		text-align: center;

		span {
			font-weight: 300;
			font-style: italic;
		}
	}
	p {
		font-size: inherit;
		font-family: inherit;
		color: var(--color-background-1);
		@media (prefers-color-scheme: light) {
			color: var(--color-foreground-1);
		}
	}
</style>
