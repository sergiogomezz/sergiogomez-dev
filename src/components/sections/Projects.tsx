import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18A10.9 10.9 0 0 1 12 6.12c.98 0 1.95.13 2.87.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.07.79 2.16v3.21c0 .31.21.68.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M7 4h9v9M16 4 8 12" />
      <path d="M13 10v5H4V6h5" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Research and engineering work."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                      {project.type}
                    </p>
                    {project.status ? (
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">
                        {project.status}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-stone-950">
                    {project.name}
                  </h3>
                </div>
                <p className="text-sm font-medium text-stone-500">
                  {project.dates}
                </p>
              </div>
              <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600">
                {project.summary}
              </p>
              <ul className="mt-6 grid gap-3 text-base leading-7 text-stone-700 md:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="border-t border-stone-200 pt-3">
                    {highlight}
                  </li>
                ))}
              </ul>
              {project.tags?.length ? (
                <ul
                  aria-label={`${project.name} topics`}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
              <div className="mt-8 flex flex-wrap gap-3">
                {project.websiteUrl ? (
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-white"
                  >
                    Visit {project.name.split(":")[0]}
                    <ExternalLinkIcon />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
                {project.repositoryUrl ? (
                  <a
                    href={project.repositoryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-white ${
                      project.websiteUrl
                        ? "border border-stone-300 text-stone-950 hover:border-teal-700 hover:text-teal-700"
                        : "bg-stone-950 text-white hover:bg-teal-700"
                    }`}
                  >
                    <GitHubIcon />
                    View on GitHub
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
