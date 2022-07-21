import { createEffect, createMemo, createSignal } from "solid-js"
import { ease1, easeElastic4, easeElastic5, easeSquish2 } from "../utils/easing"
import { SpeakerButton, ThemeButton, theme } from "../theme"
import { Logo } from "./Logo"

const TwitterLink = () => {
	return (
		<a
			href="#"
			class="p-2 rounded-md transition-colors 
                    duration-200 

                    text-white

                    dark:text-white/60
                    
                    dark:hover:bg-slate-700/10

                    dark:hover:text-white
                    
                    hover:bg-cyan-300 
                    
                    drop-shadow 
                    
                    [--tw-drop-shadow:drop-shadow(0_1px_2px_#2974FC)_drop-shadow(0_1px_1px_rgb(222_233_255/1))] 
                    
                    dark:[--tw-drop-shadow:drop-shadow(0_1px_2px_rgb(96_165_250/1))_drop-shadow(0_1px_1px_rgb(51_65_85/0.9))]
                    group              
                    "
		>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g
					fill="none"
					stroke="currentColor"
					stroke-width="3"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
				</g>
			</svg>
			<NavbarTooltip label="Twitter" />
		</a>
	)
}

const GithubLink = () => {
	return (
		<a
			href="https://github.com/sacarvy/astro-components"
			class="
                    p-2 
                    rounded-md 
                    transition-colors 
                    duration-200 

                    text-white

                    dark:text-white/60

                    dark:hover:text-white

                    dark:hover:bg-slate-500/10

                    hover:bg-lime-200 drop-shadow 
                    
                    [--tw-drop-shadow:drop-shadow(0_1px_2px_rgb(155_255_0_/1))_drop-shadow(0_1px_1px_rgb(105_255_140/1))] 
                    
                    dark:[--tw-drop-shadow:drop-shadow(0_1px_2px_rgb(68_64_60/1))_drop-shadow(0_1px_1px_rgb(155_136_196/0.9))]
                    relative
                    group
                    "
		>
			<svg
				width="22"
				height="24"
				viewBox="0 0 22 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M9.02114 20.5059C9.02104 20.3594 8.98875 20.2147 8.92655 20.0821C8.86435 19.9494 8.77376 19.8321 8.66119 19.7383C8.54862 19.6445 8.41682 19.5766 8.27512 19.5394C8.13341 19.5022 7.98526 19.4966 7.84114 19.5229C6.53114 19.7629 4.87814 19.7989 4.43914 18.5649C4.0559 17.6089 3.42114 16.7745 2.60214 16.1499C2.54351 16.118 2.48765 16.0812 2.43514 16.0399C2.36342 15.8511 2.23618 15.6883 2.07016 15.5732C1.90415 15.4581 1.70716 15.3959 1.50514 15.3949H1.50014C1.23578 15.3949 0.982185 15.4996 0.794792 15.6861C0.607399 15.8725 0.501459 16.1256 0.500137 16.3899C0.496137 17.2049 1.31014 17.7279 1.64114 17.9039C2.03112 18.2958 2.34449 18.757 2.56514 19.2639C2.93014 20.2869 3.98814 21.8399 7.03114 21.6399L7.03414 21.7379L7.03814 22.0059C7.03814 22.2712 7.14349 22.5255 7.33103 22.713C7.51857 22.9006 7.77292 23.0059 8.03814 23.0059C8.30335 23.0059 8.55771 22.9006 8.74524 22.713C8.93278 22.5255 9.03814 22.2712 9.03814 22.0059L9.03314 21.6879C9.02814 21.4979 9.02114 21.2239 9.02114 20.5059ZM19.6881 5.37994C19.7201 5.25494 19.7511 5.11594 19.7781 4.95994C19.9399 3.84554 19.799 2.70815 19.3701 1.66694C19.3161 1.53129 19.233 1.40909 19.1268 1.3089C19.0206 1.20872 18.8937 1.13296 18.7551 1.08694C18.3991 0.966936 17.0851 0.729936 14.5711 2.33694C12.4817 1.84526 10.3066 1.84526 8.21714 2.33694C5.71314 0.752936 4.40614 0.968936 4.05314 1.08194C3.91105 1.12603 3.78063 1.20137 3.67145 1.30242C3.56226 1.40348 3.47708 1.52768 3.42214 1.66594C2.98409 2.72722 2.84439 3.88803 3.01814 5.02294C3.04314 5.14994 3.06914 5.26894 3.09714 5.37694C2.26834 6.48057 1.82685 7.82683 1.84114 9.20694C1.83864 9.51449 1.853 9.82195 1.88414 10.1279C2.21814 14.7309 5.21814 16.1119 7.30814 16.5869C7.26276 16.7184 7.22339 16.8519 7.19014 16.9869C7.12662 17.2445 7.168 17.5167 7.30518 17.7437C7.44237 17.9707 7.66411 18.1339 7.92164 18.1974C8.17916 18.261 8.45137 18.2196 8.67838 18.0824C8.9054 17.9452 9.06862 17.7235 9.13214 17.4659C9.19579 17.1327 9.35896 16.8266 9.60014 16.5879C9.74563 16.4602 9.85091 16.293 9.90321 16.1066C9.95551 15.9202 9.95258 15.7226 9.89476 15.5378C9.83695 15.3531 9.72675 15.189 9.57752 15.0657C9.4283 14.9423 9.24648 14.865 9.05414 14.8429C5.60014 14.4479 4.10014 13.0409 3.87414 9.94394C3.84939 9.69874 3.83837 9.45236 3.84114 9.20594C3.82525 8.22249 4.15033 7.26387 4.76114 6.49294C4.82224 6.41273 4.88732 6.33563 4.95614 6.26194C5.07867 6.12488 5.16104 5.95669 5.19421 5.77586C5.22737 5.59503 5.21005 5.40856 5.14414 5.23694C5.0768 5.05667 5.02495 4.871 4.98914 4.68194C4.90771 4.14338 4.93457 3.59398 5.06814 3.06594C5.93729 3.31151 6.75527 3.71119 7.48314 4.24594C7.60342 4.32604 7.7395 4.37936 7.88218 4.40231C8.02486 4.42525 8.17081 4.41728 8.31014 4.37894C10.3313 3.8304 12.4622 3.83075 14.4831 4.37994C14.6232 4.41828 14.77 4.4258 14.9133 4.40198C15.0566 4.37815 15.193 4.32355 15.3131 4.24194C16.0379 3.70515 16.8527 3.30215 17.7191 3.05194C17.8517 3.56708 17.8813 4.10334 17.8061 4.62994C17.7699 4.83733 17.7133 5.04065 17.6371 5.23694C17.5712 5.40856 17.5539 5.59503 17.5871 5.77586C17.6202 5.95669 17.7026 6.12488 17.8251 6.26194C17.9031 6.34894 17.9801 6.44194 18.0491 6.52994C18.6555 7.28791 18.9749 8.23556 18.9511 9.20594C18.9528 9.46544 18.9401 9.72483 18.9131 9.98294C18.6931 13.0389 17.1881 14.4469 13.7181 14.8429C13.5256 14.8648 13.3435 14.9421 13.1941 15.0655C13.0446 15.189 12.9343 15.3531 12.8765 15.5381C12.8186 15.7231 12.8158 15.9209 12.8683 16.1074C12.9207 16.294 13.0263 16.4613 13.1721 16.5889C13.4207 16.8339 13.584 17.1522 13.6381 17.4969C13.706 17.7648 13.7373 18.0407 13.7311 18.3169V20.6499C13.7211 21.2979 13.7211 21.7829 13.7211 22.0059C13.7211 22.2712 13.8265 22.5255 14.014 22.713C14.2016 22.9006 14.4559 23.0059 14.7211 23.0059C14.9864 23.0059 15.2407 22.9006 15.4282 22.713C15.6158 22.5255 15.7211 22.2712 15.7211 22.0059C15.7211 21.7889 15.7211 21.3139 15.7311 20.6659V18.3159C15.7391 17.8739 15.6869 17.4329 15.5761 17.0049C15.5445 16.8644 15.5058 16.7256 15.4601 16.5889C16.9813 16.3361 18.3634 15.5517 19.3605 14.3753C20.3576 13.199 20.9049 11.707 20.9051 10.1649C20.9381 9.84636 20.9535 9.52621 20.9511 9.20594C20.9733 7.82473 20.5282 6.47653 19.6881 5.37994Z"
					fill="currentColor"
					stroke="currentColor"
				></path>
			</svg>
			<NavbarTooltip label="Github" />
		</a>
	)
}

const NavbarTooltip = (props: { label?: string }) => {
	return (
		<>
			{props?.label ? (
				<>
					<div class="absolute left-1/2 -translate-x-1/2 border-4 opacity-0 group-hover:opacity-100 border-x-transparent border-t-transparent"></div>
					<div class="absolute w-auto p-2 m-2 min-w-max z-10 top-10 rounded-md text-white bg-slate-800 text-xs font-bold transition-transform group-hover:delay-300 duration-100 scale-0 group-hover:scale-100">
						{props.label}
					</div>
				</>
			) : (
				<></>
			)}
		</>
	)
}

export const Navbar = () => {
	const shadowColor = createMemo(() =>
		theme.value === "light" ? "#fff" : "#33415515"
	)
	let virRef: HTMLElement
	let navRef: HTMLElement
	createEffect(() => {
		if (theme.navbar) {
			if (navRef.classList.contains("hidden")) {
				navRef.classList.remove("hidden")

				navRef.animate(
					{
						opacity: ["0", "1"],
						transform: ["translateY(-100%)", "translateY(0)"],
					},
					{
						duration: 300,
						delay: 300,
						easing: easeSquish2,
						fill: "forwards",
					}
				)
				virRef.animate(
					{
						height: ["112px"],
					},
					{
						duration: 300,
						delay: 300,
						easing: ease1,
						fill: "forwards",
					}
				)
			}
		} else {
			const anim = navRef.animate(
				{
					opacity: ["1", "0"],
					transform: ["translateY(-100%)"],
				},
				{
					easing: easeElastic5,
					duration: 300,
					delay: 300,
					fill: "forwards",
				}
			)
			anim.onfinish = () => {
				navRef.classList.add("hidden")
			}
			virRef.animate(
				{
					height: ["56px"],
				},
				{
					duration: 300,
					easing: easeElastic4,
					fill: "forwards",
				}
			)
		}
	})
	return (
		<>
			<header
				ref={(el) => {
					navRef = el
				}}
				class="flex bg-sky-400/0 transition-colors gap-x-4 items-center w-[96%] md:max-w-5xl fixed top-4 z-50 rounded-xl"
			>
				<a class="pl-4 " href="/">
					<Logo
						circle="dark:stroke-white stroke-cyan-900"
						body={{
							dark: "fill-blue-50 stroke-blue-600",
							light: "fill-white stroke-blue-500",
						}}
					/>
				</a>
				<div class="w-full"></div>
				<nav
					style={{
						"box-shadow": `${
							theme.value === "light"
								? "0px 4px 6px 0px #33415533"
								: "0px 4px 12px 4px #1a91ff05"
						},inset 0px 1px 6px 0px ${shadowColor()},inset 0px 1px 36px 6px ${
							theme.value === "light" ? "#dff1" : "#fff1"
						},inset 17px -2px 72px 12px ${shadowColor()}`,
					}}
					class="flex items-center bg-sky-400/0 transition-colors backdrop-blur-md backdrop-saturate-150 pl-2 w-max rounded-full"
				>
					<div class="flex items-center pr-2.5 gap-x-3">
						<ThemeButton size={28}>
							<NavbarTooltip label="Twitter" />
						</ThemeButton>
						<SpeakerButton size={29}>
							<NavbarTooltip label="Twitter" />
						</SpeakerButton>
					</div>
					<div class="w-1 h-6 mr-1 rounded-full bg-slate-500 dark:bg-white"></div>
					<GithubLink />
					{/* <div class="-z-10 blur-xl absolute w-36 h-10 bg-contain bg-no-repeat bg-center bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjEwLjUiIGhlaWdodD0iMTMwLjUiIHZpZXdCb3g9IjAgMCAxMjIxIDI2MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2IDkxLjVDMTYgOTEuNSAxODMuNDQ5IDI0My41MzUgMzE0IDI0M0M0NDMuNTA4IDI0Mi40NjkgNDc5LjY1NSA5OC4wMDkyIDYwOSA5MS41Qzc1Mi41NzggODQuMjc0NiA4MDIuNTYgMjY1LjgwMyA5NDQuNSAyNDNDMTA3NC4xIDIyMi4xOCAxMjA0LjUgMzAgMTIwNC41IDMwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjMyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPHBhdGggZD0iTTE2IDc4LjVDMTYgNzguNSAxODMuNDQ5IDIzMC41MzUgMzE0IDIzMEM0NDMuNTA4IDIyOS40NjkgNDc5LjY1NSA4NS4wMDkyIDYwOSA3OC41Qzc1Mi41NzggNzEuMjc0NiA4MDIuNTYgMjUyLjgwMyA5NDQuNSAyMzBDMTA3NC4xIDIwOS4xOCAxMjA0LjUgMTcgMTIwNC41IDE3IiBzdHJva2U9InVybCgjcGFpbnQwX2xpbmVhcl8wXzEpIiBzdHJva2Utb3BhY2l0eT0iMC41NiIgc3Ryb2tlLXdpZHRoPSIzMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+CjxkZWZzPgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXJfMF8xIiB4MT0iLTEuNSIgeTE9IjQwLjUiIHgyPSIxMjA1IiB5Mj0iMTYuNTAwMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBvZmZzZXQ9IjAuMDAwMjQ5MTg5IiBzdG9wLWNvbG9yPSIjMDBEMUZGIi8+CjxzdG9wIG9mZnNldD0iMC4zNjQ1ODMiIHN0b3AtY29sb3I9IiMwNTAwRkYiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzAwMEZGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPC9zdmc+Cg==')]"></div> */}
				</nav>
			</header>
			<div class="h-28" ref={(el) => (virRef = el)}></div>
		</>
	)
}
