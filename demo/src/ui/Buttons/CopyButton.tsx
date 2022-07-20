import { Accessor, children, JSX, mergeProps, Show } from "solid-js"
import { ClipboardCodeIcon, ClipboardCheckIcon } from "../../assets/icons"
import useClipBoard from "./copyHook"

export interface CopyButtonProps {
	/** Function called with current status */
	children(payload: { copied: Accessor<boolean>; copy(): void }): JSX.Element

	/** Value that should be copied to the clipboard */
	value: string

	/** Copied status timeout in ms */
	timeout?: number
}

const defaultProps: Partial<CopyButtonProps> = {
	timeout: 1000,
}

// function CopyButton(props: CopyButtonProps) {
// 	const merged = mergeProps(defaultProps, props)
// 	const clipboard = useClipBoard({ timeout: merged.timeout })
// 	const copy = () => clipboard.copy(props?.value)
// 	return (
// 		<>
// 			{children(() =>
// 				typeof props?.children === "function" ? (
// 					props.children({ copy, copied: clipboard.isCopied })
// 				) : (
// 					<></>
// 				)
// 			)}
// 		</>
// 	)
// }

export const SVGCopyButton = (props: Omit<CopyButtonProps, "children">) => {
	const merged = mergeProps(defaultProps, props)
	const clipboard = useClipBoard({ timeout: merged.timeout })
	const copy = () => clipboard.copy(props?.value)
	return (
		<button onClick={copy} class="group dark:text-white text-blue-700">
			<Show
				when={clipboard.isCopied()}
				fallback={
					<ClipboardCodeIcon
						basic
						class="w-5 h-5 will-change-transform"
					/>
				}
			>
				<ClipboardCheckIcon
					basic
					class="w-5 h-5 will-change-transform"
				/>
			</Show>
		</button>
	)
}
