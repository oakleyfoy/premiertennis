type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  theme?: "dark" | "light";
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  theme = "dark",
  align = "left",
}: SectionHeadingProps) {
  const eyebrowClass = "text-[#C8A96A]";
  const titleClass = theme === "light" ? "text-[#111827]" : "text-white";
  const descriptionClass =
    theme === "light" ? "text-[#1F2933]/95" : "text-slate-300";
  const wrapperClass =
    align === "center"
      ? "mx-auto max-w-3xl space-y-5 text-center"
      : "max-w-3xl space-y-5";

  return (
    <div className={wrapperClass}>
      <p
        className={`text-xs font-semibold uppercase tracking-[0.22em] ${eyebrowClass}`}
      >
        {eyebrow}
      </p>
      {align === "center" ? (
        <div className="ptl-divider" aria-hidden />
      ) : (
        <div className="h-px w-12 bg-[#C8A96A]/55" aria-hidden />
      )}
      <h2
        className={`font-display text-[2.05rem] font-semibold leading-[1.12] tracking-[-0.01em] sm:text-[2.4rem] lg:text-[2.65rem] ${titleClass} ${align === "left" ? "max-w-3xl" : ""}`}
      >
        {title}
      </h2>
      <p className={`max-w-2xl text-base leading-8 sm:text-lg ${descriptionClass} ${align === "center" ? "mx-auto" : ""}`}>
        {description}
      </p>
    </div>
  );
}
