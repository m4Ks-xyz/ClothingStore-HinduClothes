/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,ts,scss}"],
	important: true,
	theme: {
		container: {},
		extend: {
			colors: {},
		},
	},
	plugins: [],
	// Zapobiega konfliktom z Material UI
	corePlugins: {
		preflight: false,
	},
};
