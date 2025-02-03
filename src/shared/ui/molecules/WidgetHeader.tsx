import styled from '@emotion/styled';
import { JSX } from 'react';

import { currentUserImage } from '~/shared/assets/images';
import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { Avatar } from '../atoms/Avatar';
import { Icon, VerifiedIcon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import { withAttrs } from '../withAttrs';

type WidgetHeaderProps = {
  className?: string;
};

function WidgetHeader({ className }: WidgetHeaderProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <UserInfo>
        <Avatar size="small" src={currentUserImage} />
        <UserFullName>Anna Kushch</UserFullName>
        <VerifiedIcon />
      </UserInfo>
      <SecondaryText>Jul 5</SecondaryText>
      <SecondaryText>
        <StyledEyeIcon />
        847k
      </SecondaryText>
    </StyledWrapper>
  );
}

export { WidgetHeader };

const StyledWrapper = styled.div`
  display: flex;
  gap: 22px;
  align-items: center;

  & > div:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: -14px;
      width: 4px;
      height: 4px;
      border-radius: ${Radius.RADIUS_CIRCLE};
      background-color: ${Color.WHITE_42};
      transform: translateY(-50%);
    }
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserFullName = withAttrs({ variant: 'body-1' }, Typography);

const SecondaryText = withAttrs(
  { variant: 'body-4', $color: Color.WHITE_64, as: 'div' },
  styled(Typography)`
    display: flex;
    align-items: center;
    gap: 2px;
  `,
);

const StyledEyeIcon = withAttrs(
  { name: 'icon-eye' },
  styled(Icon)`
    width: 16px;
    height: 16px;
  `,
);
