import ContactCTA from "@/components/sections/ContactCTA";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with Grey Studio for website development, SEO, Google Ads, AI automation and digital marketing.",
};

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Hero */}

      <section className="py-32">
        <div className="container-custom">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Contact
            </span>

            <h1 className="mt-8 text-5xl font-bold md:text-7xl">
              Let's Build
              <span className="gradient-text">
                {" "}Your Next Project
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              Whether you need a premium website, SEO, digital marketing,
              AI automation or business consulting, I'd love to hear about
              your project.
            </p>

          </div>

        </div>
      </section>

      {/* Contact Section */}

      <section className="section">

        <div className="container-custom">

          <div className="grid gap-12 lg:grid-cols-2">

            {/* Contact Form */}

            <div className="glass rounded-[32px] p-10">

              <h2 className="text-3xl font-bold">
                Send a Message
              </h2>

              <form className="mt-8 space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
                />

                <input
                  type="text"
                  placeholder="Project Type"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
                />

                <textarea
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 outline-none focus:border-cyan-500"
                />

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>

              </form>

            </div>

            {/* Contact Details */}

            <div className="space-y-8">

              <div className="glass rounded-3xl p-8">

                <Mail className="mb-5 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  Email
                </h3>

                <p className="mt-4 text-slate-400">
                  your@email.com
                </p>

              </div>

              <div className="glass rounded-3xl p-8">

                <Phone className="mb-5 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  Phone
                </h3>

                <p className="mt-4 text-slate-400">
                  +91 XXXXX XXXXX
                </p>

              </div>

              <div className="glass rounded-3xl p-8">

                <MessageCircle className="mb-5 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  WhatsApp
                </h3>

                <p className="mt-4 text-slate-400">
                  Available for quick discussions.
                </p>

              </div>

              <div className="glass rounded-3xl p-8">

                <MapPin className="mb-5 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  Location
                </h3>

                <p className="mt-4 text-slate-400">
                  India
                </p>

              </div>

              <div className="glass rounded-3xl p-8">

                <Clock className="mb-5 text-cyan-400" />

                <h3 className="text-2xl font-bold">
                  Availability
                </h3>

                <p className="mt-4 text-slate-400">
                  Available for freelance and long-term projects.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <ContactCTA />

    </main>
  );
}
