import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/gymData.ts';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
              08. COMMON QUESTIONS
            </span>
            <span className="text-[#292F37]" aria-hidden="true">·</span>
            <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">VERIFIED ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
            FREQUENTLY ASKED <span className="text-[#D7FF35]">QUESTIONS.</span>
          </h2>

          <p className="mt-4 text-base text-[#A6ADB7]">
            Direct, factual answers regarding club location, operating hours, membership inquiries, and our digital health tools.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="bg-[#15191F] border border-[#292F37] rounded-xl overflow-hidden transition-colors hover:border-[#292F37]/80"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF35]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-display uppercase tracking-wide pr-4">
                    {item.question}
                  </span>
                  <div className={`p-1.5 rounded-md bg-[#0B0D10] text-[#D7FF35] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#A6ADB7] leading-relaxed border-t border-[#292F37]/60">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Direct Ask Note */}
        <div className="mt-10 p-6 rounded-xl bg-[#15191F]/50 border border-[#292F37] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HelpCircle className="w-5 h-5 text-[#D7FF35] shrink-0" />
            <p className="text-xs text-[#A6ADB7]">
              Have a specific question not covered here? Reach out to the gym team directly.
            </p>
          </div>
          <a
            href="#enquiry"
            className="text-xs font-bold text-[#D7FF35] hover:text-white uppercase font-display tracking-wider whitespace-nowrap"
          >
            Ask on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
};
