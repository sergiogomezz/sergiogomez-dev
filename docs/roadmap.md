# Roadmap

## Phase 0: Foundation

- Document project purpose, audience, scope, stack, and architecture.
- Extract structured factual content from the CV.
- Define initial design direction.
- Add project-specific agent instructions.
- Keep the default UI unchanged.

## Phase 1: Content Model

- Confirm missing personal content marked as `TODO`.
- Decide which contact details should be public.
- Create TypeScript types for profile, experience, projects, education, skills, languages, and awards.
- Create local data files derived from `docs/content.md`.
- Keep data factual and reviewable.

## Phase 2: First Portfolio Page

- Replace the default homepage with a simple single-page portfolio.
- Add sections for profile, experience, projects, education, skills, languages, awards, and contact.
- Add a prominent accessible link to `/cv_sergiogomez.pdf`.
- Use static rendering unless a concrete dynamic requirement appears.

## Phase 3: Design Pass

- Establish the final visual system.
- Define typography, spacing, color tokens, and reusable UI primitives.
- Validate responsive layouts on mobile and desktop.
- Improve accessibility states for links, buttons, and navigation.

## Phase 4: Project Depth

- Expand selected projects into richer case-study content if enough factual detail is available.
- Add project links, diagrams, screenshots, or demos only when confirmed.
- Avoid publishing confidential client details.

## Phase 5: Production Readiness

- Update metadata for SEO and social sharing.
- Add favicon and Open Graph assets.
- Run `npm run lint` and `npm run build`.
- Review content for factual accuracy.
- Deploy to the selected hosting platform.

## Backlog

- Decide final site domain.
- Confirm public contact details.
- Confirm whether the website should include writing or notes.
- Add analytics only if there is a clear need and privacy implications are understood.
- Consider a dedicated `/cv` route only if the direct PDF link is not enough.
