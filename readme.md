# electron-sveltekit-fullstack

A basic template for building fullstack Electron apps, using SvelteKit, TypeScript and ExpressJS. It comes pre-configured with TailwindCSS and SASS installed, an automatic reload-on-change developer mode
and a build script to create an executable file for Windows.

# Getting started

1. Clone the project
2. Navigate to the <ins>root</ins> folder: `cd electron-sveltekit-fullstack`
3. Run `npm install`
4. Navigate to the <ins>/svelte</ins> folder: `cd svelte`
5. Run `npm install`
6. Navigate to the root folder: `cd ../`
7. Run `npm run dev` to start the app!

# Features

This template comes pre-configured with TailwindCSS, SASS and TypeScript support for the frontend and TypeScript support for the backend.

It includes a script for testing your app in developer mode, with automatic reload-on-change.
`npm run dev`

It also includes a script for building your app for Windows, which generates an executable file in the /out folder.
`npm run build`

# Customizing App Authenticity (Name, Author, Icon)

To change what your app will be called when installed, what author it will have and what icon it will display, you have to change a few things.

### Change App Name

Update the `appId`, `productName` and `uninstallDisplayName` fields in the <ins>build.config.json</ins> file.
Update the `<title>` tag in the <ins>svelte/src/app.html</ins> file.
Update the `name` and `description` fields in the <ins>package.json</ins> file.

### Change App Author

Update the `author` field in the <ins>package.json</ins> file.

### Change App Icon

Replace the <ins>icon.ico</ins> file with an icon of your own. Note: Don't rename a .png file to .ico, use a [converter like this one](https://convertio.co/nl/png-ico/) instead.

# Template GUI

![image](https://user-images.githubusercontent.com/108586405/198894530-af8de74b-030e-4fac-88fa-f5b23422e2e5.png)
