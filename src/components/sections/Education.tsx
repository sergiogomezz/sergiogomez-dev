import { awards, education } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="scroll-mt-28 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="AI specialization with software engineering and business foundations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.degree}
              className="border border-stone-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-stone-500">
                {item.dates}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-stone-950">
                {item.degree}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">
                {item.institution}
              </p>
              <p className="mt-1 text-sm text-stone-500">{item.location}</p>
              <ul className="mt-5 space-y-2 text-sm leading-6 text-stone-700">
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section aria-labelledby="awards-title" className="mt-12">
          <h3 id="awards-title" className="text-xl font-semibold text-stone-950">
            Award
          </h3>
          <div className="mt-5 grid gap-4">
            {awards.map((award) => (
              <article
                key={award.title}
                className="border-l-4 border-teal-700 bg-white px-5 py-4 shadow-sm"
              >
                <h4 className="font-semibold text-stone-950">{award.title}</h4>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  {award.detail}
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
