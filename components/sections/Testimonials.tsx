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
    <section
      id="testimonials"
      className="section relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-yellow-500/[0.06] blur-[130px]" />

        <div className="absolute right-[-180px] bottom-20 h-80 w-80 rounded-full bg-violet-500/[0.06] blur-[130px]" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <div className="container-custom">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">

          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-400 sm:px-5 sm:text-sm">
            Testimonials
          </span>

          {/* Heading */}
          <h2 className="mt-6 w-full text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Built For{" "}
            <span className="gradient-text">
              Long-Term Partnerships
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Authentic client feedback will be added here as projects
            are completed and long-term collaborations grow.
          </p>
        </div>

        {/* =====================================================
            TESTIMONIAL GRID
        ===================================================== */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="
                glass
                group
                relative
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-white/20
                hover:bg-white/[0.045]
                sm:p-8
              "
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6 text-white/[0.05] transition-colors duration-500 group-hover:text-white/[0.08]">
                <Quote size={72} />
              </div>

              {/* Stars */}
              <div className="relative mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <blockquote className="relative text-sm leading-7 text-slate-400 sm:text-[15px]">
                “{testimonial.review}”
              </blockquote>

              {/* Divider */}
              <div className="relative my-7 h-px bg-white/10" />

              {/* Client */}
              <div className="relative mt-auto flex items-center gap-4">

                {/* Avatar */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20 via-violet-500/20 to-cyan-500/20 text-sm font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-500">
                    {testimonial.company}
                  </p>
                </div>

              </div>

              {/* Bottom Accent */}
              <div className="relative mt-7">
                <div className="h-1 w-8 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 opacity-60 transition-all duration-500 group-hover:w-14 group-hover:opacity-100" />
              </div>

            </article>
          ))}

        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-12">
          <p className="text-sm leading-6 text-slate-500">
            This section is intentionally reserved for genuine client
            testimonials and project feedback as Grey Space continues
            to grow.
          </p>
        </div>

      </div>
    </section>
  );
}          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
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
