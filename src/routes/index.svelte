<h1>Choose to visit a subreddit...</h1>
<main>
    <article>
        <h2><a href="/r/sveltejs">/r/sveltejs</a></h2>
    </article>
    <article>
        <h2><a href="/r/webdev">/r/webdev</a></h2>
    </article>
    <article>
        <h2><a href="/r/vuejs">/r/vuejs</a></h2>
    </article>
    <article>
        <h2><a href="/r/reactjs">/r/reactjs</a></h2>
    </article>
    <article>
        <h2><a href="/r/programming">/r/programming</a></h2>
    </article>
    <article>
        <h2><a href="/r/programmerhumor">/r/programmerhumor</a></h2>
    </article>
</main>
<p>Or just, you know, type it in the url, like a normal person...</p>


<style lang="scss">
    h1 {
        text-align: center;
        padding: 2.5rem;
    }
    p {
        text-align: center;
        padding: 2.5rem;
        font-size: 1.75rem;
    }
    main {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1.25rem;

        article {
            display: grid;
            width: min(95vw, 480px);
            place-items: center;
            padding: 1.25rem;
            box-sizing: border-box;

            background-color: var(--color-background-3);
            border-radius: 1.25rem;
        }
    }
</style>