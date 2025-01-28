import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX, PropsWithChildren } from 'react';

import { Color } from '../theme/colors';
import { Radius } from '../theme/radiuses';

type ButtonProps = PropsWithChildren<{
  variant: `${ButtonVariant}`;
  color: `${ButtonColor}`;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}> &
  JSX.IntrinsicElements['button'];

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

const ButtonVariantToCss = {
  [ButtonVariant.FILLED]: css`
    border-color: transparent;
    background-color: var(--color-button);
  `,
  [ButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);
    background-color: transparent;
  `,
};

const ButtonColorToCss = {
  [ButtonColor.ACCENT]: css`
    --color-button: ${Color.ACCENT};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.ACCENT_1};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.ACCENT_2};
    }
  `,
  [ButtonColor.SECONDARY]: css`
    --color-button: ${Color.GREEN_2};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.GREEN_1};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.GREEN_4};
    }
  `,
  [ButtonColor.NEUTRAL]: css`
    --color-button: ${Color.WHITE_8};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.WHITE_30};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.WHITE_64};
    }
  `,
};

const StyledButton = styled.button<ButtonProps>(
  ({ variant, color, leftIcon, rightIcon }) => {
    const paddingRight = rightIcon ? '16px' : '20px';
    const paddingLeft = leftIcon ? '16px' : '20px';

    return css`
      display: inline-flex;
      align-items: center;
      gap: 4px;

      padding: 8px ${paddingRight} 8px ${paddingLeft};

      border-width: 1px;
      border-style: solid;
      border-radius: ${Radius.RADIUS_120};
      color: ${Color.WHITE_98};

      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;

      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      svg {
        width: 20px;
        height: 20px;
      }

      ${ButtonVariantToCss[variant]}
      ${ButtonColorToCss[color]}
    `;
  },
);
