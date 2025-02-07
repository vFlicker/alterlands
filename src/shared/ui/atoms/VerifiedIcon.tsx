import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

import { Icon } from '../atoms/Icon';
import { withAttrs } from '../withAttrs';

const StyledVerifiedIcon = withAttrs(
  { name: 'icon-verified' },
  styled(Icon)`
    width: 18px;
    height: 17px;
    fill: ${Color.ACCENT};
  `,
);

export { StyledVerifiedIcon as VerifiedIcon };
