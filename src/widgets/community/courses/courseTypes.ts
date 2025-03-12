export type CourseTier = 'Pro' | 'E' | 'GE';

export type CourseData = {
  id: number;
  imageSrc: string;
  creatorName: string;
  creatorTier: CourseTier;
  title: string;
  labels: string[];
  price: string;
  examPrice: string;
};
