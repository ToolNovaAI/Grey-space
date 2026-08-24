import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Calendar,
  Sparkles,
  Phone,
} from "lucide-react";

const whatsappMessage = encodeURIComponent(
  "Hi Grey, I visited your website and I'd like to discuss a project with you."
);

const whatsappLink = `https://wa.me/917311170851?text=${whatsappMessage}`;

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-violet-600/10 to-cyan-600/10" />

        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>

      <div className="container-custom">
        <div className="glass overflow-hidden rounded-[40px] border border-white/10 p-8 md:p-16">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3">
              <Sparkles
                className="text-cyan-400"
                size={18}
              />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Start Your Project
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full text-center text-4xl font-bold leading-tight md:text-6xl">
              Ready To Build{" "}
              <span className="gradient-text">
                Something Amazing?
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 w-full max-w-2xl text-center text-lg leading-8 text-slate-400">
              Whether you need a premium website, SEO, Google Ads, Meta Ads,
              AI automation or complete digital marketing, I'm here to help
              your business grow.
            </p>

            {/* Buttons */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-5">

              {/* Contact */}
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-3"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>

              {/* Email */}
              <a
                href="mailto:rishabhgoko@gmail.com"
                className="glass inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 transition-colors hover:bg-white/10"
              >
                <Mail size={20} />
                Email Me
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 transition-colors hover:bg-white/10"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>

            {/* Contact Details */}
            <div className="mt-10 flex flex-col items-center justify-center gap-3 text-sm text-slate-400 sm:flex-row sm:gap-6">
              <a
                href="mailto:rishabhgoko@gmail.com"
                className="transition-colors hover:text-white"
              >
                rishabhgoko@gmail.com
              </a>

              <span className="hidden text-slate-600 sm:inline">
                •
              </span>

              <a
                href="tel:+917311170851"
                className="inline-flex items-center gap-2 transition-colors hover:text-white"
              >
                <Phone size={15} />
                +91 73111 70851
              </a>

              <span className="hidden text-slate-600 sm:inline">
                •
              </span>

              <a
                href="tel:+917311176537"
                className="transition-colors hover:text-white"
              >
                +91 73111 76537
              </a>
            </div>

            {/* Bottom Grid */}
            <div className="mt-16 grid w-full gap-6 md:grid-cols-3">

              {/* Fast Response */}
              <div className="glass rounded-3xl p-6 text-center">
                <Calendar
                  className="mx-auto text-blue-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold text-white">
                  Fast Response
                </h3>

                <p className="mt-2 text-slate-400">
                  Usually within 24 hours.
                </p>
              </div>

              {/* Premium Quality */}
              <div className="glass rounded-3xl p-6 text-center">
                <Sparkles
                  className="mx-auto text-violet-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold text-white">
                  Premium Quality
                </h3>

                <p className="mt-2 text-slate-400">
                  Modern websites built for growth.
                </p>
              </div>

              {/* Long-Term Support */}
              <div className="glass rounded-3xl p-6 text-center">
                <MessageCircle
                  className="mx-auto text-cyan-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold text-white">
                  Long-Term Support
                </h3>

                <p className="mt-2 text-slate-400">
                  I stay with you after launch.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
