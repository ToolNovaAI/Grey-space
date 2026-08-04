"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
      {/* Primary Button */}
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 via-violet-600 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/40"
      >
        <Briefcase size={20} />

        <span>Start Your Project</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Link>

      {/* Secondary Button */}
      <Link
        href="/projects"
        className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1"
      >
        <Download size={20} />

        <span>View My Work</span>
      </Link>
    </div>
  );
}
