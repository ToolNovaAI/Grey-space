import {
  Search,
  PenTool,
  Code2,
  Rocket,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "I understand your business, goals, audience and project requirements before writing a single line of code.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Strategy & Design",
    description:
      "A premium UI/UX is planned with performance, SEO and conversion in mind.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    number: "03",
    icon: Code2,
    title: "Development",
    description:
      "Your website is built using modern technologies with responsive layouts, speed optimization and clean code.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Growth",
    description:
      "After deployment, I help improve SEO, marketing, automation and long-term performance.",
    color: "from-orange-500 to-red-500",
  },
];

export default function Process() {
  return (
    <section id="process" className="section relative overflow-hidden">
      <div className="container-custom">

        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            My Process
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            A Simple Process
            <span className="gradient-text"> With Powerful Results</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Every successful project follows a structured workflow that
            keeps communication clear, development efficient and results
            focused on your business goals.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="glass group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color}`}
                  >
                    <Icon size={30} className="text-white" />
                  </div>

                  <span className="text-5xl font-bold text-white/10">
                    {step.number}
                  </span>
                </div>

                <h3 className="mb-4 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="leading-8 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
