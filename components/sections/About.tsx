import Image from "next/image";
import Link from "next/link";
import {
  Globe,
  Search,
  Bot,
  Megaphone,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

const expertise = [
  "Modern Website Development",
  "SEO Optimization",
  "Google Ads",
  "Meta Ads",
  "AI Automation",
  "Digital Marketing",
];

const stats = [
  {
    value: "20+",
    label: "Projects",
  },
  {
    value: "100%",
    label: "Client Focus",
  },
  {
    value: "24/7",
    label: "Support",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Premium Website Development",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    icon: Search,
    title: "SEO & Search Optimization",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    icon: Bot,
    title: "AI Automation Solutions",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-1/4 -z-10 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-180px] bottom-0 -z-10 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[130px]" />

      <div className="container-custom">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-14 flex w-full max-w-3xl flex-col items-center text-center lg:mb-20">
          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:px-5 sm:text-sm">
            About Me
          </span>

          <h2 className="mt-6 text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Building Digital Experiences{" "}
            <span className="gradient-text">
              That Help Businesses Grow.
            </span>
          </h2>

          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            I help businesses build modern digital experiences, improve
            online visibility through SEO, run effective advertising
            campaigns and automate workflows to save time and increase
            efficiency.
          </p>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">

          {/* ===================================================
              LEFT — ABOUT
          =================================================== */}

          <div className="min-w-0">

            <p className="max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              I'm Grey, a website developer and digital growth specialist.
              I combine modern web development, SEO, paid advertising and
              automation to create digital solutions that are designed not
              just to look good, but to support real business growth.
            </p>

            {/* Expertise */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex min-w-0 items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="shrink-0 text-emerald-400"
                  />

                  <span className="text-sm leading-6 text-slate-300 sm:text-[15px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:mt-12 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl border border-white/10 px-3 py-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] sm:rounded-3xl sm:px-5 sm:py-5"
                >
                  <h3 className="text-2xl font-bold leading-none text-white sm:text-3xl">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-[11px] leading-4 text-slate-500 sm:text-xs sm:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 sm:mt-10">
              <Link
                href="/contact"
                className="btn-primary inline-flex w-full items-center justify-center gap-2.5 sm:w-auto"
              >
                Let's Work Together
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </div>

          {/* ===================================================
              RIGHT — PROFILE CARD
          =================================================== */}

          <div className="glass relative overflow-hidden rounded-[28px] border border-white/10 p-6 sm:rounded-[32px] sm:p-8">

            {/* Card Glow */}
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-violet-500/10 blur-[80px]" />

            {/* Profile */}
            <div className="relative flex items-center gap-4 sm:gap-5">

              <div className="relative h-16 w-16 shrink-0 sm:h-20 sm:w-20">
                <Image
                  src="/images/Grey.png"
                  alt="Grey Space"
                  fill
                  sizes="80px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-400">
                  Grey Space
                </p>

                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Grey
                </h3>

                <p className="mt-1 text-sm leading-5 text-slate-400">
                  Website Developer & Digital Growth Specialist
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="my-7 h-px bg-white/10" />

            {/* Capabilities */}
            <div className="space-y-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.025] p-3.5 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.05] sm:gap-4 sm:p-4"
                  >
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                    >
                      <Icon size={19} />
                    </div>

                    <span className="text-sm font-medium leading-5 text-slate-300">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Availability */}
            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.08] p-4 sm:p-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                  <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </span>

                <span className="text-sm font-semibold text-emerald-300">
                  Available for New Projects
                </span>
              </div>

              <p className="mt-2 pl-5.5 text-xs leading-5 text-slate-500">
                Open to website development, SEO, advertising and automation
                projects.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
