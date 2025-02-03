import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX, PropsWithChildren } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

type ButtonProps = PropsWithChildren<{
  variant: `${ButtonVariant}`;
  color: `${ButtonColor}`;
  size?: `${ButtonSize}`;
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

const enum ButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
}

function Button(props: ButtonProps): JSX.Element {
  return (
    <StyledButton {...props}>
      {props.leftIcon} {props.children} {props.rightIcon}
    </StyledButton>
  );
}

export { Button, ButtonColor, ButtonSize, ButtonVariant };

const ButtonVariantToCss = {
  [ButtonVariant.FILLED]: css`
    border-color: transparent;
    background-color: var(--color-button);
  `,
  [ButtonVariant.OUTLINED]: css`
    border-color: var(--color-border);
    background-color: transparent;
  `,
};

const ButtonColorToCss = {
  [ButtonColor.ACCENT]: css`
    --color-button: ${Color.ACCENT};
    --color-border: ${Color.ACCENT};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.ACCENT_1};
      --color-border: ${Color.ACCENT_1};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.ACCENT_2};
      --color-border: ${Color.ACCENT_2};
    }
  `,
  [ButtonColor.SECONDARY]: css`
    --color-button: ${Color.GREEN_2};
    --color-border: ${Color.GREEN_2};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.GREEN_1};
      --color-border: ${Color.GREEN_1};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.GREEN_4};
      --color-border: ${Color.GREEN_4};
    }
  `,
  [ButtonColor.NEUTRAL]: css`
    --color-button: ${Color.WHITE_8};
    --color-border: ${Color.WHITE_30};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.WHITE_16};
      --color-border: ${Color.WHITE_42};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.WHITE_30};
      --color-border: ${Color.WHITE_64};
    }
  `,
};

const PADDING = {
  [ButtonSize.SMALL]: {
    base: '5px',
    icon: '10px',
    text: '14px',
  },
  [ButtonSize.MEDIUM]: {
    base: '8px',
    icon: '16px',
    text: '20px',
  },
};

const getPaddingCss = (
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
  size: `${ButtonSize}`,
) => {
  const { base, icon, text } = PADDING[size];
  const paddingLeft = hasLeftIcon ? icon : text;
  const paddingRight = hasRightIcon ? icon : text;

  return css`
    padding: ${base} ${paddingRight} ${base} ${paddingLeft};
  `;
};

const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;

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

  ${({ variant }) => ButtonVariantToCss[variant]}
  ${({ color }) => ButtonColorToCss[color]}
  ${({ leftIcon, rightIcon, size = ButtonSize.MEDIUM }) =>
    getPaddingCss(!!leftIcon, !!rightIcon, size)}
`;
