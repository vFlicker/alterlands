import { css } from '@emotion/react';

import {
  robotoBold,
  robotoMedium,
  robotoRegular,
  robotoSemiBold,
} from '../assets/fonts';

const enum Font {
  Roboto = 'var(--font-roboto)',
}

const globalFonts = css`
  @font-face {
    font-family: 'Roboto';
    font-weight: 600;
    font-style: normal;
    font-display: swap;
    src: url(${robotoSemiBold}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: normal;
    font-style: normal;
    font-display: swap;
    src: url(${robotoRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: 500;
    font-style: normal;
    font-display: swap;
    src: url(${robotoMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Roboto';
    font-weight: bold;
    font-style: normal;
    font-display: swap;
    src: url(${robotoBold}) format('woff2');
  }

  :root {
    --font-roboto: 'Roboto', sans-serif;
  }
`;

export { Font, globalFonts };
