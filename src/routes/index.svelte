<script lang="ts">
    import { favoriteSubredditsStore } from '$lib/stores/saved/subreddits';
    import SubredditListItem from '$lib/components/common/SubredditListItem.svelte';

    let newSub: string;
    let subreddits: Array<any> = $favoriteSubredditsStore;

    $: $favoriteSubredditsStore = subreddits;

</script>


<div>
    <ul>
        {#each subreddits as subreddit, index}
            <SubredditListItem {subreddit} on:click={() => subreddits = [...subreddits.filter((v, i) => i !== index)]} />
        {/each}
        
    </ul>
    <section>
        <input type="text" bind:value={newSub}>
        <button on:click={() => { subreddits = [...subreddits, newSub]; newSub = ''; }}>
            Add
        </button>
    </section>
    <h1>Add your favorite subs!</h1>
</div>


<style lang="scss">
    div {
        display: grid;
        place-items: center;

        ul {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }
        button {
                font-size: 2rem;
                background-color: var(--color-foreground-dimmed);
                color: var(--color-background-3);
                padding: 0 1.25rem
            }
        section {
            display: flex;
            align-items: stretch;
            padding: 2.5rem;
            background-color: var(--color-background-3);

            input[type=text] {
                font-size: 2.5rem;
            }
        }
    }
</style>