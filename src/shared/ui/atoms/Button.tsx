import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps, JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from './Typography';

type ButtonBaseProps = {
  variant: `${ButtonVariant}`;
  color: `${ButtonColor}`;
  size: `${ButtonSize}`;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
};

type ButtonProps = ComponentProps<typeof StyledButton>;

const enum ButtonVariant {
  FILLED = 'filled',
  NOT_FILLED = 'not filled',
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
  [ButtonVariant.NOT_FILLED]: css`
    border-color: transparent;
    background-color: transparent;
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
    vertical: '2px',
    fromIcon: '7px',
    fromText: '14px',
  },
  [ButtonSize.MEDIUM]: {
    vertical: '6px',
    fromIcon: '10px',
    fromText: '20px',
  },
};

const getButtonSizeCss = (
  size: `${ButtonSize}`,
  hasLeftIcon: boolean,
  hasRightIcon: boolean,
) => {
  const { vertical, fromIcon, fromText } = PADDING[size];
  const paddingLeft = hasLeftIcon ? fromIcon : fromText;
  const paddingRight = hasRightIcon ? fromIcon : fromText;
  const padding = `${vertical} ${paddingRight} ${vertical} ${paddingLeft}`;

  const ButtonSizeToCss = {
    [ButtonSize.SMALL]: css`
      padding: ${padding};
    `,
    [ButtonSize.MEDIUM]: css`
      min-width: 120px;
      padding: ${padding};
    `,
  };

  return ButtonSizeToCss[size];
};

const StyledButton = styled.button<ButtonBaseProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  border-width: 1px;
  border-style: solid;
  border-radius: ${Radius.RADIUS_120};
  color: ${Color.WHITE_98};

  ${TypographyVariantToCss['body-2']}
  line-height: 1.5;

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    flex-shrink: 0;
    width: 23px;
    height: 23px;
  }

  ${({ variant }) => ButtonVariantToCss[variant]}
  ${({ color }) => ButtonColorToCss[color]}
  ${({ size, leftIcon, rightIcon }) =>
    getButtonSizeCss(size, !!leftIcon, !!rightIcon)}
`;
