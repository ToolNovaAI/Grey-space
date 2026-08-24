"use client";

import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Eye,
} from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
      {/* =====================================================
          PRIMARY CTA
      ===================================================== */}

      <Link
        href="/contact"
        className="
          group
          inline-flex
          min-h-12
          w-full
          items-center
          justify-center
          gap-2.5
          rounded-full
          bg-gradient-to-r
          from-blue-600
          via-violet-600
          to-cyan-500
          px-6
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-blue-500/20
          transition-all
          duration-300
          hover:-translate-y-1
          hover:shadow-blue-500/40
          sm:w-auto
          sm:px-7
          sm:text-base
        "
      >
        <Briefcase
          size={18}
          className="shrink-0"
        />

        <span className="whitespace-nowrap">
          Start Your Project
        </span>

        <ArrowRight
          size={17}
          className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* =====================================================
          SECONDARY CTA
      ===================================================== */}

      <Link
        href="/projects"
        className="
          group
          inline-flex
          min-h-12
          w-full
          items-center
          justify-center
          gap-2.5
          rounded-full
          border
          border-white/10
          bg-white/[0.04]
          px-6
          py-3.5
          text-sm
          font-semibold
          text-white
          backdrop-blur-xl
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-white/20
          hover:bg-white/[0.08]
          sm:w-auto
          sm:px-7
          sm:text-base
        "
      >
        <Eye
          size={18}
          className="shrink-0 text-slate-300 transition-colors duration-300 group-hover:text-white"
        />

        <span className="whitespace-nowrap">
          View My Work
        </span>

        <ArrowRight
          size={16}
          className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white"
        />
      </Link>
    </div>
  );
}
