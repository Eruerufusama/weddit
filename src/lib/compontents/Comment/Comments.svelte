<script lang="ts">

//  imports
    import type { SubmissionComments, CommentType } from '$lib/types/redditSubmission';
    import Comment from './_Comment.svelte';

//  props
    export let data: SubmissionComments;
    const comments: CommentType[] = data.data.children.map(({ data }) => data);

</script>


{#each comments as comment }
    {#if comment.body }
        <Comment {comment} />
    {/if }
{/each }


<style lang="scss">

</style>