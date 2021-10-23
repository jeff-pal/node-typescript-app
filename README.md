## Init
yarn init -y

## Install Dependencies

```bash
yarn add -D  \
 typescript  \
 ts-node     \
 @types/node
```

## Config TS

Manually create `tsconfig.json` in the root path with the following options:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ESNext"],
    "module": "commonjs",
    "allowJs": true,
    "outDir": "./build",
    "esModuleInterop": true,
  },
  "include": ["src"],
  "exclude": [
    "**/*.spec.?s",
    "**/*.test.?s",
  ]
}
```

If you prefer you can create the default `tsconfig.json` running this command `npx tsc --init`.