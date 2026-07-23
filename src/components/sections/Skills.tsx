import { languages, skillGroups } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills grouped by practical use."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              aria-labelledby={`skill-${group.title}`}
              className="border-t border-stone-200 pt-6"
            >
              <h3
                id={`skill-${group.title}`}
                className="text-xl font-semibold text-stone-950"
              >
                {group.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-stone-100 px-3 py-1.5 text-sm font-medium text-stone-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section aria-labelledby="languages-title" className="mt-12">
          <h3
            id="languages-title"
            className="text-xl font-semibold text-stone-950"
          >
            Languages
          </h3>
          <dl className="mt-5 grid gap-3 sm:grid-cols-3">
            {languages.map((item) => (
              <div
                key={item.language}
                className="flex items-center justify-between border border-stone-200 bg-stone-50 px-4 py-3"
              >
                <dt className="font-medium text-stone-900">{item.language}</dt>
                <dd className="text-sm text-stone-600">{item.level}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </section>
  );
}
