import { css } from '@emotion/react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

const separatorDotCss = css`
  &:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -16px;
      width: 4px;
      height: 4px;
      border-radius: ${Radius.RADIUS_CIRCLE};
      background-color: ${Color.WHITE_42};
      transform: translateY(-50%);
    }
  }
`;

export { separatorDotCss };
