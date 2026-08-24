import {
  Zap,
  Smartphone,
  Search,
  Bot,
  ShieldCheck,
  Headphones,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Websites",
    description:
      "Every website is optimized for speed, performance and user experience to keep visitors engaged.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: Smartphone,
    title: "Mobile First Design",
    description:
      "Beautiful responsive websites that work perfectly on desktop, tablet and mobile devices.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Search,
    title: "SEO Optimized",
    description:
      "Built with technical SEO best practices to improve visibility and search engine rankings.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description:
      "Automate repetitive business tasks using AI, APIs and smart workflow integrations.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Scalable",
    description:
      "Modern development practices with secure architecture that grows alongside your business.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Headphones,
    title: "Long-Term Support",
    description:
      "I don't just launch websites—I provide ongoing updates, maintenance and technical support.",
    color: "from-blue-500 to-indigo-500",
  },
];

export default function WhyChooseMe() {
  return (
    <section
      id="why-me"
      className="section relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[130px]" />

        <div className="absolute right-[-180px] top-1/3 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[130px]" />

        <div className="absolute bottom-[-120px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />
      </div>

      <div className="container-custom">

        {/* Section Header */}

        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">

          <span className="inline-flex items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:px-5 sm:text-sm">
            Why Choose Me
          </span>

          <h2 className="mt-6 w-full text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            More Than a{" "}
            <span className="gradient-text">
              Website Developer
            </span>
          </h2>

          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Whether you need a modern website, SEO strategy,
            advertising campaign or AI automation, I'm ready to
            help your business grow.
          </p>
        </div>

        {/* Feature Grid */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
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
                  sm:p-8
                "
              >

                {/* Hover Glow */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${feature.color}
                    opacity-0
                    blur-3xl
                    transition-opacity
                    duration-500
                    group-hover:opacity-[0.08]
                  `}
                />

                {/* Icon */}

                <div
                  className={`
                    relative
                    mb-7
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${feature.color}
                    text-white
                    shadow-lg
                    transition-all
                    duration-500
                    group-hover:scale-105
                    group-hover:rotate-2
                  `}
                >
                  <Icon size={29} />
                </div>

                {/* Content */}

                <div className="relative">

                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                    {feature.description}
                  </p>

                </div>

                {/* Bottom Accent */}

                <div className="relative mt-auto pt-7">

                  <div
                    className={`
                      h-1
                      w-8
                      rounded-full
                      bg-gradient-to-r
                      ${feature.color}
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

        {/* Bottom CTA */}

        <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center rounded-[28px] border border-white/10 bg-gradient-to-r from-blue-600/[0.08] via-violet-600/[0.08] to-cyan-600/[0.08] p-7 text-center backdrop-blur-xl sm:mt-16 sm:p-10">

          <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Let's Build Something Amazing Together
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Whether you need a modern website, SEO strategy,
            advertising campaign or AI automation, let's create
            a digital solution designed around your business.
          </p>

          <Link
            href="/contact"
            className="btn-primary mt-7 inline-flex items-center justify-center gap-3"
          >
            Start Your Project
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}
