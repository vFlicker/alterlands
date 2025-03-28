import { css } from '@emotion/react';

import { Color } from './colors';
import { Font } from './fonts';
import { Radius } from './radiuses';

const globalResets = css`
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;

    border: none;
    border-radius: 0;

    background: none;
    box-shadow: none;

    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: ${Radius.RADIUS_10};
      background-color: ${Color.WHITE_16};
    }
  }

  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    height: 100%;
  }

  body {
    font-size: 14px;
    line-height: 1.43;
    color: ${Color.WHITE_98};
    font-family: ${Font.Roboto};
    background-color: ${Color.BACKGROUND};
  }

  textarea {
    resize: none;
  }

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  button,
  input,
  select {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ol,
  ul {
    list-style: none;
  }

  div#root {
    height: 100%;
  }
`;

export { globalResets };
