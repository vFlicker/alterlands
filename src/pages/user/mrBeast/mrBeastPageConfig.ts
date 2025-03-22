export const mrBeastPageMenu = [
  { label: 'Trophies', value: 'trophies' },
  { label: 'General', value: 'general' },
  { label: 'MrBeast YouTube', value: 'youtube' },
  { label: 'MrBeast Store', value: 'store' },
  { label: 'MrBeast Burger', value: 'burger' },
  { label: 'News', value: 'news' },
  { label: 'Hiring', value: 'hiring' },
] as const;

export type MrBeastPageMenu = (typeof mrBeastPageMenu)[number]['value'];
