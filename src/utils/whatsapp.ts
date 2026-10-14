export const GYM_WHATSAPP_NUMBER = '918624946706';
export const GYM_PHONE_DISPLAY = '+91 86249 46706';
export const GYM_EMAIL = 'combatfitnessclub2@gmail.com';
export const GYM_FACEBOOK_URL = 'https://www.facebook.com/combatfitnessclub2/';
export const GYM_ADDRESS = 'Akash Mall, Ayachit Road, Nagpur, Maharashtra 440032, India';
export const GYM_MAPS_SEARCH_URL = 'https://www.google.com/maps/search/?api=1&query=Combat+Fitness+Club+Akash+Mall+Ayachit+Road+Nagpur+Maharashtra+440032';

/**
 * Generates a valid wa.me link with URL-encoded message text
 */
export function createWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${GYM_WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Standard prefilled messages specified by Combat Fitness Club requirements
 */
export const PREFILLED_MESSAGES = {
  general: 'Hello Combat Fitness Club! I found your website and would like to know more about the gym and membership options.',
  membership: 'Hello Combat Fitness Club! I am interested in joining. Could you please share your membership fees and available facilities?',
  bmi: 'Hello Combat Fitness Club! I used your BMI calculator and would like to discuss my fitness goals and available training options.',
  visit: 'Hello Combat Fitness Club! I would like to know the gym timings and arrange a visit. Please share the details.',
};
