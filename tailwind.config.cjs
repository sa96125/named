const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/**/*.svelte', './src/**/*.css'],
	theme: {
		extend: {
			fontFamily: {
				display: ['noe', ...fontFamily.sans],
				work: ['work', ...fontFamily.sans],
				nautigal: ['nautigal', ...fontFamily.sans],
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'my-yellow' : '#ffaf1c',
				'my-black' : '#252521',
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
