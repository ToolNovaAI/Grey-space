import { technologies } from "@/constants/technologies";

export default function Technologies() {
  return (
    <section
      id="technologies"
      className="section relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-32 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

        <div className="absolute right-[-180px] bottom-20 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.04] blur-[120px]" />
      </div>

      <div className="container-custom">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">

          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:px-5 sm:text-sm">
            Technology Stack
          </span>

          {/* Heading */}
          <h2 className="mt-6 w-full text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Modern Tools{" "}
            <span className="gradient-text">
              For Modern Businesses
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I build websites and digital solutions using trusted,
            modern technologies that prioritize speed, scalability,
            security and long-term maintainability.
          </p>
        </div>

        {/* =====================================================
            TECHNOLOGY GRID
        ===================================================== */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">

          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <article
                key={tech.id}
                className="
                  glass
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  p-6
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-white/[0.045]
                  sm:p-7
                "
              >

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${tech.color}
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.08]
                  `}
                />

                {/* =================================================
                    ICON
                ================================================= */}

                <div
                  className={`
                    relative
                    mb-6
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${tech.color}
                    shadow-lg
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:rotate-2
                  `}
                >
                  <Icon
                    size={29}
                    className="text-white"
                  />
                </div>

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative">

                  {/* Category */}
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    {tech.category}
                  </span>

                  {/* Title */}
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {tech.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                    {tech.description}
                  </p>

                </div>

                {/* Bottom Accent */}
                <div
                  className={`
                    relative
                    mt-auto
                    pt-7
                  `}
                >
                  <div
                    className={`
                      h-1
                      w-8
                      rounded-full
                      bg-gradient-to-r
                      ${tech.color}
                      opacity-60
                      transition-all
                      duration-500
                      group-hover:w-14
                      group-hover:opacity-100
                    `}
                  />
                </div>

              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM STATS
        ===================================================== */}

        <div className="mt-12 overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-r from-blue-600/[0.08] via-violet-600/[0.08] to-cyan-600/[0.08] p-6 backdrop-blur-xl sm:mt-16 sm:p-8 lg:mt-20 lg:p-10">

          <div className="grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">

            {/* Stat 1 */}
            <div className="flex flex-col items-center px-4 py-5 text-center md:py-2">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                15+
              </h3>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Technologies
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center px-4 py-5 text-center md:py-2">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Modern
              </h3>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Development
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center px-4 py-5 text-center md:py-2">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                SEO
              </h3>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Optimized
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center px-4 py-5 text-center md:py-2">
              <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                100%
              </h3>

              <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                Responsive
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
