---
layout: "../../layouts/writings.astro"
title: Documentation for Position-Component npm
description: Dpeth in view of position-component
publishedOn: "2022-07-19"
setup: |
    import { Position } from "position-component"
---

# Installation

```bash
# install with npm
npm i position-component
# or yarn
yarn create astro
# or pnpm
pnpm create astro@latest
```

# Positioning

For Positioning a component inside a element ( container ), is way easier today then before, as now All Browser supports **flexbox** and **grid** using them you can create complex layout design, position ( \*elements ) according to the size of a container, but still you want something more specific that does the work of Positioning elements for you, then you can give try to this library.

## Like, What it does for you ?

Just simple to use Component to make it easy to position HTML Elements, using css behind the scenes without you worrying about CSS and expect everything to work perfectly.

## Why I made it ?

Made this Simple Component for My Personal Project, It's was **looking useful** So, I Thought 🤔 to share it as a npm package

# How to use it ?

This library woundn't have a learning curve, because

-   typescript intellisense
-   uses simple name conventions

## Example

### Simple

This example is positioning the elements apart from each other, placing them far most possible from each other within the container's boundary (means `width` and `height`)

```html
<Position col apart class="w-64 h-96 bg-slate-1000">
	<div class="w-4 h-4"></div>
	<div class="w-4 h-4"></div>
	<div class="w-4 h-4"></div>
</Position>
```

<Position col apart center class="w-64 h-96 bg-slate-1000">

    <div class="w-4 h-4 bg-white rounded-lg"></div>
    <div class="w-4 h-4 bg-white rounded-lg"></div>
    <div class="w-4 h-4 bg-white rounded-lg"></div>

</Position>

### Advance

```html
<Position col center class="w-64 h-96 bg-slate-1000">
	<Position center class="bg-white font-mono w-auto aspect-square rounded-lg"
		>1</Position
	>
	<Position
		center
		class="bg-slate-600 font-mono w-auto aspect-square rounded-lg"
		>2</Position
	>
	<Position
		center
		class="bg-rose-500 font-mono w-auto aspect-square rounded-lg"
		>3</Position
	>
</Position>
```

<Position col center class="w-64 h-96 bg-slate-1000">

    <Position center class="bg-white font-mono w-auto aspect-square rounded-lg">1</Position>
    <Position center class="bg-slate-600 font-mono w-auto aspect-square rounded-lg">2</Position>
    <Position center class="bg-rose-500 font-mono w-auto aspect-square rounded-lg">3</Position>

</Position>

| Props    | Default | Options                             | Description                                                                                                                                                                                                                                                        |
| -------- | ------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| as       | `div`   | `String`                            | The element tag name that you pass should render in the output html                                                                                                                                                                                                |
| class    | `flex`  | `String`                            | same as html attribute just comes with a prefilled flex class                                                                                                                                                                                                      |
| col      | `false` | `Boolean`                           | changes the flex-direction from `row` to `column`                                                                                                                                                                                                                  |
| reverse  | `false` | `Boolean`                           | Reverse the order and direction in which items are placed                                                                                                                                                                                                          |
| top      | `false` | `Boolean`                           | Place the child elements to the `Top` of the container                                                                                                                                                                                                             |
| center   | `true`  | `Boolean`                           | Place the child elements to the `Center` of the container                                                                                                                                                                                                          |
| bottom   | `false` | `Boolean`                           | Place the child elements to the `Bottom` of the container                                                                                                                                                                                                          |
| left     | `false` | `Boolean`                           | Place the child elements to the `Left` of the container                                                                                                                                                                                                            |
| right    | `false` | `Boolean`                           | Place the child elements to the `Right` of the container                                                                                                                                                                                                           |
| stretchX | `false` | `Boolean`                           | Stretch the child elements in the X direction                                                                                                                                                                                                                      |
| stretchY | `false` | `Boolean`                           | Stretch the child elements in the Y direction                                                                                                                                                                                                                      |
| apart    | `false` | `Boolean` \| 'loosely' \| 'closely' | Set elements `far most` in case of `true`, otherwise place them, `evenly` in case of `closely` and in the case of `loosely`, directly taken from `mdn` -> The Empty space before the first and after the last item = space between each pair of adjacent items / 2 |
