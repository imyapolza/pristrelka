/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.jsx"],
	theme: {
        screens: {
			sm: { max: "568px" },
			md: { max: "768px" },
			lg: { max: "1024px" },
			xl: { max: "1280px" },
			xxl: { max: "1440px" },
			xxxl: { max: "1768px" },
		},
		extend: {},
	},
	plugins: [],
};
