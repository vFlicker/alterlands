import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { Icon } from '../../atoms/Icon';
import { IconButton } from '../../atoms/IconButton';
import { Typography } from '../../atoms/Typography';
import { withAttrs } from '../../withAttrs';

type VoteControlProps = {
  count: string;
  isUpActive: boolean;
  isDownActive: boolean;
  variant: `${VoteControlVariant}`;
  className?: string;
  onUp: () => void;
  onDown: () => void;
};

const enum VoteControlVariant {
  FILLED = 'filled',
  NOT_FILLED = 'not filled',
}

function VoteControl({
  className,
  count,
  isUpActive,
  isDownActive,
  variant,
  onUp,
  onDown,
}: VoteControlProps): JSX.Element {
  return (
    <StyledVoteControlWrapper className={className} variant={variant}>
      <StyledVoteButton isActive={isUpActive} onClick={onUp}>
        <StyledIcon name="icon-arrow-big-up" />
      </StyledVoteButton>
      <StyledCounter>{count}</StyledCounter>
      <StyledVoteButton isActive={isDownActive} onClick={onDown}>
        <StyledIcon name="icon-arrow-big-down" />
      </StyledVoteButton>
    </StyledVoteControlWrapper>
  );
}

export { VoteControl, VoteControlVariant };

const VoteControlVariantToCss = {
  [VoteControlVariant.FILLED]: css`
    background-color: ${Color.WHITE_8};

    &:hover,
    &:focus {
      background-color: ${Color.WHITE_16};
    }
  `,
  [VoteControlVariant.NOT_FILLED]: css``,
};

const StyledVoteControlWrapper = styled.div<Pick<VoteControlProps, 'variant'>>`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px 8px;
  border-radius: ${Radius.RADIUS_50};

  ${({ variant }) => VoteControlVariantToCss[variant]}
`;

const StyledCounter = withAttrs(
  { variant: 'body-2', as: 'span' },
  styled(Typography)`
    line-height: 1.5;
  `,
);

const StyledIcon = styled(Icon)``;

const activeIconCss = css`
  & ${StyledIcon} {
    stroke: ${Color.ACCENT};
    fill: ${Color.ACCENT};
  }
`;

const StyledVoteButton = withAttrs(
  { variant: 'filled', size: 'small' },
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
