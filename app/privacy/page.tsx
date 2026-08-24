import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Grey Space",
  description:
    "Privacy Policy for Grey Space and its website development, SEO, advertising and digital marketing services.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-[-180px] top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <section className="px-4 pb-24 pt-28 sm:px-6 md:pb-32 md:pt-36">
        <div className="container-custom">
          {/* Header */}
          <div className="mx-auto max-w-4xl">
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="glass rounded-[28px] border border-white/10 p-6 sm:p-10 md:p-14">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                <ShieldCheck size={28} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Legal
              </span>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-4 text-sm text-slate-500">
                Last updated: August 24, 2026
              </p>

              <div className="mt-10 space-y-10 text-sm leading-8 text-slate-400 sm:text-base">
                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    1. Introduction
                  </h2>

                  <p>
                    Grey Space respects your privacy and is committed to
                    protecting the information you share when using this
                    website or contacting us about our services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    2. Information We Collect
                  </h2>

                  <p>
                    When you contact Grey Space, we may receive information
                    such as your name, email address, phone number, project
                    requirements and other information you voluntarily provide.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    3. How We Use Your Information
                  </h2>

                  <p>
                    Information may be used to respond to enquiries, discuss
                    projects, provide requested services, communicate about
                    ongoing work and improve our website and services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    4. Communication
                  </h2>

                  <p>
                    If you contact Grey Space through email, phone or
                    WhatsApp, the information you provide may be used to
                    continue the conversation and understand your project
                    requirements.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    5. Cookies & Analytics
                  </h2>

                  <p>
                    This website may use cookies or analytics technologies in
                    the future to understand website usage, improve
                    performance and provide a better user experience. Any
                    third-party services used for analytics may process data
                    according to their own privacy policies.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    6. Third-Party Services
                  </h2>

                  <p>
                    Grey Space may use third-party services such as hosting
                    providers, analytics platforms, advertising platforms,
                    communication tools or other services required to operate
                    and deliver projects.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    7. Data Security
                  </h2>

                  <p>
                    Reasonable measures are taken to protect information from
                    unauthorized access, misuse or disclosure. However, no
                    internet-based service can guarantee absolute security.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    8. Your Choices
                  </h2>

                  <p>
                    You may contact Grey Space if you have questions about
                    information you have provided or if you would like to
                    request clarification regarding how your information is
                    used.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    9. Changes to This Policy
                  </h2>

                  <p>
                    This Privacy Policy may be updated from time to time to
                    reflect changes in services, technology or legal
                    requirements. The updated version will be published on this
                    page.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    10. Contact
                  </h2>

                  <p>
                    If you have questions about this Privacy Policy, you can
                    contact Grey Space at:
                  </p>

                  <a
                    href="mailto:rishabhgoko@gmail.com"
                    className="mt-3 inline-block text-cyan-400 transition-colors hover:text-cyan-300"
                  >
                    rishabhgoko@gmail.com
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
