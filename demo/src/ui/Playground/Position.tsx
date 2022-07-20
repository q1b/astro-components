import { children, createEffect, createMemo, ParentProps } from "solid-js"
import { controlsStore } from "./store"

interface Props {
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
	apart?: boolean | "loosely" | "closely"
}

export const Position = (props: ParentProps<Props>) => {
	const top = createMemo(() => (props?.col ? props?.left : props?.top))
	const left = createMemo(() => (props?.col ? props?.top : props?.left))
	const right = createMemo(() => (props?.col ? props?.bottom : props?.right))
	const bottom = createMemo(() => (props?.col ? props?.right : props?.bottom))

	return (
		<div
			class={`flex ${props?.class}`}
			classList={{
				"flex-col": props?.col && !props?.reverse,
				"flex-col-reverse": props?.col && props?.reverse,
				"flex-row-reverse": !props?.col && props?.reverse,
				"items-start justify-start": top() && left(),
				"items-start justify-center":
					(top() && props?.center) ||
					(top() &&
						!props?.center &&
						!bottom() &&
						!props?.right &&
						!left()),
				"items-start justify-end": top() && props?.right,
				"items-center justify-start":
					(props?.center && left()) ||
					(left() &&
						!top() &&
						!bottom() &&
						!right() &&
						!props?.center),
				"items-center justify-end":
					(props?.center && right()) ||
					(right() &&
						!top() &&
						!bottom() &&
						!props?.center &&
						!left()),
				"items-end justify-start": bottom() && left(),
				"items-end justify-center":
					(bottom() && props?.center) ||
					(bottom() &&
						!top() &&
						!props?.center &&
						!right() &&
						!left()),
				"items-end justify-end": bottom() && right(),
				"items-center justify-center":
					props?.center && !top() && !bottom() && !right() && !left(),
				"items-stretch": props?.col && props?.stretchX,
				"[&>*]:grow":
					(!props?.col && props?.stretchX) ||
					(props?.col && props?.stretchY),
				// "justify-items-stretch": !props?.col && props?.stretchY,
				"justify-between":
					props?.apart &&
					props?.apart !== "closely" &&
					props?.apart !== "loosely",
				"justify-around": props?.apart === "loosely",
				"justify-evenly": props?.apart === "closely",
			}}
		>
			{children(() => props.children)()}
		</div>
	)
}
