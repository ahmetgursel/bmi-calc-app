/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'burnt-sienna': {
					50: '#fdf4ef',
					100: '#fae6da',
					200: '#f4c9b4',
					300: '#eda584',
					400: '#e57752',
					500: '#df5530',
					600: '#d03e26',
					700: '#ad2e21',
					800: '#8a2722',
					900: '#70231e',
				},
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
