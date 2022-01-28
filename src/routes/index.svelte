<script>
    import { favoriteSubredditsStore } from '$lib/stores/saved/subreddits';
    import SubredditListItem from '../lib/components/common/SubredditListItem.svelte';

    let newSub;
    let subreddits = $favoriteSubredditsStore;

    $: $favoriteSubredditsStore = subreddits;

</script>


<main>
    <ul>
        {#each subreddits as subreddit, index}
            <SubredditListItem {subreddit} on:click={() => subreddits = [...subreddits.filter((v, i) => i !== index)]} />
        {/each}
        
    </ul>
    <section>
        <div>
            <input type="text" bind:value={newSub} >
            <button
                on:click={() => {
                    if (newSub) {
                        subreddits = [...subreddits, newSub];
                        newSub = '';
                    }
                    }}
            >
                Add sub
            </button>
        </div>
        <h2>ADD YOUR ❤️<span>FAVORITE</span>❤️ SUBREDDITS</h2>
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

            
        }
    }
    button {
        font-size: 2rem;
        background-color: var(--color-background-1);
        border: 2px solid white;
        color: var(--color-foreground-1);
        padding: 0 2.5rem;
        border-radius: 3.5rem;
        margin-left: -3.5rem;
    }

    div {
        display: flex;
        align-items: stretch;
        justify-content: center;

    }

    input[type=text] {
        font-size: 2.5rem;
        padding: 1.25rem 2.5rem;
        border-top-left-radius: 3.5rem;
        border-bottom-left-radius: 3.5rem;
    }
    h2 {
        text-align: center;

        span {
            font-weight: 200;
            font-style: italic;
        }
    }
</style>