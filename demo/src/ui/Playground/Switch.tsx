import { createUniqueId } from "solid-js"

export const Switch = (props: { checked?: boolean; trigger?: () => void }) => {
	const uid = `toggle-switch-${createUniqueId()}`
	return (
		<button
			onClick={() => {
				typeof props?.trigger === "function" ? props.trigger() : null
			}}
			// 74 - 36 = 38
			// 38 - 4 = 34
			class="relative inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
			id={uid}
			role="switch"
			type="button"
			tabindex="0"
			classList={{
				"bg-teal-500 dark:bg-teal-400": props?.checked,
				"bg-slate-500 dark:bg-slate-400": !props?.checked,
			}}
			aria-checked={props?.checked ? "true" : "false"}
		>
			{/* <span class="sr-only">Use setting</span> */}
			<span
				aria-hidden="true"
				classList={{
					"translate-x-4": props?.checked,
					"translate-x-0": !props?.checked,
				}}
				class="translate-x-0 pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
			></span>
		</button>
	)
}

export const SwitchBlock = (props: {
	name?: string
	checked?: boolean
	onChange?: () => void
}) => {
	return (
		<div class="flex place-content-between w-full group items-center gap-x-2">
			<span
				classList={{
					"text-slate-700 font-bold dark:text-white": props?.checked,
					"text-slate-400 font-semibold dark:text-slate-200":
						!props?.checked,
				}}
				class="first-letter:uppercase dark:font-normal text-sm"
			>
				{props?.name}
			</span>
			<Switch trigger={props?.onChange} checked={props.checked} />
		</div>
	)
}
/*
import { Switch as AllySwitch } from "solid-a11y"

export const Toggle = (props: {
	name?: string
	checked?: boolean
	onChange?: (checked: boolean) => void
}) => {
	return (
		<div class="flex place-content-between w-full group items-center gap-x-2">
			<span
				classList={{
					"text-white": props?.checked,
					"text-slate-200": !props?.checked,
				}}
				class="first-letter:uppercase text-sm"
			>
				{props?.name}
			</span>
			<AllySwitch
				checked={props.checked}
				onChange={props?.onChange}
				class="inline-block tab-highlight-none h-[16px] w-[32px] rounded-full p-[1px] transition-colors duration-150 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
				classList={{
					"bg-teal-400": props.checked,
					"bg-slate-900": !props.checked,
				}}
			>
				<span class="sr-only">Button Disabled</span>
				<div
					aria-hidden="true"
					class="pointer-events-none h-[14.2px] w-[14.2px] transform rounded-full bg-white drop-shadow-sm transition-transform duration-150 ease-in-out-40"
					classList={{
						"translate-x-[16px]": props.checked,
						"translate-x-0": !props.checked,
					}}
				/>
			</AllySwitch>
		</div>
	)
}
*/
