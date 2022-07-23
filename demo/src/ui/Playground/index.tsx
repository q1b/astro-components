import { Position } from "./Position"
import { Controls } from "./Controls"
import { controlsStore } from "./store"

export const Playground = () => {
	return (
		<main
			id="playground"
			class="flex flex-col sm:flex-row bg-slate-800/10 dark:bg-white/5 p-1 rounded-xl"
		>
			<div class="sm:w-96 h-32 sm:h-auto flex items-center justify-center">
				<Position
					apart={(() => {
						if (controlsStore.apart === "undefined") return false
						if (controlsStore.apart === "true") return true
						return controlsStore.apart
					})()}
					reverse={controlsStore.reverse}
					col={controlsStore.col}
					center={controlsStore.center}
					top={controlsStore.top}
					left={controlsStore.left}
					bottom={controlsStore.bottom}
					right={controlsStore.right}
					stretch={controlsStore.stretch}
					stretchX={controlsStore.stretchX}
					stretchY={controlsStore.stretchY}
					class="bg-white/80 dark:bg-slate-1000/50 w-full h-full mr-1 rounded-md"
				>
					<div class="p-4 m-0.5 rounded-lg bg-gradient-to-tr from-yellow-400 to-orange-600 dark:from-lime-300 dark:to-green-500 shadow-md shadow-orange-600/40 dark:shadow-lime-300/20"></div>
					<div class="p-4 m-0.5 rounded-lg bg-gradient-to-tr from-pink-400 to-rose-600 dark:from-emerald-300 dark:to-cyan-500 shadow-md shadow-rose-600/40 dark:shadow-emerald-300/20"></div>
					<div class="p-4 m-0.5 rounded-lg bg-gradient-to-tr from-indigo-400 to-purple-600 dark:from-cyan-600 dark:to-sky-400 shadow-md shadow-purple-600/40 dark:shadow-cyan-600/20"></div>
				</Position>
			</div>
			<Controls />
		</main>
	)
}
