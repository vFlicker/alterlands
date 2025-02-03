import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

type LabelButtonProps = PropsWithChildren<{
  size: `${ChipSize}`;
  color: `${ChipColor}`;
  intensive?: boolean;
}>;

const enum ChipSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

const enum ChipColor {
  ORANGE = 'orange',
  YELLOW = 'yellow',
  WHITE = 'white',
  BLUE = 'blue',
  RED = 'red',
  GREEN = 'green',
}

const ChipSizeToCss = {
  [ChipSize.SMALL]: css`
    padding: 2px 6px;
    font-size: 12px;
    font-weight: 500;
  `,
  [ChipSize.MEDIUM]: css`
    padding: 4px 16px;
    font-size: 14px;
    font-weight: 500;
  `,
};

const ChipColorToCss = {
  [ChipColor.ORANGE]: css`
    --color-text: ${Color.ORANGE_BACKGROUND};
    --color-chip: ${Color.ORANGE};
  `,
  [ChipColor.YELLOW]: css`
    --color-text: ${Color.YELLOW};
    --color-chip: ${Color.YELLOW_BACKGROUND};
  `,
  [ChipColor.GREEN]: css`
    --color-text: ${Color.GREEN_1};
    --color-chip: ${Color.GREEN_4};
  `,
  [ChipColor.WHITE]: css`
    --color-text: ${Color.WHITE_70};
    --color-chip: ${Color.WHITE_12};
  `,
  [ChipColor.BLUE]: css`
    --color-text: ${Color.BLUE_1};
    --color-chip: ${Color.BLUE_4};
  `,
  [ChipColor.RED]: css`
    --color-text: ${Color.RED_2};
    --color-chip: ${Color.RED_5};
  `,
};

const ChipIntensiveColorToCss = {
  [ChipColor.ORANGE]: css`
    --color-text: ${Color.WHITE_98};
    --color-chip: ${Color.ORANGE_BACKGROUND};
  `,
  [ChipColor.YELLOW]: css`
    --color-text: ${Color.WHITE_98};
    --color-chip: ${Color.YELLOW};
  `,
  [ChipColor.GREEN]: css`
    --color-text: ${Color.WHITE_98};
    --color-chip: ${Color.GREEN_1};
  `,
  [ChipColor.WHITE]: css`
    --color-text: ${Color.WHITE_98};
    --color-chip: ${Color.WHITE_42};
  `,
  [ChipColor.BLUE]: css`
    --color-text: ${Color.WHITE_98};
    --color-chip: ${Color.BLUE_2};
  `,
  [ChipColor.RED]: css`
    --color-text: ${Color.WHITE_98};
    --color-chip: ${Color.RED_2};
  `,
};

const getChipColorCss = (color: `${ChipColor}`, intensive: boolean) => {
  return intensive ? ChipIntensiveColorToCss[color] : ChipColorToCss[color];
};

const StyledChip = styled.div<LabelButtonProps>`
  padding: 4px 8px;
  border-radius: ${Radius.RADIUS_4};

  color: var(--color-text);
  background-color: var(--color-chip);

  line-height: 1.43;

  ${({ size }) => ChipSizeToCss[size]}
  ${({ color, intensive = false }) => getChipColorCss(color, intensive)}
`;

export { StyledChip as Chip };
