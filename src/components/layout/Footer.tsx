import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-stone-600 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>
          {profile.name} · {profile.role}
        </p>
        <a
          href="#top"
          className="font-medium text-stone-950 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-4 focus:ring-offset-white"
        >
          Back to top
        </a>
      </div>
    </footer>
  );
}
