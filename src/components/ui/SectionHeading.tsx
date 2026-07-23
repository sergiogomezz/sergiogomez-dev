type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
}: SectionHeadingProps) {
  const titleClass =
    tone === "dark" ? "text-white" : "text-stone-950";
  const descriptionClass =
    tone === "dark" ? "text-stone-300" : "text-stone-600";

  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${titleClass}`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 ${descriptionClass}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
