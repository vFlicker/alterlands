import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { Avatar } from '../atoms/Avatar';
import { Chip, ChipColor } from '../atoms/Chip';
import { Icon } from '../atoms/Icon';
import { Typography } from '../atoms/Typography';
import { VerifiedIcon } from '../atoms/VerifiedIcon';
import { separatorDotCss } from '../css/separatorDotCss';
import { withAttrs } from '../withAttrs';

type UserMetaProps = {
  avatar: string;
  fullName: string;
  date: string;
  orientation: `${Orientation}`;
  label?: {
    text: string;
    color: `${ChipColor}`;
  };
  verified?: boolean;
  viewCount?: string;
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
  verified,
  date,
  label,
  viewCount,
  orientation,
}: UserMetaProps): JSX.Element {
  return (
    <StyledUserMetaWrapper className={className}>
      <Avatar size="small" src={avatar} />
      <StyledContent orientation={orientation}>
        <StyledUserInfo orientation={orientation}>
          <StyledUserFullName>{fullName}</StyledUserFullName>
          {verified && <VerifiedIcon />}
        </StyledUserInfo>
        <StyledTextWrapper>
          <SecondaryText>{date}</SecondaryText>
          {viewCount && (
            <SecondaryText>
              <StyledEyeIcon />
              {viewCount}
            </SecondaryText>
          )}
        </StyledTextWrapper>
      </StyledContent>
      {label && (
        <Chip color={label.color} size="small">
          {label.text}
        </Chip>
      )}
    </StyledUserMetaWrapper>
  );
}

export { UserMeta };

const ContentVariantToCss = {
  [Orientation.HORIZONTAL]: css`
    flex-direction: row;
    align-items: center;
    gap: 26px;
  `,
  [Orientation.VERTICAL]: css`
    flex-direction: column;
    gap: 4px;
  `,
};

const StyledUserMetaWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledContent = styled.div<Pick<UserMetaProps, 'orientation'>>`
  display: flex;

  ${({ orientation }) => ContentVariantToCss[orientation]}
`;

const StyledUserInfo = styled.div<Pick<UserMetaProps, 'orientation'>>`
  display: flex;
  align-items: center;
  gap: 6px;

  position: relative;

  ${({ orientation }) =>
    orientation === Orientation.HORIZONTAL && separatorDotCss}
`;

const StyledUserFullName = withAttrs({ variant: 'body-1' }, Typography);

const StyledTextWrapper = styled.div`
  display: flex;
  gap: 22px;
`;

const SecondaryText = withAttrs(
  { variant: 'body-4', $color: Color.WHITE_64, as: 'div' },
  styled(Typography)`
    display: flex;
    align-items: center;
    gap: 2px;

    ${separatorDotCss}
  `,
);

const StyledEyeIcon = withAttrs(
  { name: 'icon-eye' },
  styled(Icon)`
    width: 18px;
    height: 18px;
  `,
);
