export interface ReviewHighlight {
  id: string;
  text: string;
  source: string;
  rating: number;
}

export interface TrainingCard {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  bulletPoints: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FacilityImage {
  id: string;
  title: string;
  category: 'floor' | 'strength' | 'cardio';
  categoryLabel: string;
  src: string;
  alt: string;
  caption: string;
}
