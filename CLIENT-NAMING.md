# Naming Conventions

## Schema

```
src/
├── components/
│   ├── MySuperComponent/
│   │   └── MySuperComponent.svelte
│   ├── MySuperList/
│   │   ├── MySuperList.svelte
│   │   └── MySuperListItem.svelte
├── styles/
│   └── global.css
├── utils/
│   └── stringUtils.ts
└── main.js
```

## Components
### General Rules
- Use **PascalCase** for all Svelte components (e.g., `MySuperComponent.svelte`).
- Each component should be in its **own namespaced folder** (e.g., `MySuperComponent/MySuperComponent.svelte`).
- If multiple components share the same namespace, place them in the **same folder**
  (e.g., `List/List.svelte`, `List/ListItem.svelte`).



### Additional Recommendations
- Use **meaningful names** that clearly describe the component’s purpose.
- Avoid abbreviations unless they are widely recognized.
- Keep filenames and folder names consistent to prevent confusion.

## General rules
- Use **camelCase** for all regular files (e.g., `mySuperFile.js`) which contains functions, variables, or other code that is not a component or class.
- Use **PascalCase** for all classes (e.g., `MySuperClass.js`).

## Utils or Classes
### General Rules
- Use **PascalCase** for all utility functions and classes (e.g., `MySuperUtil.js`).


### Things that are special names
- Utils or Helpers - *.utils.ts (eg. `StringUtils.ts`)
- Stories - stories/*ComponentName*.stories.ts (eg. `MySuperComponent/stories/MySuperComponent.stories.ts`)
- E2E tests (playwright) - e2e/*.test.ts (eg. `string.test.ts`)
- Unit tests (vitest) - unit/*.test.ts (eg. `src/utils/`)
- Integration tests (vitest) - integration/*.test.ts (eg. `string.test.ts`)

## Folder names
- maintain shallow structure, if one folder contains more than ~7 files, consider creating more specified namespace
(e.g. `components/MsgVideo`,`components/MsgAudio`, `components/MsgImage` instead of `components/Msg/(Video|Audio|Image)`).

------

TODO:
- add Page adjectives etc., then naming for stories, then naming for View and Container
- modal contents should be created by separate components
- more emphasis on decoupling logics and delegation upwards
