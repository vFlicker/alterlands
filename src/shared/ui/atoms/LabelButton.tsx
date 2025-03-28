import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from './Typography';

type LabelButtonProps = {
  color: `${LabelButtonColor}`;
  active?: boolean;
};

const enum LabelButtonColor {
  WHITE = 'white',
  BLUE = 'blue',
  RED = 'red',
  GREEN = 'green',
}

const LabelButtonColorToCss = {
  [LabelButtonColor.WHITE]: css`
    --color-text: ${Color.WHITE_64};
    --color-button-active: ${Color.WHITE_8};

    &:hover,
    &:focus {
      --color-button: ${Color.WHITE_16};
    }

    &:active {
      --color-button: ${Color.WHITE_8};
    }

    &:disabled {
      --color-button: ${Color.WHITE_8};
    }
  `,
  [LabelButtonColor.BLUE]: css`
    --color-text: ${Color.BLUE_1};
    --color-button-active: ${Color.BLUE_4};

    &:hover,
    &:focus {
      --color-button: ${Color.BLUE_3};
    }

    &:active {
      --color-button: ${Color.BLUE_4};
    }

    &:disabled {
      --color-button: ${Color.BLUE_4};
    }
  `,
  [LabelButtonColor.RED]: css`
    --color-text: ${Color.RED_1};
    --color-button-active: ${Color.RED_5};

    &:hover,
    &:focus {
      --color-button: ${Color.RED_4};
    }

    &:active {
      --color-button: ${Color.RED_5};
    }

    &:disabled {
      --color-button: ${Color.RED_5};
    }
  `,
  [LabelButtonColor.GREEN]: css`
    --color-text: ${Color.GREEN_1};
    --color-button-active: ${Color.GREEN_4};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_3};
    }

    &:active {
      --color-button: ${Color.GREEN_4};
    }

    &:disabled {
      --color-button: ${Color.GREEN_4};
    }
  `,
};

const StyledLabelButton = styled.button<LabelButtonProps>`
  padding: 4px 8px;
  border-radius: ${Radius.RADIUS_4};

  color: var(--color-text);
  background-color: ${({ active }) =>
    active ? 'var(--color-button-active)' : 'var(--color-button)'};

  ${TypographyVariantToCss['body-3']}

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    background-color: var(--color-button-active);
  }

  ${({ color }) => LabelButtonColorToCss[color]}
`;

export { StyledLabelButton as LabelButton, LabelButtonColor };
