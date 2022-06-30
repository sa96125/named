const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.css'],
	theme: {
		extend: {
			fontFamily: {
				display: ['noe', ...fontFamily.sans],
				sans: ['titillium', ...fontFamily.sans],
				studio: ['studio', ...fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
