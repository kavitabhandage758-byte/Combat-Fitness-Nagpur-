import React from 'react';
import { Star, MessageCircle, MapPin, Clock } from 'lucide-react';
import { TRUST_METRICS } from '../data/gymData.ts';

export const TrustBar: React.FC = () => {
  return (
    <div className="w-full bg-[#15191F] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-[#292F37]">
          {TRUST_METRICS.map((metric, index) => (
            <div
              key={metric.label}
              className={`flex flex-col justify-center ${index > 0 ? 'pt-4 md:pt-0 md:pl-6' : ''}`}
            >
              <div className="flex items-center gap-2">
                {metric.label === 'GOOGLE RATING' && <Star className="w-4 h-4 text-[#D7FF35] fill-[#D7FF35]" />}
                {metric.label === 'GOOGLE REVIEWS' && <MessageCircle className="w-4 h-4 text-[#D7FF35]" />}
                {metric.label === 'LOCATION' && <MapPin className="w-4 h-4 text-[#D7FF35]" />}
                {metric.label === 'WEEKDAY HOURS' && <Clock className="w-4 h-4 text-[#D7FF35]" />}
                <span className="text-[11px] font-semibold tracking-wider text-[#A6ADB7] font-display uppercase">
                  {metric.label}
                </span>
              </div>
              <p className="mt-1 text-xl sm:text-2xl font-bold text-white tracking-tight tabular-nums font-display">
                {metric.value}
              </p>
              <span className="text-xs text-[#A6ADB7]/80 mt-0.5">
                {metric.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
