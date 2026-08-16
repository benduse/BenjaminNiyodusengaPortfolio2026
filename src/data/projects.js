// Update this file to add, remove, or edit projects.
// Leave github/liveDemo empty ("") to hide that button on a card.

export const projects = [
  {
    id: "techhub",
    title: "TechHub",
    category: ["Full Stack", "React"],
    tagline:
      "A developer resource-sharing forum where engineers submit, discuss, and upvote tools worth knowing about.",
    problem:
      "Developers discover useful tools, articles, and repos constantly, but the good ones get lost in scattered bookmarks, Slack threads, and browser tabs. TechHub gives them one place to submit, browse, and rank resources across categories like Frontend, Backend, DevOps, AI/ML, and Career.",
    role: "Built the full application end-to-end — from data modeling in Supabase through the React interface, deployment, and testing — as the sole developer during a CodePath web development engagement.",
    architecture: "React (Vite) → Supabase (Postgres + Storage) → Netlify",
    features: [
      "Full CRUD for resource posts, with pseudo-authentication and per-user permissions",
      "Category and search filtering driven by URL search params, so filtered views are shareable links",
      "Image upload to Supabase Storage, plus automatic YouTube link detection and embedding",
      "A small design-token system for consistent spacing, color, and type across the app",
    ],
    challenges: [
      {
        challenge:
          "Filter state needed to survive page reloads and be shareable, not just live in component state.",
        solution:
          "Moved filter state into the URL via search params, so the UI reads from and writes to the URL instead of local state alone.",
      },
      {
        challenge:
          "Letting users post images and links without a heavyweight upload pipeline.",
        solution:
          "Used Supabase Storage directly from the client for image upload, and wrote a lightweight parser to detect and embed YouTube links automatically.",
      },
      {
        challenge:
          "Keeping the UI consistent as the app grew past a handful of components.",
        solution:
          "Introduced a design-token system (spacing, color, and type scale) so new components stay visually consistent without copy-pasting styles.",
      },
    ],
    technologies: [
      "React",
      "JavaScript",
      "Supabase",
      "PostgreSQL",
      "Netlify",
      "CSS",
    ],
    github: "https://github.com/benduse/TechHub",
    liveDemo: "https://www.youtube.com/watch?v=TeVlsXEiIHs",
  },
  {
    id: "call-center-data-engine",
    title: "Call Center Data Engine",
    category: ["Data", "Backend", "Python"],
    tagline:
      "A Python and SQL data pipeline that turns raw call-center logs into structured business reports.",
    problem:
      "A simulated call center needed a way to handle high volumes of raw user and call records: ingest them safely, analyze performance, and produce reports a manager could actually read — without a manual, error-prone process.",
    role: "Built the data infrastructure and analytics engine solo as a Data Engineer Trainee: import, transformation, querying, and reporting layers.",
    architecture:
      "CSV files → Python ingestion layer → in-memory SQLite → SQL analytics → CSV reports",
    features: [
      "CSV file I/O pipeline that imports raw call and user records into an in-memory SQLite database",
      "Advanced SQL queries to extract performance analytics from call records",
      "Automated report generation that exports query results back out to structured CSV files",
      "Pipeline designed for repeatable, end-to-end runs with minimal manual intervention",
    ],
    challenges: [
      {
        challenge:
          "Raw call logs arrived in inconsistent formats that could break naive imports.",
        solution:
          "Built a defensive CSV ingestion layer with validation before rows are written into SQLite, so bad records fail loudly instead of corrupting the dataset.",
      },
      {
        challenge:
          "Turning SQL query results into something a non-technical manager could use.",
        solution:
          "Wrote a reporting layer that exports query output into clean, structured CSV reports rather than raw query dumps.",
      },
    ],
    technologies: ["Python", "SQL", "SQLite", "Git", "Agile"],
    github: "https://github.com/benduse/benduse-PEP-PythonSQL-Project",
    liveDemo: "",
  },
  {
    id: "lingoharbor",
    title: "LingoHarbor",
    category: ["Frontend", "React"],
    tagline:
      "A Kinyarwanda flashcard app with fuzzy answer matching and streak tracking, built to make daily practice stick.",
    problem:
      "Studying a low-resource language like Kinyarwanda means there's no shortage of good flashcard apps built for it. LingoHarbor is a purpose-built study tool with a review system that rewards consistency over cramming.",
    role: "Designed and built the full frontend, including the matching algorithm and progress-tracking system.",
    architecture: "React → component-based quiz engine → local progress state",
    features: [
      "Fuzzy answer matching, so close-but-imperfect answers still count as correct",
      "Streak tracking to encourage daily review sessions",
      "A 'mastered cards' system that retires cards once they're reliably known",
      "Fully interactive, component-driven quiz UI",
    ],
    challenges: [
      {
        challenge:
          "Exact-string matching penalized users for minor typos or accent differences.",
        solution:
          "Implemented fuzzy string matching so answers within a small edit-distance threshold are accepted, without letting genuinely wrong answers slip through.",
      },
      {
        challenge:
          "Keeping review sessions from feeling repetitive as the deck grew.",
        solution:
          "Added a mastered-cards system that removes well-known cards from regular rotation, keeping sessions focused on what still needs practice.",
      },
    ],
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/benduse/lingoharbor",
    liveDemo: "https://www.youtube.com/watch?v=bEYOFT97ZTc&t=1s",
  },
  {
    id: "easyread",
    title: "EasyRead",
    category: ["Frontend", "Data", "React"],
    tagline:
      "A reading-data dashboard that pulls live catalog data from the Open Library API and visualizes it.",
    problem:
      "Raw API data is hard to reason about at a glance. EasyRead pulls book and catalog data from the Open Library API and turns it into a dashboard with dynamic stats and charts, so patterns in the data are visible rather than buried in JSON.",
    role: "Built the frontend, API integration layer, and the chart and stat components from scratch.",
    architecture: "React → Open Library API → Recharts visualizations",
    features: [
      "Live data fetched from the Open Library API",
      "Dynamic, computed stats derived from the fetched dataset",
      "Recharts-based visualizations for at-a-glance trends",
      "A card-catalog-inspired CSS design system tying the visual identity to the subject matter",
    ],
    challenges: [
      {
        challenge:
          "API responses were inconsistent in shape and occasionally incomplete.",
        solution:
          "Added normalization logic between the API layer and the UI so components always receive a predictable shape, regardless of gaps in the source data.",
      },
    ],
    technologies: ["React", "JavaScript", "REST API", "Recharts", "CSS"],
    github: "https://github.com/benduse/easyread",
    liveDemo: "https://www.youtube.com/watch?v=eP10vbq01_k",
  },
  {
    id: "venivici",
    title: "VeniVici",
    category: ["Frontend", "React"],
    tagline:
      "A country-discovery app that turns exploring world geography and culture into a game.",
    problem:
      "Learning about new countries usually means passively reading a list. VeniVici turns it into an active discovery loop, with a ban list and history panel that track what you've already explored.",
    role: "Built the full frontend, including the discovery logic and layout system.",
    architecture: "React → external country data API → three-column layout",
    features: [
      "Ban list so users can exclude countries they've already covered",
      "History panel tracking previously discovered countries",
      "Three-column responsive layout",
    ],
    challenges: [],
    technologies: ["React", "JavaScript", "REST API", "CSS"],
    github: "https://github.com/benduse/venivici",
    liveDemo: "https://www.youtube.com/watch?v=nT33Tb4CBiU&t=22s",
  },
  {
    id: "moodhabit",
    title: "MoodHabit",
    category: ["Full Stack", "React"],
    tagline:
      "A mood-adaptive habit tracker that adjusts its suggestions based on how you're actually feeling that day.",
    problem:
      "Most habit trackers treat every day the same, which makes them easy to abandon on hard days. MoodHabit logs mood alongside habits and uses a small rule engine to suggest realistic, scaled-down goals when things are harder than usual.",
    role: "Designed the data model, built the rule engine that maps mood to habit suggestions, and implemented the UI and animation layer.",
    architecture:
      "React 18 + TypeScript → local rule engine → localStorage / Supabase dual data layer",
    features: [
      "Rule engine that adapts daily habit suggestions based on logged mood",
      "Dual data layer: works offline with localStorage, syncs to Supabase when available",
      "Typed data models across the app with TypeScript",
      "Motion and micro-interactions built with Framer Motion",
      "Tailwind-based responsive layout",
    ],
    challenges: [
      {
        challenge:
          "Habit logic needed to feel personal without becoming a black box.",
        solution:
          "Wrote the suggestion logic as an explicit, readable rule engine rather than a model, so behavior stays predictable and easy to extend.",
      },
      {
        challenge:
          "Supporting both offline use and cross-device sync without duplicating logic.",
        solution:
          "Built a dual data layer that reads/writes through a shared interface, backed by localStorage or Supabase depending on connection state.",
      },
    ],
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
    ],
    github: "coming soon",
    liveDemo: "Coming soon",
  },
  {
    id: "ejoapp",
    title: "EjoApp",
    category: ["Frontend", "JavaScript"],
    tagline:
      "A flashcard app for Kinyarwanda learners, built to make daily practice stick.",
    problem:
      "Most flashcard apps don't account for the unique challenges of learning Kinyarwanda, leading to ineffective study sessions.",
    role: "Designed the data model, implemented the flashcard review algorithm, and built the UI.",
    architecture: "JavaScript (Vanilla)  → localStorage for offline access",
    features: [
      "Intuitive UI for reviewing flashcards with spaced repetition",
      "Offline access with localStorage",
      "flashcards with Kinyarwanda words and phrases",
    ],
    challenges: [
      {
        challenge:
          "Flashcard content needed to be engaging and contextually relevant.",
        solution:
          "Collaborated with Kinyarwanda learners to understand their needs and curate a diverse set of flashcards that reflect real-world usage.",
      },
      {
        challenge: "Heavy reliance on user-generated content for flashcards.",
        solution:
          "Implemented a robust content moderation system to ensure quality and relevance of user-generated flashcards.",
      },
    ],
    technologies: ["JSON", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/benduse/ejo-app",
    liveDemo: "Coming soon",
  },
];

export const filters = ["All", "Frontend", "Full Stack", "Backend", "Data", "JavaScript", "React", "Python"];
