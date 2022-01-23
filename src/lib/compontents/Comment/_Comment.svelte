<script>
    import Button from "./SubComponents/_Button.svelte";
    import AuthoringData from "./SubComponents/_AuthoringData.svelte";
    import Comments from "./Comments.svelte";

    export let comment;

    const { body, author, created, score, ups, downs } = comment;

    const authData = { created, author };

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
            <AuthoringData {...authData} />
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
        box-shadow: -5px 0 5px 0 hsla(0, 0%, 0%, 0.2);
        
        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
    
            background-color: var(--color-bg-1);
    
            div {
                display: flex;
                align-items: center;
            }
        }
    
        .body {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
    
            padding: 1.25rem 0 1.25rem 1.25rem;
    
            background-color: var(--color-bg-3);
    
            p {
                padding-right: 1.25rem;
                color: var(--color-text-200);
            }
        }
    }
</style>