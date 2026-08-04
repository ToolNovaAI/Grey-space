import Link from "next/link";
import {
  ArrowUpRight,
  Globe,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "ToolNovaAI",

    category: "AI Workspace",

    description:
      "Modern AI-powered SEO, GEO & AEO workspace built with Next.js and premium UI.",

    tech: ["Next.js", "TypeScript", "Tailwind"],

    link: "https://toolnovaai.vercel.app",

    icon: Sparkles,
  },

  {
    title: "Grey Portfolio",

    category: "Personal Brand",

    description:
      "Premium digital portfolio focused on websites, automation and marketing.",

    tech: ["React", "UI/UX", "SEO"],

    link: "#",

    icon: Globe,
  },

  {
    title: "Business Website",

    category: "Client Project",

    description:
      "Modern responsive business website with SEO and conversion-focused design.",

    tech: ["Next.js", "SEO", "Performance"],

    link: "#",

    icon: Globe,
  },
];

export default function FeaturedProjects() {
  return (
    <section className="section">

      <div className="container-custom">

        <div className="mb-16 max-w-3xl">

          <span className="text-sm uppercase tracking-[0.3em] text-blue-400">
            Featured Work
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Projects That
            <span className="gradient-text">
              {" "}
              Deliver Results
            </span>
          </h2>

          <p className="mt-6 text-slate-400">
            Every project is designed with one goal—
            helping businesses grow through modern
            design, performance and digital strategy.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {projects.map((project) => {

            const Icon = project.icon;

            return (

              <div
                key={project.title}
                className="glass rounded-3xl p-8 transition hover:-translate-y-2"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500">

                  <Icon className="text-white" />

                </div>

                <span className="text-sm text-blue-400">
                  {project.category}
                </span>

                <h3 className="mt-2 text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-5 text-slate-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <Link
                  href={project.link}
                  className="mt-10 inline-flex items-center gap-2 text-blue-400 transition hover:text-white"
                >

                  View Project

                  <ArrowUpRight size={18} />

                </Link>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
