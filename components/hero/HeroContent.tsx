"use client";

import HeroButtons from "./HeroButtons";
import {
  BadgeCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const features = [
  {
    title: "Premium Website Development",
  },
  {
    title: "SEO & Technical Optimization",
  },
  {
    title: "Google & Meta Ads",
  },
  {
    title: "AI Automation Solutions",
  },
];

const trustItems = [
  {
    title: "Modern UI/UX",
    icon: Sparkles,
    color: "text-cyan-400",
  },
  {
    title: "Fast Performance",
    icon: Zap,
    color: "text-yellow-400",
  },
  {
    title: "SEO Ready",
    icon: BadgeCheck,
    color: "text-emerald-400",
  },
];

export default function HeroContent() {
  return (
    <div className="w-full max-w-3xl">

      {/* =====================================================
          AVAILABILITY BADGE
      ===================================================== */}

      <div className="mb-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2.5 sm:mb-8 sm:gap-3 sm:px-5 sm:py-3">
        <span className="relative flex h-2.5 w-2.5 shrink-0 sm:h-3 sm:w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

          <span className="relative inline-flex h-full w-full rounded-full bg-emerald-400" />
        </span>

        <span className="truncate text-xs font-semibold text-emerald-300 sm:text-sm">
          Available for New Projects
        </span>
      </div>

      {/* =====================================================
          MAIN HEADING
      ===================================================== */}

      <h1
        className="
          max-w-3xl
          text-[2.75rem]
          font-black
          leading-[0.98]
          tracking-[-0.045em]
          text-white
          sm:text-5xl
          sm:leading-[1]
          md:text-6xl
          lg:text-7xl
          xl:text-[5.25rem]
          xl:leading-[0.98]
        "
      >
        I Build{" "}
        <span className="gradient-text block">
          Premium Websites
        </span>{" "}
        That Grow
        <span className="block">
          Businesses.
        </span>
      </h1>

      {/* =====================================================
          DESCRIPTION
      ===================================================== */}

      <p
        className="
          mt-6
          w-full
          max-w-2xl
          text-base
          leading-7
          text-slate-400
          sm:mt-8
          sm:text-lg
          sm:leading-8
          lg:text-xl
          lg:leading-9
        "
      >
        I help startups, businesses and entrepreneurs create
        high-performance websites, improve SEO, run profitable
        Google & Meta Ads, automate workflows and build a
        stronger online presence that turns visitors into
        customers.
      </p>

      {/* =====================================================
          FEATURE LIST
      ===================================================== */}

      <div className="mt-8 grid w-full max-w-2xl gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex min-w-0 items-center gap-3"
          >
            <BadgeCheck
              size={20}
              className="shrink-0 text-cyan-400 sm:h-[22px] sm:w-[22px]"
            />

            <span className="text-sm leading-6 text-slate-300 sm:text-[15px]">
              {feature.title}
            </span>
          </div>
        ))}
      </div>

      {/* =====================================================
          TRUST ITEMS
      ===================================================== */}

      <div className="mt-9 flex w-full max-w-2xl flex-wrap gap-2.5 sm:mt-11 sm:gap-3">
        {trustItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                glass
                inline-flex
                min-h-11
                items-center
                gap-2.5
                rounded-xl
                border border-white/10
                px-3.5
                py-2.5
                text-sm
                transition-all
                duration-300
                hover:border-white/20
                hover:bg-white/[0.06]
                sm:rounded-2xl
                sm:px-4
              "
            >
              <Icon
                size={18}
                className={`shrink-0 ${item.color}`}
              />

              <span className="whitespace-nowrap font-medium text-slate-200">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>

      {/* =====================================================
          CTA BUTTONS
      ===================================================== */}

      <div className="mt-9 sm:mt-11">
        <HeroButtons />
      </div>

    </div>
  );
}
