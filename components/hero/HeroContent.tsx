import HeroButtons from "./HeroButtons";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function HeroContent() {
  return (
    <div className="relative flex min-h-[90vh] items-center">

      <div className="max-w-4xl py-28">

        {/* Badge */}

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

          <Sparkles
            size={16}
            className="text-cyan-400"
          />

          <span className="text-sm font-medium text-slate-300">
            Website Developer • SEO • Google Ads • Meta Ads • Automation
          </span>

        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">

          Building

          <span className="gradient-text">
            {" "}High-Performance Websites{" "}
          </span>

          That Help Businesses Grow.

        </h1>

        {/* Description */}

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">

          I help startups, local businesses, creators and brands
          establish a strong online presence through modern website
          development, SEO, Google Ads, Meta Ads, automation and
          digital marketing strategies focused on real business growth.

        </p>

        {/* Buttons */}

        <div className="mt-12">

          <HeroButtons />

        </div>

        {/* Trust Row */}

        <div className="mt-14 flex flex-wrap items-center gap-6">

          <div className="flex items-center gap-2">

            <CheckCircle2
              className="text-emerald-400"
              size={18}
            />

            <span className="text-sm text-slate-300">
              SEO Optimized
            </span>

          </div>

          <div className="flex items-center gap-2">

            <CheckCircle2
              className="text-emerald-400"
              size={18}
            />

            <span className="text-sm text-slate-300">
              Mobile First
            </span>

          </div>

          <div className="flex items-center gap-2">

            <CheckCircle2
              className="text-emerald-400"
              size={18}
            />

            <span className="text-sm text-slate-300">
              Lightning Fast
            </span>

          </div>

          <div className="flex items-center gap-2">

            <CheckCircle2
              className="text-emerald-400"
              size={18}
            />

            <span className="text-sm text-slate-300">
              Conversion Focused
            </span>

          </div>

        </div>

        {/* Availability */}

        <div className="mt-12 inline-flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-5 py-4">

          <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse" />

          <p className="text-sm text-emerald-300">

            Available for freelance projects and long-term collaborations.

          </p>

          <ArrowUpRight
            size={18}
            className="text-emerald-300"
          />

        </div>

      </div>

    </div>
  );
}
