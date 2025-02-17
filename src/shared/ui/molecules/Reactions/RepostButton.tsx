import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { withAttrs } from '../../withAttrs';

const StyledRepostButton = withAttrs(
  {
    color: 'neutral',
    size: 'small',
    leftIcon: <Icon name="icon-repost" />,
  },
  styled(Button)`
    line-height: 1.5;

    &:active {
      svg {
        fill: ${Color.WHITE_98};
      }
    }
  `,
);

export { StyledRepostButton as RepostButton };
