# Benjamin Niyodusenga — Portfolio

A projects-first software engineering portfolio built with React + Vite and plain CSS.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Drag-and-drop the `dist/` folder into Netlify, or connect the repo for continuous deploys.

## Before you publish — things to fill in

[x]**LinkedIn URL** — search the codebase for `YOUR-HANDLE` (in `Hero.jsx`, `Contact.jsx`, `Footer.jsx`) and replace with your real LinkedIn profile link.
2. **Project links** — in `src/data/projects.js`, each project has empty `github` and `liveDemo` fields. Fill in real URLs as repos/deploys go live; empty fields automatically hide those buttons.
3. **Project preview images** — project cards currently use a gradient placeholder with the project name (see `.project-card__preview` in `src/index.css` and `ProjectCard.jsx`). Swap in real screenshots by adding an `image` field to a project in `projects.js` and rendering an `<img>` in place of the placeholder `<span>`.
4. **Contact form** — the form in `Contact.jsx` is UI-only right now. Wire it to Netlify Forms, Formspree, or a small serverless function before relying on it to deliver messages.
5. **OG/social image** — add a real `og-image.png` (1200×630) to `public/` to replace the missing reference in `index.html`.
[x] **Canonical URL** — update the `og:url` / canonical tags in `index.html` once you have your real domain.

## Structure

```
src/
├── components/     # UI components, one per section
├── data/           # Content — edit these files to update the site, no component changes needed
│   ├── projects.js
│   ├── experience.js
│   ├── education.js
│   └── skills.js
├── App.jsx
├── main.jsx
└── index.css        # Design tokens + all styles
```
