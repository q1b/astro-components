import { createEffect, createSignal, onCleanup, onMount } from "solid-js"
import { createStore } from "solid-js/store"

type MediaQueryCallback = (event: { matches: boolean; media: string }) => void

/**
 * Older versions of Safari (shipped withCatalina and before) do not support addEventListener on matchMedia
 * https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent
 * */
function attachMediaListener(
	query: MediaQueryList,
	callback: MediaQueryCallback
) {
	try {
		query.addEventListener("change", callback)
		return () => query.removeEventListener("change", callback)
	} catch (e) {
		if (typeof query.addListener === "function") {
			query.addListener(callback)
			return () => query.removeListener(callback)
		}
	}
}

function getInitialValue(query: string, initialValue?: boolean) {
	if (initialValue !== undefined) {
		return initialValue
	}

	if (typeof window !== "undefined" && "matchMedia" in window) {
		return window.matchMedia(query).matches
	}

	return false
}

export function useMediaQuery(query: string, initialValue?: boolean) {
	const [matches, setMatches] = createSignal(
		getInitialValue(query, initialValue)
	)
	const [queryRef, setQueryRef] = createStore<MediaQueryList>()

	onMount(() => {
		if ("matchMedia" in window) {
			setQueryRef(window.matchMedia(query))
			setMatches(queryRef.matches)
			onCleanup(
				attachMediaListener(queryRef, (event) =>
					setMatches(event.matches)
				)
			)
		}
	})

	return matches()
}
