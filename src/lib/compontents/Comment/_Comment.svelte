<script>

//  Imports
    import Button from "./SubComponents/_Button.svelte";
    import AuthoringData from "./SubComponents/_AuthoringData.svelte";
    import Comments from "./Comments.svelte";

//  Props
    export let comment;
    const { body, author, created, score, ups, downs } = comment;

//  States
    let showBody = true;
    let symbol = '-';
    $: showBody ? symbol = '-' : symbol = '+';

</script>


<article>
    <section class="header">
        <div class="left">
            <Button
                on:click={() => showBody = !showBody}
                {symbol}
            />
            <AuthoringData {author} {created} />
        </div>
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
            box-shadow: -5px 0 5px 0 hsla(0, 0%, 0%, 0.2);
        
        .header {
            //  Layout
                display: flex;
                justify-content: space-between;
                align-items: center;
            //  Styling
                background-color: var(--color-bg-1);

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
                background-color: var(--color-bg-3);

            p {
                //  Layout
                    padding-right: 1.25rem;
                    line-height: 2rem;
                //  Styling
                    color: var(--color-text-200);
            }
        }
    }
</style>