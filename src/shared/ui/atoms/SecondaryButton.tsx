import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from './Typography';

type SecondaryButtonProps = {
  color: `${SecondaryButtonColor}`;
};

const enum SecondaryButtonColor {
  GREEN = 'green',
  BLUE = 'blue',
  RED = 'red',
}

const SecondaryButtonColorToCss = {
  [SecondaryButtonColor.GREEN]: css`
    --color-button: ${Color.GREEN_1};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_2};
    }

    &:active {
      --color-button: ${Color.GREEN_4};
    }

    &:disabled {
      --color-button: ${Color.WHITE_8};
    }
  `,
  [SecondaryButtonColor.BLUE]: css`
    --color-button: ${Color.BLUE_1};

    &:hover,
    &:focus {
      --color-button: ${Color.BLUE_2};
    }

    &:active {
      --color-button: ${Color.BLUE_4};
    }

    &:disabled {
      --color-button: ${Color.WHITE_8};
    }
  `,
  [SecondaryButtonColor.RED]: css`
    --color-button: ${Color.RED_1};

    &:hover,
    &:focus {
      --color-button: ${Color.RED_3};
    }

    &:active {
      --color-button: ${Color.RED_5};
    }

    &:disabled {
      --color-button: ${Color.WHITE_8};
    }
  `,
};

const StyledSecondaryButton = styled.button<SecondaryButtonProps>`
  padding: 8px 16px;
  border-radius: ${Radius.RADIUS_4};

  color: ${Color.WHITE_98};
  background-color: var(--color-button);

  ${TypographyVariantToCss['body-1']}

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ color }) => SecondaryButtonColorToCss[color]}
`;

export { StyledSecondaryButton as SecondaryButton, SecondaryButtonColor };
