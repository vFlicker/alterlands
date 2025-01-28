import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX, PropsWithChildren } from 'react';

import { Color } from '../theme/colors';

type ButtonProps = PropsWithChildren<{
  variant: `${ButtonVariant}`;
  color: `${ButtonColor}`;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}>;

const enum ButtonVariant {
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

const enum ButtonColor {
  ACCENT = 'accent',
  SECONDARY = 'secondary',
  NEUTRAL = 'neutral',
}

function Button(props: ButtonProps): JSX.Element {
  return (
    <StyledButton {...props}>
      {props.leftIcon} {props.children} {props.rightIcon}
    </StyledButton>
  );
}

export { Button };

const ButtonVariantToCSS = {
  [ButtonVariant.FILLED]: css`
    border-color: transparent;
    background-color: var(--color-button);
  `,
  [ButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);
    background-color: transparent;
  `,
};

const ButtonColorToCSS = {
  [ButtonColor.ACCENT]: css`
    --color-button: ${Color.ACCENT};

    &:hover,
    &:focus {
      --color-button: ${Color.ACCENT_1};
    }

    &:active {
      --color-button: ${Color.ACCENT_2};
    }

    &:disabled {
      --color-button: ${Color.ACCENT_3};
    }
  `,
  [ButtonColor.SECONDARY]: css`
    --color-button: ${Color.GREEN_2};

    &:hover,
    &:focus {
      --color-button: ${Color.GREEN_1};
    }

    &:active {
      --color-button: ${Color.GREEN_4};
    }

    &:disabled {
      --color-button: ${Color.GREEN_4};
    }
  `,
  [ButtonColor.NEUTRAL]: css`
    --color-button: ${Color.WHITE_8};

    &:hover,
    &:focus {
      --color-button: ${Color.WHITE_30};
    }

    &:active {
      --color-button: ${Color.WHITE_64};
    }

    &:disabled {
      --color-button: ${Color.WHITE_8};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>(
  ({ variant, color, leftIcon, rightIcon }) => {
    const paddingRight = rightIcon ? '16px' : '20px';
    const paddingLeft = leftIcon ? '16px' : '20px';

    return css`
      ${ButtonVariantToCSS[variant]}
      ${ButtonColorToCSS[color]}

      display: inline-flex;
      align-items: center;
      gap: 4px;

      padding: 8px ${paddingRight} 8px ${paddingLeft};

      border-width: 1px;
      border-style: solid;
      border-radius: 120px;
      color: ${Color.WHITE_98};

      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;

      cursor: pointer;

      &:disabled {
        color: ${Color.WHITE_87};
        cursor: not-allowed;
      }

      svg {
        width: 20px;
        height: 20px;
      }
    `;
  },
);
