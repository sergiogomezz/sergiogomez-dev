import { navigation, profile } from "@/data/portfolio";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-stone-50/90 backdrop-blur">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 lg:px-8"
      >
        <a
          href="#top"
          className="text-base font-semibold tracking-tight text-stone-950"
        >
          {profile.name}
        </a>
        <div className="hidden items-center gap-x-4 text-sm font-medium text-stone-700 md:flex">
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
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-4 py-2 text-stone-950 transition hover:border-teal-700 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50"
          >
            CV
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/cv_sergiogomez.pdf"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-stone-300 px-3.5 py-2 text-sm font-medium text-stone-950 transition hover:border-teal-700 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50"
          >
            CV
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-stone-300 px-3.5 py-2 text-sm font-medium text-stone-950 transition marker:content-none hover:border-teal-700 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-stone-50 [&::-webkit-details-marker]:hidden">
              Menu
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-4 w-4 transition group-open:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </summary>
            <div className="absolute right-0 top-full mt-3 w-48 rounded-2xl border border-stone-200 bg-white p-2 text-sm font-medium text-stone-700 shadow-lg">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 transition hover:bg-stone-100 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
