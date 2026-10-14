import React, { useState } from 'react';
import { Flame, Activity, Music, Dumbbell, Zap, ShieldCheck, ArrowUpRight, Clock, Target, Users } from 'lucide-react';
import { createWhatsAppLink } from '../utils/whatsapp.ts';
import { IMAGES } from '../data/gymData.ts';

interface ProgramItem {
  id: string;
  name: string;
  subtitle: string;
  category: 'hiit' | 'cardio' | 'dance' | 'strength' | 'functional' | 'mobility';
  categoryGroup: 'all' | 'high-intensity' | 'cardio-dance' | 'strength-functional';
  intensity: 'High' | 'Moderate–High' | 'Moderate' | 'All Fitness Levels';
  duration: string;
  image: string;
  description: string;
  benefits: string[];
  bestFor: string;
}

export const ProgramsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'high-intensity' | 'cardio-dance' | 'strength-functional'>('all');

  const programs: ProgramItem[] = [
    {
      id: 'hiit',
      name: 'HIIT & METABOLIC BURN',
      subtitle: 'High-Intensity Interval Training',
      category: 'hiit',
      categoryGroup: 'high-intensity',
      intensity: 'High',
      duration: '45 mins',
      image: IMAGES.hiit,
      description: 'Explosive intervals alternating maximum cardiovascular output with short recovery intervals using battle ropes, kettlebells, and plyometrics.',
      benefits: ['Peak calorie expenditure', 'Elevated cardiovascular stamina', 'Metabolic afterburn (EPOC)'],
      bestFor: 'Rapid conditioning & fat loss',
    },
    {
      id: 'cardio',
      name: 'CARDIO CONDITIONING',
      subtitle: 'Endurance & Aerobic Base',
      category: 'cardio',
      categoryGroup: 'cardio-dance',
      intensity: 'Moderate–High',
      duration: '50 mins',
      image: IMAGES.cardio,
      description: 'Progressive aerobic programming utilizing commercial ergometers, rowers, air bikes, and treadmill sprint intervals to elevate lung capacity.',
      benefits: ['Heart health & stamina', 'High-volume endurance foundation', 'Low-impact joint conditioning'],
      bestFor: 'Stamina building & sports endurance',
    },
    {
      id: 'zumba',
      name: 'ZUMBA FITNESS DANCE',
      subtitle: 'High-Energy Rhythmic Cardio',
      category: 'dance',
      categoryGroup: 'cardio-dance',
      intensity: 'Moderate–High',
      duration: '60 mins',
      image: IMAGES.zumba,
      description: 'A vibrant, music-fueled workout combining dynamic Latin rhythms, dance choreography, and full-body cardio intervals for an exhilarating group sweat.',
      benefits: ['Joyful whole-body cardio', 'Coordination & balance boost', 'Mood enhancement & community energy'],
      bestFor: 'Social workout lovers & active calorie burn',
    },
    {
      id: 'strength',
      name: 'STRENGTH & POWERLIFTING',
      subtitle: 'Heavy Iron & Progressive Overload',
      category: 'strength',
      categoryGroup: 'strength-functional',
      intensity: 'High',
      duration: '60 mins',
      image: IMAGES.strength,
      description: 'Structured compound lifting protocols focused on barbell squats, deadlifts, bench presses, and targeted hypertrophy stations with Olympic plates.',
      benefits: ['Dense lean muscle development', 'Bone density & joint resilience', 'Raw neuromuscular power'],
      bestFor: 'Muscle hypertrophy & foundational power',
    },
    {
      id: 'functional',
      name: 'FUNCTIONAL CROSS-TRAINING',
      subtitle: 'Real-World Agility & Circuits',
      category: 'functional',
      categoryGroup: 'strength-functional',
      intensity: 'High',
      duration: '50 mins',
      image: IMAGES.functional,
      description: 'Athletic multi-planar movement patterns combining slam balls, box jumps, sled pushes, and core anti-rotation drills for dynamic athleticism.',
      benefits: ['Real-world functional fitness', 'Rotational torque & agility', 'Total-body kinetic chain sync'],
      bestFor: 'Athletic agility & functional power',
    },
    {
      id: 'core-mobility',
      name: 'CORE & ATHLETIC MOBILITY',
      subtitle: 'Flexibility, Posture & Recovery',
      category: 'mobility',
      categoryGroup: 'high-intensity',
      intensity: 'All Fitness Levels',
      duration: '40 mins',
      image: IMAGES.hero,
      description: 'Targeted deep core stabilization, hip/shoulder mobility drills, spinal decompressions, and active recovery routines preventing training plateaus.',
      benefits: ['Injury prevention & joint health', 'Postural alignment correction', 'Deep abdominal & lower back support'],
      bestFor: 'Posture correction & recovery',
    },
  ];

  const filteredPrograms = activeFilter === 'all'
    ? programs
    : programs.filter((p) => p.categoryGroup === activeFilter);

  return (
    <section id="programs" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
                TRAINING PROGRAMS
              </span>
              <span className="text-[#292F37]" aria-hidden="true">·</span>
              <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">DIVERSE DISCIPLINES</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
              STRUCTURED FOR RESULTS. <span className="text-[#D7FF35]">DRIVEN BY INTENSITY.</span>
            </h2>

            <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
              Explore Combat Fitness Club's core workout programs in Nagpur. Whether you want high-energy Zumba, intense HIIT intervals, or heavy strength progression, find the program matching your athletic ambition.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#15191F] border border-[#292F37] rounded-lg shrink-0">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              ALL (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('high-intensity')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'high-intensity'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              HIIT & CORE
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cardio-dance')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'cardio-dance'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              CARDIO & ZUMBA
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('strength-functional')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'strength-functional'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              STRENGTH & CROSS
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((prog) => {
            const prefilledMsg = `Hello Combat Fitness Club! I am interested in joining the ${prog.name} program. Could you please share the current batch timings, instructor availability, and fees at Akash Mall?`;

            return (
              <div
                key={prog.id}
                className="group relative flex flex-col justify-between bg-[#15191F] border border-[#292F37] hover:border-[#D7FF35]/70 rounded-xl overflow-hidden transition-all duration-300 shadow-xl"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0B0D10]">
                  <img
                    src={prog.image}
                    alt={`${prog.name} at Combat Fitness Club Nagpur`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#15191F] via-[#15191F]/40 to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-[#0B0D10]/90 backdrop-blur-sm border border-[#292F37] text-[#D7FF35] font-display text-[10px] font-bold uppercase tracking-wider rounded">
                      {prog.intensity}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 bg-[#0B0D10]/90 backdrop-blur-sm border border-[#292F37] text-[#A6ADB7] text-[10px] font-mono rounded">
                      <Clock className="w-3 h-3 text-[#D7FF35]" />
                      {prog.duration}
                    </span>
                  </div>
                </div>

                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-[11px] font-semibold text-[#D7FF35] uppercase font-display tracking-wider block">
                      {prog.subtitle}
                    </span>
                    <h3 className="mt-1 text-2xl font-bold uppercase text-white font-display tracking-tight">
                      {prog.name}
                    </h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-[#A6ADB7] leading-relaxed">
                      {prog.description}
                    </p>

                    {/* Key Benefits */}
                    <div className="mt-4 pt-4 border-t border-[#292F37]/80 space-y-2">
                      <p className="text-[11px] font-bold uppercase text-white tracking-wider font-display">
                        Program Highlights:
                      </p>
                      <ul className="space-y-1.5">
                        {prog.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-xs text-[#A6ADB7]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF35] shrink-0 mt-1.5" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For Tag */}
                    <div className="mt-4 pt-3 border-t border-[#292F37]/60 flex items-center gap-1.5 text-xs text-[#A6ADB7]">
                      <Target className="w-3.5 h-3.5 text-[#D7FF35] shrink-0" />
                      <span><strong>Best for:</strong> {prog.bestFor}</span>
                    </div>
                  </div>

                  {/* Program Action CTA */}
                  <div className="pt-4 border-t border-[#292F37]">
                    <a
                      href={createWhatsAppLink(prefilledMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-4 py-3 text-xs font-bold uppercase tracking-wider text-white group-hover:text-[#0B0D10] bg-[#0B0D10] group-hover:bg-[#D7FF35] border border-[#292F37] group-hover:border-transparent rounded font-display transition-all"
                    >
                      <span>ENQUIRE ON BATCH TIMINGS</span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Schedule & Batch Notice Banner */}
        <div className="mt-12 bg-[#15191F] border border-[#292F37] rounded-xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4">
            <div className="p-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-[#D7FF35] shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold uppercase text-white font-display">
                Looking for morning or evening batch slots?
              </h4>
              <p className="text-xs text-[#A6ADB7] mt-1 max-w-xl">
                Combat Fitness Club runs active sessions from 6:00 AM to 10:00 PM (Monday through Saturday) at Akash Mall, Ayachit Road. Message our desk on WhatsApp for currently open batch slots.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={createWhatsAppLink('Hello Combat Fitness Club! What are the morning and evening batch timings available for HIIT and Zumba classes?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D7FF35] hover:bg-[#cbf528] text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded font-display transition-colors"
            >
              <span>CHECK BATCH TIMINGS</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
