import {
  Globe,
  Search,
  Bot,
  Megaphone,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";

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

export default function About() {
  return (
    <section
      id="about"
      className="section relative overflow-hidden"
    >
      <div className="container-custom">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}

          <div>

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              About Me
            </span>

            <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">

              Building Digital Experiences

              <span className="gradient-text">
                {" "}That Help Businesses Grow.
              </span>

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-400">

              I'm Grey, a website developer and digital growth specialist.
              I help businesses build modern websites, improve their online
              visibility through SEO, run effective Google & Meta Ads, and
              automate workflows to save time and increase efficiency.

            </p>

            <div className="mt-10 grid gap-4">

              {expertise.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2
                    size={20}
                    className="text-emerald-400"
                  />

                  <span className="text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-12 flex flex-wrap gap-6">

              {stats.map((stat) => (

                <div
                  key={stat.label}
                  className="glass rounded-2xl px-8 py-6 text-center"
                >
                  <h3 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h3>

                  <p className="mt-2 text-sm text-slate-400">
                    {stat.label}
                  </p>

                </div>

              ))}

            </div>

            <Link
              href="/contact"
              className="btn-primary mt-12 inline-flex items-center gap-3"
            >
              Let's Work Together

              <ArrowUpRight size={18} />
            </Link>

          </div>

          {/* Right */}

          <div className="glass rounded-[32px] p-10">

            <div className="mb-8 flex items-center gap-5">

              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 text-3xl font-bold text-white">
                G
              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Grey
                </h3>

                <p className="text-slate-400">
                  Website Developer & Digital Growth Specialist
                </p>

              </div>

            </div>

            <div className="space-y-5">

              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <Globe className="text-blue-400" />
                <span>Premium Website Development</span>
              </div>

              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <Search className="text-emerald-400" />
                <span>SEO & Search Optimization</span>
              </div>

              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <Megaphone className="text-orange-400" />
                <span>Google & Meta Ads</span>
              </div>

              <div className="glass flex items-center gap-4 rounded-2xl p-5">
                <Bot className="text-cyan-400" />
                <span>AI Automation Solutions</span>
              </div>

            </div>

            <div className="mt-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">

              <div className="flex items-center gap-3">

                <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

                <span className="font-semibold text-emerald-300">
                  Available for New Projects
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
