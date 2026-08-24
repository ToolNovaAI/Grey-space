"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

import Reveal from "@/components/animations/Reveal";
import FadeIn from "@/components/animations/FadeIn";
import Floating from "@/components/animations/Floating";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <HeroBackground />

      {/* =====================================================
          MAIN HERO CONTAINER
      ===================================================== */}

      <div className="container-custom relative z-10">
        <div
          className="
            grid
            min-h-[calc(100svh-76px)]
            items-center
            gap-14
            py-28
            sm:py-32
            lg:min-h-screen
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-14
            lg:py-28
            xl:gap-20
          "
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div className="min-w-0">
            <Reveal>
              <HeroContent />
            </Reveal>

            <FadeIn delay={0.2}>
              <div className="mt-10 sm:mt-12">
                <HeroStats />
              </div>
            </FadeIn>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <div className="relative mx-auto w-full max-w-[620px] lg:mx-0 lg:max-w-none">
            <Floating
              duration={5}
              distance={10}
            >
              <div className="relative px-3 py-6 sm:px-6 lg:px-0 lg:py-10">

                {/* Main Visual Glow */}
                <div className="pointer-events-none absolute inset-[8%] rounded-[40px] bg-gradient-to-br from-cyan-500/15 via-violet-500/15 to-blue-500/15 blur-[70px]" />

                {/* =================================================
                    BROWSER MOCKUP
                ================================================= */}

                <div className="glass relative overflow-hidden rounded-[24px] border border-white/10 shadow-2xl shadow-black/30 sm:rounded-[30px]">

                  {/* Browser Header */}
                  <div className="flex h-12 items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 sm:h-14 sm:px-5">

                    {/* Browser Controls */}
                    <div className="flex shrink-0 items-center gap-1.5">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3" />

                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3" />

                      <span className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3" />
                    </div>

                    {/* Address Bar */}
                    <div className="ml-2 min-w-0 flex-1 truncate rounded-full border border-white/5 bg-white/[0.04] px-3 py-1.5 text-center text-[9px] text-slate-500 sm:ml-4 sm:px-4 sm:py-2 sm:text-[11px]">
                      toolnovaai.vercel.app
                    </div>
                  </div>

                  {/* =================================================
                      WEBSITE PREVIEW
                  ================================================= */}

                  <div
                    className="
                      relative
                      flex
                      aspect-[16/10]
                      items-center
                      justify-center
                      overflow-hidden
                      bg-gradient-to-br
                      from-[#0B1220]
                      via-[#111827]
                      to-[#050816]
                      px-5
                    "
                  >
                    {/* Preview Glow */}
                    <div className="pointer-events-none absolute h-40 w-40 rounded-full bg-blue-500/15 blur-[70px]" />

                    <div className="relative z-10 text-center">

                      {/* ToolNovaAI Icon */}
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 text-2xl font-bold text-white shadow-xl shadow-blue-500/20 sm:mb-5 sm:h-20 sm:w-20 sm:rounded-3xl sm:text-3xl lg:h-24 lg:w-24 lg:text-4xl">
                        T
                      </div>

                      <h3 className="text-xl font-bold text-white sm:text-2xl lg:text-3xl">
                        ToolNovaAI
                      </h3>

                      <p className="mt-2 text-xs text-slate-400 sm:mt-3 sm:text-sm">
                        SEO • GEO • AEO Workspace
                      </p>
                    </div>

                    {/* SEO Indicator */}
                    <div className="absolute bottom-4 right-4 hidden rounded-xl border border-violet-400/20 bg-violet-500/10 px-3 py-2 backdrop-blur-xl sm:block">
                      <div className="text-sm font-bold text-violet-300">
                        SEO
                      </div>

                      <div className="text-[10px] text-slate-500">
                        Optimized
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    PROJECTS FLOATING BADGE
                ================================================= */}

                <Floating
                  duration={3.5}
                  delay={0.5}
                  distance={8}
                >
                  <div className="glass absolute left-0 top-5 rounded-2xl border border-white/10 px-4 py-3 shadow-xl sm:left-0 sm:top-8 sm:px-5 sm:py-4 lg:-left-7">
                    <div className="text-2xl font-bold text-cyan-400 sm:text-3xl">
                      20+
                    </div>

                    <div className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                      Projects
                    </div>
                  </div>
                </Floating>

                {/* =================================================
                    SEO FLOATING BADGE
                ================================================= */}

                <Floating
                  duration={4.5}
                  delay={1}
                  distance={12}
                >
                  <div className="glass absolute bottom-5 right-0 rounded-2xl border border-white/10 px-4 py-3 shadow-xl sm:bottom-8 sm:right-0 sm:px-5 sm:py-4 lg:-right-7">
                    <div className="text-2xl font-bold text-violet-400 sm:text-3xl">
                      SEO
                    </div>

                    <div className="mt-0.5 text-xs text-slate-400 sm:text-sm">
                      Optimized
                    </div>
                  </div>
                </Floating>
              </div>
            </Floating>
          </div>
        </div>
      </div>

      {/* =====================================================
          SCROLL INDICATOR
      ===================================================== */}

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-slate-600">
            Scroll
          </span>

          <div className="flex h-11 w-6 justify-center rounded-full border border-white/10 p-1.5">
            <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
