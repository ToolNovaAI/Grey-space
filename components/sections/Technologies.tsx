import { technologies } from "@/constants/technologies";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="section relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-32 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="container-custom">
        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Technology Stack
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Modern Tools
            <span className="gradient-text">
              {" "}For Modern Businesses
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I build websites and digital solutions using trusted,
            modern technologies that prioritize speed, scalability,
            security and long-term maintainability.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.id}
                className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-10`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${tech.color}`}
                >
                  <Icon
                    size={30}
                    className="text-white"
                  />
                </div>

                {/* Category */}
                <span className="text-xs uppercase tracking-widest text-cyan-400">
                  {tech.category}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {tech.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-slate-400">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-600/10 p-10 backdrop-blur-xl">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">
                15+
              </h3>

              <p className="mt-2 text-slate-400">
                Technologies
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">
                Modern
              </h3>

              <p className="mt-2 text-slate-400">
                Development
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">
                SEO
              </h3>

              <p className="mt-2 text-slate-400">
                Optimized
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl font-bold text-white">
                100%
              </h3>

              <p className="mt-2 text-slate-400">
                Responsive
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
