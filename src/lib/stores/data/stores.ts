import { writable } from 'svelte/store';

import type { PostsStore } from '$lib/types/subredditPosts';
import type { SubmissionStore } from '../types/redditSubmission';

export const postsStore: PostsStore = writable();
export const submissionStore = writable();

export const openStateStore = writable(false);

