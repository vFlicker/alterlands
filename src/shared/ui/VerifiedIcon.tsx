import styled from '@emotion/styled';

import { Color } from '../theme/colors';
import { Icon } from './Icon';
import { withAttrs } from './withAttrs';

const StyledVerifiedIcon = withAttrs(
  { name: 'icon-verified' },
  styled(Icon)`
    width: 18px;
    height: 17px;
    fill: ${Color.ACCENT};
  `,
);

export { StyledVerifiedIcon as VerifiedIcon };
