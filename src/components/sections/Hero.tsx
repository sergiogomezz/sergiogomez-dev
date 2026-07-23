import { profile } from "@/data/portfolio";

export function Hero() {
  const secondaryLinks = profile.links.filter((link) => link.id !== "cv");

  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-6xl items-center gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.25fr_0.75fr] lg:px-8"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          {profile.location}
        </p>
        <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>
        <p className="mt-5 text-2xl font-medium text-stone-800">
          {profile.role}
        </p>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-600">
          {profile.summary}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-stone-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50"
          >
            View projects
          </a>
          <a
            href="/cv_sergiogomez.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-950 shadow-sm transition hover:border-teal-700 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50"
          >
            Download CV
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-stone-600">
          {secondaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="underline decoration-stone-300 underline-offset-4 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50"
            >
              {link.label}
              {link.external ? (
                <span className="sr-only"> (opens in a new tab)</span>
              ) : null}
            </a>
          ))}
        </div>
      </div>

      <aside className="border-l border-stone-200 pl-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
          Focus
        </p>
        <ul className="mt-5 space-y-4">
          {profile.focusAreas.map((area) => (
            <li
              key={area}
              className="border-b border-stone-200 pb-4 text-lg font-medium text-stone-900 last:border-b-0"
            >
              {area}
            </li>
          ))}
        </ul>
      </aside>
    </section>
  );
}
