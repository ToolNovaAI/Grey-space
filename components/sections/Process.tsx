import {
  Search,
  PenTool,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "I understand your business, goals, audience and project requirements before writing a single line of code.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Strategy & Design",
    description:
      "A premium UI/UX is planned with performance, SEO and conversion in mind.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Your website is built using modern technologies with responsive layouts, speed optimization and clean code.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Growth",
    description:
      "After launch, I help optimize your website, SEO, advertising and digital presence for long-term growth.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="section relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[130px]" />

        <div className="absolute right-[-180px] top-1/3 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[130px]" />

        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />
      </div>

      <div className="container-custom">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-violet-400 sm:px-5 sm:text-sm">
            My Process
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            From Idea{" "}
            <span className="gradient-text">
              To Launch.
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            A simple, transparent process designed to turn your idea
            into a polished digital experience that is built to grow.
          </p>
        </div>

        {/* =====================================================
            PROCESS GRID
        ===================================================== */}

        <div className="relative">

          {/* Connecting Line - Desktop */}
          <div className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-[72px] hidden h-px bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-orange-500/20 xl:block" />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-5">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="
                    glass
                    group
                    relative
                    flex
                    h-full
                    flex-col
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
                      NUMBER + ICON
                  ================================================= */}

                  <div className="relative mb-7 flex items-center justify-between">

                    {/* Icon */}
                    <div
                      className={`
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        ${step.color}
                        text-white
                        shadow-lg
                        transition-transform
                        duration-500
                        group-hover:scale-105
                        group-hover:rotate-2
                      `}
                    >
                      <Icon size={29} />
                    </div>

                    {/* Step Number */}
                    <span className="text-4xl font-black tracking-tight text-white/[0.06] transition-colors duration-500 group-hover:text-white/[0.1]">
                      {step.number}
                    </span>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}

                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                    {step.description}
                  </p>

                  {/* =================================================
                      BOTTOM ACCENT
                  ================================================= */}

                  <div className="mt-auto pt-7">

                    <div
                      className={`
                        h-1
                        w-10
                        rounded-full
                        bg-gradient-to-r
                        ${step.color}
                        opacity-60
                        transition-all
                        duration-500
                        group-hover:w-16
                        group-hover:opacity-100
                      `}
                    />

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            BOTTOM MESSAGE
        ===================================================== */}

        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center text-center sm:mt-16">

          <p className="text-sm leading-6 text-slate-500 sm:text-base">
            Clear communication. Clean execution. No unnecessary
            complications.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
          >
            Start your project
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </div>

      </div>
    </section>
  );
}    description:
      "After deployment, I help improve SEO, marketing, automation and long-term performance.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="section relative overflow-hidden">
      <div className="container-custom">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            My Process
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            A Simple Process
            <span className="gradient-text"> With Powerful Results</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every successful project follows a structured workflow that
            keeps communication clear, development efficient and results
            focused on your business goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="glass group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}
                  >
                    <Icon size={30} className="text-white" />
                  </div>

                  <span className="text-5xl font-bold text-white/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
