import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

type IconButtonProps = {
  size: `${IconButtonSize}`;
  variant: `${IconButtonVariant}`;
  color: `${IconButtonColor}`;
  active?: boolean;
};

const enum IconButtonSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

const enum IconButtonVariant {
  FILLED = 'filled',
  OUTLINED = 'outlined',
}

const enum IconButtonColor {
  ACCENT = 'accent',
  NEUTRAL = 'neutral',
  TRANSPARENT = 'transparent',
}

const IconButtonSizeToCss = {
  [IconButtonSize.SMALL]: css`
    width: 24px;
    height: 24px;
  `,
  [IconButtonSize.MEDIUM]: css`
    width: 32px;
    height: 32px;
  `,
  [IconButtonSize.LARGE]: css`
    width: 44px;
    height: 44px;
  `,
};

const IconButtonVariantToCss = {
  [IconButtonVariant.FILLED]: css`
    border-color: transparent;
    background-color: var(--color-button);
  `,
  [IconButtonVariant.OUTLINED]: css`
    border-color: var(--color-button);
    background-color: transparent;
  `,
};

const IconButtonColorToCss = {
  [IconButtonColor.ACCENT]: css`
    --color-button: ${Color.WHITE_5};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.ACCENT};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.ACCENT_1};
    }
  `,
  [IconButtonColor.NEUTRAL]: css`
    --color-button: ${Color.WHITE_8};

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: ${Color.WHITE_16};
    }

    &:active:not(:disabled) {
      --color-button: ${Color.WHITE_42};
    }
  `,
  [IconButtonColor.TRANSPARENT]: css`
    --color-button: transparent;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --color-button: transparent;
    }

    &:active:not(:disabled) {
      --color-button: transparent;
    }
  `,
};

const IconButtonColorToCssActive = {
  [IconButtonColor.ACCENT]: css`
    &:not(:disabled) {
      --color-button: ${Color.ACCENT};
    }
  `,
  [IconButtonColor.NEUTRAL]: css`
    &:not(:disabled) {
      --color-button: ${Color.WHITE_16};
    }
  `,
  [IconButtonColor.TRANSPARENT]: css`
    &:not(:disabled) {
      --color-button: transparent;
    }
  `,
};

const StyledIconButton = styled.button<IconButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  border-width: 1px;
  border-style: solid;
  border-radius: ${Radius.RADIUS_CIRCLE};
  color: ${Color.WHITE_98};

  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  svg {
    flex-shrink: 0;
    width: 24px;
    height: 24px;
  }

  ${({ size }) => IconButtonSizeToCss[size]}
  ${({ variant }) => IconButtonVariantToCss[variant]}
  ${({ color }) => IconButtonColorToCss[color]}
  ${({ active, color }) => active && IconButtonColorToCssActive[color]}
`;

export {
  StyledIconButton as IconButton,
  IconButtonColor,
  IconButtonSize,
  IconButtonVariant,
};
