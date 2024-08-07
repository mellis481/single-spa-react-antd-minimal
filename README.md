# Single-SPA with React and Ant Design

A minimal reproduction of Single-SPA with React and Ant Design.

- root: The root config for the Single-SPA
- mf-chrome: The core UI of the application. Rendered **always**.
- mf-chat: Chat application. Rendered **always**, but it can be toggled on/off from the UI perspective.
- mf-about: About application. Rendered when the user visits the `/about` URL.

## Quick Start

Run all the applications at once in parallel:

```sh
npm run start
```

Then visit <http://localhost:4000>.

## Add a New Microfrontend

```sh
cd apps
npx create-single-spa
```

- Directory for new project: `mf-your-mf-name`
- Select type to generate: `single-spa application / parcel`
- Which framework do you want to use? `react`
- Which package manager do you want to use? `npm`
- Will this project use TypeScript? `y`
- Organization name: `acme`
- Project name: `mf-your-mf-name`

Then do the following:

- Delete the `.git` folder
- Delete the `.husky` folder
- Rename `.eslintrc` to `.eslintrc.json`
- Add `"parserOptions": { "requireConfigFile": false }` to the `.eslintrc.json`
- Add port to the `start` script: `--port 40xx` in `package.json`
- Remove `"prepare": "husky install",` from `package.json`
- `npm uninstall husky pretty-quick -D`
- Add MFE to import map @[index.ejs](./apps/root/src/index.ejs)
- Register MFE @[root-config](./apps/root/src/acme-root-config.ts)
