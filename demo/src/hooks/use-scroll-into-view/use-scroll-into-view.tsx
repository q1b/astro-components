import { createSignal, mergeProps, onMount } from "solid-js"
import { useReducedMotion } from "../use-reduced-motion"
import { useWindowEvent } from "../use-window-event"
import { easeInOutQuad } from "./utils/ease-in-out-quad"
import { getRelativePosition } from "./utils/get-relative-position"
import { getScrollStart } from "./utils/get-scroll-start"
import { setScrollParam } from "./utils/set-scroll-param"

interface ScrollIntoViewAnimation {
	/** target element alignment relatively to parent based on current axis */
	alignment?: "start" | "end" | "center"
}

interface ScrollIntoViewParams {
	/** callback fired after scroll */
	onScrollFinish?: () => void

	/** duration of scroll in milliseconds */
	duration?: number

	/** axis of scroll */
	axis?: "x" | "y"

	/** custom mathematical easing function */
	easing?: (t: number) => number

	/** additional distance between nearest edge and element */
	offset?: number

	/** indicator if animation may be interrupted by user scrolling */
	cancelable?: boolean

	/** prevents content jumping in scrolling lists with multiple targets */
	isList?: boolean
}

export function useScrollIntoView<
	Target extends HTMLElement,
	Parent extends HTMLElement | null = null
>(props: ScrollIntoViewParams = {}) {
	const merged = mergeProps(
		{
			duration: 1250,
			axis: "y",
			easing: easeInOutQuad,
			offset: 0,
			cancelable: true,
			isList: false,
		} as const,
		props
	)
	const [frameID, setFrameID] = createSignal(0)
	const [startTime, setStartTime] = createSignal(0)
	const [shouldStop, setShouldStop] = createSignal(false)

	const [scrollableRef, setScrollableRef] = createSignal<Parent>(null)
	const [targetRef, setTargetRef] = createSignal<Target>(null)

	const reducedMotion = useReducedMotion()

	const cancel = (): void => {
		if (frameID()) {
			cancelAnimationFrame(frameID())
		}
	}

	const scrollIntoView = ({
		alignment = "start",
	}: ScrollIntoViewAnimation = {}) => {
		setShouldStop(false)

		if (frameID()) {
			cancel()
		}

		const start =
			getScrollStart({ parent: scrollableRef(), axis: merged.axis }) ?? 0

		const change =
			getRelativePosition({
				parent: scrollableRef(),
				target: targetRef(),
				axis: merged.axis,
				alignment,
				offset: merged.offset,
				isList: merged.isList,
			}) - (scrollableRef() ? 0 : start)
		function animateScroll() {
			if (startTime() === 0) {
				setStartTime(performance.now())
			}

			const now = performance.now()
			const elapsed = now - startTime()

			// easing timing progress
			const t =
				reducedMotion || merged.duration === 0
					? 1
					: elapsed / merged.duration

			const distance = start + change * merged.easing(t)

			// console.log("T", t, "D", distance)

			setScrollParam({
				parent: scrollableRef(),
				axis: merged.axis,
				distance,
			})

			if (!shouldStop() && t < 1) {
				setFrameID(requestAnimationFrame(animateScroll))
			} else {
				typeof merged.onScrollFinish === "function" &&
					merged.onScrollFinish()
				setStartTime(0)
				setFrameID(0)
				cancel()
			}
		}
		animateScroll()
	}

	const handleStop = () => {
		if (merged.cancelable) {
			setShouldStop(true)
		}
	}

	/**
	 * detection of one of these events stops scroll animation
	 * wheel - mouse wheel / touch pad
	 * touchmove - any touchable device
	 */

	useWindowEvent("wheel", handleStop, {
		passive: true,
	})

	useWindowEvent("touchmove", handleStop, {
		passive: true,
	})

	// cleanup requestAnimationFrame
	onMount(() => cancel)

	return {
		setScrollableRef,
		setTargetRef,
		scrollIntoView,
		cancel,
	}
}
