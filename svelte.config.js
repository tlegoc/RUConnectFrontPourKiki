import adapter from '@sveltejs/adapter-auto';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {

		adapter:  adapter(),
		output: '.sveltekit/output',
	}
};

export default config;
