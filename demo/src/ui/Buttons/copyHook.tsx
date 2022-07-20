import { createSignal, createRoot } from "solid-js"

function createClipboard({ timeout = 2000 }) {
	const [error, setError] = createSignal<Error>()
	const [isCopied, setCopied] = createSignal(false)
	const [getCopyTimeout, setCopyTimeout] = createSignal<number>()

	const handleCopyResult = (value: boolean) => {
		const copytimeout = getCopyTimeout()
		if (copytimeout) clearTimeout(copytimeout)
		setCopyTimeout(setTimeout(() => setCopied(false), timeout))
		setCopied(value)
	}
	const copy = (valueToCopy: any) => {
		if ("clipboard" in navigator) {
			navigator.clipboard
				.writeText(valueToCopy)
				.then(() => handleCopyResult(true))
				.catch((err) => setError(err))
		} else {
			setError(
				new Error("useClipboard: navigator.clipboard is not supported")
			)
		}
	}
	const reset = () => {
		setCopied(false)
		setError()
		const copytimeout = getCopyTimeout()
		if (copytimeout) clearTimeout(copytimeout)
	}
	return { copy, reset, error, isCopied }
}

export default createRoot(() => createClipboard)
