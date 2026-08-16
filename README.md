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



3. **Project preview images** — project cards currently use a gradient placeholder with the project name (see `.project-card__preview` in `src/index.css` and `ProjectCard.jsx`). Swap in real screenshots by adding an `image` field to a project in `projects.js` and rendering an `<img>` in place of the placeholder `<span>`.
4. **Contact form** — the form in `Contact.jsx` is UI-only right now. Wire it to Netlify Forms, Formspree, or a small serverless function before relying on it to deliver messages.
5. **OG/social image** — add a real `og-image.png` (1200×630) to `public/` to replace the missing reference in `index.html`.


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
