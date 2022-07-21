# UnStylied Reuseable Components

-   Position - landed check it out here http://localhost:3000/#playground

Basically, based on the Flexbox CSS Properties just more, explict to use

```bash
# install with npm
npm i position-component
# or yarn
yarn create astro
# or pnpm
pnpm create astro@latest
```

## 🚀 Project Structure

```js
/
├── demo/
│   ├── public/
│   └── src/
│       └── pages/
│           └── index.astro
└── packages/
    └── position-component/
        ├── Position.astro -- source code
        ├── index.js
        └── package.json
```

This project uses **workspaces** to develop a single package, `@example/my-component`, from `packages/my-component`. It also includes a `demo` Astro site for testing and demonstrating the component.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Props    | Valid Values                      | Status                  |
| -------- | --------------------------------- | ----------------------- |
| class    | string                            | -                       |
| col      | boolean                           | -                       |
| reverse  | boolean                           | -                       |
| top      | boolean                           | -                       |
| center   | boolean                           | -                       |
| bottom   | boolean                           | -                       |
| left     | boolean                           | -                       |
| right    | boolean                           | -                       |
| stretchX | boolean                           | Currently Experiemental |
| stretchY | boolean                           | Currently Experiemental |
| apart    | boolean \| 'loosely' \| 'closely' | -                       |

## 👀 Want to learn more?

Feel free to check [documentation](https:// /docs/position)

jump into our [Discord server](https://astro.build/chat), tag alphacat their, I will be waiting for your reply
