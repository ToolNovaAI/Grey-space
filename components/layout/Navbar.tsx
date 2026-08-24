"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

const links = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-[#050816]/80 shadow-2xl shadow-black/20 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">
          <div className="flex h-[76px] items-center justify-between md:h-20">

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              aria-label="Grey Space Home"
              className="group flex shrink-0 items-center gap-3"
            >
              <div className="relative h-11 w-11 shrink-0 sm:h-12 sm:w-12">
                <Image
                  src="/images/Grey.png"
                  alt="Grey Space"
                  fill
                  priority
                  sizes="48px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="hidden sm:block">
                <h1 className="text-[17px] font-bold leading-none tracking-tight text-white md:text-lg">
                  Grey Space
                </h1>

                <p className="mt-1 text-[11px] leading-none text-slate-400">
                  Digital Growth
                </p>
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-7 lg:flex xl:gap-9"
            >
              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group relative py-2 text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  {item.name}

                  {/* Animated underline */}
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* =================================================
                DESKTOP CTA
            ================================================= */}

            <div className="hidden shrink-0 md:block">
              <Link
                href="/contact"
                className="btn-primary inline-flex min-h-11 items-center justify-center gap-2 px-5 text-sm md:px-6"
              >
                Start Project
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================= */}

            <button
              type="button"
              onClick={() => setMobileOpen((current) => !current)}
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-200 hover:border-white/20 hover:bg-white/[0.08] md:hidden"
            >
              {mobileOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <div
        className={`fixed inset-0 z-40 md:hidden ${
          mobileOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >

        {/* Backdrop */}

        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMobileMenu}
          className={`absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity duration-300 ${
            mobileOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* Drawer */}

        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,380px)] flex-col border-l border-white/10 bg-[#080d1c] shadow-2xl shadow-black/40 transition-transform duration-300 ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          {/* =================================================
              DRAWER HEADER
          ================================================= */}

          <div className="flex h-[76px] shrink-0 items-center justify-between border-b border-white/10 px-5">

            <Link
              href="/"
              onClick={closeMobileMenu}
              aria-label="Grey Space Home"
              className="group flex items-center gap-3"
            >
              <div className="relative h-10 w-10 shrink-0">
                <Image
                  src="/images/Grey.png"
                  alt="Grey Space"
                  fill
                  sizes="40px"
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <p className="text-base font-bold leading-none text-white">
                  Grey Space
                </p>

                <p className="mt-1 text-[10px] text-slate-500">
                  Digital Growth
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              aria-label="Close navigation menu"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* =================================================
              MOBILE NAVIGATION
          ================================================= */}

          <nav
            aria-label="Mobile navigation"
            className="flex flex-1 flex-col px-5 py-7"
          >

            <div className="space-y-2">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium text-slate-300 transition-all duration-200 hover:bg-white/[0.05] hover:text-white"
                >
                  {item.name}

                  <ArrowUpRight
                    size={17}
                    className="text-slate-600 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </Link>
              ))}

            </div>

            {/* =================================================
                MOBILE CTA
            ================================================= */}

            <div className="mt-auto border-t border-white/10 pt-6">

              <p className="mb-3 px-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                Ready to start?
              </p>

              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="btn-primary flex w-full items-center justify-center gap-2"
              >
                Start Your Project
                <ArrowUpRight size={18} />
              </Link>

            </div>
          </nav>
        </aside>
      </div>
    </>
  );
}
