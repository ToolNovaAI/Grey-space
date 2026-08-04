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
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute right-0 bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[120px]" />
      </div>

      <div className="container-custom">

        {/* Heading */}

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-6xl">
            Frequently Asked
            <span className="gradient-text">
              {" "}Questions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Answers to the questions I receive most often from
            businesses before starting a new project.
          </p>

        </div>

        {/* Accordion */}

        <div className="mx-auto max-w-4xl space-y-6">

          {faq.map((item) => {

            const isOpen = openId === item.id;

            return (

              <div
                key={item.id}
                className="glass overflow-hidden rounded-3xl"
              >

                <button
                  onClick={() => toggle(item.id)}
                  className="flex w-full items-center justify-between p-8 text-left transition hover:bg-white/5"
                >

                  <h3 className="pr-6 text-xl font-semibold text-white">
                    {item.question}
                  </h3>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5">

                    {isOpen ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}

                  </div>

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <div className="px-8 pb-8 text-slate-400 leading-8">

                      {item.answer}

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
