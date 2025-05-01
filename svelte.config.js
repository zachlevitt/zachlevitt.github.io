import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'fallback.html',
			precompress: false,
			strict: true
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/zachlevitt.github.io' : '',
			relative: false
		},
		appDir: 'app',
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore all 404s
				if (message.includes('404')) {
					return;
				}
				throw new Error(message);
			}
		}
	},
	preprocess: vitePreprocess()
};

export default config;