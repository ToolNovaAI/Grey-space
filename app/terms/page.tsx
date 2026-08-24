import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | Grey Space",
  description:
    "Terms of Service for Grey Space website development, SEO, advertising, automation and digital marketing services.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute right-[-180px] top-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <section className="px-4 pb-24 pt-28 sm:px-6 md:pb-32 md:pt-36">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Back */}
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <div className="glass rounded-[28px] border border-white/10 p-6 sm:p-10 md:p-14">
              {/* Icon */}
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                <FileText size={28} />
              </div>

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
                Legal
              </span>

              <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Terms of Service
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
                    These Terms of Service describe the general terms under
                    which Grey Space provides website development, SEO,
                    advertising, AI automation and digital marketing services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    2. Services
                  </h2>

                  <p>
                    Services may include website development, website
                    maintenance, SEO, Google Ads, Meta Ads, digital marketing,
                    technical optimization, AI automation and related digital
                    services.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    3. Project Requirements
                  </h2>

                  <p>
                    Clients are responsible for providing accurate project
                    information, content, credentials, assets and approvals
                    required to complete the agreed work.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    4. Project Scope
                  </h2>

                  <p>
                    The scope, deliverables, timelines and pricing of a project
                    should be agreed upon before work begins. Additional
                    requests outside the agreed scope may require additional
                    time or fees.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    5. Payments
                  </h2>

                  <p>
                    Payment terms will be discussed and agreed upon for each
                    project. Work may be paused if agreed payments are not
                    received according to the project arrangement.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    6. Third-Party Platforms
                  </h2>

                  <p>
                    Projects may depend on third-party platforms including
                    hosting providers, domain registrars, Google, Meta,
                    WhatsApp, APIs and other external services. Grey Space
                    cannot guarantee the availability, policies or performance
                    of third-party platforms.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    7. SEO & Advertising Results
                  </h2>

                  <p>
                    SEO rankings, advertising performance, traffic, leads,
                    sales and other marketing results can be affected by many
                    factors outside our control. Therefore, specific results
                    or rankings cannot be guaranteed unless explicitly agreed
                    otherwise in writing.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    8. Intellectual Property
                  </h2>

                  <p>
                    Ownership and usage rights for project deliverables will
                    depend on the agreement made for the individual project.
                    Third-party libraries, platforms, assets and services
                    remain subject to their respective licenses and terms.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    9. Website Use
                  </h2>

                  <p>
                    Visitors agree not to misuse this website, attempt
                    unauthorized access, interfere with its operation or use
                    its content for unlawful purposes.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    10. Limitation of Liability
                  </h2>

                  <p>
                    Grey Space will make reasonable efforts to provide reliable
                    services but cannot guarantee uninterrupted operation,
                    third-party platform availability or specific business
                    outcomes.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    11. Changes to These Terms
                  </h2>

                  <p>
                    These Terms of Service may be updated when necessary. The
                    latest version will be published on this page.
                  </p>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-semibold text-white">
                    12. Contact
                  </h2>

                  <p>
                    For questions regarding these Terms of Service, contact
                    Grey Space at:
                  </p>

                  <a
                    href="mailto:rishabhgoko@gmail.com"
                    className="mt-3 inline-block text-violet-400 transition-colors hover:text-violet-300"
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
