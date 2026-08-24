import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";

const services = [
  "Website Development",
  "SEO & Technical Optimization",
  "Google Ads",
  "Meta Ads",
  "AI Automation",
  "Digital Marketing",
];

const quickLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const whatsappMessage = encodeURIComponent(
  "Hi Grey, I visited your website and I'd like to discuss a project with you."
);

const whatsappLink = `https://wa.me/917311170851?text=${whatsappMessage}`;

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute left-[-180px] top-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        {/* Violet Glow */}
        <div className="absolute bottom-[-180px] right-[-120px] h-96 w-96 rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Cyan Glow */}
        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[140px]" />
      </div>

      <div className="container-custom">
        {/* =====================================================
            MAIN FOOTER
        ===================================================== */}

        <div className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1.5fr_0.8fr_1fr_1.15fr] lg:gap-12">
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-md">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Grey Space Home"
              className="group inline-flex items-center gap-4"
            >
              <div className="relative h-14 w-14 shrink-0">
                <img
                  src="/images/Grey.png"
                  alt="Grey Space"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white">
                  Grey Space
                </h2>

                <p className="mt-0.5 text-sm text-slate-400">
                  Digital Growth
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-7 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              Helping businesses grow online through premium websites,
              SEO, Google Ads, Meta Ads, AI automation and modern digital
              marketing strategies.
            </p>

            {/* Social Links */}
            <div className="mt-7 flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/ToolNovaAI"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <Github size={19} />
              </a>

              {/* Website */}
              <a
                href="https://grey-zen.github.io"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Website"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <Globe size={19} />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="glass flex h-11 w-11 items-center justify-center rounded-xl text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-white"
              >
                <Linkedin size={19} />
              </a>
            </div>
          </div>

          {/* =================================================
              QUICK LINKS
          ================================================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Navigation
            </h3>

            <nav className="mt-6 space-y-3.5">
              {quickLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  <span>{item.title}</span>

                  <ArrowUpRight
                    size={14}
                    className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Services
            </h3>

            <div className="mt-6 space-y-3.5">
              {services.map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="block text-sm leading-5 text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-4">
              {/* Email */}
              <a
                href="mailto:rishabhgoko@gmail.com"
                className="group flex items-start gap-3.5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Mail size={17} />
                </div>

                <div className="min-w-0">
                  <span className="block text-xs text-slate-500">
                    Email
                  </span>

                  <span className="mt-0.5 block break-all text-sm text-slate-300 transition-colors group-hover:text-white">
                    rishabhgoko@gmail.com
                  </span>
                </div>
              </a>

              {/* Primary Phone */}
              <a
                href="tel:+917311170851"
                className="group flex items-start gap-3.5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  <Phone size={17} />
                </div>

                <div>
                  <span className="block text-xs text-slate-500">
                    Phone
                  </span>

                  <span className="mt-0.5 block text-sm text-slate-300 transition-colors group-hover:text-white">
                    +91 73111 70851
                  </span>
                </div>
              </a>

              {/* Alternative Phone */}
              <a
                href="tel:+917311176537"
                className="group flex items-start gap-3.5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Phone size={17} />
                </div>

                <div>
                  <span className="block text-xs text-slate-500">
                    Alternative
                  </span>

                  <span className="mt-0.5 block text-sm text-slate-300 transition-colors group-hover:text-white">
                    +91 73111 76537
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3.5"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                  <MessageCircle size={17} />
                </div>

                <div>
                  <span className="block text-xs text-slate-500">
                    WhatsApp
                  </span>

                  <span className="mt-0.5 block text-sm text-slate-300 transition-colors group-hover:text-white">
                    Start a conversation
                  </span>
                </div>
              </a>
            </div>

            {/* Hire Me */}
            <Link
              href="/contact"
              className="btn-primary mt-7 inline-flex items-center justify-center gap-2"
            >
              Hire Me
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ===================================================== */}

        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Copyright */}
            <p className="text-center text-xs text-slate-500 sm:text-sm md:text-left">
              © {new Date().getFullYear()} Grey Space. All rights reserved.
            </p>

            {/* Legal */}
            <div className="flex items-center justify-center gap-5 sm:gap-7">
              <Link
                href="/privacy"
                className="text-xs text-slate-500 transition-colors hover:text-white sm:text-sm"
              >
                Privacy
              </Link>

              <Link
                href="/terms"
                className="text-xs text-slate-500 transition-colors hover:text-white sm:text-sm"
              >
                Terms
              </Link>

              <Link
                href="/contact"
                className="text-xs text-slate-500 transition-colors hover:text-white sm:text-sm"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
