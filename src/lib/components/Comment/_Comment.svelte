<script>

    // Components
    import Button from "./SubComponents/_Button.svelte";
    import AuthoringData from "./SubComponents/_AuthoringData.svelte";
    import Comments from "./Comments.svelte";
    import VotingData from "./SubComponents/_VotingData.svelte";
    import Minus from "../SVGs/Minus.svelte";
    import Plus from "../SVGs/Plus.svelte";
    // Functions
    import { marked } from 'marked';

    // Props
    export let comment;
    const { body, author, created, score, score_hidden, is_submitter, distinguished } = comment;
    const is_mod = distinguished === 'moderator';
    
    // States
    let showBody = true;
    let svg = showBody ? Minus : Plus;

</script>


<article>
    <section class="header" class:is_submitter class:is_mod>
        <div class="left">
            <Button on:click={() => showBody = !showBody}>
                <svelte:component this={svg} />
            </Button>
            <AuthoringData {author} {created} />
        </div>
        <VotingData {score} {score_hidden} />
    </section>

    {#if showBody }
    <section class="body">
        <div class="markdown">
            { @html marked(body) }
        </div>

        {#if comment.replies }
            <Comments data={comment.replies} />
        {/if }
    </section>
    {/if }
</article>


<style lang="scss">
    article {
        box-shadow: -5px 0 5px 0 var(--color-shadow);
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            background-color: var(--color-background-3);
        
                .left {
                    display: flex;
                    align-items: center;
                }
            }
        .is_submitter { background-color: var(--color-op); }
        .is_mod { background-color: var(--color-mod); }
        .body {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
            padding: 1.25rem 0 1.25rem min(1.25rem, 2vw);

            background-color: var(--color-background-1);
            .markdown {
                padding-right: 1.25rem;
                line-height: 2rem;

                color: var(--color-foreground-1);
            }
        }
    }
</style>