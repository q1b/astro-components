import { TabList } from "./TabList"
import { SwitchBlock } from "./Switch"

import {
	controlsStore,
	setApartSelected,
	toggleBottom,
	toggleCenter,
	toggleCol,
	toggleLeft,
	toggleReverse,
	toggleRight,
	toggleStretchX,
	toggleStretchY,
	toggleTop,
	apart,
} from "./store"
import { createMemo, createSignal, For, onMount } from "solid-js"

// center and [top] are true then bottom left and right are diabled

// top is true then, bottom is disabled vice-versa

const setGroup = [
	["col", [() => false, toggleCol]],
	[
		"top",
		[
			createMemo(
				() =>
					controlsStore.bottom ||
					(controlsStore.center &&
						(controlsStore.left || controlsStore.right))
			),
			toggleTop,
		],
	],
	[
		"left",
		[
			createMemo(
				() =>
					controlsStore.right ||
					(controlsStore.center &&
						(controlsStore.top || controlsStore.bottom))
			),
			toggleLeft,
		],
	],
	[
		"right",
		[
			createMemo(
				() =>
					controlsStore.left ||
					(controlsStore.center &&
						(controlsStore.top || controlsStore.bottom))
			),
			toggleRight,
		],
	],
	[
		"bottom",
		[
			createMemo(
				() =>
					controlsStore.top ||
					(controlsStore.center &&
						(controlsStore.left || controlsStore.right))
			),
			toggleBottom,
		],
	],
	[
		"center",
		[
			createMemo(
				() =>
					(controlsStore.top &&
						(controlsStore.left || controlsStore.right)) ||
					(controlsStore.bottom &&
						(controlsStore.left || controlsStore.right))
			),
			toggleCenter,
		],
	],
	["stretchX", [() => false, toggleStretchX]],
	["stretchY", [() => false, toggleStretchY]],
	["reverse", [() => false, toggleReverse]],
]

export const Controls = () => {
	const [isMounted, setIsMounted] = createSignal(false)
	onMount(() => {
		setIsMounted(true)
	})
	return (
		<div class="p-4 bg-slate-400/20 dark:bg-slate-600/20 shadow-2xl-inner shadow-slate-500/10 rounded-lg">
			<div class="flex flex-col gap-y-3 max-w-[224px] items-start justify-center">
				<div class="flex flex-col gap-y-2">
					<h3 class="text-slate-600 dark:text-slate-200 first-letter:uppercase text-sm">
						Apart: {controlsStore.apart}
					</h3>
					{isMounted() ? (
						<TabList
							setActive={setApartSelected}
							initialActive="undefined"
							labels={apart}
						></TabList>
					) : (
						{}
					)}
				</div>
				<div class="grid grid-cols-2 sm:grid-cols-1 w-full gap-4 mt-2">
					<For each={setGroup}>
						{([label, [disabled, set]]) => (
							<SwitchBlock
								name={label}
								disabled={disabled()}
								onChange={() => set()}
								checked={controlsStore[label]}
							/>
						)}
					</For>
				</div>
				{/* <div class="flex w-full items-center">
					<input
						type="text"
						placeholder="children"
						value={controlsStore.children}
						onInput={(e) => {
							setControlsStore("children", e.currentTarget.value)
						}}
						class="w-full focus:outline-none text-white px-2 py-0.5 bg-slate-900 rounded-md"
					/>
				</div> */}
			</div>
		</div>
	)
}
