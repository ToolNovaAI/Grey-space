import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Your Next Client",
    company: "Business Owner",
    review:
      "Your future client's feedback will appear here. Replace this with a genuine testimonial once you complete a project.",
  },
  {
    id: 2,
    name: "Future Project",
    company: "Startup Founder",
    review:
      "A well-designed website, effective SEO, and thoughtful communication are the kinds of experiences this section is designed to showcase.",
  },
  {
    id: 3,
    name: "Upcoming Collaboration",
    company: "Growing Brand",
    review:
      "As your portfolio grows, add authentic client reviews here to build trust with future visitors.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container-custom">
        {/* Header */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Built on
            <span className="gradient-text"> Trust </span>
            and Long-Term Relationships
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            My goal is to deliver websites and digital solutions that help
            businesses grow. This section is ready for real client feedback as
            your portfolio expands.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="glass group rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2"
            >
              <Quote className="mb-6 text-blue-400" size={36} />

              <p className="leading-8 text-slate-300">
                "{item.review}"
              </p>

              <div className="mt-8 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
