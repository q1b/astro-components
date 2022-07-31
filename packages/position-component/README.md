# Installation

```bash
# install with npm
npm i position-component
# or yarn
yarn create astro
# or pnpm
pnpm create astro@latest
```

link to website, [https://unstylied-components.vercel.app/](https://unstylied-components.vercel.app/)

# Positioning

For Positioning a component inside a element ( container ), is way easier today then before, as now All Browser supports **flexbox** and **grid** using them you can create complex layout design, position ( \*elements ) according to the size of a container, but still you want something more specific that does the work of Positioning elements for you, then you can give try to this library.

## Like, What it does for you ?

Just simple to use Component to make it easy to position HTML Elements, using css behind the scenes without you worrying about CSS and expect everything to work perfectly.

## Why I made it ?

-   Made this Simple Component for My Personal Project, It's was **looking useful** So, I Thought 🤔 to share it as a npm package,
-   Another main reason was, using flexbox is really powerful and there are hidden power, init that can be utilised to create great UI,

# How to use it ?

This library woundn't have a learning curve, because

-   typescript intellisense
-   uses simple name conventions

## Example

### Simple

This example is positioning the elements apart from each other, placing them far most possible from each other within the container's boundary (means `width` and `height`)

```astro
---
import { Position } from 'position-component'
---
<Position center col >
    <!-- h1,h2,...,section,article,main,...,div,span -->
</Position>
```

```astro
---
import { Position } from 'position-component'
---
<Position col apart class="w-64 h-96 bg-slate-1000">
	<div class="w-4 h-4"></div>
	<div class="w-4 h-4"></div>
	<div class="w-4 h-4"></div>
</Position>
```

| Props    | Valid Values                                            |
| -------- | ------------------------------------------------------- |
| class    | string                                                  |
| col      | `true` \| `false`                                       |
| reverse  | `true` \| `false`                                       |
| top      | `true` \| `false`                                       |
| center   | `true` \| `false`                                       |
| bottom   | `true` \| `false`                                       |
| left     | `true` \| `false`                                       |
| right    | `true` \| `false`                                       |
| stretchX | `true` \| `false`                                       |
| stretchY | `true` \| `false`                                       |
| apart    | `true` \| `false` <br/> \| 'loosely' <br/> \| 'closely' |

Also, there is now media Break Points support So, if you are familiar with tailwindcss or windicss or unocss, you can add before any class `sm:`,`md:`,`lg:`,`xl:`,`2xl:` to apply it after a specified view width according to table like, `right sm:left` now, this will `right` until view width crossed `sm:` ( 640px ) then, it applied `left`

here, is the complete table with mediaBreaks Information

<details open>
<summary>Checkout the breakpoint table here, </summary>
<br/>

| Breakpoint | width after which styles will take effect |
| ---------- | ----------------------------------------- |
| sm         | 640px                                     |
| md         | 768px                                     |
| lg         | 1024px                                    |
| xl         | 1280px                                    |
| 2xl        | 1536px                                    |

</details>

<br/>

play around props here, [https://unstylied-components.vercel.app/](https://unstylied-components.vercel.app/)
