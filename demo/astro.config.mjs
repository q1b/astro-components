import { defineConfig } from "astro/config" // Icons Helpers

import Icons from "unplugin-icons/vite"
import solid from "@astrojs/solid-js"
import sitemap from "@astrojs/sitemap"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import remarkDirective from "remark-directive"
import rehypeParse from "rehype-parse"
import { visit } from "unist-util-visit"
import { h } from "hastscript" // https://github.com/timlrx/rehype-prism-plus

function rehypeReact(options) {
	console.log(options)
	// if (!options || typeof options.createElement !== "function") {
	// 	throw new TypeError("createElement is not a function")
	// }

	// const createElement = options.createElement

	// Object.assign(this, { Compiler: compiler })

	// /** @type {import('unified').CompilerFunction<Root, ReactNode>} */
	// function compiler(node) {
	// 	/** @type {ReactNode} */
	// 	// @ts-expect-error: assume `name` is a known element.
	// 	let result = toH(h, tableCellStyle(node), options.prefix)

	// 	if (node.type === "root") {
	// 		// Invert <https://github.com/syntax-tree/hast-to-hyperscript/blob/d227372/index.js#L46-L56>.
	// 		result =
	// 			result &&
	// 			typeof result === "object" &&
	// 			"type" in result &&
	// 			"props" in result &&
	// 			result.type === "div" &&
	// 			(node.children.length !== 1 ||
	// 				node.children[0].type !== "element")
	// 				? // `children` does exist.
	// 				  // type-coverage:ignore-next-line
	// 				  result.props.children
	// 				: [result]

	// 		return createElement(options.Fragment || "div", {}, result)
	// 	}

	// 	return result
	// }

	// /**
	//  * @param {keyof JSX.IntrinsicElements} name
	//  * @param {Record<string, unknown>} props
	//  * @param {Array<ReactNode>} [children]
	//  * @returns {ReactNode}
	//  */
	// function h(name, props, children) {
	// 	// Currently, a warning is triggered by react for *any* white space in
	// 	// tables.
	// 	// So we remove the pretty lines for now.
	// 	// See: <https://github.com/facebook/react/pull/7081>.
	// 	// See: <https://github.com/facebook/react/pull/7515>.
	// 	// See: <https://github.com/remarkjs/remark-react/issues/64>.
	// 	if (children && tableElements.has(name)) {
	// 		children = children.filter((child) => !whitespace(child))
	// 	}

	// 	if (options.components && own.call(options.components, name)) {
	// 		const component = options.components[name]

	// 		if (options.passNode && typeof component === "function") {
	// 			// @ts-expect-error: `toH` passes the current node.
	// 			// type-coverage:ignore-next-line
	// 			props = Object.assign({ node: this }, props)
	// 		}

	// 		return createElement(component, props, children)
	// 	}

	// 	return createElement(name, props, children)
	// }
}

function withLinkRoles() {
	return (tree) => {
		visit(tree, "element", (element) => {
			if (["ol", "ul"].includes(element.tagName)) {
				element.properties.role = "list"
			}
		})
	}
} // This plugin is an example to let users write HTML with directives.
// It’s informative but rather useless.
// See below for others examples.

/** @type {import('unified').Plugin<[], import('mdast').Root>} */

function myRemarkPlugin() {
	return (tree) => {
		visit(tree, (node) => {
			if (
				node.type === "textDirective" ||
				node.type === "leafDirective" ||
				node.type === "containerDirective"
			) {
				const data = node.data || (node.data = {})
				const hast = h(node.name, node.attributes)
				data.hName = hast.tagName
				data.hProperties = hast.properties
			}
		})
	}
} // This plugin is an example to turn `::youtube` into iframes.
// <!-- ::youtube[Video of a cat in a box]{#01ab2cd3efg} -->

/** @type {import('unified').Plugin<[], import('mdast').Root>} */

function youtubeRemarkPlugin() {
	return (tree, file) => {
		visit(tree, (node) => {
			if (
				node.type === "textDirective" ||
				node.type === "leafDirective" ||
				node.type === "containerDirective"
			) {
				if (node.name !== "youtube") return
				const data = node.data || (node.data = {})
				const attributes = node.attributes || {}
				const id = attributes.id
				if (node.type === "textDirective")
					file.fail(
						"Text directives for `youtube` not supported",
						node
					)
				if (!id) file.fail("Missing video id", node)
				data.hName = "iframe"
				data.hProperties = {
					src: "https://www.youtube.com/embed/" + id,
					width: 200,
					height: 200,
					frameBorder: 0,
					allow: "picture-in-picture",
					allowFullScreen: true,
				}
			}
		})
	}
} // This plugin is an example to turn `::youtube` into iframes.
// <!-- ::github[Link to github]{#remarkjs/remark-directive} -->

/** @type {import('unified').Plugin<[], import('mdast').Root>} */

function githubRemarkPlugin() {
	return (tree, file) => {
		visit(tree, (node) => {
			if (
				node.type === "textDirective" ||
				node.type === "leafDirective" ||
				node.type === "containerDirective"
			) {
				if (node.name !== "github") return
				const data = node.data || (node.data = {})
				const attributes = node.attributes || {}
				const id = attributes.id
				if (node.type === "textDirective")
					file.fail(
						"Text directives for `youtube` not supported",
						node
					)
				data.hName = "a"
				data.hProperties = {
					href: "https://www.github.com/" + id,
				}
			}
		})
	}
}

// https://astro.build/config
export default defineConfig({
	site: "https://unstylied-components.vercel.app/",
	integrations: [solid(), sitemap()],
	vite: {
		ssr: {
			noExternal: ["smartypants"],
			// external: ["svgo", "@11ty/eleventy-img"],
		},
		plugins: [
			Icons({
				compiler: "solid",
			}),
		],
	},
	markdown: {
		shikiConfig: {
			theme: "css-variables", // wrap: true,
		},
		rehypePlugins: [
			rehypeSlug,
			[
				"rehype-autolink-headings",
				{
					behavior: "wrap",
				},
			],
			rehypeReact,
		],
		remarkPlugins: [
			withLinkRoles,
			remarkBreaks,
			remarkDirective,
			myRemarkPlugin,
			youtubeRemarkPlugin,
			githubRemarkPlugin,
			remarkGfm,
		],
	},
})
