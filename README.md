<img alt="Node Typescript logo" src="logo.png" width="10%">

# Node Typescript Application

This is a Nodejs + Typescript application basis.

## Create a new Nodejs + Typescript application

```bash
npx create-node-ts-project my-app
cd my-app
```

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
 jest        \
 ts-node     \
 ts-jest     \
 @types/node \
 @types/jest 
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


# Config Jest

Either Create the file `jest.config.ts` with the following content:

```typescript
export default {
  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "<rootDir>/src/**/*.js",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  // The test environment that will be used for testing
  testEnvironment: "jest-environment-node",

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/src"
  ],
};
```

Or run the command `yarn jest --init` 