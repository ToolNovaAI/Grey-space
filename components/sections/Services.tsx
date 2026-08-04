import { services } from "@/constants/services";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  return (
    <section
      id="services"
      className="relative section overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="container-custom">
        {/* Section Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-block rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Services
          </span>

          <h2 className="mt-8 text-4xl font-bold leading-tight md:text-6xl">
            Complete Digital
            <span className="gradient-text"> Growth Solutions</span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
            I help businesses build, market and grow their online presence
            through premium websites, SEO, paid advertising, AI automation and
            long-term technical support.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="glass group relative overflow-hidden rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-white/20"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-10`}
                />

                {/* Icon */}
                <div
                  className={`relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="leading-8 text-slate-400">
                  {service.description}
                </p>

                {/* CTA */}
                <button className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-all duration-300 group-hover:gap-3 group-hover:text-white">
                  Learn More
                  <ArrowUpRight size={18} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-slate-400">
            Looking for a custom solution tailored to your business?
          </p>

          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-3"
          >
            Let's Discuss Your Project
            <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
