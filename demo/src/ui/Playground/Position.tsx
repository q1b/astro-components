import { children, createEffect, createMemo, ParentProps } from "solid-js"
import { controlsStore, PositionProps } from "./store"

// interface Props {
// 	class?: string
// 	col?: boolean
// 	reverse?: boolean
// 	center?: boolean
// 	top?: boolean
// 	left?: boolean
// 	bottom?: boolean
// 	right?: boolean
// 	stretchX?: boolean
// 	stretchY?: boolean
// 	apart?: boolean | "loosely" | "closely"
// }

export const Position = (props: ParentProps<PositionProps>) => {
	// if (props.reverse) {
	// 	return props?.col ? props?.right : props?.bottom
	// } else {
	// 	return props?.col ? props?.left : props?.top
	// }

	// code for direction
	let dir = createMemo(() => {
		if (props?.col && props?.reverse) return "flex-col-reverse"
		else if (!props?.col && props?.reverse) return "flex-row-reverse"
		else if (props?.col) return "flex-col"
		return "flex-row"
	})

	const top = createMemo(() => (props?.col ? props?.left : props?.top))
	const left = createMemo(() => (props?.col ? props?.top : props?.left))
	const right = createMemo(() => (props?.col ? props?.bottom : props?.right))
	const bottom = createMemo(() => (props?.col ? props?.right : props?.bottom))

	const stretchX = createMemo(() =>
		props?.col ? props?.stretchX : props?.stretchY
	)
	const stretchY = createMemo(() =>
		props?.col ? props?.stretchY : props?.stretchX
	)

	let firstCls = "items-start"
	let secondCls = "justify-start"
	const positioning = () => {
		if (top() && left()) {
			firstCls = "items-start"
			secondCls = "justify-start"
		} else if (top() && right()) {
			firstCls = "items-start"
			secondCls = "justify-end"
		} else if (bottom() && left()) {
			firstCls = "items-end"
			secondCls = "justify-start"
		} else if (bottom() && right()) {
			firstCls = "items-end"
			secondCls = "justify-end"
		} else if (top()) {
			firstCls = "items-start"
			secondCls = "justify-center"
		} else if (left()) {
			firstCls = "items-center"
			secondCls = "justify-start"
		} else if (right()) {
			firstCls = "items-center"
			secondCls = "justify-end"
		} else if (bottom()) {
			firstCls = "items-end"
			secondCls = "justify-center"
		} else if (
			props?.center &&
			!top() &&
			!left() &&
			!right() &&
			!bottom()
		) {
			firstCls = "items-center"
			secondCls = "justify-center"
		} else {
			firstCls = "items-center"
			secondCls = "justify-center"
		}
		return `${firstCls} ${secondCls}`
	}

	const stretchState = createMemo(() => {
		positioning()
		const actionApart = () => {
			if (props.apart === "closely") secondCls = "justify-evenly"
			else if (props.apart === "loosely") secondCls = "justify-around"
			else secondCls = "justify-between"
			return `${firstCls} ${secondCls}`
		}
		const rtnStr = () => `${firstCls} ${secondCls}`
		if (props?.stretch || (stretchX() && stretchY())) {
			firstCls = "items-stretch"
			secondCls = "[&>*]:grow"
			return `${firstCls} ${secondCls}`
		} else if (stretchX()) {
			firstCls = "items-stretch"
			if (props?.apart) return actionApart()
			else return rtnStr()
		} else if (stretchY()) {
			secondCls = "[&>*]:grow"
			if (props?.apart) return actionApart()
			else return rtnStr()
		} else {
			if (props?.apart) return actionApart()
			else return positioning()
		}
	})

	return (
		<div class={`flex ${dir()} ${stretchState()} ${props?.class}`}>
			{children(() => props.children)()}
		</div>
	)
}
