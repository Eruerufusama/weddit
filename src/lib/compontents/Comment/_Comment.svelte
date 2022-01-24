<script>

//  Imports
    import Button from "./SubComponents/_Button.svelte";
    import AuthoringData from "./SubComponents/_AuthoringData.svelte";
    import Comments from "./Comments.svelte";
    import VotingData from "./SubComponents/_VotingData.svelte";
import Minus from "../SVGs/Minus.svelte";
import Plus from "../SVGs/Plus.svelte";

//  Props
    export let comment;
    const { body, author, created, score } = comment;

//  States
    let showBody = true;

</script>


<article>
    <section class="header">
        <div class="left">

            <Button on:click={() => showBody = !showBody}>
                {#if showBody } <Minus /> {:else } <Plus /> {/if }
            </Button>
            <AuthoringData {author} {created} />

        </div>

        <VotingData {score} />

    </section>

    {#if showBody }
    <section class="body">
        <p>{ body }</p>

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

            div {
                //  Layout
                    display: flex;
                    align-items: center;
            }
        }

        .body {
            //  Layout
                display: flex;
                flex-direction: column;
                gap: 1.25rem;
                padding: 1.25rem 0 1.25rem min(1.25rem, 2vw);
            //  Styling
                background-color: var(--color-background-1);

            p {
                //  Layout
                    padding-right: 1.25rem;
                    line-height: 2rem;
                //  Styling
                    color: var(--color-foreground-1);
            }
        }
    }
</style>