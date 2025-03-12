export type CourseData = {
  id: number;
  imageSrc: string;
  creatorName: string;
  creatorTier: 'Pro' | 'E' | 'GE';
  title: string;
  labels: string[];
  price: string;
  examPrice: string;
};
