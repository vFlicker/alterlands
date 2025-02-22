import { commonImage } from '~/shared/assets/images/common';

import { AppRoute } from './appRoute';

const navigationItems = [
  {
    title: 'Ukraine',
    route: AppRoute.UKRAINE,
    icon: commonImage.iconUkraine,
  },
  {
    title: 'Formula 1',
    route: AppRoute.F1,
    icon: null,
  },
  {
    title: 'US Politics',
    route: AppRoute.US_POLITICS,
    icon: null,
  },
  {
    title: 'UI Kit',
    route: AppRoute.UI_KIT,
    icon: null,
  },
];

export { navigationItems };
