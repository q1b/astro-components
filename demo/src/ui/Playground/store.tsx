import { createStore } from "solid-js/store"

export const apart = ["undefined", "true", "closely", "loosely"] as const

export const [controlsStore, setControlsStore] = createStore<{
	apart: typeof apart[number]
	class?: string
	col?: boolean
	reverse?: boolean
	center?: boolean
	top?: boolean
	left?: boolean
	bottom?: boolean
	right?: boolean
	stretchX?: boolean
	stretchY?: boolean
}>({
	apart: "undefined",
	reverse: false,
	col: false,
	center: false,
	top: true,
	left: true,
	bottom: false,
	right: false,
	stretchX: false,
	stretchY: false,
	class: "",
})

export const setApartSelected = (v: typeof apart[number]) =>
	setControlsStore("apart", v)

export const toggleReverse = () => setControlsStore("reverse", (v) => !v)
export const toggleCol = () => setControlsStore("col", (v) => !v)
export const toggleCenter = () => setControlsStore("center", (v) => !v)
export const toggleTop = () => setControlsStore("top", (v) => !v)
export const toggleLeft = () => setControlsStore("left", (v) => !v)
export const toggleBottom = () => setControlsStore("bottom", (v) => !v)
export const toggleRight = () => setControlsStore("right", (v) => !v)
export const toggleStretchX = () => setControlsStore("stretchX", (v) => !v)
export const toggleStretchY = () => setControlsStore("stretchY", (v) => !v)
