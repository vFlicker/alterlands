import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Radius } from '~/shared/theme/radiuses';

type AvatarProps = {
  size: `${AvatarSize}`;
};

const enum AvatarSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const AvatarSizeToCss = {
  [AvatarSize.SMALL]: css`
    width: 28px;
    height: 28px;
  `,
  [AvatarSize.MEDIUM]: css`
    width: 32px;
    height: 32px;
  `,
  [AvatarSize.LARGE]: css`
    width: 40px;
    height: 40px;
  `,
};

const StyledAvatar = styled.img<AvatarProps>`
  border-radius: ${Radius.RADIUS_CIRCLE};

  ${({ size }) => AvatarSizeToCss[size]};
`;

export { StyledAvatar as Avatar, AvatarSize };
