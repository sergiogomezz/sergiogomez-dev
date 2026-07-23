# sergiogomez.dev

Personal portfolio website for Sergio Gómez Martín, an AI / ML Engineer. The project is intended to become an interactive CV: a structured, accessible website that presents Sergio's professional profile while keeping the formal CV available as a PDF.

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

Before deploying, copy `.env.example` to the environment configuration used by
your hosting provider and set `NEXT_PUBLIC_SITE_URL` to the final public origin,
for example `https://your-domain.com`. This value is used for the canonical URL,
Open Graph image, sitemap, and robots file.

Run validation:

```bash
npm run lint
npm run build
```

## Current Project Status

The first portfolio version is implemented as a statically rendered single page.

- The homepage includes profile, projects, experience, skills, education, awards, and contact sections.
- Portfolio content is maintained in `src/data/portfolio.ts`.
- The Elvex research project links to its public `elvex-v2` repository and is ready for a future project website URL.
- Responsive navigation, metadata, structured data, an Open Graph image, and crawler rules are included.
- The CV and files under `docs/` remain the source of truth for personal content.
- The production domain and Elvex website URL are still to be confirmed.
