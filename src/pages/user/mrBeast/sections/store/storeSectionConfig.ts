export const storeSectionMenu = [
  { label: 'Posts', value: 'posts' },
  { label: 'Happy Clients', value: 'happyClients' },
  { label: 'Reviews', value: 'reviews' },
] as const;

export type StoreSectionMenu = (typeof storeSectionMenu)[number]['value'];
