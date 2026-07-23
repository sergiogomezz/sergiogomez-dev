import Image from "next/image";
import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Applied AI, data systems, and client-facing engineering work."
        />

        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.role}`}
              className="grid gap-6 border-t border-stone-200 pt-8 lg:grid-cols-[0.35fr_0.65fr]"
            >
              <div>
                {item.companyLogo ? (
                  <div className="mb-5 flex h-12 w-32 items-center">
                    <Image
                      src={item.companyLogo.src}
                      alt=""
                      width={128}
                      height={48}
                      className="h-12 w-32 object-contain object-left"
                    />
                  </div>
                ) : null}
                <p className="text-sm font-medium text-stone-500">
                  {item.dates}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950">
                  {item.role}
                </h3>
                <p className="mt-2 text-base text-stone-700">
                  {item.company} · {item.location}
                </p>
              </div>
              <ul className="space-y-3 text-base leading-8 text-stone-600">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-700"
                    />
                    <span>{highlight}</span>
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
