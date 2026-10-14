import React, { useState } from 'react';
import { MessageSquare, Phone, Send, CheckCircle2, AlertCircle, Shield, ArrowUpRight } from 'lucide-react';
import { createWhatsAppLink, GYM_PHONE_DISPLAY } from '../utils/whatsapp.ts';

export const EnquirySection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('Membership fees');
  const [preferredTime, setPreferredTime] = useState('Morning (6:00 AM - 10:00 AM)');
  const [notes, setNotes] = useState('');
  const [validationError, setValidationError] = useState<string | null>(null);
  const [preparedMessage, setPreparedMessage] = useState<string | null>(null);

  const interestOptions = [
    'Membership fees',
    'Available facilities',
    'Training options',
    'Gym visit',
    'General enquiry',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    if (!fullName.trim()) {
      setValidationError('Please enter your full name.');
      return;
    }

    if (!phone.trim() || phone.trim().length < 8) {
      setValidationError('Please enter a valid phone number (at least 8 digits).');
      return;
    }

    // Construct the formatted WhatsApp enquiry message
    const msg = [
      `Hello Combat Fitness Club!`,
      `My name is ${fullName.trim()}.`,
      `Contact Phone: ${phone.trim()}`,
      `Enquiry Focus: ${interest}`,
      `Preferred Visiting Time: ${preferredTime}`,
      notes.trim() ? `Note: ${notes.trim()}` : null,
      `I would like to receive details on membership plans and club timings at Akash Mall, Nagpur.`,
    ]
      .filter(Boolean)
      .join('\n');

    setPreparedMessage(msg);

    // Open WhatsApp directly
    const waLink = createWhatsAppLink(msg);
    window.open(waLink, '_blank', 'noopener,noreferrer');
  };

  const handleResetForm = () => {
    setFullName('');
    setPhone('');
    setInterest('Membership fees');
    setNotes('');
    setPreparedMessage(null);
    setValidationError(null);
  };

  return (
    <section id="enquiry" className="py-20 lg:py-28 bg-[#0B0D10] border-b border-[#292F37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Context & Direct Actions */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-[#D7FF35] tracking-widest uppercase font-display">
                  06. YOUR NEXT MOVE
                </span>
                <span className="text-[#292F37]" aria-hidden="true">·</span>
                <span className="text-xs text-[#A6ADB7] tracking-wider uppercase">CONNECT DIRECTLY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-display leading-[1.05]">
                YOUR FIRST STEP <br />
                <span className="text-[#D7FF35]">STARTS HERE.</span>
              </h2>

              <p className="mt-4 text-base text-[#A6ADB7] leading-relaxed">
                Interested in joining Combat Fitness Club? Contact the team to ask about current membership options, fee structures, available facilities, and arranging a visit to the gym.
              </p>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-4 pt-2">
              <a
                href={createWhatsAppLink('Hello Combat Fitness Club! I would like to enquire about membership plans and visiting the gym.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#15191F] hover:bg-[#1C222B] border border-[#292F37] hover:border-[#D7FF35]/60 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#D7FF35]/10 rounded-lg text-[#D7FF35] group-hover:bg-[#D7FF35] group-hover:text-[#0B0D10] transition-colors">
                    <MessageSquare className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white uppercase font-display">Direct WhatsApp Enquiry</p>
                    <p className="text-xs text-[#A6ADB7]">Chat instantly with gym management</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#A6ADB7] group-hover:text-[#D7FF35] transition-colors" />
              </a>

              <a
                href="tel:+918624946706"
                className="flex items-center justify-between p-4 bg-[#15191F] hover:bg-[#1C222B] border border-[#292F37] hover:border-[#D7FF35]/60 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/5 rounded-lg text-white group-hover:bg-white group-hover:text-[#0B0D10] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white uppercase font-display">Call The Front Desk</p>
                    <p className="text-xs text-[#A6ADB7] font-mono">{GYM_PHONE_DISPLAY}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#A6ADB7] group-hover:text-white transition-colors" />
              </a>
            </div>

            {/* Compliance Guarantee */}
            <div className="p-4 rounded-lg bg-[#15191F]/50 border border-[#292F37] text-xs text-[#A6ADB7] space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-white">
                <Shield className="w-4 h-4 text-[#D7FF35]" />
                <span>Zero Hidden Fees or Invented Claims</span>
              </div>
              <p className="text-[#A6ADB7]/80">
                Combat Fitness Club provides transparent membership rates directly to members. We do not publish unverified discounts or phantom pricing tiers.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Browser-Validated Form */}
          <div className="lg:col-span-7 bg-[#15191F] border border-[#292F37] rounded-xl p-6 sm:p-8 shadow-2xl">
            <h3 className="text-xl font-bold uppercase tracking-tight text-white font-display mb-1">
              Membership & Visit Enquiry
            </h3>
            <p className="text-xs text-[#A6ADB7] mb-6">
              Fill in your details below to generate a prefilled WhatsApp enquiry.
            </p>

            {preparedMessage ? (
              <div className="space-y-6">
                <div className="p-5 rounded-lg bg-[#D7FF35]/10 border border-[#D7FF35]/40 space-y-3">
                  <div className="flex items-center gap-2 text-[#D7FF35]">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-bold font-display uppercase tracking-wider text-sm">
                      Enquiry Form Generated Successfully
                    </span>
                  </div>
                  <p className="text-xs text-[#A6ADB7] leading-relaxed">
                    Your enquiry details have been composed into a prefilled WhatsApp message. If WhatsApp did not open automatically, click the button below to review and send.
                  </p>
                  <div className="p-3 bg-[#0B0D10] rounded border border-[#292F37] font-mono text-xs text-[#A6ADB7] whitespace-pre-line">
                    {preparedMessage}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={createWhatsAppLink(preparedMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#D7FF35] hover:bg-[#cbf528] text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded font-display transition-all"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>OPEN IN WHATSAPP NOW</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="py-3.5 px-6 bg-[#0B0D10] hover:bg-[#1A2028] text-white border border-[#292F37] font-semibold text-xs uppercase tracking-wider rounded font-display transition-colors"
                  >
                    START NEW ENQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="full-name" className="block text-xs font-semibold text-white uppercase tracking-wider font-display mb-1.5">
                    Your Full Name <span className="text-[#D7FF35]">*</span>
                  </label>
                  <input
                    id="full-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-white text-sm focus:outline-none focus:border-[#D7FF35] focus:ring-1 focus:ring-[#D7FF35] transition-all placeholder-[#505762]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="phone-number" className="block text-xs font-semibold text-white uppercase tracking-wider font-display mb-1.5">
                    Your Phone Number <span className="text-[#D7FF35]">*</span>
                  </label>
                  <input
                    id="phone-number"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-white text-sm font-mono focus:outline-none focus:border-[#D7FF35] focus:ring-1 focus:ring-[#D7FF35] transition-all placeholder-[#505762]"
                  />
                </div>

                {/* Interest Dropdown */}
                <div>
                  <label htmlFor="interest-select" className="block text-xs font-semibold text-white uppercase tracking-wider font-display mb-1.5">
                    What would you like to know? <span className="text-[#D7FF35]">*</span>
                  </label>
                  <select
                    id="interest-select"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-white text-sm focus:outline-none focus:border-[#D7FF35] focus:ring-1 focus:ring-[#D7FF35] transition-all"
                  >
                    {interestOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#15191F] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Visiting Time */}
                <div>
                  <label htmlFor="time-select" className="block text-xs font-semibold text-white uppercase tracking-wider font-display mb-1.5">
                    Preferred Visit Timing
                  </label>
                  <select
                    id="time-select"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full px-4 py-3 bg-[#0B0D10] border border-[#292F37] rounded-lg text-white text-sm focus:outline-none focus:border-[#D7FF35] focus:ring-1 focus:ring-[#D7FF35] transition-all"
                  >
                    <option value="Morning (6:00 AM - 10:00 AM)" className="bg-[#15191F]">Morning (6:00 AM – 10:00 AM)</option>
                    <option value="Afternoon (11:00 AM - 4:00 PM)" className="bg-[#15191F]">Afternoon (11:00 AM – 4:00 PM)</option>
                    <option value="Evening (5:00 PM - 10:00 PM)" className="bg-[#15191F]">Evening (5:00 PM – 10:00 PM)</option>
                    <option value="Flexible / Just inquiring" className="bg-[#15191F]">Flexible / Just inquiring</option>
                  </select>
                </div>

                {/* Additional Note */}
                <div>
                  <label htmlFor="notes-input" className="block text-xs font-semibold text-white uppercase tracking-wider font-display mb-1.5">
                    Additional Questions (Optional)
                  </label>
                  <textarea
                    id="notes-input"
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Any specific questions about fitness goals or facilities..."
                    className="w-full px-4 py-2.5 bg-[#0B0D10] border border-[#292F37] rounded-lg text-white text-sm focus:outline-none focus:border-[#D7FF35] focus:ring-1 focus:ring-[#D7FF35] transition-all placeholder-[#505762]"
                  />
                </div>

                {/* Validation Banner */}
                {validationError && (
                  <div className="flex items-start gap-2.5 p-3 rounded-lg bg-red-950/40 border border-red-800 text-red-300 text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>{validationError}</span>
                  </div>
                )}

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#D7FF35] hover:bg-[#cbf528] active:scale-[0.98] text-[#0B0D10] font-bold text-xs uppercase tracking-wider rounded font-display transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>PREVIEW & SEND ON WHATSAPP</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </button>

                {/* Explicit Privacy Notice */}
                <div className="text-[11px] text-[#A6ADB7]/70 leading-relaxed pt-2 border-t border-[#292F37]">
                  <p>
                    <strong className="text-white">Privacy Notice:</strong> Selecting the WhatsApp enquiry button prepares a message on your device and opens WhatsApp. You can review and edit all details before sending. No contact information is saved to an external database without your direct consent.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
