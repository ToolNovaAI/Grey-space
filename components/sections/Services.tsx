import {
  Globe,
  Search,
  Bot,
  Megaphone,
  Palette,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive, SEO-friendly websites built with the latest technologies for speed, performance, and conversions.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Technical SEO, On-Page SEO, Local SEO and performance improvements to help your website rank higher.",
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    description:
      "Create and optimize advertising campaigns that generate leads, sales, and measurable business growth.",
  },
  {
    icon: Bot,
    title: "Business Automation",
    description:
      "Automate repetitive workflows using AI, APIs, forms, CRM integrations, and smart business processes.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Premium interfaces focused on user experience, modern design systems, and higher conversion rates.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Security updates, backups, hosting support, monitoring, performance optimization, and ongoing improvements.",
  },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Services
          </span>

          <h2 className="mt-5 text-4xl font-bold md:text-5xl">
            Everything Your
            <span className="gradient-text"> Business Needs </span>
            To Grow Online
          </h2>

          <p className="mt-6 text-lg text-slate-400">
            I help businesses establish a powerful online presence with
            premium websites, digital marketing, SEO, advertising, and
            automation solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="glass group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white shadow-lg">
                  <Icon size={30} />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
