# Iwan Djudaric — Portfolio

Personal portfolio site, built with React and Vite. Single-page, bilingual (EN/NL), with a project index, about section, and contact links.

Live at [iwandjudaric.github.io/Dev](https://iwandjudaric.github.io/Dev/).

## Stack

- React 19 + Vite
- Plain CSS (no framework) — scroll-reveal and pointer-tilt effects via small custom hooks
- Locale switching (EN/NL) with content in [`src/copy.js`](src/copy.js)

## Getting started

```bash
npm install
npm run dev
```

Other scripts:

```bash
npm run build    # production build to dist/
npm run preview  # preview the production build locally
npm run lint      # eslint
```

## Structure

```
src/
  App.jsx      # page layout and interaction hooks (scroll reveal, tilt)
  copy.js      # all site copy, per locale, plus locale-independent project facts
  App.css      # styling
```

Content (hero text, project descriptions, about, translations) lives in `src/copy.js` — update that file rather than `App.jsx` to change what the site says.

## Deployment

Built for GitHub Pages as a project page, hence the `/Dev/` base path in `vite.config.js`. Adjust that if the repo is renamed or deployed elsewhere.
