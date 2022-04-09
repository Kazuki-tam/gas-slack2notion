# gas-webpack-starter

gas-webpack-starter is a starter kit for Google Apps Script.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/gas-webpack-starter)](https://github.com/Kazuki-tam/gas-webpack-starter/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/gas-webpack-starter)](https://github.com/Kazuki-tam/gas-webpack-starter/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2022)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/gas-webpack-starter)

## Features
- Just deploy this project code without development
- Develop Locally with TypeScript and Clasp
- Bundle your files with Webpack
- Lint your code with ESLint
- Format your code with prettier
- Built-in test runner with Jest

## Main dependencies

- [Google Sheets](https://www.google.com/intl/en/sheets/about/)
- [Google Apps Script](https://workspace.google.co.jp/intl/ja/products/apps-script/)
- [Clasp](https://github.com/google/clasp)
- [Webpack](https://webpack.js.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ESLint](https://eslint.org/)
- [Jest](https://jestjs.io/)
- [Yarn](https://yarnpkg.com/)

## Prerequisites

- [Node.js v16+ (v16.13.0)](https://nodejs.org/en/)
- [Clasp](https://github.com/google/clasp)

Install [Clasp](https://github.com/google/clasp) at the first if you haven't done it yet.

```shell
npm install -g @google/clasp
```

### Login google account

```shell
npx clasp login
```

## How to use

Clone this repository and install dependencies.

```shell
yarn install
```

### Connect to your exiting project

Create a `.clasp.json` at the root, and then Add these settings.
Open App script from your spreadsheet and check out a script Id at the setting page.

```json
{
  "scriptId": "<SCRIPT_ID>",
  "rootDir": "./dist"
}
```

Deploy your code to the existing project.

```shell
yarn deploy
```

## Available Commands

Build your project.

```shell
yarn build
```

Build your project files and force writes all local files to script.google.com.

```shell
yarn deploy
```

Open the current directory's clasp project on script.google.com.

```shell
yarn open
```

Test project's code

```shell
yarn test
```

```shell
yarn test:watch
```

## License
MIT
