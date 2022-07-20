const defaultTheme = require("tailwindcss/defaultTheme")
const svgToDataUri = require("mini-svg-data-uri")

const {
	default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette")

/** @type {import('tailwindcss').Config} */
module.exports = {
	experimental: {
		optimizeUniversalDefaults: true,
	},
	darkMode: "class",
	content: [
		"./demo/src/assets/icons/index.tsx",
		"./demo/src/pages/**/*.{astro,md}",
		"./demo/src/layouts/*.astro",
		"./demo/src/ui/**/*.{tsx,jsx,astro,ts,js}",
	],
	theme: {
		extend: {
			screens: {
				/* 320px */
				/* 384px */
				/* 448px */
				/* 512px */
				/* 576px */
				/* 672px */
				/* 768px */
				/* 896px */
				/* 1024px */
				/* 1152px */
				/* 1280px */
			},
			backgroundImage: {
				conic: "conic-gradient(var(--tw-gradient-stops))",
				"conic-to-t":
					"conic-gradient(at top, var(--tw-gradient-stops))",
				"conic-to-b":
					"conic-gradient(at bottom, var(--tw-gradient-stops))",
				"conic-to-l":
					"conic-gradient(at left, var(--tw-gradient-stops))",
				"conic-to-r":
					"conic-gradient(at right, var(--tw-gradient-stops))",
				"conic-to-tl":
					"conic-gradient(at top left, var(--tw-gradient-stops))",
				"conic-to-tr":
					"conic-gradient(at top right, var(--tw-gradient-stops))",
				"conic-to-bl":
					"conic-gradient(at bottom left, var(--tw-gradient-stops))",
				"conic-to-br":
					"conic-gradient(at bottom right, var(--tw-gradient-stops))",
				radial: "radial-gradient(circle at center, var(--tw-gradient-stops))",
				"radial-at-t":
					"radial-gradient(circle at top, var(--tw-gradient-stops))",
				"radial-at-b":
					"radial-gradient(circle at bottom, var(--tw-gradient-stops))",
				"radial-at-l":
					"radial-gradient(circle at left, var(--tw-gradient-stops))",
				"radial-at-r":
					"radial-gradient(circle at right, var(--tw-gradient-stops))",
				"radial-at-tl":
					"radial-gradient(circle at top left, var(--tw-gradient-stops))",
				"radial-at-tr":
					"radial-gradient(circle at top right, var(--tw-gradient-stops))",
				"radial-at-bl":
					"radial-gradient(circle at bottom left, var(--tw-gradient-stops))",
				"radial-at-br":
					"radial-gradient(circle at bottom right, var(--tw-gradient-stops))",
			},
			colors: {
				slate: {
					...defaultTheme.colors.slate,
					1000: "#0D1423",
				},
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						"h1, h2, h3, h4, h5, h6": {
							a: {
								scrollMarginTop: "64px",
								borderBottom: `0px solid ${theme(
									"colors.sky.300"
								)}`,
								"&:hover": {
									borderBottomWidth: "0px",
								},
							},
						},
						a: {
							fontWeight: theme("fontWeight.semibold"),
							textDecoration: "none",
							borderBottom: `1px solid ${theme(
								"colors.sky.300"
							)}`,
							"&:hover": {
								borderBottomWidth: "2px",
							},
							code: {
								color: "inherit",
								fontWeight: "inherit",
							},
							strong: {
								color: "inherit",
								fontWeight: "inherit",
							},
						},
					},
				},
			}),
			keyframes: {
				"move-bg": {
					to: {
						backgroundPosition: "400% -400%",
					},
				},
			},
			animation: {
				"move-bg-slow": "move-bg 152s infinite linear",
				"move-bg": "move-bg 52s infinite linear",
				"move-fast-bg": "move-bg 12s infinite linear",
			},
			boxShadow: {
				glass: "inset 0px 1px 6px 0px rgba(0,0,0,0.3),inset 0px 1px 36px 6px rgba(0,0,0,0.3),inset 17px -2px 72px 12px rgba(0,0,0,0.3)",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		function ({ addVariant }) {
			addVariant(
				"supports-backdrop-blur",
				"@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))"
			)
			addVariant(
				"supports-scrollbars",
				"@supports selector(::-webkit-scrollbar)"
			)
			addVariant("children", "& > *")
			addVariant("scrollbar", "&::-webkit-scrollbar")
			addVariant("scrollbar-track", "&::-webkit-scrollbar-track")
			addVariant("scrollbar-thumb", "&::-webkit-scrollbar-thumb")
			addVariant("demo-dark", ".demo-dark &")
		},
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					"bg-grid": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				}
			)

			matchUtilities(
				{
					"bg-clouds": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 28" width="56" height="28"><path fill="${value}" d="M56 26v2h-7.75c2.3-1.27 4.94-2 7.75-2zm-26 2a2 2 0 1 0-4 0h-4.09A25.98 25.98 0 0 0 0 16v-2c.67 0 1.34.02 2 .07V14a2 2 0 0 0-2-2v-2a4 4 0 0 1 3.98 3.6 28.09 28.09 0 0 1 2.8-3.86A8 8 0 0 0 0 6V4a9.99 9.99 0 0 1 8.17 4.23c.94-.95 1.96-1.83 3.03-2.63A13.98 13.98 0 0 0 0 0h7.75c2 1.1 3.73 2.63 5.1 4.45 1.12-.72 2.3-1.37 3.53-1.93A20.1 20.1 0 0 0 14.28 0h2.7c.45.56.88 1.14 1.29 1.74 1.3-.48 2.63-.87 4-1.15-.11-.2-.23-.4-.36-.59H26v.07a28.4 28.4 0 0 1 4 0V0h4.09l-.37.59c1.38.28 2.72.67 4.01 1.15.4-.6.84-1.18 1.3-1.74h2.69a20.1 20.1 0 0 0-2.1 2.52c1.23.56 2.41 1.2 3.54 1.93A16.08 16.08 0 0 1 48.25 0H56c-4.58 0-8.65 2.2-11.2 5.6 1.07.8 2.09 1.68 3.03 2.63A9.99 9.99 0 0 1 56 4v2a8 8 0 0 0-6.77 3.74c1.03 1.2 1.97 2.5 2.79 3.86A4 4 0 0 1 56 10v2a2 2 0 0 0-2 2.07 28.4 28.4 0 0 1 2-.07v2c-9.2 0-17.3 4.78-21.91 12H30zM7.75 28H0v-2c2.81 0 5.46.73 7.75 2zM56 20v2c-5.6 0-10.65 2.3-14.28 6h-2.7c4.04-4.89 10.15-8 16.98-8zm-39.03 8h-2.69C10.65 24.3 5.6 22 0 22v-2c6.83 0 12.94 3.11 16.97 8zm15.01-.4a28.09 28.09 0 0 1 2.8-3.86 8 8 0 0 0-13.55 0c1.03 1.2 1.97 2.5 2.79 3.86a4 4 0 0 1 7.96 0zm14.29-11.86c1.3-.48 2.63-.87 4-1.15a25.99 25.99 0 0 0-44.55 0c1.38.28 2.72.67 4.01 1.15a21.98 21.98 0 0 1 36.54 0zm-5.43 2.71c1.13-.72 2.3-1.37 3.54-1.93a19.98 19.98 0 0 0-32.76 0c1.23.56 2.41 1.2 3.54 1.93a15.98 15.98 0 0 1 25.68 0zm-4.67 3.78c.94-.95 1.96-1.83 3.03-2.63a13.98 13.98 0 0 0-22.4 0c1.07.8 2.09 1.68 3.03 2.63a9.99 9.99 0 0 1 16.34 0z"/></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				}
			)

			matchUtilities(
				{
					"bg-graph-paper": (value) => ({
						backgroundImage: `url("${svgToDataUri(
							`<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><g fill-rule="evenodd"><g fill="${value}"><path opacity=".5" d="M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z"/><path d="M6 5V0H5v5H0v1h5v94h1V6h94V5H6z"/></g></g></svg>`
						)}")`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				}
			)

			matchUtilities(
				{
					highlight: (value) => ({
						boxShadow: `inset 0 1px 0 0 ${value}`,
					}),
				},
				{
					values: flattenColorPalette(theme("backgroundColor")),
					type: "color",
				}
			)
		},
		function ({ addUtilities, theme }) {
			let backgroundSize = "7.07px 7.07px"
			let backgroundImage = (color) =>
				`linear-gradient(135deg, ${color} 10%, transparent 10%, transparent 50%, ${color} 50%, ${color} 60%, transparent 60%, transparent 100%)`
			let colors = Object.entries(theme("backgroundColor")).filter(
				([, value]) =>
					typeof value === "object" && value[400] && value[500]
			)

			addUtilities(
				Object.fromEntries(
					colors.map(([name, colors]) => {
						let backgroundColor = colors[400] + "1a" // 10% opacity
						let stripeColor = colors[500] + "80" // 50% opacity

						return [
							`.${name}-stripes`,
							{
								backgroundColor,
								backgroundImage: backgroundImage(stripeColor),
								backgroundSize,
							},
						]
					})
				)
			)

			addUtilities({
				".bg-stripes-white": {
					backgroundImage: backgroundImage(
						"rgba(255 255 255 / 0.75)"
					),
					backgroundSize,
				},
			})
		},
		function ({ addUtilities }) {
			addUtilities({
				".ligatures-none": {
					fontVariantLigatures: "none",
				},
			})
			addUtilities({
				".no-scrollbar": {
					"-ms-overflow-style": "none",
					/* IE / Edge */
					"scrollbar-width": "none",
					/* Firefox */
				},
			})
			addUtilities({
				".tab-highlight-none": {
					"-webkit-tap-highlight-color": "transparent",
				},
			})
		},
	],
}
