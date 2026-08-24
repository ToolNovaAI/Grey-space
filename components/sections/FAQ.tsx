"use client";

import { useState } from "react";
import { faq } from "@/constants/faq";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="section relative overflow-hidden"
    >
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-180px] top-20 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[120px]" />

        <div className="absolute right-[-180px] bottom-20 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-[120px]" />

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.04] blur-[120px]" />
      </div>

      <div className="container-custom">

        {/* =====================================================
            SECTION HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 flex w-full max-w-3xl flex-col items-center text-center sm:mb-16 lg:mb-20">

          {/* Badge */}
          <span className="inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-400 sm:px-5 sm:text-sm">
            FAQ
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-center text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Frequently Asked{" "}
            <span className="gradient-text">
              Questions
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 w-full max-w-2xl text-center text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Answers to the questions I receive most often from businesses
            before starting a new project.
          </p>
        </div>

        {/* =====================================================
            FAQ ACCORDION
        ===================================================== */}

        <div className="mx-auto w-full max-w-4xl space-y-3 sm:space-y-4">

          {faq.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`
                  glass
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  sm:rounded-3xl
                  ${
                    isOpen
                      ? "border-white/15 bg-white/[0.045]"
                      : "border-white/10"
                  }
                `}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-5
                    py-5
                    text-left
                    transition-colors
                    duration-300
                    hover:bg-white/[0.035]
                    sm:px-7
                    sm:py-6
                  "
                >
                  {/* Question Text */}
                  <span
                    className={`
                      min-w-0
                      pr-2
                      text-base
                      font-semibold
                      leading-6
                      transition-colors
                      duration-300
                      sm:text-lg
                      sm:leading-7
                      ${
                        isOpen
                          ? "text-white"
                          : "text-slate-200"
                      }
                    `}
                  >
                    {item.question}
                  </span>

                  {/* Toggle Icon */}
                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300
                      sm:h-10
                      sm:w-10
                      ${
                        isOpen
                          ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-400"
                          : "border-white/10 bg-white/[0.04] text-slate-400"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  id={`faq-answer-${item.id}`}
                  className={`
                    grid
                    transition-[grid-template-rows]
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-white/5 px-5 pb-5 pt-4 text-sm leading-7 text-slate-400 sm:px-7 sm:pb-7 sm:pt-5 sm:text-base sm:leading-8">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM NOTE
        ===================================================== */}

        <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-12">
          <p className="text-sm text-slate-500">
            Still have a question?{" "}
            <a
              href="/contact"
              className="font-medium text-cyan-400 transition-colors hover:text-cyan-300"
            >
              Let's talk about your project.
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
