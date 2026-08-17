# Benjamin Niyodusenga — Portfolio

A projects-first software engineering portfolio built with React + Vite and plain CSS.

🔗 **Live site:** [your-netlify-url.netlify.app](https://your-netlify-url.netlify.app)

---

## Features

### Sections
- **Hero** — name, tagline, and primary CTAs
- **Featured Projects** — filterable project cards (All · Frontend · Full Stack · Backend · Data · JavaScript · React · Python) with per-project detail views covering problem, role, architecture, features, challenges, and tech stack
- **About** — background and engineering philosophy
- **Tech Stack** — skills grouped by Frontend, Backend, Data, Tools, and Methodologies
- **Engineering Mindset** — four core principles that guide how I build
- **Experience** — CodePath, Revature, and Verizon roles, each linked to a related project where applicable
- **Education & Certifications** — two degrees and six certifications (CodePath, Revature, AWS Cloud Practitioner, edX, Google, Chegg Skills)
- **Contact** — contact form

### Projects

| Project | Stack | Links |
|---|---|---|
| **TechHub** — developer resource-sharing forum with CRUD, category/search filtering via URL params, image upload, and YouTube embedding | React, Supabase, PostgreSQL, Netlify | [GitHub](https://github.com/benduse/TechHub) · [Demo](https://www.youtube.com/watch?v=TeVlsXEiIHs) |
| **Call Center Data Engine** — Python/SQL pipeline that ingests raw call logs into SQLite and exports structured CSV reports | Python, SQL, SQLite | [GitHub](https://github.com/benduse/benduse-PEP-PythonSQL-Project) |
| **LingoHarbor** — Kinyarwanda flashcard app with fuzzy answer matching, streak tracking, and a mastered-cards system | React, JavaScript, CSS | [GitHub](https://github.com/benduse/lingoharbor) · [Demo](https://www.youtube.com/watch?v=bEYOFT97ZTc) |
| **EasyRead** — reading dashboard that fetches live Open Library API data and renders it with Recharts visualizations | React, REST API, Recharts | [GitHub](https://github.com/benduse/easyread) · [Demo](https://www.youtube.com/watch?v=eP10vbq01_k) |
| **VeniVici** — country-discovery app with a ban list and history panel | React, REST API, CSS | [GitHub](https://github.com/benduse/venivici) · [Demo](https://www.youtube.com/watch?v=nT33Tb4CBiU) |
| **MoodHabit** — mood-adaptive habit tracker with a rule engine, offline-first dual data layer (localStorage + Supabase), and Framer Motion animations | React, TypeScript, Tailwind, Supabase | coming soon |
| **EjoApp** — vanilla JS Kinyarwanda flashcard app with spaced repetition and offline localStorage access | HTML, CSS, JavaScript | [GitHub](https://github.com/benduse/ejo-app) |

---

## Tech Stack

**Frontend** — HTML, CSS, JavaScript, TypeScript, React, Responsive Design  
**Backend** — Node.js, Java, Python, REST APIs, Spring, Spring Boot  
**Data** — SQL, SQLite, PySpark, Hadoop, ETL, Data Analytics  
**Tools** — Git, GitHub, Maven, JUnit, Mockito, CI/CD, Supabase, Netlify  
**Methodologies** — Agile, Scrum, Test-Driven Development

---

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
# output goes to dist/
```

## Deploy to Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- Connect the repo for continuous deploys, or drag-and-drop `dist/` into Netlify.

---

## Project structure

```
src/
├── components/       # One component per section
├── data/             # Edit these files to update content — no component changes needed
│   ├── projects.js
│   ├── experience.js
│   ├── education.js
│   └── skills.js
├── App.jsx
├── main.jsx
└── index.css         # Design tokens + all styles
```

---

## Customization notes

- **Content** — all copy lives in `src/data/`. Add, remove, or edit entries there.
- **Project images** — add an `image` field to a project in `projects.js` and render an `<img>` in `ProjectCard.jsx` in place of the gradient placeholder.
- **Contact form** — the form in `Contact.jsx` is UI-only. Wire it to Netlify Forms, Formspree, or a serverless function before relying on it.
- **OG image** — add a real `og-image.png` (1200×630) to `public/` to replace the placeholder reference in `index.html`.
