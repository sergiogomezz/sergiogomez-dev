import { navigation, profile } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-8"
      >
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-stone-950"
        >
          {profile.name}
        </a>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-medium text-stone-700">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cv_sergiogomez.pdf"
            className="rounded-full border border-stone-300 px-4 py-2 text-stone-950 transition hover:border-teal-700 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50"
          >
            CV
          </a>
        </div>
      </nav>
    </header>
  );
}
