"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Clock3,
  Send,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const PRIMARY_PHONE = "7311170851";
const ALTERNATIVE_PHONE = "7311176537";
const EMAIL = "rishabhgoko@gmail.com";

const whatsappMessage = encodeURIComponent(
  "Hi Grey, I visited your website and I'd like to discuss a project with you."
);

const whatsappLink = `https://wa.me/91${PRIMARY_PHONE}?text=${whatsappMessage}`;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const projectType = String(form.get("projectType") || "").trim();
    const message = String(form.get("message") || "").trim();

    const text = encodeURIComponent(
      `Hi Grey,

I'd like to discuss a project with you.

Name: ${name}
Email: ${email}
Project Type: ${projectType}

Project Details:
${message}

Thank you.`
    );

    window.open(
      `https://wa.me/91${PRIMARY_PHONE}?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );

    setSubmitted(true);
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-24 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute right-[-180px] top-[35%] h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute bottom-[-150px] left-[40%] h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* =====================================================
          HERO / PAGE HEADER
      ===================================================== */}

      <section className="px-4 pb-14 pt-28 sm:px-6 md:pb-20 md:pt-36">
        <div className="container-custom">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
              <Sparkles
                size={16}
                className="text-cyan-400"
              />

              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:text-sm">
                Let's Work Together
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Let's Build Something{" "}
              <span className="gradient-text">
                Great Together.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Have a website, SEO, advertising, automation or digital
              marketing project in mind? Tell me what you need and let's
              discuss how I can help your business grow.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CONTACT AREA
      ===================================================== */}

      <section className="px-4 pb-24 sm:px-6 md:pb-32">
        <div className="container-custom">

          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">

            {/* =================================================
                CONTACT FORM
            ================================================= */}

            <div className="glass rounded-[28px] border border-white/10 p-6 sm:p-8 md:p-10">

              <div className="mb-8">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20">
                  <Send size={20} />
                </div>

                <h2 className="text-2xl font-bold text-white sm:text-3xl">
                  Send a Message
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Tell me a little about your project. I'll get back to you
                  as soon as possible.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Project Type
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-[#111827] px-5 py-4 text-white outline-none transition focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
                  >
                    <option
                      value=""
                      disabled
                      className="bg-[#111827]"
                    >
                      Select a service
                    </option>

                    <option
                      value="Website Development"
                      className="bg-[#111827]"
                    >
                      Website Development
                    </option>

                    <option
                      value="SEO"
                      className="bg-[#111827]"
                    >
                      SEO & Technical Optimization
                    </option>

                    <option
                      value="Google Ads"
                      className="bg-[#111827]"
                    >
                      Google Ads
                    </option>

                    <option
                      value="Meta Ads"
                      className="bg-[#111827]"
                    >
                      Meta Ads
                    </option>

                    <option
                      value="AI Automation"
                      className="bg-[#111827]"
                    >
                      AI Automation
                    </option>

                    <option
                      value="Digital Marketing"
                      className="bg-[#111827]"
                    >
                      Complete Digital Marketing
                    </option>

                    <option
                      value="Other"
                      className="bg-[#111827]"
                    >
                      Other
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Tell Me About Your Project
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your goals, requirements and timeline..."
                    className="w-full resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500/50 focus:bg-white/[0.06] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                {/* Success */}
                {submitted && (
                  <div className="flex items-start gap-3 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-sm text-emerald-300">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0"
                    />

                    <span>
                      WhatsApp has been opened with your project details.
                      You can send the message there.
                    </span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-primary flex w-full items-center justify-center gap-3 py-4"
                >
                  Discuss on WhatsApp
                  <ArrowRight size={19} />
                </button>

                <p className="text-center text-xs leading-5 text-slate-500">
                  Submitting this form opens WhatsApp with your project
                  details so we can continue the conversation directly.
                </p>
              </form>
            </div>

            {/* =================================================
                CONTACT DETAILS
            ================================================= */}

            <div className="space-y-5">

              {/* Email */}
              <a
                href={`mailto:${EMAIL}`}
                className="glass group block rounded-[24px] border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                    <Mail size={22} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-slate-400">
                      Email
                    </p>

                    <h3 className="mt-1 break-all text-lg font-semibold text-white">
                      {EMAIL}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Best for detailed project enquiries.
                    </p>
                  </div>
                </div>
              </a>

              {/* Phone */}
              <div className="glass rounded-[24px] border border-white/10 p-6">

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
                    <Phone size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      Phone
                    </p>

                    <div className="mt-1 space-y-1">
                      <a
                        href={`tel:+91${PRIMARY_PHONE}`}
                        className="block text-lg font-semibold text-white transition-colors hover:text-blue-400"
                      >
                        +91 73111 70851
                      </a>

                      <a
                        href={`tel:+91${ALTERNATIVE_PHONE}`}
                        className="block text-sm text-slate-400 transition-colors hover:text-white"
                      >
                        Alternative: +91 73111 76537
                      </a>
                    </div>

                    <p className="mt-2 text-sm text-slate-500">
                      Available for project discussions.
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="glass group block rounded-[24px] border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/20 hover:bg-white/[0.07]"
              >
                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                    <MessageCircle size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      WhatsApp
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      Start a Quick Conversation
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Send a message directly on WhatsApp with a pre-filled
                      greeting.
                    </p>
                  </div>
                </div>
              </a>

              {/* Availability */}
              <div className="glass rounded-[24px] border border-white/10 p-6">

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                    <Clock3 size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      Response Time
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      Usually within 24 hours
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      I'll review your requirements and get back to you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Location / Remote */}
              <div className="glass rounded-[24px] border border-white/10 p-6">

                <div className="flex items-start gap-5">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                    <MapPin size={22} />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-400">
                      Work Availability
                    </p>

                    <h3 className="mt-1 text-lg font-semibold text-white">
                      Remote & Flexible
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      Working with businesses and clients remotely.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* =================================================
              BOTTOM CTA
          ================================================= */}

          <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-[24px] border border-white/10 bg-white/[0.025] p-6 text-center sm:flex-row sm:text-left">

            <div>
              <h3 className="text-lg font-semibold text-white">
                Prefer a quick conversation?
              </h3>

              <p className="mt-1 text-sm text-slate-400">
                Connect with me directly on WhatsApp.
              </p>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0"
            >
              WhatsApp Me
              <MessageCircle size={18} />
            </a>
          </div>

        </div>
      </section>

      {/* =====================================================
          BACK TO HOME
      ===================================================== */}

      <div className="flex justify-center px-4 pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
        >
          <ArrowRight
            size={16}
            className="rotate-180"
          />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
