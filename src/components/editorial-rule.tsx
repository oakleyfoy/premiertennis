type EditorialRuleProps = {
  /** Dark video/navy panels — ivory-white whisper */
  surface: "dark" | "light";
  align?: "center" | "start";
  className?: string;
};

/**
 * Thin institutional horizontal rule (~118–132px). Gradient fades at ends.
 */
export function EditorialRule({
  surface,
  align = "center",
  className = "",
}: EditorialRuleProps) {
  const via =
    surface === "dark"
      ? "via-[rgba(255,252,246,0.24)]"
      : "via-[#C8A96A]/38";

  const widthClass =
    surface === "light" ? "w-[124px] sm:w-[138px]" : "w-[118px] sm:w-[132px]";

  return (
    <div
      aria-hidden
      className={`h-px shrink-0 bg-gradient-to-r from-transparent to-transparent ${via} ${widthClass} ${align === "center" ? "mx-auto" : ""} ${className}`}
    />
  );
}
