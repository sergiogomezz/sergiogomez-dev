import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Research and engineering work around LLM agent systems."
          description="Project content is intentionally limited to confirmed CV facts for now."
        />

        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article
              key={project.name}
              className="border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
                    {project.type}
                  </p>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
