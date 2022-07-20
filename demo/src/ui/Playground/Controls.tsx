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
import { createSignal, For, onMount } from "solid-js"

const setGroup = [
	["col", toggleCol],
	["top", toggleTop],
	["left", toggleLeft],
	["right", toggleRight],
	["bottom", toggleBottom],
	["center", toggleCenter],
	["stretchX", toggleStretchX],
	["stretchY", toggleStretchY],
	["reverse", toggleReverse],
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
				<For each={setGroup}>
					{([label, set]) => (
						<SwitchBlock
							name={label}
							onChange={() => set()}
							checked={controlsStore[label]}
						/>
					)}
				</For>
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
