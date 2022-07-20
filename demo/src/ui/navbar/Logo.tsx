export const Logo = (props: {
	body: { dark: string; light: string }
	circle: any
}) => {
	return (
		<svg
			width="39"
			height="39"
			class="flex-shrink-0 text-white"
			viewBox="0 0 39 39"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class={`${props.body.dark} stroke-[4] transition-colors`}
				d="M36.1401 19.0701C36.1401 28.4975 28.4976 36.14 19.07 36.14C9.64251 36.14 2 28.4975 2 19.0701C2 9.64251 9.64251 2 19.07 2C-1.28576 22.3557 15.9976 39.2339 36.1401 19.0701Z"
				stroke-opacity="0.56"
			></path>
			<path
				class={`dark:hidden block ${props.body.light} stroke-[4] transition-colors`}
				d="M36.1401 19.0701C36.1401 28.4975 28.4976 36.14 19.07 36.14C9.6425 36.14 2 28.4975 2 19.0701C2 9.64251 9.6425 2 19.07 2C-1.28576 22.3557 15.9976 39.2339 36.1401 19.0701Z"
				stroke-opacity="0.56"
			></path>
			<path
				class={`stroke-2 ${props.circle} transition-colors`}
				d="M19.0698 27.9464C23.9721 27.9464 27.9462 23.9723 27.9462 19.0699C27.9462 14.1676 23.9721 10.1935 19.0698 10.1935C14.1675 10.1935 10.1934 14.1676 10.1934 19.0699C10.1934 23.9723 14.1675 27.9464 19.0698 27.9464Z"
			></path>
		</svg>
	)
}
