import React from 'react';
import { ArrowUpRight, MapPin, Phone, Mail, MessageSquare, Facebook, Instagram } from 'lucide-react';
import { GYM_DETAILS } from '../data/gymData.ts';
import { createWhatsAppLink, PREFILLED_MESSAGES, GYM_MAPS_SEARCH_URL } from '../utils/whatsapp.ts';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About Club', href: '#about' },
    { label: 'Training Goals', href: '#training' },
    { label: 'Workout Programs', href: '#programs' },
    { label: 'Membership Plans', href: '#pricing' },
    { label: 'BMI Screening', href: '#bmi-calculator' },
    { label: 'Inside Club', href: '#facilities' },
    { label: 'Member Feedback', href: '#reviews' },
    { label: 'Location & Hours', href: '#contact' },
    { label: 'Enquiry Form', href: '#enquiry' },
  ];

  return (
    <footer className="bg-[#08090C] border-t border-[#292F37] text-[#A6ADB7] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Description (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a
              href="#"
              className="text-2xl font-bold tracking-wider text-white hover:text-[#D7FF35] transition-colors font-display uppercase block"
            >
              COMBAT FITNESS CLUB
            </a>

            <p className="text-sm text-[#A6ADB7] leading-relaxed max-w-sm">
              An energetic, professional, accessible fitness club in Nagpur for people who want to improve strength, stamina, and overall physical health.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={GYM_DETAILS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#15191F] hover:bg-[#202730] border border-[#292F37] hover:border-[#D7FF35] rounded-lg text-white transition-colors"
                title="Combat Fitness Club Facebook Page"
                aria-label="Combat Fitness Club Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#15191F] hover:bg-[#202730] border border-[#292F37] hover:border-[#D7FF35] rounded-lg text-white transition-colors group"
                title="Instagram (Official Handle Verification Pending)"
                aria-label="Instagram profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={createWhatsAppLink(PREFILLED_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#15191F] hover:bg-[#202730] border border-[#292F37] hover:border-[#D7FF35] rounded-lg text-[#D7FF35] transition-colors"
                title="WhatsApp Direct Chat"
                aria-label="WhatsApp Direct Chat"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
              </a>
            </div>

            <p className="text-xs text-[#A6ADB7]/60">
              * Note for client: Official Instagram handle link will be configured upon confirmation with gym management.
            </p>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#D7FF35] transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-display">
              Club Contact
            </h4>
            <ul className="space-y-3 text-xs leading-relaxed">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D7FF35] shrink-0 mt-0.5" />
                <span>
                  {GYM_DETAILS.address}
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D7FF35] shrink-0" />
                <a href="tel:+918624946706" className="font-mono text-white hover:text-[#D7FF35] transition-colors">
                  {GYM_DETAILS.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#D7FF35] shrink-0" />
                <a
                  href={createWhatsAppLink(PREFILLED_MESSAGES.membership)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D7FF35] transition-colors"
                >
                  WhatsApp: +91 86249 46706
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D7FF35] shrink-0" />
                <a href={`mailto:${GYM_DETAILS.email}`} className="hover:text-[#D7FF35] transition-colors truncate">
                  {GYM_DETAILS.email}
                </a>
              </li>

              <li className="pt-2">
                <a
                  href={GYM_MAPS_SEARCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#D7FF35] hover:underline font-display uppercase tracking-wider text-xs"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-[#292F37] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A6ADB7]/70">
          <p>© {currentYear} Combat Fitness Club. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Website Demo Proposal for Client Presentation</span>
            <span aria-hidden="true">·</span>
            <span>Nagpur, Maharashtra</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
