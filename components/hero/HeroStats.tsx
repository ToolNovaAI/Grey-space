"use client";

import {
  Globe,
  Search,
  TrendingUp,
  Bot,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: "20+",
    label: "Websites Built",
    color: "text-blue-400",
  },
  {
    icon: Search,
    number: "100%",
    label: "SEO Ready",
    color: "text-emerald-400",
  },
  {
    icon: TrendingUp,
    number: "24/7",
    label: "Growth Focus",
    color: "text-violet-400",
  },
  {
    icon: Bot,
    number: "AI",
    label: "Automation",
    color: "text-cyan-400",
  },
];

export default function HeroStats() {
  return (
    <section className="relative mt-16 pb-24">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="group glass relative overflow-hidden rounded-3xl p-6"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 transition duration-500 group-hover:opacity-100" />

              <div className="relative z-10">
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ${item.color}`}
                >
                  <Icon size={28} />
                </div>

                <h3 className="text-4xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="mt-2 text-slate-400">
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
