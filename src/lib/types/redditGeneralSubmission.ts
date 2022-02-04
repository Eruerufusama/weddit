export interface GeneralSubmission {
	all_awardings: Array<any>, // !!!
	approved_at_utc: number | null,
	approved_by: string | null,
	archived: boolean,
	author: string,
	author_flair_background_color: null | string,
	author_flair_css_class: null | string,
	author_flair_richtext: Array<any>, // !!!
	author_flair_template_id: string,
	author_flair_text: string,
	author_flair_text_color: string,
	author_flair_type: string,
	author_fullname: string,
	author_is_blocked: boolean,
	author_patreon_flair: boolean,
	author_premium: boolean,
	awarders: Array<any>, // !!!
	banned_at_utc: null | number,
	banned_by: null | string,
	can_gild: boolean,
	can_mod_post: boolean,
	created: number,
	created_utc: number,
	distinguished: null | string,
	downs: number,
	edited: boolean,
	gilded: boolean,
	gildings: any, // !!!
	id: string,
	likes: null | any, // !!!
	link_id: string,
	locked: boolean,
	mod_note: null | string,
	mod_reason_by: null | string,
	mod_reason_title: null | string,
	mod_reports: Array<any>, // !!!
	name: string,
	no_follow: boolean,
	num_reports: null | number,
	permalink: string,
	removal_reason: null | string,
	report_reasons: null | any, // !!!
	saved: boolean,
	score: number,
	send_replies: boolean,
	stickied: boolean,
	subreddit: string,
	subreddit_id: string,
	subreddit_name_prefixed: string,
	subreddit_type: string,
	top_awarded_types: null | any, // !!!
	total_awards_recieved: number,
	treatment_tags: Array<any>, // !!!
	ups: number,
	user_reports: Array<any>,
}
