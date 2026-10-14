import React from 'react';
import { ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { IMAGES, GYM_DETAILS } from '../data/gymData.ts';
import { createWhatsAppLink, PREFILLED_MESSAGES } from '../utils/whatsapp.ts';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual feature */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Offset Accent Box */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D7FF35]/20 to-transparent rounded-lg blur-sm -z-10" />

              <div className="overflow-hidden rounded-lg border border-[#292F37] bg-[#15191F] relative aspect-[16/10]">
                <img
                  src={IMAGES.facilityFloor}
                  alt="Inside Combat Fitness Club training floor in Nagpur"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#A6ADB7]">
                  <span className="flex items-center gap-1.5 font-medium text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#D7FF35]" />
                    Akash Mall, Ayachit Road, Nagpur
                  </span>
                  <span className="text-[#D7FF35] font-display font-semibold uppercase tracking-wider">
                    ESTABLISHED COMMUNITY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Block */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
                01. THE CLUB
              </span>
              <span className="text-[#292F37]" aria-hidden="true">·</span>
              <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">NAGPUR, MAHARASHTRA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05] [text-wrap:balance]">
              MORE THAN A WORKOUT. <br />
              <span className="text-[#D7FF35]">A COMMITMENT</span> TO YOURSELF.
            </h2>

            <div className="space-y-4 text-base text-[#A6ADB7] leading-relaxed">
              <p>
                Combat Fitness Club is a gym in Nagpur for people looking to make fitness an enduring part of their routine. Whether you are beginning your fitness journey or continuing your training, take the next step by visiting the club and speaking with the team.
              </p>
              <p>
                Conveniently located at Akash Mall on Ayachit Road, the club offers a focused, no-nonsense environment where everyday fitness enthusiasts and lifting regulars push their limits side by side.
              </p>
            </div>

            {/* Core Club Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3 rounded bg-[#15191F] border border-[#292F37]">
                <CheckCircle2 className="w-4 h-4 text-[#D7FF35] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase font-display">Dedicated Workout Floor</p>
                  <p className="text-xs text-[#A6ADB7]">Lifting platforms, free weights & machines</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded bg-[#15191F] border border-[#292F37]">
                <CheckCircle2 className="w-4 h-4 text-[#D7FF35] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-white uppercase font-display">Accessible Value</p>
                  <p className="text-xs text-[#A6ADB7]">Standard equipment with low-cost membership</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={createWhatsAppLink(PREFILLED_MESSAGES.membership)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-bold tracking-wider uppercase text-[#0B0D10] bg-[#D7FF35] hover:bg-[#cbf528] active:scale-[0.98] transition-all rounded font-display"
              >
                <span>ASK ABOUT MEMBERSHIP</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[#A6ADB7] hover:text-white uppercase font-display py-2 px-3 hover:bg-[#15191F] rounded transition-colors"
              >
                <span>View Club Location & Timings</span>
              </a>
            </div>

            <p className="text-[11px] text-[#A6ADB7]/60 italic">
              * Note: For verified membership plans, current batch timings, and personal trainer inquiries, please message the club directly on WhatsApp or visit the front desk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
