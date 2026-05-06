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
      : "via-[#C8A96A]/28";

  return (
    <div
      aria-hidden
      className={`h-px w-[118px] shrink-0 bg-gradient-to-r from-transparent to-transparent ${via} sm:w-[132px] ${align === "center" ? "mx-auto" : ""} ${className}`}
    />
  );
}
