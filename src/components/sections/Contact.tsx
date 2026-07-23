import { profile } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-28 bg-stone-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="For roles, collaborations, or a deeper look at the CV."
          description="The public contact options below are limited to confirmed links from the CV."
          tone="dark"
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {profile.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="rounded-full border border-stone-700 px-5 py-3 text-sm font-semibold text-white transition hover:border-teal-400 hover:text-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-4 focus:ring-offset-stone-950"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
