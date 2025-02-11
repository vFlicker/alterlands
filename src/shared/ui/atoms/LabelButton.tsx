import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from './Typography';

type LabelButtonProps = {
  color: `${LabelButtonColor}`;
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

    &:hover,
    &:focus {
      --color-button: ${Color.WHITE_8};
    }

    &:active {
      --color-button: ${Color.WHITE_16};
    }

    &:disabled {
      --color-button: ${Color.WHITE_8};
    }
  `,
  [LabelButtonColor.BLUE]: css`
    --color-text: ${Color.BLUE_1};

    &:hover,
    &:focus {
      --color-button: ${Color.BLUE_4};
    }

    &:active {
      --color-button: ${Color.BLUE_3};
    }

    &:disabled {
      --color-button: ${Color.BLUE_4};
    }
  `,
  [LabelButtonColor.RED]: css`
    --color-text: ${Color.RED_1};

    &:hover,
    &:focus {
      --color-button: ${Color.RED_5};
    }

    &:active {
      --color-button: ${Color.RED_4};
    }

    &:disabled {
      --color-button: ${Color.RED_5};
    }
  `,
  [LabelButtonColor.GREEN]: css`
    --color-text: ${Color.GREEN_1};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_4};
    }

    &:active {
      --color-button: ${Color.GREEN_3};
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
  background-color: var(--color-button);

  ${TypographyVariantToCss['body-3']}

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ color }) => LabelButtonColorToCss[color]}
`;

export { StyledLabelButton as LabelButton, LabelButtonColor };
