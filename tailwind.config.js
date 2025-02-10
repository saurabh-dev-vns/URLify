/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				indian: {
					saffron: '#FF9933',
					green: '#138808',
					blue: '#000080',
				},
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(to bottom, #FF9933 0%, #FFFFFF 50%, #138808 100%)',
			},
		},
	},
	plugins: [],
};
