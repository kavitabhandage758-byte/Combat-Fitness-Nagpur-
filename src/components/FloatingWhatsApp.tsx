import React, { useState } from 'react';
import { MessageSquare, X, ArrowUpRight, Dumbbell, Clock, Calculator } from 'lucide-react';
import { createWhatsAppLink, PREFILLED_MESSAGES } from '../utils/whatsapp.ts';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const quickActions = [
    {
      title: 'Membership Fees & Plans',
      icon: <Dumbbell className="w-4 h-4 text-[#D7FF35]" />,
      message: PREFILLED_MESSAGES.membership,
    },
    {
      title: 'Club Timings & Gym Visit',
      icon: <Clock className="w-4 h-4 text-[#D7FF35]" />,
      message: PREFILLED_MESSAGES.visit,
    },
    {
      title: 'BMI & Fitness Goals',
      icon: <Calculator className="w-4 h-4 text-[#D7FF35]" />,
      message: PREFILLED_MESSAGES.bmi,
    },
    {
      title: 'General Enquiry',
      icon: <MessageSquare className="w-4 h-4 text-[#D7FF35]" />,
      message: PREFILLED_MESSAGES.general,
    },
  ];

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-[#15191F] border border-[#292F37] rounded-xl shadow-2xl p-4 text-white animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#292F37]">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#D7FF35]" />
              <div>
                <p className="text-xs font-bold text-white uppercase font-display">
                  Combat Fitness Club
                </p>
                <p className="text-[10px] text-[#A6ADB7]">Usually replies within a few hours</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#A6ADB7] hover:text-white rounded"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#A6ADB7] my-3 leading-relaxed">
            How can the gym help you today? Select a topic below to chat directly with our front desk:
          </p>

          <div className="space-y-2">
            {quickActions.map((action) => (
              <a
                key={action.title}
                href={createWhatsAppLink(action.message)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0B0D10] hover:bg-[#202730] border border-[#292F37] transition-colors text-xs text-left group"
              >
                <div className="flex items-center gap-2.5">
                  {action.icon}
                  <span className="font-medium text-white group-hover:text-[#D7FF35] transition-colors">
                    {action.title}
                  </span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#A6ADB7] group-hover:text-[#D7FF35] transition-colors" />
              </a>
            ))}
          </div>

          <div className="pt-3 mt-3 border-t border-[#292F37] text-[10px] text-[#A6ADB7]/70 text-center">
            Akash Mall, Ayachit Road · Nagpur
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-3 bg-[#D7FF35] hover:bg-[#cbf528] active:scale-95 text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded-full shadow-2xl transition-all duration-200 font-display"
          aria-label="Chat with Combat Fitness Club on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 fill-current" />
          <span className="hidden sm:inline">CHAT ON WHATSAPP</span>
        </button>

        {/* Unobtrusive tooltip on desktop when closed */}
        {!isOpen && (
          <span className="absolute bottom-full right-0 mb-2 hidden sm:group-hover:block bg-[#0B0D10] text-white text-[11px] font-sans font-normal py-1 px-2.5 rounded border border-[#292F37] whitespace-nowrap shadow-lg">
            Chat with Combat Fitness Club
          </span>
        )}
      </div>
    </aside>
  );
};
