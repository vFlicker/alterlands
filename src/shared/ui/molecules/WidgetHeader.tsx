import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { Avatar } from '../atoms/Avatar';
import { Icon, VerifiedIcon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import { withAttrs } from '../withAttrs';

type WidgetHeaderProps = {
  avatar: string;
  fullName: string;
  date: string;
  views: string;
  orientation: `${Orientation}`;
  className?: string;
};

const enum Orientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

function WidgetHeader({
  className,
  avatar,
  fullName,
  date,
  views,
  orientation,
}: WidgetHeaderProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <Avatar size="small" src={avatar} />
      <StyledContent orientation={orientation}>
        <UserInfo>
          <UserFullName>{fullName}</UserFullName>
          <VerifiedIcon />
        </UserInfo>
        <StyledTextWrapper>
          <SecondaryText>{date}</SecondaryText>
          <SecondaryText>
            <StyledEyeIcon />
            {views}
          </SecondaryText>
        </StyledTextWrapper>
      </StyledContent>
    </StyledWrapper>
  );
}

export { WidgetHeader };

const dividerDotCss = css`
  & div:first-child {
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

const ContentVariantToCss = {
  [Orientation.HORIZONTAL]: css`
    flex-direction: row;
    align-items: center;
    gap: 22px;
    ${dividerDotCss}
  `,
  [Orientation.VERTICAL]: css`
    flex-direction: column;
    gap: 4px;
  `,
};

const StyledWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledContent = styled.div<Pick<WidgetHeaderProps, 'orientation'>>`
  display: flex;

  ${({ orientation }) => ContentVariantToCss[orientation]}
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserFullName = withAttrs({ variant: 'body-1' }, Typography);

const StyledTextWrapper = styled.div`
  display: flex;
  gap: 22px;
  ${dividerDotCss}
`;

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
