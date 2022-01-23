import type { Writable } from "svelte/store";
import type { GeneralSubmission } from "./redditGeneralSubmission";

export type PostsStore = Writable<RedditPosts>;
export type RedditPosts = Array<RedditPost>;

export interface RedditPost extends GeneralSubmission {
    allow_live_comments: boolean,
    category: null | string,
    clicked: boolean,
    content_categories: null | Array<any>, // !!!
    contest_mode: boolean,
    discussion_type: null | string,
    domain: string,
    hidden: boolean,
    hide_score: boolean,
    is_created_from_ads_ui: boolean,
    is_crosspostable: boolean,
    is_meta: boolean,
    is_original_content: boolean,
    is_reddit_media_domain: boolean,
    is_robot_indexable: boolean,
    is_self: boolean,
    is_video: boolean,
    link_flair_background_color: string,
    link_flair_css_class: null | string,
    link_flair_richtext: Array<any>, // !!!
    link_flair_text: null | string,
    link_flair_text_color: string,
    link_flair_type: string,
    media: null | any, // !!!
    media_embed: any, // !!!
    media_only: boolean,
    num_comments: number,
    num_crossposts: number,
    over_18: boolean,
    parent_whitelist_status: string,
    pinned: boolean,
    post_hint: string,
    preview: {
        enabled: boolean,
        images: Array<{
            id: string,
            resolutions: Array<ImageSource>,
            source: ImageSource,
            variants: any
        }>
    },
    pwls: number,
    quarantine: boolean,
    removed_by: null | string,
    removed_by_cateogry: null | any, // !!!
    secure_media: null | any, // !!!
    secure_media_embed: any, // !!!
    selftext: null | string,
    selftext_html: null | string,
    spoiler: boolean,
    subreddit_subscribers: number,
    suggested_sort: null | string,
    thumbnail: string,
    thumbnail_height: number,
    thumbnail_width: number,
    title: string,
    upvote_ratio: number,
    url: string,
    view_count: null | number,
    visited: boolean,
    whitelist_status: string,
    wls: number,
}

interface ImageSource {
    height: number,
    url: string,
    width: number,
}