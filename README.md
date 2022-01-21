# Text-Editor

## Bootcamp homework

A developer requires a simple text editor that works reliably with _or_ without an internet connection. The following "Acceptance Criteria" for this feature were requested and have now been implemented:

- The application contains a client/server folder structure in the editor (with client-side served via "npm run start")
- All JS files are bundled using webpack
- Webpack plugins include a HTML file, service worker, and a manifest file
- The text editor functions error-free with next-gen JS _(using Babel)_
- An IndexedDB storage database is created upon opening the editor, and content entered into the editor (using GET and PUT methods) is saved after closing and re-opening the DOM window
- The "Install" button enables users to download the web application as a desktop icon/PWA
- When the web application is loaded, the workbox plugin registers a service worker that:
  - Pre-caches static assets upon loading
  - Caches subsequent pages and their related static assets
- The application works without an internet connection

Additionally, the application has been deployed to Heroku and the Javascript includes comments.

## Text Editor -- File screenshot

The following is a screenshot of the Heroku interface, highlighting the application's appearance and functionality:

![Heroku screenshot of the text editor app. This image includes: [DESCRIPTION]]](./LINKHERE, inc. /images/ folder?)

## Link to deployed application

The application has been deployed to Heroku here: [APPLICATION_LINK]
