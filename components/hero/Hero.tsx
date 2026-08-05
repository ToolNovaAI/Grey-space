"use client";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

import Reveal from "@/components/animations/Reveal";
import FadeIn from "@/components/animations/FadeIn";
import Floating from "@/components/animations/Floating";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <HeroBackground />

      {/* Decorative Gradient Blobs */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
      <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[160px]" />
      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="container-custom relative z-10 flex min-h-screen items-center py-24">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <Reveal>
              <HeroContent />
            </Reveal>

            <FadeIn delay={0.2}>
              <HeroStats />
            </FadeIn>
          </div>

          {/* Right Side */}
          <Floating duration={5} distance={14}>
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-blue-500/20 blur-3xl" />

              {/* Browser Mockup */}
              <div className="glass relative overflow-hidden rounded-[32px] border border-white/10 shadow-2xl">
                {/* Browser Header */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-6 py-4">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />

                  <div className="ml-6 flex-1 rounded-full bg-white/5 px-4 py-2 text-center text-xs text-slate-400">
                    toolnovaai.vercel.app
                  </div>
                </div>

                {/* Preview */}
                <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-[#0B1220] via-[#111827] to-[#050816]">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 via-blue-500 to-violet-500 text-4xl font-bold text-white shadow-xl">
                      T
                    </div>

                    <h3 className="text-3xl font-bold text-white">
                      ToolNovaAI
                    </h3>

                    <p className="mt-3 text-slate-400">
                      SEO • GEO • AEO Workspace
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <Floating duration={3.5} delay={0.5} distance={10}>
                <div className="glass absolute -left-8 top-10 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-cyan-400">
                    20+
                  </div>

                  <div className="mt-1 text-sm text-slate-400">
                    Projects
                  </div>
                </div>
              </Floating>

              {/* Floating Badge */}
              <Floating duration={4.5} delay={1} distance={16}>
                <div className="glass absolute -right-8 bottom-12 rounded-2xl p-5">
                  <div className="text-3xl font-bold text-violet-400">
                    SEO
                  </div>

                  <div className="mt-1 text-sm text-slate-400">
                    Optimized
                  </div>
                </div>
              </Floating>
            </div>
          </Floating>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
            Scroll
          </span>

          <div className="h-14 w-8 rounded-full border border-white/20 p-1">
            <div className="mx-auto h-3 w-3 animate-bounce rounded-full bg-cyan-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
