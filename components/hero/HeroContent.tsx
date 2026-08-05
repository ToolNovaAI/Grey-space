"use client";

import HeroButtons from "./HeroButtons";
import { BadgeCheck, Sparkles, Zap } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="max-w-3xl">

      {/* Status */}

      <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-3">

        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400"></span>
        </span>

        <span className="text-sm font-semibold text-emerald-300">
          Available for New Projects
        </span>

      </div>

      {/* Heading */}

      <h1 className="text-5xl font-black leading-[1.05] tracking-tight md:text-7xl xl:text-8xl">

        I Build

        <span className="gradient-text block">
          Premium Websites
        </span>

        That Grow

        <span className="block">
          Businesses.
        </span>

      </h1>

      {/* Description */}

      <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-400">

        I help startups, businesses and entrepreneurs create
        high-performance websites, improve SEO, run profitable
        Google & Meta Ads, automate workflows and build a
        stronger online presence that turns visitors into customers.

      </p>

      {/* Feature List */}

      <div className="mt-12 grid gap-5 sm:grid-cols-2">

        <div className="flex items-center gap-4">
          <BadgeCheck className="text-cyan-400" size={22} />

          <span className="text-slate-300">
            Premium Website Development
          </span>
        </div>

        <div className="flex items-center gap-4">
          <BadgeCheck className="text-cyan-400" size={22} />

          <span className="text-slate-300">
            SEO & Technical Optimization
          </span>
        </div>

        <div className="flex items-center gap-4">
          <BadgeCheck className="text-cyan-400" size={22} />

          <span className="text-slate-300">
            Google & Meta Ads
          </span>
        </div>

        <div className="flex items-center gap-4">
          <BadgeCheck className="text-cyan-400" size={22} />

          <span className="text-slate-300">
            AI Automation Solutions
          </span>
        </div>

      </div>

      {/* Trust Cards */}

      <div className="mt-14 flex flex-wrap gap-5">

        <div className="glass flex items-center gap-3 rounded-2xl px-6 py-4">

          <Sparkles className="text-cyan-400" size={20} />

          <span className="font-medium">
            Modern UI/UX
          </span>

        </div>

        <div className="glass flex items-center gap-3 rounded-2xl px-6 py-4">

          <Zap className="text-yellow-400" size={20} />

          <span className="font-medium">
            Fast Performance
          </span>

        </div>

        <div className="glass flex items-center gap-3 rounded-2xl px-6 py-4">

          <BadgeCheck className="text-emerald-400" size={20} />

          <span className="font-medium">
            SEO Ready
          </span>

        </div>

      </div>

      {/* CTA */}

      <div className="mt-14">
        <HeroButtons />
      </div>

    </div>
  );
}
