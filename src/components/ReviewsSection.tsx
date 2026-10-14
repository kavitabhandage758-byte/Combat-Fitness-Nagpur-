import React from 'react';
import { Star, Quote, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { REVIEW_HIGHLIGHTS, GYM_DETAILS } from '../data/gymData.ts';
import { GYM_MAPS_SEARCH_URL } from '../utils/whatsapp.ts';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
                05. MEMBER FEEDBACK
              </span>
              <span className="text-[#292F37]" aria-hidden="true">·</span>
              <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">GOOGLE VERIFIED</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
              THE COMMUNITY <span className="text-[#D7FF35]">SPEAKS.</span>
            </h2>

            <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
              Consistently rated by fitness enthusiasts across Nagpur for accessible memberships, standard equipment, and dedicated gym environment.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-[#15191F] border border-[#292F37] rounded-xl p-6 flex items-center gap-6 shrink-0 shadow-lg">
            <div>
              <div className="flex items-center gap-1.5 text-[#D7FF35] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D7FF35] text-[#D7FF35]" />
                ))}
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white font-mono tabular-nums">
                  {GYM_DETAILS.rating}
                </span>
                <span className="text-xs text-[#A6ADB7]">on Google</span>
              </div>
              <p className="text-xs text-[#A6ADB7] mt-0.5 tabular-nums">
                Based on {GYM_DETAILS.reviewsCount} Google Reviews
              </p>
            </div>

            <div className="border-l border-[#292F37] pl-6">
              <a
                href={GYM_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0B0D10] hover:bg-[#202730] border border-[#292F37] text-white hover:text-[#D7FF35] text-xs font-bold uppercase tracking-wider rounded font-display transition-colors"
              >
                <span>VIEW PROFILE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 3 Review Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEW_HIGHLIGHTS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#15191F] border border-[#292F37] rounded-xl p-8 flex flex-col justify-between relative shadow-lg group hover:border-[#D7FF35]/40 transition-colors"
            >
              <Quote className="w-8 h-8 text-[#D7FF35]/30 mb-4" />

              <blockquote className="text-lg sm:text-xl font-medium text-white font-display uppercase tracking-wide leading-snug">
                "{rev.text}"
              </blockquote>

              <div className="mt-8 pt-6 border-t border-[#292F37] flex items-center justify-between text-xs text-[#A6ADB7]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#D7FF35]" />
                  <span className="font-semibold text-white">{rev.source}</span>
                </div>
                <div className="flex items-center gap-0.5 text-[#D7FF35]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D7FF35] text-[#D7FF35]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial Compliance Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#A6ADB7]/70 italic">
            * These quotations are verified excerpts from public Google review summaries. Combat Fitness Club does not publish unverified or fabricated endorsements.
          </p>
        </div>
      </div>
    </section>
  );
};
