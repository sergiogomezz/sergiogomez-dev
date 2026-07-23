# Project Overview

## Purpose

This project is a personal portfolio website for Sergio Gómez Martín, an AI / ML Engineer based in Madrid, Spain. The site should function as an interactive CV: easier to browse than a PDF, but grounded in the same factual professional record.

The formal CV is available at `public/cv_sergiogomez.pdf` and should remain directly accessible from the website.

## Audience

- Recruiters and hiring managers evaluating Sergio for AI / ML engineering roles.
- Engineering teams looking for evidence of applied AI, data pipeline, and software engineering experience.
- Technical collaborators interested in Sergio's projects, skills, and working background.
- Visitors who need access to the downloadable CV.

## Goals

- Present Sergio's AI / ML engineering profile clearly and accurately.
- Highlight experience with LLM agents, machine learning, deep learning, data pipelines, and applied AI systems.
- Provide a structured, navigable version of the CV.
- Make the PDF CV easy to access.
- Keep the first version simple, maintainable, responsive, and accessible.

## Non-Goals

- Do not build a blog, CMS, authentication, dashboard, or complex content management workflow for v1.
- Do not add animations, visual effects, or dependencies before the core content and structure are defined.
- Do not replace the PDF CV with generated content.
- Do not invent personal information, testimonials, metrics, or project details.

## Scope For Version 1

- Single-page portfolio or small App Router structure, depending on final content needs.
- Sections for profile summary, experience, projects, education, skills, languages, awards, and contact.
- Direct link to `public/cv_sergiogomez.pdf`.
- Static content managed in local TypeScript data files.
- Reusable presentational components once the final UI is implemented.

## Stack

- Next.js 16.2.10 using the App Router.
- React 19.2.4.
- TypeScript 5 with strict mode enabled.
- Tailwind CSS 4 via `@tailwindcss/postcss`.
- ESLint 9 with `eslint-config-next` core web vitals and TypeScript rules.
- Static assets served from `public/`.

## Current Setup

- `src/app/layout.tsx` defines the root layout, imports global CSS, configures Geist fonts with `next/font/google`, and exports static metadata.
- `src/app/page.tsx` is still the default create-next-app homepage.
- `src/app/globals.css` imports Tailwind CSS and defines global theme variables.
- `public/cv_sergiogomez.pdf` contains the factual CV source.
- `next.config.ts` currently contains no custom Next.js configuration.
- `tsconfig.json` enables strict TypeScript, uses bundler module resolution, and maps `@/*` to `src/*`.
- `eslint.config.mjs` uses the Next.js ESLint presets.
- `package.json` defines the local scripts: `dev`, `build`, `start`, and `lint`.

## Proposed Architecture

Use the App Router for pages and layouts. Keep personal content separate from components so facts can be reviewed and updated without touching rendering logic.

Recommended future structure:

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    layout/
    sections/
    ui/
  data/
  types/
```

- `src/components/layout/`: shared page-level structure such as shell, header, footer, and navigation when implemented.
- `src/components/sections/`: portfolio-specific sections such as experience, projects, skills, education, and contact when implemented.
- `src/components/ui/`: small reusable UI primitives such as buttons, links, tags, and cards when there is a real need.
- `src/data/`: factual structured content derived from the CV and docs.
- `src/types/`: shared TypeScript types for portfolio content.

Architectural rule: introduce files only when they support implemented behavior. Empty directories are acceptable as a foundation, but placeholder components should not be added just to occupy the structure.
