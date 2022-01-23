import type { Writable } from "svelte/store";
import type { GeneralSubmission } from "./redditGeneralSubmission";
import type { RedditPost } from "./subredditPosts";

interface Base {
    after: null,
    before: null,
    dist: number,
    geo_filter: string,
    modhash: string,
}

export type SubmissionStore = Writable<[
    { data: RedditPost, kind: string },
    { data: SubmissionComments, kind: string }
]>;

export interface Submission extends Base {
    children: [
        { data: RedditPost, kind: string },
        { data: SubmissionComments, kind: string },
    ]
}

export interface CommentsWrapper extends Base {
    children: Array<{
        kind: string,
        data: CommentType,
    }>
}

export interface CommentType extends GeneralSubmission {
    associated_award: any | null,
    body: string,
    body_html: string,
    collapsed: boolean,
    collapsed_because_crowd_control: boolean | null,
    collapsed_reason: string | null,
    collapsed_reason_code: string | null,
    comment_type: null | any,
    controversiality: number,
    depth: number,
    is_submitter: boolean,
    parent_id: string,
    replies: "" | SubmissionComments,
    score_hidden: boolean,
}

export interface SubmissionComments {
    data: CommentsWrapper,
    kind: string,
}