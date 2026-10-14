import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Copy, Check, MessageSquare } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData.ts';
import { createWhatsAppLink, PREFILLED_MESSAGES, GYM_MAPS_SEARCH_URL } from '../utils/whatsapp.ts';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(GYM_DETAILS.address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const scheduleDays = [
    { day: 'Monday', hours: '6:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Tuesday', hours: '6:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Wednesday', hours: '6:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Thursday', hours: '6:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Friday', hours: '6:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Saturday', hours: '6:00 AM - 10:00 PM', status: 'Open' },
    { day: 'Sunday', hours: 'Verify with gym before visiting', status: 'Check' },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
              07. LOCATION & HOURS
            </span>
            <span className="text-[#292F37]" aria-hidden="true">·</span>
            <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">FIND US IN NAGPUR</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
            COME TRAIN <span className="text-[#D7FF35]">WITH US.</span>
          </h2>

          <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
            Located in Akash Mall on Ayachit Road. Drop in during operational hours or get in touch on WhatsApp to coordinate your gym tour.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Contact Cards & Operating Hours */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address Card */}
            <div className="bg-[#15191F] border border-[#292F37] rounded-xl p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#0B0D10] border border-[#292F37] text-[#D7FF35] rounded-lg">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold uppercase text-white font-display">
                      Combat Fitness Club
                    </h3>
                    <p className="text-xs text-[#A6ADB7]">Ayachit Road, Nagpur</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0B0D10] hover:bg-[#202730] border border-[#292F37] rounded text-xs font-medium text-[#A6ADB7] hover:text-white transition-colors"
                  title="Copy full address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#D7FF35]" />
                      <span className="text-[#D7FF35]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-sm text-white font-normal leading-relaxed pl-1">
                {GYM_DETAILS.address}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href={GYM_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#D7FF35] hover:bg-[#cbf528] text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded font-display transition-colors"
                >
                  <span>OPEN IN GOOGLE MAPS</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </a>

                <a
                  href={createWhatsAppLink(PREFILLED_MESSAGES.visit)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B0D10] hover:bg-[#202730] border border-[#292F37] text-white hover:text-[#D7FF35] font-semibold text-xs uppercase tracking-wider rounded font-display transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>PLAN A VISIT</span>
                </a>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:+918624946706"
                className="p-5 bg-[#15191F] border border-[#292F37] hover:border-[#D7FF35]/50 rounded-xl transition-colors block group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#A6ADB7] group-hover:text-[#D7FF35] uppercase font-display">
                  <Phone className="w-4 h-4" />
                  <span>Direct Call</span>
                </div>
                <p className="mt-2 text-sm font-bold text-white font-mono">
                  {GYM_DETAILS.phone}
                </p>
                <span className="text-[11px] text-[#A6ADB7]">Tap to call front desk</span>
              </a>

              <a
                href={`mailto:${GYM_DETAILS.email}`}
                className="p-5 bg-[#15191F] border border-[#292F37] hover:border-[#D7FF35]/50 rounded-xl transition-colors block group"
              >
                <div className="flex items-center gap-2 text-xs font-bold text-[#A6ADB7] group-hover:text-[#D7FF35] uppercase font-display">
                  <Mail className="w-4 h-4" />
                  <span>Email Support</span>
                </div>
                <p className="mt-2 text-xs font-medium text-white truncate" title={GYM_DETAILS.email}>
                  {GYM_DETAILS.email}
                </p>
                <span className="text-[11px] text-[#A6ADB7]">General correspondence</span>
              </a>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-[#15191F] border border-[#292F37] rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#292F37]">
                <div className="flex items-center gap-2 text-white font-bold font-display uppercase tracking-wider text-sm">
                  <Clock className="w-4 h-4 text-[#D7FF35]" />
                  <span>Operating Timings</span>
                </div>
                <span className="text-[11px] text-[#D7FF35] font-mono font-medium">
                  Active Schedule
                </span>
              </div>

              <div className="space-y-2.5">
                {scheduleDays.map((item) => (
                  <div
                    key={item.day}
                    className="flex items-center justify-between text-xs py-1 border-b border-[#292F37]/40 last:border-0"
                  >
                    <span className="font-medium text-white">{item.day}</span>
                    <span className={`font-mono ${item.status === 'Open' ? 'text-[#A6ADB7]' : 'text-amber-400 italic'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-[#A6ADB7]/70 italic pt-1">
                * Note: Timings subject to gym verification. Please verify Sunday hours directly with the club before visiting.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Location View */}
          <div className="lg:col-span-7 bg-[#15191F] border border-[#292F37] rounded-xl overflow-hidden shadow-2xl flex flex-col">
            <div className="p-4 bg-[#111419] border-b border-[#292F37] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D7FF35]" />
                <span className="text-xs font-bold text-white uppercase font-display tracking-wider">
                  Verified Address Map View
                </span>
              </div>
              <a
                href={GYM_MAPS_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#D7FF35] hover:underline font-display tracking-wider uppercase flex items-center gap-1"
              >
                <span>Navigate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded OpenStreetMap / Google Search Frame without unverified fake pins */}
            <div className="relative aspect-[16/11] w-full bg-[#0B0D10]">
              <iframe
                title="Combat Fitness Club Location Map"
                src="https://maps.google.com/maps?q=Akash+Mall+Ayachit+Road+Nagpur+Maharashtra+440032&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(120%)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full opacity-85 hover:opacity-100 transition-opacity"
              />

              {/* Overlay location card */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs bg-[#0B0D10]/95 backdrop-blur-md p-4 rounded-lg border border-[#292F37] shadow-xl">
                <p className="text-xs font-bold text-[#D7FF35] uppercase font-display tracking-wider">
                  COMBAT FITNESS CLUB
                </p>
                <p className="text-xs text-white font-medium mt-1">
                  Akash Mall, Ayachit Road
                </p>
                <p className="text-[11px] text-[#A6ADB7]">
                  Nagpur, Maharashtra 440032
                </p>
                <div className="mt-3 pt-2 border-t border-[#292F37]">
                  <a
                    href={GYM_MAPS_SEARCH_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#D7FF35] font-semibold font-display uppercase tracking-wider"
                  >
                    <span>Get Directions in Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 bg-[#111419] border-t border-[#292F37] flex items-center justify-between text-xs text-[#A6ADB7]">
              <span>Landmark: Ayachit Road Central Market Hub</span>
              <span>Pincode: 440032</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
