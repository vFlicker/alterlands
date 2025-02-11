import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Avatar } from '../atoms/Avatar';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import { VerifiedIcon } from '../atoms/VerifiedIcon';
import { dividerDotCss } from '../dividerDotCss';
import { withAttrs } from '../withAttrs';

type UserMetaProps = {
  avatar: string;
  fullName: string;
  date: string;
  orientation: `${Orientation}`;
  views?: string;
  className?: string;
};

const enum Orientation {
  VERTICAL = 'vertical',
  HORIZONTAL = 'horizontal',
}

function UserMeta({
  className,
  avatar,
  fullName,
  date,
  views,
  orientation,
}: UserMetaProps): JSX.Element {
  return (
    <StyledWrapper className={className}>
      <Avatar size="small" src={avatar} />
      <StyledContent orientation={orientation}>
        <StyledUserInfo>
          <StyledUserFullName>{fullName}</StyledUserFullName>
          <VerifiedIcon />
        </StyledUserInfo>
        <StyledTextWrapper>
          <SecondaryText>{date}</SecondaryText>
          {views && (
            <SecondaryText>
              <StyledEyeIcon />
              {views}
            </SecondaryText>
          )}
        </StyledTextWrapper>
      </StyledContent>
    </StyledWrapper>
  );
}

export { UserMeta };

const ContentVariantToCss = {
  [Orientation.HORIZONTAL]: css`
    flex-direction: row;
    align-items: center;
    gap: 22px;
    & div:first-child {
      position: relative;
      &::after {
        ${dividerDotCss}
      }
    }
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

const StyledContent = styled.div<Pick<UserMetaProps, 'orientation'>>`
  display: flex;

  ${({ orientation }) => ContentVariantToCss[orientation]}
`;

const StyledUserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledUserFullName = withAttrs({ variant: 'body-1' }, Typography);

const StyledTextWrapper = styled.div`
  display: flex;
  gap: 22px;
  & div:first-child {
    position: relative;
    &::after {
      ${dividerDotCss}
    }
  }
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
