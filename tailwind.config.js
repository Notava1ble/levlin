/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgblue: {
					100: "#1C456C",
					200: "#35618B",
				},
				g: "#6FCD79",
			},
			fontFamily: {
				foe: ["friend"],
				roboto: ["Roboto", "Sans-serif"],
			},
			backgroundImage: {
				sung: "url(./assets/bg.jpg)",
			},
		},
	},
	plugins: [],
};
