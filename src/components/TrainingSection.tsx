import React, { useState } from 'react';
import { ArrowUpRight, Dumbbell, Activity, HeartPulse, Check } from 'lucide-react';
import { TRAINING_CARDS } from '../data/gymData.ts';
import { createWhatsAppLink } from '../utils/whatsapp.ts';

export const TrainingSection: React.FC = () => {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case 'strength':
        return <Dumbbell className="w-5 h-5 text-[#D7FF35]" />;
      case 'fitness':
        return <Activity className="w-5 h-5 text-[#D7FF35]" />;
      case 'endurance':
        return <HeartPulse className="w-5 h-5 text-[#D7FF35]" />;
      default:
        return null;
    }
  };

  return (
    <section id="training" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
              02. YOUR FITNESS JOURNEY
            </span>
            <span className="text-[#292F37]" aria-hidden="true">·</span>
            <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">GOAL EXPLORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
            FIND YOUR REASON <span className="text-[#D7FF35]">TO MOVE.</span>
          </h2>

          <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
            Every fitness journey begins with clarity. Explore the primary fitness goals you can discuss with the trainers and team at Combat Fitness Club.
          </p>
        </div>

        {/* 3 Training Goal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAINING_CARDS.map((card) => {
            const isHovered = activeCardId === card.id;
            const cardWhatsAppMessage = `Hello Combat Fitness Club! I am interested in training with a focus on ${card.title}. Could you tell me about the available equipment, timings, and fees?`;

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCardId(card.id)}
                onMouseLeave={() => setActiveCardId(null)}
                className="group relative flex flex-col bg-[#15191F] border border-[#292F37] hover:border-[#D7FF35]/60 rounded-lg overflow-hidden transition-all duration-300 shadow-lg"
              >
                {/* Visual Image with Zoom on Hover */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0B0D10]">
                  <img
                    src={card.image}
                    alt={`${card.title} training at Combat Fitness Club`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15191F] via-[#15191F]/30 to-transparent" />

                  {/* Corner Goal Category Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-[#0B0D10]/90 backdrop-blur-sm border border-[#292F37] rounded">
                    {getIcon(card.id)}
                    <span className="text-xs font-bold tracking-wider text-white uppercase font-display">
                      {card.title}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs font-semibold text-[#D7FF35] uppercase font-display tracking-wider">
                      {card.tagline}
                    </p>
                    <h3 className="mt-1 text-2xl font-bold uppercase text-white font-display tracking-tight">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#A6ADB7] leading-relaxed">
                      {card.description}
                    </p>

                    {/* Bullet Points */}
                    <ul className="mt-4 space-y-2 border-t border-[#292F37] pt-4">
                      {card.bulletPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-xs text-[#A6ADB7]">
                          <Check className="w-3.5 h-3.5 text-[#D7FF35] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Link to WhatsApp */}
                  <div className="pt-4 border-t border-[#292F37]">
                    <a
                      href={createWhatsAppLink(cardWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#0B0D10] bg-[#0B0D10] group-hover:bg-[#D7FF35] border border-[#292F37] group-hover:border-transparent rounded font-display transition-all"
                    >
                      <span>DISCUSS {card.title} GOALS</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Advisory Note */}
        <div className="mt-10 p-4 rounded bg-[#15191F]/60 border border-[#292F37] text-xs text-[#A6ADB7] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p>
            * These descriptions describe general fitness pathways. Specific routines, equipment, and personal guidance are finalized upon consultation with the gym staff at Akash Mall.
          </p>
          <a
            href="#bmi-calculator"
            className="text-[#D7FF35] hover:underline font-semibold font-display tracking-wider uppercase shrink-0"
          >
            Check your BMI first →
          </a>
        </div>
      </div>
    </section>
  );
};
