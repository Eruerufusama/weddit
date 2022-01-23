import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		preprocess({
			scss: {
				includePaths: ['src/styles'],
				prependData: `@use 'globals' as *;`,
			},
		})
	],

	kit: {
		adapter: adapter('scss'),
		target: '#svelte'
	}
};

export default config;
