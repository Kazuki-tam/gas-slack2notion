# gas-slack2notion

gas-slack2notion is a starter kit to post messages via Google Sheets from Slack to Notion.

## Status

[![Release (latest by date)](https://img.shields.io/github/v/release/Kazuki-tam/gas-slack2notion)](https://github.com/Kazuki-tam/gas-slack2notion/releases/tag/v0.0.1)
[![Issues](https://img.shields.io/github/issues/Kazuki-tam/gas-slack2notion)](https://github.com/Kazuki-tam/gas-slack2notion/issues)
![Maintenance](https://img.shields.io/maintenance/yes/2022)
![Release date](https://img.shields.io/github/release-date/Kazuki-tam/gas-slack2notion)

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

### Create a .env file

Create a .env at the root, and then Add your token and database id.

```
NOTION_TOKEN=<YOUR_NOTION_TOKEN>
DATABASE_ID=<YOUR_DATABASE_ID>
```

### Upload a script project

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
