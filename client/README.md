## react-hooks-playground/client

A React (NextJS) playground for testing using react hooks.

## Requirements

The following dependecies are used for this project. Feel free to experiment using other dependencies and versions.

1. Windows 64-bit OS
2. nvm version 1.1.9 (for Windows)
   - NOTE: Using nvm is optional if you want to continue using your pre-installed NodeJS.
3. NodeJS LTS v18.14.2 installed using nvm
   - node v18.14.2
   - npm v9.5.0
   - > **NOTE:** We will use v18.14.2 for the official production client and server builds but feel free to use other NodeJS versions by setting "engine-strict=false" in the .npmrc file when working on localhost development as needed, but please use v18.14.2 when installing new modules. Do not commit the package.json or package-lock.json files should they change when "engine-strict=false".

### Core Libraries and Frameworks

- Client app
   - NextJS 13.2.4
   - React 18.2.0

## Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/react-hooks-playground.git`

## Available Scripts

### `npm run dev`
Run the project in development mode. Launch the development website from:<br>
http://localhost:3000

### `npm run lint`
Check for lint errors.

### `npm run export`
Export the static website.

### `npm start`
Load the static website built from npm run export (no hot reloads). View the built website on:<br>
http://localhost:3000

@weaponsforge<br>
20230319
