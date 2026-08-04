interface SectionHeadingProps {
  badge: string;
  title: string;
  gradient?: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  gradient = "",
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-20 max-w-3xl ${
        align === "center"
          ? "mx-auto text-center"
          : "text-left"
      }`}
    >
      <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
        {badge}
      </span>

      <h2 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
        {title}

        {gradient && (
          <span className="gradient-text">
            {" "}
            {gradient}
          </span>
        )}
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-400">
        {description}
      </p>
    </div>
  );
}
