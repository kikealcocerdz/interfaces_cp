/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Gotham SSm A, sans-serif']
		},
		extend: {
			colors: {
				'white': '#ffffff',
				'light-grey': '#E2E1E5',
				'grey': '#A5A5A5',
				'black': '#000000',
				'error-red': '#ef4444',
				'success-green': '#22c55e',
			}
		},
	},
	plugins: [],
}
