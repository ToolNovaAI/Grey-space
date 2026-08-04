import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata = {
  title: "Services",
  description:
    "Premium website development, SEO, Google Ads, Meta Ads, AI Automation and Digital Marketing services.",
};

const serviceList = [
  {
    title: "Website Development",
    description:
      "Modern, responsive and high-performance websites built with Next.js, React and the latest web technologies.",
  },
  {
    title: "SEO Optimization",
    description:
      "Technical SEO, On-Page SEO, Local SEO and website optimization to improve rankings and organic traffic.",
  },
  {
    title: "Google Ads",
    description:
      "High-converting Google Ads campaigns focused on quality leads, sales and measurable ROI.",
  },
  {
    title: "Meta Ads",
    description:
      "Facebook and Instagram advertising strategies designed to grow your audience and increase conversions.",
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive tasks using AI, APIs and workflow integrations to save time and improve efficiency.",
  },
  {
    title: "Website Maintenance",
    description:
      "Regular updates, security monitoring, backups and performance optimization for long-term website success.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative py-32">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
              Services
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Digital Solutions
              <span className="gradient-text"> That Drive Growth</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-400">
              I help businesses grow with premium websites, SEO, paid
              advertising, AI automation and digital marketing strategies
              tailored to real business goals.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Service Highlights */}
      <section className="section">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {serviceList.map((service) => (
              <div
                key={service.title}
                className="glass rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              >
                <h2 className="text-2xl font-bold text-white">
                  {service.title}
                </h2>

                <p className="mt-5 leading-8 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <Process />

      {/* Technologies */}
      <Technologies />

      {/* FAQ */}
      <FAQ />

      {/* Contact CTA */}
      <ContactCTA />
    </main>
  );
}
