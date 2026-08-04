import Link from "next/link";
import { projects } from "@/constants/projects";
import {
  ArrowUpRight,
  Github,
  ExternalLink,
} from "lucide-react";

export default function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);

  return (
    <section
      id="projects"
      className="section relative overflow-hidden"
    >
      <div className="container-custom">

        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Featured Projects
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Real Projects.
            <span className="gradient-text">
              {" "}Real Results.
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            Here are some of the projects I've designed and developed
            using modern technologies, premium UI/UX and performance-first
            architecture.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 lg:grid-cols-3">

          {featured.map((project) => {

            const Icon = project.icon;

            return (

              <article
                key={project.id}
                className="glass group overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-3"
              >

                {/* Preview */}

                <div
                  className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${project.gradient}`}
                >

                  <div className="absolute inset-0 bg-black/20" />

                  <div className="relative z-10 flex flex-col items-center">

                    <div className="mb-5 rounded-3xl bg-white/15 p-5 backdrop-blur-xl">

                      <Icon size={50} className="text-white" />

                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      {project.title}
                    </h3>

                  </div>

                </div>

                {/* Content */}

                <div className="p-8">

                  <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                    {project.category}
                  </span>

                  <p className="mt-5 leading-8 text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech */}

                  <div className="mt-8 flex flex-wrap gap-2">

                    {project.technologies.map((tech) => (

                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300"
                      >
                        {tech}
                      </span>

                    ))}

                  </div>

                  {/* Highlights */}

                  <div className="mt-8 flex flex-wrap gap-2">

                    {project.highlights.map((item) => (

                      <span
                        key={item}
                        className="rounded-full bg-blue-500/10 px-3 py-2 text-xs text-blue-300"
                      >
                        {item}
                      </span>

                    ))}

                  </div>

                  {/* Buttons */}

                  <div className="mt-10 flex gap-3">

                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-5 py-3 font-semibold text-white transition hover:scale-105"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </Link>

                    {project.githubUrl !== "#" && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 transition hover:bg-white/10"
                      >
                        <Github size={20} />
                      </Link>
                    )}

                  </div>

                </div>

              </article>

            );

          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-20 text-center">

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
