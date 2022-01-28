<script lang="ts">
    import { favoriteSubredditsStore } from '$lib/stores/saved/subreddits';
    import SubredditListItem from '$lib/components/common/SubredditListItem.svelte';

    let newSub: string;
    let subreddits: Array<any> = $favoriteSubredditsStore;

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
            <input type="text" bind:value={newSub}>
            <button on:click={() => { subreddits = [...subreddits, newSub]; newSub = ''; }}>
                Add
            </button>
        </div>
        <div>
            <h1>Add your favorite subs!</h1>
        </div>
    </section>
</main>


<style lang="scss">
    main {
        display: grid;
        place-items: center;
        height: 100vh;
        
        ul {
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            gap: 2.5rem;
            padding: 2.5rem;
            justify-content: center;
        }
        button {
            font-size: 2rem;
            background-color: var(--color-foreground-dimmed);
            color: var(--color-background-3);
            padding: 0 1.25rem
        }
        section {
            display: grid;
            border-radius: 5rem;
            background-color: var(--color-background-3);
            padding: 5rem;
            gap: 1.25rem;

            div {
                display: flex;
                align-items: stretch;
    
                input[type=text] {
                    font-size: 2.5rem;
                    padding: 1.25rem;
                }
            }
        }
    }
</style>