import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Technologies from "@/components/sections/Technologies";
import ContactCTA from "@/components/sections/ContactCTA";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";

export const metadata = {
  title: "Projects",
  description:
    "Explore website development, SEO and digital marketing projects by Grey Studio.",
};

const caseStudies = [
  {
    title: "ToolNovaAI",
    category: "AI Workspace",
    description:
      "A premium AI workspace for SEO, GEO and AEO built with Next.js, TypeScript and modern UI principles.",
    result: "Scalable architecture with premium SaaS experience.",
    link: "https://toolnovaai.vercel.app",
  },
  {
    title: "Grey Portfolio",
    category: "Personal Brand",
    description:
      "A modern portfolio showcasing website development, digital marketing and automation services.",
    result: "Professional personal branding with conversion-focused design.",
    link: "https://grey-zen.github.io",
  },
  {
    title: "Rishabh Workspace",
    category: "Business Website",
    description:
      "Business website highlighting web development, SEO, hosting and digital marketing services.",
    result: "Professional online presence for service-based business.",
    link: "https://rishabhworkspace.wordpress.com",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Portfolio
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Projects That
              <span className="gradient-text"> Create Impact</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              Every project is designed with a focus on performance,
              user experience, SEO and measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Case Studies */}
      <section className="section">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold md:text-5xl">
              Featured Case Studies
            </h2>

            <p className="mt-5 text-lg text-slate-400">
              A closer look at selected projects and the value they were built
              to deliver.
            </p>
          </div>

          <div className="space-y-10">
            {caseStudies.map((project) => (
              <div
                key={project.title}
                className="glass rounded-[32px] p-10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-3xl">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                      <Sparkles size={16} />
                      {project.category}
                    </div>

                    <h2 className="text-3xl font-bold text-white">
                      {project.title}
                    </h2>

                    <p className="mt-5 leading-8 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
                      <span className="font-semibold text-emerald-300">
                        Project Outcome
                      </span>

                      <p className="mt-2 text-slate-300">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="btn-primary inline-flex items-center gap-3"
                  >
                    Visit Project
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <Technologies />

      {/* Contact */}
      <ContactCTA />
    </main>
  );
}
