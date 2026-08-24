import {
  Zap,
  Smartphone,
  Search,
  Bot,
  ShieldCheck,
  Headphones,
} from "lucide-react";

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
      <div className="container-custom">
        {/* Header */}

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Why Choose Me
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            More Than a
            <span className="gradient-text">
              {" "}Website Developer
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I help businesses build, market and grow online through
            modern websites, digital marketing, automation and
            long-term technical support.
          </p>
        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="glass group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3"
              >
                <div
                  className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}

        <div className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-600/10 p-10 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">
            Let's Build Something Amazing Together
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-center text-slate-400">
            Whether you need a modern website, SEO strategy,
            advertising campaign or AI automation, I'm ready to help
            your business grow.
          </p>

          <a
            href="/contact"
            className="btn-primary mt-8 inline-flex items-center gap-3"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
