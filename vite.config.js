import { sveltekit } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

export default {
	plugins: [
		sveltekit({
			extensions: ['.svelte', '.md'],
			preprocess: [
				mdsvex({
					extensions: ['.md']
				})
			],
			alias: {
				'$lib': 'src/lib'
			}
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};
