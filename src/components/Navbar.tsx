import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, MessageSquare } from 'lucide-react';
import { createWhatsAppLink, PREFILLED_MESSAGES, GYM_PHONE_DISPLAY } from '../utils/whatsapp.ts';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Training', href: '#training' },
    { label: 'Programs', href: '#programs' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'BMI Calculator', href: '#bmi-calculator' },
    { label: 'Inside Club', href: '#facilities' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0B0D10]/95 backdrop-blur-md border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-bold tracking-wider text-white hover:text-[#D7FF35] transition-colors whitespace-nowrap shrink-0 font-display uppercase"
            aria-label="Combat Fitness Club home"
          >
            COMBAT FITNESS CLUB
          </a>

          {/* Zone 2: 4–5 single-line clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#A6ADB7]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors py-1 whitespace-nowrap shrink-0 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D7FF35] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:+918624946706`}
              className="p-2.5 text-[#A6ADB7] hover:text-white hover:bg-[#15191F] rounded-lg transition-colors border border-transparent hover:border-[#292F37]"
              title={`Call ${GYM_PHONE_DISPLAY}`}
              aria-label={`Call ${GYM_PHONE_DISPLAY}`}
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={createWhatsAppLink(PREFILLED_MESSAGES.membership)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#0B0D10] bg-[#D7FF35] hover:bg-[#cbf528] active:scale-[0.98] transition-all rounded-md shadow-sm whitespace-nowrap shrink-0 font-display"
            >
              <span>JOIN THE CLUB</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={createWhatsAppLink(PREFILLED_MESSAGES.membership)}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden px-3 py-1.5 text-xs font-bold uppercase text-[#0B0D10] bg-[#D7FF35] rounded font-display"
            >
              JOIN
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 text-white bg-[#15191F] border border-[#292F37] rounded-md hover:bg-[#202730] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D7FF35]"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#D7FF35]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#292F37] bg-[#15191F] px-4 pt-4 pb-6 space-y-4 shadow-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="px-3 py-2.5 text-base font-medium text-white hover:text-[#D7FF35] hover:bg-[#0B0D10]/50 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#292F37] flex flex-col gap-3">
            <a
              href={createWhatsAppLink(PREFILLED_MESSAGES.membership)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold uppercase text-[#0B0D10] bg-[#D7FF35] hover:bg-[#cbf528] rounded-md font-display transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
            <a
              href="tel:+918624946706"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-medium text-[#A6ADB7] hover:text-white bg-[#0B0D10] border border-[#292F37] rounded-md transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {GYM_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
