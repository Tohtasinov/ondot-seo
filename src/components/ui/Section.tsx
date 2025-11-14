export default function Section(
  {
    id,
    className = "",
    children,
    tone = "default",      // default | subtle | contrast
    spacing = "normal",    // compact | normal | roomy
  }: {
    id?: string;
    className?: string;
    children: React.ReactNode;
    tone?: "default" | "subtle" | "contrast";
    spacing?: "compact" | "normal" | "roomy";
  }
) {
  const toneCls =
    tone === "subtle" ? "bg-slate-50"
    : tone === "contrast" ? "bg-gradient-to-b from-white to-slate-50"
    : "bg-white";

  const spaceCls =
    spacing === "compact" ? "py-10"
    : spacing === "roomy" ? "py-24 md:py-28"
    : "py-14 md:py-20";

  return <section id={id} className={`${toneCls} ${spaceCls} ${className}`}>{children}</section>;
}
