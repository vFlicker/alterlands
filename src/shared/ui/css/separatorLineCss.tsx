import { css } from '@emotion/react';

import { Color } from '~/shared/theme/colors';

const separatorLineCss = (bottom: number) => css`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -${bottom}px;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: ${Color.WHITE_8};
  }
`;

export { separatorLineCss };
