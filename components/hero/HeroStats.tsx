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
    bg: "bg-blue-500/10",
  },
  {
    icon: Search,
    number: "100%",
    label: "SEO Ready",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    icon: TrendingUp,
    number: "24/7",
    label: "Growth Focus",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    icon: Bot,
    number: "AI",
    label: "Automation",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
];

export default function HeroStats() {
  return (
    <div className="w-full max-w-3xl">
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="
                glass
                group
                relative
                min-w-0
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                p-4
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-white/20
                hover:bg-white/[0.06]
                sm:rounded-3xl
                sm:p-5
              "
            >
              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`
                    ${item.bg}
                    ${item.color}
                    mb-4
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-xl
                    sm:mb-5
                    sm:h-11
                    sm:w-11
                  `}
                >
                  <Icon
                    size={20}
                    className="sm:h-[22px] sm:w-[22px]"
                  />
                </div>

                {/* Number */}
                <h3 className="text-2xl font-bold leading-none tracking-tight text-white sm:text-3xl">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-2 text-xs leading-5 text-slate-400 sm:text-sm">
                  {item.label}
                </p>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
