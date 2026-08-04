"use client";

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
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom">

          <div className="flex h-20 items-center justify-between">

            {/* Logo */}

            <Link
              href="/"
              className="flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 font-bold text-white shadow-lg">
                G
              </div>

              <div>
                <h1 className="font-bold text-xl tracking-tight">
                  Grey Studio
                </h1>

                <p className="text-xs text-slate-400">
                  Digital Growth
                </p>
              </div>
            </Link>

            {/* Desktop Menu */}

            <nav className="hidden items-center gap-8 md:flex">

              {links.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-slate-300 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

            </nav>

            {/* CTA */}

            <div className="hidden md:block">

              <Link
                href="/contact"
                className="btn-primary"
              >
                Start Project

                <ArrowUpRight size={18} />
              </Link>

            </div>

            {/* Mobile Button */}

            <button
              onClick={() =>
                setMobileOpen(!mobileOpen)
              }
              className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10 md:hidden"
            >
              {mobileOpen ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}
            </button>

          </div>

        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >

        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-xl"
          onClick={() =>
            setMobileOpen(false)
          }
        />

        <div
          className={`absolute right-0 top-0 h-full w-80 bg-[#0B1220] border-l border-white/10 transition-transform duration-500 ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >

          <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">

            <h2 className="text-xl font-bold">
              Menu
            </h2>

            <button
              onClick={() =>
                setMobileOpen(false)
              }
            >
              <X />
            </button>

          </div>

          <nav className="flex flex-col gap-2 p-8">

            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className="rounded-xl px-5 py-4 text-lg transition hover:bg-white/5"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="btn-primary mt-8"
            >
              Start Project
            </Link>

          </nav>

        </div>

      </div>
    </>
  );
}
