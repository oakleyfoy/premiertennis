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
  const eyebrowClass =
    theme === "light" ? "text-[#0b1f57]" : "text-[#c7e3fb]";
  const titleClass = theme === "light" ? "text-[#121826]" : "text-white";
  const descriptionClass =
    theme === "light" ? "text-slate-600" : "text-slate-300";
  const wrapperClass =
    align === "center" ? "mx-auto max-w-3xl space-y-4 text-center" : "max-w-3xl space-y-4";

  return (
    <div className={wrapperClass}>
      <p className={`text-sm font-semibold tracking-[0.24em] uppercase ${eyebrowClass}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-3xl tracking-tight sm:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <p className={`text-lg leading-8 ${descriptionClass}`}>{description}</p>
    </div>
  );
}
