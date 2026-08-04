import About from "@/components/sections/About";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata = {
  title: "About",
  description:
    "Learn more about Grey Studio, my experience, process and technology stack.",
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">

      {/* Hero */}

      <section className="relative py-32">

        <div className="container-custom">

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              About Me
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">

              Building

              <span className="gradient-text">
                {" "}Digital Experiences
              </span>

              <br />

              That Grow Businesses.

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">

              I'm Grey, a Website Developer and Digital Growth Specialist.
              I help startups, businesses and entrepreneurs create premium
              websites, improve search visibility, automate workflows and
              generate more leads through modern digital solutions.

            </p>

          </div>

        </div>

      </section>

      {/* About Section */}

      <About />

      {/* Experience */}

      <section className="section">

        <div className="container-custom">

          <div className="glass rounded-[40px] p-10 md:p-16">

            <h2 className="text-4xl font-bold">
              My Mission
            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-400">

              I don't just build websites.

              I build digital experiences that help businesses
              attract customers, increase trust, generate leads,
              improve online visibility and create long-term growth.

            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-3">

              <div>

                <h3 className="text-5xl font-bold gradient-text">
                  20+
                </h3>

                <p className="mt-3 text-slate-400">
                  Projects Completed
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold gradient-text">
                  100%
                </h3>

                <p className="mt-3 text-slate-400">
                  Client Focus
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-bold gradient-text">
                  24/7
                </h3>

                <p className="mt-3 text-slate-400">
                  Support
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Process */}

      <Process />

      {/* Technology */}

      <Technologies />

      {/* CTA */}

      <ContactCTA />

    </main>
  );
}
