import React, { useState } from "react";
import { faqsData } from "../data/faqs";
import { ChevronDown, HelpCircle } from "lucide-react";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[#10162B] text-[#F2EBDD] relative overflow-hidden border-t border-[#C8A45D]/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs font-sans-ui font-bold tracking-[0.3em] text-[#C8A45D] uppercase mb-2 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" /> INFORMATION DESK
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-bold text-[#F2EBDD]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="w-20 h-[2px] bg-[#C8A45D] mt-3" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-lg bg-[#080B16] border border-[#C8A45D]/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif-editorial text-lg sm:text-xl font-semibold text-[#F2EBDD] hover:text-[#C8A45D] transition-colors focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-sans-ui text-[#C8A45D]/60">
                      0{idx + 1}
                    </span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#C8A45D] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 font-sans-ui text-xs sm:text-sm text-[#F2EBDD]/80 leading-relaxed border-t border-[#C8A45D]/10">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
