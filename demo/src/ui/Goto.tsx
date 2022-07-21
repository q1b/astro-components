import { createEffect, FlowProps, onMount } from "solid-js"
import { useScrollIntoView } from "../hooks/use-scroll-into-view/use-scroll-into-view"

export const Goto = (props: FlowProps<{ href: string }>) => {
	const { scrollIntoView, setTargetRef } = useScrollIntoView<HTMLDivElement>({
		offset: 112,
		axis: "y",
		duration: 500,
	})
	onMount(() => {
		setTargetRef(document.querySelector("#playground")! as HTMLDivElement)
	})
	return (
		<button
			title={`Goto ${props?.href.slice(1)}`}
			onClick={() => {
				console.log("Triggering")
				scrollIntoView({
					alignment: "center",
				})
			}}
		>
			{props.children}
		</button>
	)
}
