import {
	XIcon,
	MenuIcon,
	ExpandTopIcon,
	ContractTopIcon,
} from "../assets/icons"
import {
	Accessor,
	ComponentProps,
	createEffect,
	createSignal,
	For,
	on,
	onCleanup,
	onMount,
	Show,
} from "solid-js"
import { setTheme, theme } from "./theme"
import { blue_scrollbar_class } from "./scrollbar_"

const softBtnClass =
	"group bg-white dark:bg-slate-900 text-cyan-600 dark:text-white tab-highlight-none inline-flex items-center justify-center rounded-sm"

const UnfoldMore = (props: ComponentProps<"button">) => {
	return (
		<button class={softBtnClass} {...props}>
			<ExpandTopIcon basic class="w-6 h-6" />
		</button>
	)
}
const UnfoldLess = (props: ComponentProps<"button">) => {
	return (
		<button class={softBtnClass} {...props}>
			<ContractTopIcon basic class="w-6 h-6" />
		</button>
	)
}

const Dismiss = (props: ComponentProps<"button">) => {
	return (
		<button class={softBtnClass} {...props}>
			<XIcon basic class="w-6 h-6" />
		</button>
	)
}
const Restore = (props: ComponentProps<"button">) => {
	return (
		<button class={softBtnClass} {...props}>
			<MenuIcon basic class="w-6 h-6" />
		</button>
	)
}

enum State {
	Normal,
	Expanded,
	Collapsed,
}

interface HEntry {
	depth: number
	slug: string
	text: string
	children?: HEntry[]
}

function getNestedHeadings(headings: Omit<HEntry, "children">[]): HEntry[] {
	const sentinel: HEntry = { text: "", slug: "", depth: 0 }
	const traversalStack: HEntry[] = [sentinel]
	for (const h of headings) {
		const hDepth = h.depth
		for (
			let last = traversalStack[traversalStack.length - 1];
			hDepth <= last.depth;
			traversalStack.pop(),
				last = traversalStack[traversalStack.length - 1]
		) {}

		const last = traversalStack[traversalStack.length - 1]
		last.children = last?.children || []
		last?.children.push({
			text: h.text || "",
			slug: h.slug,
			depth: hDepth,
		})
		traversalStack.push(last?.children[last?.children.length - 1])
	}

	return sentinel?.children || []
}

export function TOC(props: { headers: Omit<HEntry, "children">[] }) {
	const { inViewId } = useInViewId(props.headers)

	const headings = getNestedHeadings(props.headers)

	createEffect(
		on(inViewId, () => {
			if (inViewId()) {
				if (headings.at(0).slug === inViewId()) {
					setTheme("navbar", true)
				} else {
					setTheme("navbar", false)
				}
			}
		})
	)

	const [expansion, setExpansion] = createSignal<State>(State.Normal)

	let scrollRef: HTMLElement

	function scroll(to: number) {
		scrollRef?.scroll({
			top: to - 75,
			behavior: "smooth",
		})
	}

	const dismissIfExpanded = () => {
		if (expansion() === State.Expanded) expand()
	}

	const expand = () => setExpansion(State.Expanded)
	const normal = () => setExpansion(State.Normal)
	const collapse = () => setExpansion(State.Collapsed)

	return (
		<nav
			aria-label="Table of Contents"
			class="sticky top-0 right-1 flex flex-col items-end"
		>
			<div
				ref={(el: HTMLElement) => (scrollRef = el)}
				class={`overflow-auto w-full max-w-xs bg-slate-100/40 dark:bg-slate-900/40 backdrop-blur-md backdrop-saturate-150 rounded-md ${blue_scrollbar_class}`}
				classList={{
					"h-[calc(100vh-112px)] min-w-[180px] bottom-1 px-2":
						expansion() === State.Expanded,
					"h-[unset] w-fit mr-2 ml-auto":
						expansion() === State.Collapsed,
					"h-36 max-h-40 min-w-[180px] px-2":
						expansion() === State.Normal,
				}}
			>
				<Show
					when={expansion() != State.Collapsed}
					fallback={<Restore onClick={normal} />}
				>
					<>
						<div
							role="heading"
							class="absolute -top-0.5 p-2 dark:text-white"
							aria-level={6}
						>
							In this post:
						</div>
						<div class="flex pt-1 mb-2 flex-col items-end sticky top-0">
							<div class="flex flex-row gap-x-2">
								<Show
									when={expansion() == State.Normal}
									fallback={<UnfoldLess onClick={normal} />}
								>
									<UnfoldMore onClick={expand} />
								</Show>
								<Dismiss onClick={collapse} />
							</div>
						</div>
					</>
				</Show>
				<Show when={!(expansion() == State.Collapsed)}>
					<ul>
						<For each={headings}>
							{(h: HEntry) => (
								<li key={h.slug}>
									<H
										entry={h}
										inView={inViewId}
										scroll={scroll}
										onClick={dismissIfExpanded}
									/>
								</li>
							)}
						</For>
					</ul>
				</Show>
			</div>
		</nav>
	)
}

function H(props: {
	entry: HEntry
	inView: Accessor<string | undefined>
	scroll: (to: number) => void
	onClick: () => void
}) {
	let aRef: HTMLAnchorElement

	createEffect(
		on(props.inView, () => {
			if (props.inView() === props.entry.slug && aRef) {
				props.scroll(aRef.offsetTop)
			}
		})
	)
	return (
		<>
			<a
				href={`#${props.entry.slug}`}
				classList={{
					"bg-black/10 text-slate-800 dark:text-white":
						props.inView() === props.entry.slug,
					"text-slate-600 dark:text-white/80":
						props.inView() !== props.entry.slug,
				}}
				class="block select-none truncate px-2 py-1 rounded-lg"
				ref={aRef}
				onClick={() => {
					props.onClick()
				}}
				style={{
					"padding-left": `${props.entry.depth * 0.6}rem`,
					"max-width": `${320 - props.entry.depth * 0.6}rem`,
				}}
			>
				{props.entry.text}
			</a>
			<Show when={props.entry?.children}>
				<ul>
					<For each={props.entry.children}>
						{(h: HEntry) => (
							<li>
								<H
									entry={h}
									inView={props.inView}
									scroll={props.scroll}
									onClick={props.onClick}
								/>
							</li>
						)}
					</For>
				</ul>
			</Show>
		</>
	)
}

function useInViewId(flattenHeadings: Omit<HEntry, "children">[]) {
	const [inViewId, setInViewId] = createSignal<string | undefined>()
	onMount(() => {
		const inViewSet = new Map<string, HTMLElement>()

		const callback: IntersectionObserverCallback = (changes) => {
			for (const change of changes) {
				change.isIntersecting
					? inViewSet.set(
							change.target.id,
							change.target as HTMLElement
					  )
					: inViewSet.delete(change.target.id)
			}

			const inView = Array.from(inViewSet.entries())
				.map(([id, el]) => [id, el.offsetTop] as const)
				.filter(([id, _]) => !!id)

			if (inView.length > 0) {
				setInViewId(
					inView.reduce((acc, next) =>
						next[1] < acc[1] ? next : acc
					)[0]
				)
			}
		}

		const observer = new IntersectionObserver(callback, {
			rootMargin: "0px 0px -20% 0px",
		})

		for (const h of flattenHeadings) {
			h?.slug && observer.observe(document.getElementById(h.slug))
		}
		onCleanup(() => observer.disconnect())
	})

	return { inViewId }
}
