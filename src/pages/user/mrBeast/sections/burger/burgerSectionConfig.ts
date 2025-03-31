export const burgerSectionMenu = [
  { label: 'Posts', value: 'posts' },
  { label: 'Happy Clients', value: 'happyClients' },
  { label: 'Reviews', value: 'reviews' },
] as const;

export type BurgerSectionMenu = (typeof burgerSectionMenu)[number]['value'];
