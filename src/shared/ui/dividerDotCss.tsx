import { css } from '@emotion/react';

import { Color } from '../theme/colors';
import { Radius } from '../theme/radiuses';

const dividerDotCss = css`
  content: '';
  position: absolute;
  top: 50%;
  right: -14px;
  width: 4px;
  height: 4px;
  border-radius: ${Radius.RADIUS_CIRCLE};
  background-color: ${Color.WHITE_42};
  transform: translateY(-50%);
`;

export { dividerDotCss };
