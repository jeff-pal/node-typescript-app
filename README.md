# Run

## Start

Run project on production

npm

```bash
yarn start
#Or
npm run start
```

Run project on development:

```bash
yarn dev
#Or
npm run dev
```

# Step-by-step to create this project's basis

## Init

```bash
yarn init -y
```

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
    "esModuleInterop": true
  },
  "include": ["app.ts", "src"],
  "exclude": [
    "**/*.spec.?s",
    "**/*.test.?s"
  ]
}
```

If you prefer you can create the default `tsconfig.json` running this command `npx tsc --init`.