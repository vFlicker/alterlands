import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';

type ProgressBarItem = {
  id: number;
  value: number;
  color: `${ProgressBarColor}`;
};

type ProgressBarProps = {
  items: ProgressBarItem[];
};

const enum ProgressBarColor {
  BLUE = 'blue',
  RED = 'red',
  GREEN = 'green',
}

function ProgressBar({ items }: ProgressBarProps): JSX.Element {
  const total = items.reduce((sum, { value }) => sum + value, 0);

  return (
    <StyledProgressBarWrapper>
      {items.map(({ color, value }, index) => {
        const percentage = (value / total) * 100;
        const shouldShowSeparator = index > 0;
        const separatorPosition = 100 - percentage;

        return (
          <>
            {shouldShowSeparator && (
              <StyledSeparatorWrapper position={separatorPosition} />
            )}
            <StyledProgressBar key={color} width={percentage} color={color}>
              <StyledPercentageText color={color}>
                {percentage.toFixed(1)}%
              </StyledPercentageText>
            </StyledProgressBar>
          </>
        );
      })}
    </StyledProgressBarWrapper>
  );
}

export { ProgressBar };

type StyledProgressBarProps = {
  width: number;
  color: `${ProgressBarColor}`;
};

const ProgressBarColorToCss = {
  [ProgressBarColor.BLUE]: css`
    --color-progress-bar: ${Color.BLUE_5};
    --color-border-progress-bar: ${Color.BLUE_2};
  `,
  [ProgressBarColor.RED]: css`
    --color-progress-bar: ${Color.RED_6};
    --color-border-progress-bar: ${Color.RED_3};
  `,
  [ProgressBarColor.GREEN]: css`
    --color-progress-bar: ${Color.GREEN_4};
    --color-border-progress-bar: ${Color.GREEN_2};
  `,
};

const StyledProgressBar = styled.div<StyledProgressBarProps>`
  position: absolute;
  top: 0;

  width: ${({ width }) => width}%;
  height: 100%;

  background-color: var(--color-progress-bar);
  border-color: var(--color-border-progress-bar);
  border-style: solid;

  ${({ color }) => ProgressBarColorToCss[color]}
`;

const StyledSeparatorWrapper = styled.div<{ position: number }>`
  position: absolute;
  left: ${({ position }) => `calc(${position}% - 1px)`};
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -10px;

    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid ${Color.WHITE_87};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;

    width: 2px;
    height: calc(100% + 1px);
    border-radius: 1px 1px 0 0;

    background-color: ${Color.WHITE_98};
  }
`;

const StyledPercentageText = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${Color.WHITE_98};
  font-weight: 700;
  font-size: 24px;
  line-height: 1.42;
`;

const StyledProgressBarWrapper = styled.div`
  position: relative;
  height: 42px;
  background-color: ${Color.WHITE_12};

  ${StyledProgressBar}:first-child {
    left: 0;
    border-width: 2px 0 2px 2px;

    ${StyledPercentageText} {
      left: 12px;
    }
  }

  ${StyledProgressBar}:last-child {
    right: 0;
    border-width: 2px 2px 2px 0;

    ${StyledPercentageText} {
      right: 12px;
    }
  }
`;
