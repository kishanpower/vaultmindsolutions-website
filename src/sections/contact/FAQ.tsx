import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "How much does a custom software project cost?",
    answer:
      "Every project is unique. Pricing depends on features, integrations, complexity and development timeline.",
  },
  {
    question:
      "Do you develop ERP systems?",
    answer:
      "Yes. We build custom ERP solutions for manufacturing, retail, logistics and service businesses.",
  },
  {
    question:
      "Can you integrate AI into existing software?",
    answer:
      "Absolutely. We can integrate AI-powered automation, analytics, chat assistants and intelligent workflows into existing platforms.",
  },
  {
    question:
      "How long does software development take?",
    answer:
      "Small projects may take a few weeks while enterprise-grade platforms can take several months depending on scope.",
  },
  {
    question:
      "Do you provide support after deployment?",
    answer:
      "Yes. We offer maintenance, monitoring, upgrades and long-term technical support.",
  },
];

export default function FAQ() {
  const [active, setActive] =
    useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know before
            starting your next software project.
          </p>
        </div>

        <div className="mt-12 space-y-4">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
              "
            >
              <button
                onClick={() =>
                  setActive(
                    active === index
                      ? null
                      : index
                  )
                }
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-6
                  py-5
                  text-left
                "
              >
                <span className="font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`
                    transition-transform
                    duration-300

                    ${
                      active === index
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />
              </button>

              <div
                className={`
                  transition-all
                  duration-300

                  ${
                    active === index
                      ? "max-h-40"
                      : "max-h-0"
                  }

                  overflow-hidden
                `}
              >
                <p className="px-6 pb-5 text-slate-600">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
