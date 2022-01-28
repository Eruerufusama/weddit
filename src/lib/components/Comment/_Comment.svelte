<script>

//  Imports
    import Button from "./SubComponents/_Button.svelte";
    import AuthoringData from "./SubComponents/_AuthoringData.svelte";
    import Comments from "./Comments.svelte";
    import VotingData from "./SubComponents/_VotingData.svelte";
    import Minus from "../SVGs/Minus.svelte";
    import Plus from "../SVGs/Plus.svelte";
    import { marked } from 'marked';

//  Props
    export let comment;
    const { body, author, created, score, score_hidden, is_submitter, distinguished } = comment;

//  States
    let showBody = true;

    console.log(comment);
</script>


<article>
    <section class={`header ${is_submitter && 'op'} ${distinguished === 'moderator' && 'mod'}`}>
        <div class="left">

            <Button on:click={() => showBody = !showBody}>
                {#if showBody } <Minus /> {:else } <Plus /> {/if }
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
        //  Styling
            box-shadow: -5px 0 5px 0 var(--color-shadow);
        
        .header {
            //  Layout
                display: flex;
                justify-content: space-between;
                align-items: center;
            //  Styling
                background-color: var(--color-background-3);
        
                .left {
                    //  Layout
                    display: flex;
                    align-items: center;
                }
            }
        .op {
            //  Styling
                background-color: var(--color-op);
        }
        .mod {
            //  Styling
                background-color: var(--color-mod);
        }

        .body {
            //  Layout
                display: flex;
                flex-direction: column;
                gap: 1.25rem;
                padding: 1.25rem 0 1.25rem min(1.25rem, 2vw);
            //  Styling
                background-color: var(--color-background-1);

            .markdown {
                //  Layout
                    padding-right: 1.25rem;
                    line-height: 2rem;
                //  Styling
                    color: var(--color-foreground-1);

            }
        }
    }
</style>