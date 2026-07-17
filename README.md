# sergiogomez.dev

Personal portfolio website for Sergio Gomez Martin, an AI / ML Engineer. The project is intended to become an interactive CV: a structured, accessible website that presents Sergio's professional profile while keeping the formal CV available as a PDF.

The CV PDF is available in `public/cv_sergiogomez.pdf`.

## Stack

- Next.js 16.2.10 with the App Router
- React 19.2.4
- TypeScript 5
- Tailwind CSS 4
- ESLint 9 with Next.js core web vitals and TypeScript rules

## Local Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open `http://localhost:3000`.

Run validation:

```bash
npm run lint
npm run build
```

## Current Project Status

The project is in foundation setup.

- The app is still based on the default create-next-app scaffold.
- Documentation has been added under `docs/`.
- The final UI has not been implemented yet.
- The CV and docs are the source of truth for portfolio content.
- Future implementation should keep the site factual, maintainable, responsive, and accessible.
