import Link from "next/link";
import { services } from "@/constants/services";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="section relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[130px]" />

        <div className="absolute right-[-180px] bottom-20 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <div className="container-custom">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">

          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:px-5 sm:text-sm">
            Services
          </span>

          {/* Heading */}
          <h2 className="mt-6 w-full text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Complete Digital{" "}
            <span className="gradient-text">
              Growth Solutions
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I help businesses build, market and grow their online presence
            through premium websites, SEO, paid advertising, AI automation
            and long-term technical support.
          </p>
        </div>

        {/* =====================================================
            SERVICES GRID
        ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
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

                {/* =================================================
                    HOVER GLOW
                ================================================= */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-br
                    ${service.color}
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
                    mb-7
                    flex
                    h-16
                    w-16
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-gradient-to-br
                    ${service.color}
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

                {/* =================================================
                    CONTENT
                ================================================= */}

                <div className="relative">

                  <h3 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                    {service.description}
                  </p>

                </div>

                {/* =================================================
                    LEARN MORE
                ================================================= */}

                <div className="relative mt-auto pt-7">

                  <Link
                    href="/contact"
                    className="
                      group/link
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-blue-400
                      transition-all
                      duration-300
                      hover:text-white
                    "
                  >
                    <span>
                      Learn More
                    </span>

                    <ArrowUpRight
                      size={17}
                      className="
                        transition-transform
                        duration-300
                        group-hover/link:-translate-y-0.5
                        group-hover/link:translate-x-0.5
                      "
                    />
                  </Link>

                  {/* Bottom Accent */}
                  <div
                    className={`
                      mt-5
                      h-1
                      w-8
                      rounded-full
                      bg-gradient-to-r
                      ${service.color}
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
            BOTTOM CTA
        ===================================================== */}

        <div className="mx-auto mt-12 flex w-full max-w-2xl flex-col items-center text-center sm:mt-16 lg:mt-20">

          <p className="text-sm leading-6 text-slate-500 sm:text-base">
            Looking for a custom solution tailored to your business?
          </p>

          <Link
            href="/contact"
            className="btn-primary mt-5 inline-flex items-center justify-center gap-3"
          >
            Let's Discuss Your Project

            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
