import { css } from '@emotion/react';

import { Color } from '~/shared/theme/colors';

export const separatorCss = css`
  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      width: 100%;
      height: 1px;
      background-color: ${Color.WHITE_16};
    }
  }
`;
