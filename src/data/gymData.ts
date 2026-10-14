import { FaqItem, ReviewHighlight, TrainingCard, FacilityImage } from '../types/index.ts';

// High-fidelity image assets bundled via Vite for reliable production builds
import heroImg from '../assets/images/hero_combat_gym_1791909430735.jpg';
import facilityFloorImg from '../assets/images/facility_gym_floor_1791909432129.jpg';
import strengthImg from '../assets/images/strength_training_1791909432148.jpg';
import cardioImg from '../assets/images/cardio_conditioning_1791909432217.jpg';
import hiitImg from '../assets/images/program_hiit_workout_1791954133016.jpg';
import zumbaImg from '../assets/images/program_zumba_studio_1791954133279.jpg';
import functionalImg from '../assets/images/program_functional_cross_1791954133607.jpg';

export const IMAGES = {
  hero: heroImg,
  facilityFloor: facilityFloorImg,
  strength: strengthImg,
  cardio: cardioImg,
  hiit: hiitImg,
  zumba: zumbaImg,
  functional: functionalImg,
};

export const GYM_DETAILS = {
  name: 'Combat Fitness Club',
  category: 'Gym and Fitness Club',
  rating: '4.8/5',
  reviewsCount: 109,
  address: 'Akash Mall, Ayachit Road, Nagpur, Maharashtra 440032, India',
  phone: '+91 86249 46706',
  phoneRaw: '918624946706',
  email: 'combatfitnessclub2@gmail.com',
  facebook: 'https://www.facebook.com/combatfitnessclub2/',
  hours: {
    weekdays: '6:00 AM - 10:00 PM',
    saturday: '6:00 AM - 10:00 PM',
    sunday: 'Verify with the gym before publishing',
  },
};

export const TRUST_METRICS = [
  { label: 'GOOGLE RATING', value: '4.8/5', note: 'Verified Google Rating' },
  { label: 'GOOGLE REVIEWS', value: '109', note: 'Public Member Reviews' },
  { label: 'LOCATION', value: 'Nagpur, MH', note: 'Akash Mall, Ayachit Road' },
  { label: 'WEEKDAY HOURS', value: '6 AM - 10 PM', note: 'Monday to Saturday' },
];

export const TRAINING_CARDS: TrainingCard[] = [
  {
    id: 'strength',
    title: 'STRENGTH',
    tagline: 'Foundation & Progressive Load',
    description: 'Work towards improving functional strength, body composition, and building disciplined, consistent training habits.',
    image: IMAGES.strength,
    bulletPoints: [
      'Free weights, barbells & dumbbell stations',
      'Compound movements & powerlifting racks',
      'Targeted muscle hypertrophy & core control',
    ],
  },
  {
    id: 'fitness',
    title: 'FITNESS',
    tagline: 'Everyday Mobility & Vitality',
    description: 'Build a sustainable exercise routine that supports your everyday physical activity, energy levels, and postural strength.',
    image: IMAGES.hero,
    bulletPoints: [
      'Full-body functional movement patterns',
      'Accessible progression for beginners & regulars',
      'Structured routines for daily active living',
    ],
  },
  {
    id: 'endurance',
    title: 'ENDURANCE',
    tagline: 'Cardiovascular Power & Stamina',
    description: 'Explore high-work-capacity training options that challenge your cardiovascular stamina and mental resilience.',
    image: IMAGES.cardio,
    bulletPoints: [
      'Commercial conditioning & cardio machines',
      'Metabolic conditioning & sprint pacing',
      'Stamina building for athletic longevity',
    ],
  },
];

export const FACILITIES_IMAGES: FacilityImage[] = [
  {
    id: 'fac-1',
    title: 'Open Workout Floor & Free Weight Zone',
    category: 'floor',
    categoryLabel: 'Gym Interior',
    src: IMAGES.facilityFloor,
    alt: 'Combat Fitness Club workout floor with racks and turf',
    caption: 'Spacious industrial training environment with dedicated lifting racks, turf strip, and ambient track lighting.',
  },
  {
    id: 'fac-2',
    title: 'Heavy Barbell & Plate Loaded Racks',
    category: 'strength',
    categoryLabel: 'Available Equipment',
    src: IMAGES.strength,
    alt: 'Barbell deadlift and Olympic bumper plates',
    caption: 'Heavy-gauge steel racks, bumper plates, and barbell lifting platforms for serious progression.',
  },
  {
    id: 'fac-3',
    title: 'Rowers, Air Ergometers & Conditioning Bay',
    category: 'cardio',
    categoryLabel: 'Cardio & Conditioning',
    src: IMAGES.cardio,
    alt: 'Cardio and rowers conditioning station',
    caption: 'High-output conditioning zone equipped for endurance, stamina intervals, and cardio fitness.',
  },
  {
    id: 'fac-4',
    title: 'Free Dumbbell Stations & Training Benches',
    category: 'floor',
    categoryLabel: 'Workout Area',
    src: IMAGES.hero,
    alt: 'Athlete resting on flat gym bench beside dumbbell rack',
    caption: 'Cast iron dumbbells, flat/incline benches, and dedicated recovery spaces between heavy working sets.',
  },
];

export const REVIEW_HIGHLIGHTS: ReviewHighlight[] = [
  {
    id: 'rev-1',
    text: 'Standard equipment with low-cost fees',
    source: 'Supplied Google review summary',
    rating: 5,
  },
  {
    id: 'rev-2',
    text: 'Great experience and good staff',
    source: 'Supplied Google review summary',
    rating: 5,
  },
  {
    id: 'rev-3',
    text: 'Amazing place to work out!',
    source: 'Supplied Google review summary',
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Where is Combat Fitness Club located?',
    answer: 'The supplied business information lists Combat Fitness Club at Akash Mall, Ayachit Road, Nagpur, Maharashtra 440032. Confirm the exact address with the gym before publishing.',
  },
  {
    question: 'What are the gym timings?',
    answer: 'The supplied information lists opening hours of 6:00 AM to 10:00 PM from Monday through Saturday. Confirm the current schedule with the gym, including Sunday hours.',
  },
  {
    question: 'How can I ask about membership fees?',
    answer: 'Visitors can contact Combat Fitness Club through the WhatsApp enquiry button or by phone at +91 86249 46706 to request current membership details and fees.',
  },
  {
    question: 'Can I calculate my BMI on this website?',
    answer: 'Yes. The BMI calculator uses height and weight to calculate Body Mass Index. BMI is a screening measure and should not be treated as a complete assessment of individual health.',
  },
];
