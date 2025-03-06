import { css } from '@emotion/react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

const widgetWrapperCss = css`
  padding: 20px 16px;
  border-radius: ${Radius.RADIUS_16};
  background-color: ${Color.DARK};
`;

export { widgetWrapperCss };
