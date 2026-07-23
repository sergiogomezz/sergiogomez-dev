<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Instructions

This repository is Sergio Gómez Martín's personal portfolio website. Treat it as a factual, maintainable, accessible interactive CV for an AI / ML Engineer.

## Sources Of Truth

- Never invent personal, professional, educational, contact, project, or achievement information.
- Treat `public/cv_sergiogomez.pdf` and the files in `docs/` as the source of truth for personal content.
- If information is missing, mark it as `TODO` instead of filling gaps from assumptions.
- Do not copy CV text word for word into public-facing copy unless explicitly requested.

## Engineering Standards

- Prefer small reusable components with clear responsibilities.
- Avoid unnecessary dependencies, abstractions, hooks, utilities, and framework additions.
- Keep TypeScript strict and resolve type issues instead of bypassing them.
- Maintain responsive and accessible design by default.
- Explain important architectural decisions in docs or implementation notes when they affect future work.
- Do not modify unrelated files.

## Validation

- Before completing implementation tasks, run:
  - `npm run lint`
  - `npm run build`
- Report any errors or warnings clearly.
