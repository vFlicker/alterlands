import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';

import { Button } from '../../atoms/Button';
import { Icon } from '../../atoms/Icon';
import { withAttrs } from '../../withAttrs';

const StyledMessageButton = withAttrs(
  {
    color: 'neutral',
    size: 'small',
    leftIcon: <Icon name="icon-message-circle" />,
  },
  styled(Button)`
    &:active {
      svg {
        fill: ${Color.WHITE_98};
      }
    }
  `,
);

export { StyledMessageButton as MessageButton };
