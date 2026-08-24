import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const services = [
  "Website Development",
  "SEO",
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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />

      </div>

      <div className="container-custom">

        {/* Top */}

        <div className="grid gap-14 py-20 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-2xl font-bold text-white">
                G
              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Grey Studio
                </h2>

                <p className="text-slate-400">
                  Digital Growth Specialist
                </p>

              </div>

            </div>

            <p className="mt-8 leading-8 text-slate-400">

              Helping businesses grow online through
              premium websites, SEO, Google Ads,
              Meta Ads, AI automation and modern
              digital marketing strategies.

            </p>

            {/* Social */}

            <div className="mt-8 flex gap-4">

              <Link
                href="https://github.com/ToolNovaAI"
                target="_blank"
                className="glass flex h-12 w-12 items-center justify-center rounded-xl hover:scale-110"
              >
                <Github size={20} />
              </Link>

              <Link
                href="https://grey-zen.github.io"
                target="_blank"
                className="glass flex h-12 w-12 items-center justify-center rounded-xl hover:scale-110"
              >
                <Globe size={20} />
              </Link>

              <Link
                href="#"
                className="glass flex h-12 w-12 items-center justify-center rounded-xl hover:scale-110"
              >
                <Linkedin size={20} />
              </Link>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item) => (

                <Link
                  key={item.title}
                  href={item.href}
                  className="block text-slate-400 transition hover:text-white"
                >
                  {item.title}
                </Link>

              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Services
            </h3>

            <div className="space-y-4">

              {services.map((item) => (

                <div
                  key={item}
                  className="text-slate-400"
                >
                  {item}
                </div>

              ))}

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-xl font-bold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex gap-4">

                <Mail
                  className="mt-1 text-cyan-400"
                  size={18}
                />

                <span className="text-slate-400">
                  rishabhgoko@gmail.com
                </span>

              </div>

              <div className="flex gap-4">

                <Phone
                  className="mt-1 text-cyan-400"
                  size={18}
                />

                <span className="text-slate-400">
                  +91 7311170851
                  +91 7311176537
                </span>

              </div>

              <div className="flex gap-4">

                <MapPin
                  className="mt-1 text-cyan-400"
                  size={18}
                />

                <span className="text-slate-400">
                  India
                </span>

              </div>

              <Link
                href="/contact"
                className="btn-primary mt-6 inline-flex items-center gap-3"
              >

                Hire Me

                <ArrowUpRight size={18} />

              </Link>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">

          <p className="text-sm text-slate-500">

            © {new Date().getFullYear()} Grey Studio.
            All Rights Reserved.

          </p>

          <div className="flex gap-8">

            <Link
              href="/privacy"
              className="text-sm text-slate-500 hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="/terms"
              className="text-sm text-slate-500 hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="/contact"
              className="text-sm text-slate-500 hover:text-white"
            >
              Contact
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}
