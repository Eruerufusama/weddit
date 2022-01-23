<script lang="ts">
//  imports
    import type { SubmissionComments, CommentType } from '$lib/types/redditSubmission';
    import Comment from './_Comment.svelte';
    import Comments from './Comments.svelte';

//  props
    export let data: SubmissionComments;

    const comments: CommentType[] = data.data.children.map(
        ({ data }) => data
        );

</script>


{#each comments as comment }
    <Comment {comment} />
{/each }


<style lang="scss">

</style>