
import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-vercel';
import { mdsvex } from 'mdsvex';

export default {
	plugins: [
		sveltekit({
			adapter: adapter(),
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
