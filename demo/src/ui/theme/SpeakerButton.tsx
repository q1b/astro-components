import { easeOut5, easeSquish3 } from "../utils/easing"
import { createEffect, createSignal, on } from "solid-js"
import { setTheme } from "./themeStore"
// Sound
import Sound from "../../assets/wave.wav"
import { createSound } from "./makeNoice"

export const SpeakerButton = (props: { size?: number }) => {
	const [play, { sound, stop }] = createSound(Sound, {
		onload: () => console.log("LOADED"),
		onend: () => console.log("ENDED"),
		onvolume: () => console.log("volume change"),
		initSoundEnabled: true,
		volume: 1,
		playbackRate: 1,
		loop: true,
	})

	const [muted, setMuted] = createSignal()
	const toggle = () => setMuted((v) => !v)

	let speakerRef: HTMLElement
	let path1Ref: HTMLElement
	let path2Ref: HTMLElement
	const releaseAnimation = (anim: Animation) => {
		anim.onfinish = () => {
			anim.commitStyles()
			anim.cancel()
		}
	}
	createEffect(
		on(muted, (v, p) => {
			if (!v) {
				const sakeAnim = speakerRef.animate(
					{
						transform: [
							"translateX(0.2px) rotate(0deg)",
							"rotate(20deg)",
							"rotate(-12deg)",
							"rotate(-8deg)",
							"rotate(11deg)",
							"rotate(17deg)",
							"translateX(0px) rotate(0deg)",
						],
					},
					{
						duration: 335,
						fill: "forwards",
						easing: easeSquish3,
					}
				)
				releaseAnimation(sakeAnim)
				const fadeIn1 = path1Ref.animate(
					{
						opacity: [1],
						transform: [
							"scaleY(0.4) translateX(-4px)",
							"scaleY(0.8) translateX(-0.5px)",
							"scaleY(1) translateX(0px)",
						],
						transformOrigin: ["center"],
					},
					{
						delay: 150,
						duration: 335,
						fill: "forwards",
						easing: easeSquish3,
					}
				)
				releaseAnimation(fadeIn1)
				const fadeIn2 = path2Ref.animate(
					{
						opacity: [1],
						transform: [
							"scaleY(0.4) translateX(-2px)",
							"scaleY(0.8) translateX(-0.5px)",
							"scaleY(1) translateX(0px)",
						],
						transformOrigin: ["center"],
					},
					{
						duration: 335,
						fill: "forwards",
						easing: easeSquish3,
					}
				)
				releaseAnimation(fadeIn2)
			} else {
				const sakeAnim = speakerRef.animate(
					{
						transform: [
							"translateY(0.5px)",
							"translate(0) rotate(-4deg)",
						],
					},
					{
						duration: 335,
						delay: 156,
						fill: "forwards",
						easing: easeSquish3,
					}
				)
				releaseAnimation(sakeAnim)
				const fadeOut1 = path1Ref.animate(
					{
						opacity: [0],
						transform: [
							"scaleY(1) translateX(0px)",
							"scaleY(0.8) translateX(-0.5px)",
							"scaleY(0.4) translateX(-4px)",
						],
						transformOrigin: ["center"],
					},
					{
						duration: 254,
						fill: "forwards",
						easing: easeOut5,
					}
				)
				releaseAnimation(fadeOut1)
				const fadeOut2 = path2Ref.animate(
					{
						opacity: [0],
						transform: [
							"scaleY(1) translateX(0px)",
							"scaleY(0.8) translateX(-0.5px)",
							"scaleY(0.4) translateX(-2px)",
						],
						transformOrigin: ["center"],
					},
					{
						duration: 254,
						fill: "forwards",
						delay: 100,
						easing: easeOut5,
					}
				)
				releaseAnimation(fadeOut2)
			}
		})
	)
	return (
		<button
			title="toggle sound"
			class="group [outline-offset:5px;] rounded-full text-slate-600 focus-visible:text-slate-500 hover:text-slate-500 dark:text-slate-400 hover:dark:text-slate-300 focus-visible:dark:text-slate-300"
			onClick={() => {
				toggle()
				if (muted()) {
					sound().fade(0.1, 0, 600)
				} else {
					sound().fade(1, 0.6, 600)
				}
				play()
				setTimeout(() => {
					stop()
				}, 500)
				setTheme("sound", (v) => !v)
			}}
		>
			<svg
				width={props?.size ? props.size : "32"}
				height={props?.size ? props.size : "32"}
				viewBox="0 0 18 18"
				fill="none"
			>
				<path
					ref={speakerRef}
					d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
					stroke-linejoin="round"
					stroke-opacity={1}
					stroke-width={1.5}
					fill="currentColor"
					stroke="currentColor"
					class="origin-[30%_center]"
				></path>
				<path
					ref={path1Ref}
					stroke-linejoin="round"
					fill="none"
					stroke="currentColor"
					d="M14.3025 3.69751 C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001 C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025"
					class="origin-center"
				></path>
				<path
					ref={path2Ref}
					stroke-linejoin="round"
					fill="none"
					stroke="currentColor"
					d="M11.655 6.34501 C12.358 7.04824 12.753 8.00189 12.753 8.99626 C12.753 9.99063 12.358 10.9443 11.655 11.6475"
					class="origin-center"
				></path>
			</svg>
		</button>
	)
}
