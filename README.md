## react-hooks-playground

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
4. React Developer Tools (optional) [[link]](https://react.dev/learn/react-developer-tools)
   - The React Developer Tools is a web browser extension for debugging React apps.
   - It's best to view these demos with the React Profiler, one of the tools available in the React Developer Tools for observing the components re-rendering on state updates.
   - Install for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
   - Install for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
   - Install for [Edge](https://microsoftedge.microsoft.com/addons/detail/react-developer-tools/gpphkfbcpidddadnkolkpfckpihlkkil)

### Core Libraries and Frameworks

- Client app
   - NextJS 13.2.4
   - React 18.2.0

## Installation

1. Clone this repository.<br>
`https://github.com/weaponsforge/react-hooks-playground.git`

2. Follow the instructions on the README files inside the `/client` directory for more information on configuring and using the NextJS client app.

## Quick Usage Guide

### Manual Installation and Usage

> It's best to view these demos with the React Profiler, one of the tools available in the React Developer Tools for observing the components re-rendering on state updates.

1. Navigate to the **/client** directory from the commandline.
2. Create a `.env` file from the `/client/.env.example` file. Copy its content when working on localhost.
3. Run: `npm run install`
4. Run: `npm run dev`
5. Open the localhost website on `http://localhost:3000`

### Using the React Profiler

1. Open the React Profiler in the web browser's developer console.
2. Run the demos and observe the components re-rendering. The Profiler highlights rendered components.

### Localhost Development Using Docker

> **NOTE:** Requires Docker installed on the development machine.

1. Navigate the the repository's root directory from the commandline.
2. Run the docker compose commands:<br>
   ```
   # Build the image
   docker compose build

   # Start/stop the docker image
   docker compose up/down
   ```

@weaponsforge<br>
20230319
