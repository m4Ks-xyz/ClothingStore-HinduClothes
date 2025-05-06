/** @type {import('prettier').Config} */
module.exports = {
	useTabs: true,
	overrides: [
		{
			files: ['**/*.css', '**/*.scss'],
			options: {
				singleQuote: true,
			},
		},
	],
};
