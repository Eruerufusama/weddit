<article>
    <div>
        <section class="top-section">
            <slot name="top"/>
        </section>
        <slot name="button" />
    </div>
    <section class="middle-section">
        <slot name="middle"/>
    </section>
    <section class="bottom-section">
        <slot name="bottom"/>
    </section>
</article>

<style lang="scss">
    $rounding: 0.5rem;
    article {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        box-shadow: 0px 0 15px 0px var(--color-shadow);
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            .top-section {
                font-size: 1.25rem;
                box-sizing: border-box;
                width: 100%;
                gap: 2rem;
                padding: 0.625rem;
                background-color: var(--color-background-1);
                border-top-left-radius: $rounding;
                border-top-right-radius: $rounding;
            }
        }
        section {
            display: flex;
            align-items: center;
        }
        .middle-section {
            display: grid;
            place-items: center;
        }
        .bottom-section {
            justify-content: space-between;
            padding: 0.25rem 1rem;
            background-color: var(--color-background-3);
            border-bottom-left-radius: $rounding;
            border-bottom-right-radius: $rounding;
        }
    }
</style>