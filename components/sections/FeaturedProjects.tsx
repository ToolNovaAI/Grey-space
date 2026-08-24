import Link from "next/link";
import { projects } from "@/constants/projects";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";

export default function FeaturedProjects() {
  const featured = projects.filter(
    (project) => project.featured
  );

  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[130px]" />

        <div className="absolute right-[-180px] top-1/3 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[130px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/[0.05] blur-[130px]" />
      </div>

      <div className="container-custom">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">

          <span className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-blue-400 sm:px-5 sm:text-sm">
            Featured Projects
          </span>

          <h2 className="mt-6 text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Real Projects.{" "}
            <span className="gradient-text">
              Real Results.
            </span>
          </h2>

          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Explore some of the projects I've designed and developed
            using modern technologies, premium UI/UX and
            performance-focused architecture.
          </p>
        </div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">

          {featured.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.id}
                className="
                  glass
                  group
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-white/20
                  hover:bg-white/[0.045]
                "
              >

                {/* =================================================
                    PROJECT PREVIEW
                ================================================= */}

                <div
                  className={`
                    relative
                    flex
                    h-52
                    shrink-0
                    items-center
                    justify-center
                    overflow-hidden
                    bg-gradient-to-br
                    ${project.gradient}
                    sm:h-56
                  `}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 transition duration-500 group-hover:bg-black/10" />

                  {/* Decorative Glow */}
                  <div className="absolute h-40 w-40 rounded-full bg-white/10 blur-[70px] transition-transform duration-700 group-hover:scale-150" />

                  {/* Project Identity */}
                  <div className="relative z-10 flex flex-col items-center text-center">

                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-xl backdrop-blur-xl transition-transform duration-500 group-hover:scale-105 sm:h-20 sm:w-20 sm:rounded-3xl">
                      <Icon
                        size={38}
                        className="sm:h-10 sm:w-10"
                      />
                    </div>

                    <h3 className="px-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}

                <div className="flex flex-1 flex-col p-6 sm:p-7">

                  {/* Category */}
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-400 sm:text-sm">
                    {project.category}
                  </span>

                  {/* Description */}
                  <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-[15px]">
                    {project.description}
                  </p>

                  {/* =================================================
                      TECHNOLOGIES
                  ================================================= */}

                  <div className="mt-6">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-slate-500">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-white/20 hover:bg-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      HIGHLIGHTS
                  ================================================= */}

                  <div className="mt-5">
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-blue-400/10 bg-blue-500/[0.08] px-3 py-1.5 text-xs text-blue-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* =================================================
                      BUTTONS
                  ================================================= */}

                  <div className="mt-auto flex gap-3 pt-8">

                    {/* Live Demo */}
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group/live
                        flex
                        min-h-11
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-gradient-to-r
                        from-blue-600
                        via-violet-600
                        to-cyan-500
                        px-4
                        py-3
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-blue-500/10
                        transition-all
                        duration-300
                        hover:-translate-y-0.5
                        hover:shadow-blue-500/20
                      "
                    >
                      <ExternalLink size={17} />

                      <span>
                        Live Demo
                      </span>

                      <ArrowUpRight
                        size={15}
                        className="transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                      />
                    </Link>

                    {/* GitHub */}
                    {project.githubUrl !== "#" && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} on GitHub`}
                        className="
                          flex
                          min-h-11
                          w-11
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/10
                          bg-white/[0.04]
                          text-slate-300
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:border-white/20
                          hover:bg-white/[0.08]
                          hover:text-white
                        "
                      >
                        <Github size={19} />
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
        ===================================================== */}

        <div className="mt-12 flex flex-col items-center text-center sm:mt-16">

          <p className="mb-5 text-sm text-slate-500">
            Have a project you'd like to build?
          </p>

          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-3"
          >
            Let's Build Your Project

            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
