// import rovingIndex from "roving-ux"
import {
	children,
	ComponentProps,
	createEffect,
	createSignal,
	For,
	on,
	onMount,
	ParentProps,
	splitProps,
} from "solid-js"
import { Refs } from "@solid-primitives/refs"

const TabIndicator = (props: ComponentProps<"div">) => {
	const [, others] = splitProps(props, ["children", "ref"])
	return (
		<div ref={props.ref} {...others}>
			{children(() => props?.children)}
		</div>
	)
}

const getDimensions = (
	element: HTMLElement
): {
	bottom: number
	height: number
	left: number
	right: number
	top: number
	width: number
	x: number
	y: number
} => {
	const rect = element.getBoundingClientRect()
	const temp = {}
	for (let key in rect) {
		// @ts-ignore
		if (typeof rect[key] !== "function") {
			// @ts-ignore
			temp[key] = rect[key]
		}
	}
	// @ts-ignore
	return temp
}

export const TabList = (
	props: ParentProps<{
		labels: readonly string[]
		initialActive: string
		setActive: (v: any) => void
	}>
) => {
	let containerRef: HTMLElement
	let indicator: HTMLElement
	const [refs, setRefs] = createSignal<HTMLElement[]>()
	const [activeRef, setActiveRef] = createSignal<HTMLElement>()
	// const isActiveRef = createSelector(activeRef)
	createEffect(
		on(activeRef, (ref, prev) => {
			if (refs()?.at(0)) {
				const firstDimensions = getDimensions(refs()[0])
				const refDimensions = getDimensions(ref!)
				if (prev) {
					const indicatorDimensions = getDimensions(indicator)
					const prevDimensions = getDimensions(prev)
					let deltaX =
						indicatorDimensions.x -
						firstDimensions.x +
						(refDimensions.x - prevDimensions.x)
					let deltaY =
						indicatorDimensions.y -
						firstDimensions.y +
						(refDimensions.y - prevDimensions.y)
					// if (refDimensions.x - prevDimensions.x < 0) {
					// 	deltaX += 2
					// }
					indicator.animate(
						{
							transform: `translateX(${deltaX}px) translateY(${deltaY}px)`,
							width: `${refDimensions.width}px`,
							height: `${refDimensions.height}px`,
						},
						{
							duration: 175,
							easing: "cubic-bezier(.25, 0, .1, 1)",
							fill: "both",
						}
					)
				} else {
					indicator.style.width = `${refDimensions.width}px`
					indicator.style.height = `${refDimensions.height}px`
					const indicatorDimensions = getDimensions(indicator)
					let deltaX =
						indicatorDimensions.x -
						firstDimensions.x +
						(refDimensions.x - firstDimensions.x)
					let deltaY =
						indicatorDimensions.y -
						firstDimensions.y +
						(refDimensions.y - firstDimensions.y)
					// if (refDimensions.x - prevDimensions.x < 0) {
					// 	deltaX += 2
					// }
					indicator.animate(
						{
							transform: `translateX(${deltaX}px) translateY(${deltaY}px)`,
							width: `${refDimensions.width}px`,
							height: `${refDimensions.height}px`,
						},
						{
							duration: 300,
							easing: "ease-in-out",
							fill: "both",
						}
					)
				}
			}
		})
	)
	onMount(() => {
		// console.log(refs())
	})
	return (
		<div
			ref={(el) => (containerRef = el)}
			class="flex relative gap-2 flex-wrap"
		>
			<TabIndicator
				class="rounded-md bg-white/10 backdrop-contrast-150 dark:bg-slate-900/10 text-slate-600 dark:text-white dark:-backdrop-hue-rotate-15 dark:backdrop-brightness-200 absolute"
				ref={(el) => (indicator = el)}
			/>
			<Refs refs={setRefs}>
				<For each={props.labels}>
					{(label) => {
						let ref: HTMLButtonElement
						return (
							<button
								ref={(el) => {
									ref = el
									if (label === props.initialActive) {
										setActiveRef(ref)
									}
								}}
								onClick={() => {
									setActiveRef(ref)
									props.setActive(ref?.textContent!)
									console.log(ref?.textContent)
								}}
								class="px-2 bg-white/50 dark:bg-slate-600/10 tab-highlight-none hover:bg-slate-500/20 dark:hover:bg-slate-600/20 text-slate-900 dark:text-slate-400 rounded-md shadow-md shadow-white/50 dark:shadow-slate-900/50 transition-colors"
							>
								<span class="text-sm leading-6 select-none antialiased">
									{label}
								</span>
							</button>
						)
					}}
				</For>
			</Refs>
		</div>
	)
}
