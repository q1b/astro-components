import { ComponentProps, splitProps } from "solid-js"
type IconProps<P = {}> = P & {
	size?: number
	basic?: boolean
}
import FluentPerson48Filled from "~icons/fluent/person-48-filled"
import FluentPerson48Regular from "~icons/fluent/person-48-regular"

export const ProfileIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentPerson48Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentPerson48Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentPen48Filled from "~icons/fluent/pen-48-filled"
import FluentPen48Regular from "~icons/fluent/pen-48-regular"

export const PenIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentPen48Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentPen48Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentNotebook24Filled from "~icons/fluent/notebook-24-filled"
import FluentNotebook24Regular from "~icons/fluent/notebook-24-regular"

export const NotebookIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentNotebook24Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentNotebook24Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentBoardSplit16Filled from "~icons/fluent/board-split-16-filled"
import FluentBoardSplit16Regular from "~icons/fluent/board-split-16-regular"

export const BoardIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentBoardSplit16Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentBoardSplit16Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentLineHorizontal320Filled from "~icons/fluent/line-horizontal-3-20-filled"
import FluentLineHorizontal320Regular from "~icons/fluent/line-horizontal-3-20-regular"

export const MenuIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentLineHorizontal320Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentLineHorizontal320Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import HeroiconsSolidX from "~icons/heroicons-solid/x"
import HeroiconsOutlineX from "~icons/heroicons-outline/x"

export const XIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<HeroiconsOutlineX
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<HeroiconsSolidX
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentPanelTopExpand20Filled from "~icons/fluent/panel-top-expand-20-filled"
import FluentPanelTopExpand20Regular from "~icons/fluent/panel-top-expand-20-regular"

export const ExpandTopIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentPanelTopExpand20Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentPanelTopExpand20Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentPanelTopContract20Filled from "~icons/fluent/panel-top-contract-20-filled"
import FluentPanelTopContract20Regular from "~icons/fluent/panel-top-contract-20-regular"

export const ContractTopIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentPanelTopContract20Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentPanelTopContract20Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import HeroiconsSolidChatAlt2 from "~icons/heroicons-solid/chat-alt-2"
import HeroiconsOutlineChatAlt2 from "~icons/heroicons-outline/chat-alt-2"

export const ChatIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<HeroiconsOutlineChatAlt2
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<HeroiconsSolidChatAlt2
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import HeroiconsSolidChevronRight from "~icons/heroicons-solid/chevron-right"
import HeroiconsOutlineChevronRight from "~icons/heroicons-outline/chevron-right"

export const ChevronRightIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<HeroiconsOutlineChevronRight
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<HeroiconsSolidChevronRight
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentLinkSquare24Filled from "~icons/fluent/link-square-24-filled"
import FluentLinkSquare24Regular from "~icons/fluent/link-square-24-regular"

export const LinkIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentLinkSquare24Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentLinkSquare24Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentClipboardCode24Filled from "~icons/fluent/clipboard-code-24-filled"
import FluentClipboardCode24Regular from "~icons/fluent/clipboard-code-24-regular"

export const ClipboardCodeIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentClipboardCode24Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentClipboardCode24Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentCode24Filled from "~icons/fluent/code-24-filled"
import FluentCode24Regular from "~icons/fluent/code-24-regular"

export const CodeIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentCode24Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentCode24Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentClipboardCheckmark24Filled from "~icons/fluent/clipboard-checkmark-24-filled"
import FluentClipboardCheckmark24Regular from "~icons/fluent/clipboard-checkmark-24-regular"

export const ClipboardCheckIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentClipboardCheckmark24Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentClipboardCheckmark24Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import FluentShare48Filled from "~icons/fluent/share-48-filled"
import FluentShare48Regular from "~icons/fluent/share-48-regular"

export const ShareIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<span class="relative">
			<FluentShare48Regular
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
							: local.class
						: local?.basic
						? "w-5 h-5 group-focus-visible:opacity-0 group-hover:opacity-0 group-focus-visible:duration-300 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100 group-hover:duration-300"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
			<FluentShare48Filled
				shape-rendering="geometricPrecision"
				class={
					local?.class
						? local?.basic
							? local.class +
							  " absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
							: local.class
						: local?.basic
						? "w-5 h-5 absolute opacity-0 group-focus-visible:opacity-100 group-hover:opacity-100 -translate-y-full scale-100 group-active:scale-90 group-focus-visible:scale-95 group-hover:scale-95 transition-[opacity,transform] duration-100"
						: "w-5 h-5"
				}
				width={`${local.size || 24}px`}
				height={`${local.size || 24}px`}
				{...others}
			/>
		</span>
	)
}
import EosIconsLoading from "~icons/eos-icons/loading"
export const LoadingIcon = (props: IconProps<ComponentProps<"svg">>) => {
	const [local, others] = splitProps(props, [
		"size",
		"class",
		"shape-rendering",
		"basic",
	])
	if (typeof local.basic === "undefined") {
		local.basic = true
	}
	return (
		<EosIconsLoading
			shape-rendering="geometricPrecision"
			class={
				local?.class
					? local?.basic
						? local.class +
						  " group-active:scale-100 group-hover:scale-105 transition-transform"
						: local.class
					: local.basic
					? "w-6 h-6 group-active:scale-100 group-hover:scale-105 transition-transform"
					: "w-6 h-6"
			}
			width={`${local.size || 24}px`}
			height={`${local.size || 24}px`}
			{...others}
		/>
	)
}
