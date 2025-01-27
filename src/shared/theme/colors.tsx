import { css } from '@emotion/react';

const enum Color {
  ACCENT = 'var(--accent)',
  ACCENT_1 = 'var(--accent-1)',
  ACCENT_2 = 'var(--accent-2)',
  ACCENT_3 = 'var(--accent-3)',
  ACCENT_4 = 'var(--accent-4)',

  WHITE_5 = 'var(--white-5)',
  WHITE_8 = 'var(--white-8)',
  WHITE_12 = 'var(--white-12)',
  WHITE_16 = 'var(--white-16)',
  WHITE_30 = 'var(--white-30)',
  WHITE_42 = 'var(--white-42)',
  WHITE_64 = 'var(--white-64)',
  WHITE_70 = 'var(--white-70)',
  WHITE_87 = 'var(--white-87)',
  WHITE_98 = 'var(--white-98)',

  DARK = 'var(--dark)',
  BACKGROUND = 'var(--background)',

  GREEN_1 = 'var(--green-1)',
  GREEN_2 = 'var(--green-2)',
  GREEN_3 = 'var(--green-3)',
  GREEN_4 = 'var(--green-4)',
  GREEN_5 = 'var(--green-5)',

  BLUE_1 = 'var(--blue-1)',
  BLUE_2 = 'var(--blue-2)',
  BLUE_3 = 'var(--blue-3)',
  BLUE_4 = 'var(--blue-4)',
  BLUE_5 = 'var(--blue-5)',

  RED_1 = 'var(--red-1)',
  RED_2 = 'var(--red-2)',
  RED_3 = 'var(--red-3)',
  RED_4 = 'var(--red-4)',
  RED_5 = 'var(--red-5)',
  RED_6 = 'var(--red-6)',
  RED_7 = 'var(--red-7)',

  ORANGE = 'var(--orange)',
  ORANGE_BACKGROUND = 'var(--orange-background)',

  YELLOW = 'var(--yellow)',
  YELLOW_BACKGROUND = 'var(--yellow-background)',
}

const globalColors = css`
  :root {
    --accent: #0c8ce9;
    --accent-1: #50acef;
    --accent-2: #8ac8f4;
    --accent-3: #495761;
    --accent-4: #374047;

    --white-5: #1c1c1c;
    --white-8: #202020;
    --white-12: #292727;
    --white-16: #343434;
    --white-30: #565656;
    --white-42: #737373;
    --white-64: #9e9e9e;
    --white-70: #c3c3c3;
    --white-87: #e0e0e0;
    --white-98: #fafafa;

    --dark: #0d0d0d;
    --background: #181818;

    --green-1: #17a530;
    --green-2: #03940d;
    --green-3: #0a6c10;
    --green-4: #123816;
    --green-5: #73d257;

    --blue-1: #016bff;
    --blue-2: #0054c9;
    --blue-3: #203e65;
    --blue-4: #112744;
    --blue-5: #0b1727;

    --red-1: #c01d1d;
    --red-2: #b41212;
    --red-3: #7d1d1d;
    --red-4: #4b1f1f;
    --red-5: #381313;
    --red-6: #1f0f0f;
    --red-7: #d24646;

    --orange: #3f2217;
    --orange-background: #f26900;

    --yellow: #daba05;
    --yellow-background: #453c12;
  }
`;

export { Color, globalColors };
