import React, { useState } from 'react';
import { Maximize2, X, Info, Sparkles } from 'lucide-react';
import { FACILITIES_IMAGES } from '../data/gymData.ts';
import { FacilityImage } from '../types/index.ts';

export const FacilitiesGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'floor' | 'strength' | 'cardio'>('all');
  const [selectedImage, setSelectedImage] = useState<FacilityImage | null>(null);

  const filteredImages = activeFilter === 'all'
    ? FACILITIES_IMAGES
    : FACILITIES_IMAGES.filter((img) => img.category === activeFilter);

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
                04. INSIDE COMBAT
              </span>
              <span className="text-[#292F37]" aria-hidden="true">·</span>
              <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">FACILITIES & EQUIPMENT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
              YOUR SPACE <span className="text-[#D7FF35]">TO SHOW UP.</span>
            </h2>

            <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
              Explore the training areas and commercial equipment setup at Akash Mall. Designed for consistency, heavy progression, and daily athletic discipline.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons as permitted by zero-pill rule for functional controls) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#15191F] border border-[#292F37] rounded-lg">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'all'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              ALL AREAS
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('floor')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'floor'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              GYM FLOOR
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('strength')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'strength'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              STRENGTH RIG
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cardio')}
              className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded font-display transition-colors ${
                activeFilter === 'cardio'
                  ? 'bg-[#D7FF35] text-[#0B0D10]'
                  : 'text-[#A6ADB7] hover:text-white'
              }`}
            >
              CARDIO BAY
            </button>
          </div>
        </div>

        {/* Asymmetrical Photographic Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredImages.map((img, index) => {
            // Asymmetric spans: first item is featured wide (7 cols), second is 5 cols, next are 6 and 6
            const colSpanClass = index === 0
              ? 'lg:col-span-7'
              : index === 1
              ? 'lg:col-span-5'
              : 'lg:col-span-6';

            return (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img)}
                className={`group relative rounded-lg overflow-hidden border border-[#292F37] bg-[#15191F] cursor-pointer shadow-lg aspect-[16/10] ${colSpanClass}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/90 via-[#0B0D10]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-[#D7FF35] uppercase font-display tracking-widest block">
                      {img.categoryLabel}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display uppercase tracking-tight">
                      {img.title}
                    </h3>
                  </div>

                  <div className="p-2 bg-[#0B0D10]/80 rounded text-white group-hover:text-[#D7FF35] border border-[#292F37] transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demo Proposal Transparency Banner */}
        <div className="mt-8 flex items-center gap-3 p-4 bg-[#15191F]/60 border border-[#292F37] rounded-lg text-xs text-[#A6ADB7]">
          <Info className="w-4 h-4 text-[#D7FF35] shrink-0" />
          <p>
            <strong className="text-white">Demo Presentation Note:</strong> These photographs represent proposed editorial aesthetic standards and commercial equipment layout. Real high-resolution club photographs provided by the client will seamlessly populate this gallery before final live launch.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[#0B0D10]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative max-w-4xl w-full bg-[#15191F] border border-[#292F37] rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] bg-[#0B0D10]">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-[#0B0D10]/80 text-white hover:text-[#D7FF35] border border-[#292F37] rounded-lg transition-colors"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#292F37]">
              <div>
                <span className="text-xs font-bold text-[#D7FF35] uppercase font-display tracking-wider">
                  {selectedImage.categoryLabel}
                </span>
                <h3 className="text-xl font-bold uppercase text-white font-display mt-0.5">
                  {selectedImage.title}
                </h3>
                <p className="text-xs text-[#A6ADB7] mt-1 max-w-xl">
                  {selectedImage.caption}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-5 py-2.5 bg-[#0B0D10] border border-[#292F37] text-white hover:text-[#D7FF35] text-xs font-bold uppercase tracking-wider rounded font-display self-start sm:self-center transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
