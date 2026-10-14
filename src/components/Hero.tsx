import React from 'react';
import { ArrowDown, MessageSquare, Star, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink, PREFILLED_MESSAGES } from '../utils/whatsapp.ts';
import { IMAGES, GYM_DETAILS } from '../data/gymData.ts';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#0B0D10] pt-8 pb-16 lg:py-24 border-b border-[#292F37]">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D7FF35]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Athletic Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 z-10">
            {/* Eyebrow & Location Indicator */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D7FF35]" aria-hidden="true" />
              <p className="text-xs sm:text-sm font-semibold tracking-widest text-[#D7FF35] uppercase font-display">
                COMBAT FITNESS CLUB | NAGPUR
              </p>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-white uppercase font-display leading-[0.95] max-w-2xl [text-wrap:balance]">
              BUILT BY <span className="text-[#D7FF35]">DISCIPLINE.</span>
              <br />
              POWERED BY <span className="underline decoration-[#D7FF35]/40 decoration-4 underline-offset-8">YOU.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#A6ADB7] leading-relaxed max-w-xl font-normal">
              Your next chapter starts with one workout. Build strength, improve your fitness, and make every session count at Combat Fitness Club in Nagpur.
            </p>

            {/* Trust Indicator - Accurate Google rating */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#A6ADB7] border-y border-[#292F37] py-3 max-w-md">
              <div className="flex items-center gap-1 text-[#D7FF35]">
                <Star className="w-4 h-4 fill-[#D7FF35] text-[#D7FF35]" />
                <span className="font-bold text-white tabular-nums">{GYM_DETAILS.rating}</span>
              </div>
              <span className="text-[#292F37]" aria-hidden="true">|</span>
              <span className="tabular-nums font-medium text-white">{GYM_DETAILS.reviewsCount} Google Reviews</span>
              <span className="text-[#292F37]" aria-hidden="true">|</span>
              <span className="text-[#A6ADB7]">Ayachit Road, Nagpur</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href={createWhatsAppLink(PREFILLED_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm font-bold tracking-wider uppercase text-[#0B0D10] bg-[#D7FF35] hover:bg-[#cbf528] active:scale-[0.98] transition-all rounded shadow-lg shadow-[#D7FF35]/10 font-display group"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>ENQUIRE ON WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#training"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium tracking-wide uppercase text-white hover:text-[#D7FF35] bg-[#15191F] hover:bg-[#1f252e] border border-[#292F37] transition-colors rounded font-display"
              >
                <span>EXPLORE THE CLUB</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>

            {/* Micro note regarding verified hours & location */}
            <div className="pt-2 text-xs text-[#A6ADB7]/70 flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D7FF35]" />
              <span>Akash Mall, Ayachit Road · Mon–Sat 6:00 AM – 10:00 PM</span>
            </div>
          </div>

          {/* Right Column: Editorial Fitness Photograph */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Graphic accent corner */}
              <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-[#D7FF35] pointer-events-none z-20" />
              <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-[#D7FF35] pointer-events-none z-20" />

              {/* Main Image Container */}
              <div className="relative aspect-[4/3] sm:aspect-[4/5] lg:aspect-[4/5] overflow-hidden rounded-lg border border-[#292F37] bg-[#15191F] shadow-2xl">
                <img
                  src={IMAGES.hero}
                  alt="Athlete training with barbell and dumbbells at Combat Fitness Club"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter contrast-105"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle dark gradient scrim for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/80 via-transparent to-transparent pointer-events-none" />

                {/* Corner badge on image */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B0D10]/85 backdrop-blur-md border border-[#292F37] p-3 rounded flex items-center justify-between">
                  <div>
                    <p className="text-[10px] tracking-wider text-[#A6ADB7] uppercase font-display">ATHLETIC COMMUNITY</p>
                    <p className="text-sm font-bold text-white font-display">COMMITTED TO PROGRESS</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-wider text-[#D7FF35] uppercase font-display">NAGPUR</p>
                    <p className="text-xs text-[#A6ADB7] font-medium">AYACHIT RD</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
