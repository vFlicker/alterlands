import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '../theme/colors';
import { Radius } from '../theme/radiuses';
import { Icon } from './Icon';
import { IconButton } from './IconButton';
import { Typography } from './Typography';
import { withAttrs } from './withAttrs';

type VoteControlProps = {
  count: string;
  isUpActive: boolean;
  isDownActive: boolean;
  filled?: boolean;
  onUp: () => void;
  onDown: () => void;
};

function VoteControl({
  filled,
  count,
  isUpActive,
  isDownActive,
  onUp,
  onDown,
}: VoteControlProps): JSX.Element {
  return (
    <StyledWrapper filled={filled}>
      <StyledVoteButton isActive={isUpActive} onClick={onUp}>
        <StyledIcon name="icon-arrow-big-up" />
      </StyledVoteButton>
      <StyledCounter>{count}</StyledCounter>
      <StyledVoteButton isActive={isDownActive} onClick={onDown}>
        <StyledIcon name="icon-arrow-big-down" />
      </StyledVoteButton>
    </StyledWrapper>
  );
}

export { VoteControl };

const filledBackgroundCss = css`
  background-color: ${Color.WHITE_8};

  &:hover,
  &:focus {
    background-color: ${Color.WHITE_16};
  }
`;

const StyledWrapper = styled.div<Pick<VoteControlProps, 'filled'>>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 3px 6px;
  border-radius: ${Radius.RADIUS_50};

  ${({ filled }) => filled && filledBackgroundCss}
`;

const StyledCounter = withAttrs({ variant: 'body-2', as: 'span' }, Typography);

const StyledIcon = styled(Icon)``;

const activeIconCss = css`
  & ${StyledIcon} {
    stroke: ${Color.ACCENT};
    fill: ${Color.ACCENT};
  }
`;

const StyledVoteButton = withAttrs(
  { variant: 'filled' },
  styled(IconButton)<{ isActive: boolean }>`
    &:hover ${StyledIcon}, &:focus ${StyledIcon} {
      stroke: ${Color.ACCENT};
    }

    &:active ${StyledIcon} {
      stroke: ${Color.ACCENT};
      fill: ${Color.ACCENT};
    }

    ${({ isActive }) => isActive && activeIconCss}
  `,
);
