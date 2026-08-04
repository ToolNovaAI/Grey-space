import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Calendar,
  Sparkles,
} from "lucide-react";

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

        <div className="absolute right-0 bottom-10 h-80 w-80 rounded-full bg-violet-500/20 blur-[120px]" />

      </div>

      <div className="container-custom">

        <div className="glass overflow-hidden rounded-[40px] border border-white/10 p-10 md:p-16">

          <div className="mx-auto max-w-4xl text-center">

            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3">

              <Sparkles
                className="text-cyan-400"
                size={18}
              />

              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Start Your Project
              </span>

            </div>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">

              Ready To Build

              <span className="gradient-text">
                {" "}Something Amazing?
              </span>

            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">

              Whether you need a premium website,
              SEO, Google Ads, Meta Ads, AI automation
              or complete digital marketing,
              I'm here to help your business grow.

            </p>

            {/* Buttons */}

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-3"
              >

                Start Your Project

                <ArrowRight size={20} />

              </Link>

              <a
                href="mailto:your@email.com"
                className="glass inline-flex items-center gap-3 rounded-full px-7 py-4 hover:bg-white/10"
              >

                <Mail size={20} />

                Email Me

              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="glass inline-flex items-center gap-3 rounded-full px-7 py-4 hover:bg-white/10"
              >

                <MessageCircle size={20} />

                WhatsApp

              </a>

            </div>

            {/* Bottom Grid */}

            <div className="mt-16 grid gap-6 md:grid-cols-3">

              <div className="glass rounded-3xl p-6">

                <Calendar
                  className="mx-auto text-blue-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold">
                  Fast Response
                </h3>

                <p className="mt-2 text-slate-400">
                  Usually within 24 hours.
                </p>

              </div>

              <div className="glass rounded-3xl p-6">

                <Sparkles
                  className="mx-auto text-violet-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold">
                  Premium Quality
                </h3>

                <p className="mt-2 text-slate-400">
                  Modern websites built for growth.
                </p>

              </div>

              <div className="glass rounded-3xl p-6">

                <MessageCircle
                  className="mx-auto text-cyan-400"
                  size={34}
                />

                <h3 className="mt-5 text-xl font-bold">
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
