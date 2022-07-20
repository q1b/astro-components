import { Position } from "./Position"
import { Controls } from "./Controls"
import { controlsStore } from "./store"

export const Playground = () => {
	return (
		<main class="flex bg-slate-800/10 dark:bg-white/5 p-1 rounded-xl">
			<div class="w-96 flex items-center justify-center">
				<Position
					apart={
						controlsStore.apart !== "undefined"
							? controlsStore.apart === "true"
								? true
								: controlsStore.apart
							: false
					}
					reverse={controlsStore.reverse}
					col={controlsStore.col}
					center={controlsStore.center}
					top={controlsStore.top}
					left={controlsStore.left}
					bottom={controlsStore.bottom}
					right={controlsStore.right}
					stretchX={controlsStore.stretchX}
					stretchY={controlsStore.stretchY}
					class="bg-white/80 dark:bg-slate-1000/50 w-full h-full mr-1 rounded-md"
				>
					<div class="p-4 rounded-lg bg-rose-500 dark:bg-rose-400"></div>
					<div class="p-4 rounded-lg bg-teal-500 dark:bg-teal-400"></div>
					<div class="p-4 rounded-lg bg-cyan-500 dark:bg-cyan-400"></div>
				</Position>
			</div>
			<Controls />
		</main>
	)
}
