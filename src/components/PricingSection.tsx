import React from 'react';
import { Check, MessageSquare, ArrowUpRight, ShieldCheck, Dumbbell, Calendar, Flame } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp.ts';
import { GYM_PHONE_DISPLAY } from '../utils/whatsapp.ts';

export const PricingSection: React.FC = () => {
  const plans = [
    {
      id: 'monthly',
      name: 'MONTHLY ACCESS',
      subtitle: 'Flexible Month-to-Month',
      badge: null,
      highlight: false,
      description: 'Ideal for individuals starting their fitness routine or looking for flexible training without long-term contracts.',
      features: [
        'Full access to gym floor & strength racks',
        'Commercial cardio & conditioning bay',
        'Standard equipment with low-cost fees',
        'Operational hours: Mon–Sat 6:00 AM – 10:00 PM',
        'Locker & general changing amenities',
      ],
      ctaText: 'ENQUIRE MONTHLY FEES',
      whatsappMessage: 'Hello Combat Fitness Club! Could you please share the monthly membership fees and registration details?',
    },
    {
      id: 'quarterly',
      name: 'QUARTERLY PLAN',
      subtitle: '3-Month Discipline',
      badge: 'MOST POPULAR',
      highlight: true,
      description: 'The optimal window to establish consistent training discipline, noticeable strength gains, and sustainable gym habits.',
      features: [
        'Complete access to all gym equipment & zones',
        '3 months uninterrupted workout consistency',
        'Initial equipment walkthrough & form guidance',
        'Flexible workout timings throughout the day',
        'Best value for building disciplined routine',
      ],
      ctaText: 'ENQUIRE 3-MONTH PLAN',
      whatsappMessage: 'Hello Combat Fitness Club! What are your current fees for the 3-month quarterly membership plan?',
    },
    {
      id: 'annual',
      name: 'ANNUAL ATHLETIC',
      subtitle: '12-Month Dedication',
      badge: 'BEST VALUE',
      highlight: false,
      description: 'For committed individuals making fitness an enduring daily lifestyle at the most cost-effective long-term rate.',
      features: [
        'Unlimited year-round gym access (Mon–Sat)',
        'Full access to free weights, machines & cardio',
        'Lowest effective rate per month',
        'Priority batch flexibility throughout the year',
        'Member renewal advantages',
      ],
      ctaText: 'ENQUIRE ANNUAL FEES',
      whatsappMessage: 'Hello Combat Fitness Club! Could you share the annual membership fee schedule and any active seasonal offers?',
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
              MEMBERSHIP PLANS
            </span>
            <span className="text-[#292F37]" aria-hidden="true">·</span>
            <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">TRANSPARENT VALUE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
            SIMPLE PLANS. <span className="text-[#D7FF35]">UNCOMPROMISED DISCIPLINE.</span>
          </h2>

          <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
            Combat Fitness Club offers accessible, low-cost membership plans designed around your routine. Choose your commitment level and enquire directly on WhatsApp for current official rates.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-xl p-7 transition-all duration-300 border ${
                plan.highlight
                  ? 'bg-[#15191F] border-[#D7FF35] shadow-2xl shadow-[#D7FF35]/10 lg:-translate-y-2'
                  : 'bg-[#15191F] border-[#292F37] hover:border-[#292F37]/90'
              }`}
            >
              {/* Optional Highlight Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 right-6 px-3 py-1 bg-[#D7FF35] text-[#0B0D10] font-bold text-[11px] font-display uppercase tracking-wider rounded">
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b border-[#292F37] pb-6">
                  <p className="text-xs font-semibold text-[#D7FF35] font-display uppercase tracking-wider">
                    {plan.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold uppercase text-white font-display tracking-tight mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#A6ADB7] leading-relaxed mt-3">
                    {plan.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-[#292F37]/60 flex items-baseline justify-between">
                    <div>
                      <span className="text-xs uppercase text-[#A6ADB7] font-display block">Rates</span>
                      <span className="text-lg font-bold text-white font-display uppercase">
                        Low-Cost Membership
                      </span>
                    </div>
                    <span className="text-xs text-[#D7FF35] font-medium">
                      Direct Quote
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  <p className="text-xs font-bold uppercase text-white tracking-wider font-display">
                    What's Included:
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-xs text-[#A6ADB7] leading-snug">
                        <Check className="w-4 h-4 text-[#D7FF35] shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#292F37]">
                <a
                  href={createWhatsAppLink(plan.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-bold uppercase tracking-wider rounded font-display transition-all ${
                    plan.highlight
                      ? 'bg-[#D7FF35] hover:bg-[#cbf528] text-[#0B0D10] shadow-md'
                      : 'bg-[#0B0D10] hover:bg-[#202730] text-white hover:text-[#D7FF35] border border-[#292F37]'
                  }`}
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{plan.ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Free Gym Tour / Day Visit Strip */}
        <div className="mt-12 bg-[#15191F] border border-[#292F37] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-[#D7FF35] shrink-0">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold uppercase text-white font-display">
                Want to inspect the club before enrolling?
              </h4>
              <p className="text-xs text-[#A6ADB7] mt-1 max-w-xl">
                Visit Combat Fitness Club at Akash Mall, Ayachit Road. Check the equipment in person, meet the front desk staff, and get an on-the-spot fee walkthrough.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <a
              href={createWhatsAppLink('Hello Combat Fitness Club! I would like to schedule a visit to inspect the gym facilities at Akash Mall.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D7FF35] hover:bg-[#cbf528] text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded font-display transition-colors"
            >
              <span>SCHEDULE A VISIT</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a
              href="tel:+918624946706"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#0B0D10] hover:bg-[#202730] border border-[#292F37] text-white text-xs font-semibold uppercase tracking-wider rounded font-display transition-colors"
            >
              <span>CALL {GYM_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>

        {/* Transparent Pricing Policy Note */}
        <div className="mt-8 flex items-start gap-2.5 text-xs text-[#A6ADB7]/70">
          <ShieldCheck className="w-4 h-4 text-[#D7FF35] shrink-0 mt-0.5" />
          <p>
            <strong>Official Pricing Policy:</strong> Combat Fitness Club maintains transparent, low-cost membership fees without hidden surcharges. Rates are confirmed directly by gym management via WhatsApp or in person at Akash Mall, Ayachit Road, Nagpur.
          </p>
        </div>
      </div>
    </section>
  );
};
