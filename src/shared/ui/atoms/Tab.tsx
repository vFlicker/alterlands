import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps, JSX } from 'react';

import { Color } from '~/shared/theme/colors';

import { TypographyVariantToCss } from './Typography';

type TabBaseProps = {
  variant: `${TabVariant}`;
  color: `${TabColor}`;
  selected?: boolean;
};

type TabProps = ComponentProps<typeof StyledTab> & TabBaseProps;

const enum TabVariant {
  DEFAULT = 'default',
  UNDERLINE = 'underline',
}

const enum TabColor {
  DEFAULT = 'default',
  GREEN = 'green',
  GRAY = 'gray',
}

function Tab({ children, selected, ...props }: TabProps): JSX.Element {
  return (
    <StyledTab {...props} data-selected={selected}>
      {children}
    </StyledTab>
  );
}

export { Tab, TabColor, TabVariant };

const TabVariantToCss = {
  [TabVariant.DEFAULT]: css`
    border: none;

    color: var(--text-color);
    ${TypographyVariantToCss['body-3']}

    background-color: var(--background-color);

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      ${TypographyVariantToCss['body-2']}
    }

    &:active:not(:disabled) {
      ${TypographyVariantToCss['body-2']}
    }

    &[data-selected='true'] {
      ${TypographyVariantToCss['body-2']}
    }

    &:disabled {
      ${TypographyVariantToCss['body-2']}
    }
  `,
  [TabVariant.UNDERLINE]: css`
    border-bottom: solid;
    border-width: 1px;
    border-color: var(--border-color);

    color: var(--text-color);
    ${TypographyVariantToCss['heading-5']}

    background-color: var(--background-color);

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      border-width: 1px;
    }

    &:active:not(:disabled) {
      border-width: 1px;
    }

    &[data-selected='true'] {
      border-width: 2px;
      background-color: transparent;
    }

    &:disabled {
      border-bottom: none;
    }
  `,
};

const TabColorToCss = {
  [TabColor.DEFAULT]: css`
    --border-color: ${Color.WHITE_8};
    --text-color: ${Color.WHITE_70};
    --background-color: transparent;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --border-color: ${Color.WHITE_16};
      --text-color: ${Color.WHITE_98};
      --background-color: ${Color.WHITE_8};
    }

    &:active:not(:disabled) {
      --border-color: ${Color.WHITE_42};
      --text-color: ${Color.WHITE_98};
      --background-color: ${Color.WHITE_16};
    }

    &[data-selected='true'] {
      --border-color: ${Color.ACCENT};
      --text-color: ${Color.WHITE_98};
      --background-color: ${Color.WHITE_8};
    }
  `,
  [TabColor.GREEN]: css`
    --border-color: ${Color.WHITE_8};
    --text-color: ${Color.GREEN_3};
    --background-color: transparent;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --border-color: ${Color.WHITE_16};
      --text-color: ${Color.GREEN_1};
      --background-color: ${Color.WHITE_8};
    }

    &:active:not(:disabled) {
      --border-color: ${Color.WHITE_42};
      --text-color: ${Color.GREEN_1};
      --background-color: ${Color.WHITE_16};
    }

    &[data-selected='true'] {
      --border-color: ${Color.GREEN_5};
      --text-color: ${Color.GREEN_5};
      --background-color: ${Color.WHITE_8};
    }
  `,
  [TabColor.GRAY]: css`
    --border-color: ${Color.WHITE_8};
    --text-color: ${Color.WHITE_70};
    --background-color: transparent;

    &:hover:not(:disabled),
    &:focus:not(:disabled) {
      --border-color: ${Color.WHITE_16};
      --text-color: ${Color.WHITE_98};
      --background-color: ${Color.WHITE_8};
    }

    &:active:not(:disabled) {
      --border-color: ${Color.WHITE_42};
      --text-color: ${Color.WHITE_98};
      --background-color: ${Color.WHITE_16};
    }

    &[data-selected='true'] {
      --border-color: ${Color.WHITE_98};
      --text-color: ${Color.WHITE_98};
      --background-color: ${Color.WHITE_8};
    }
  `,
};

const StyledTab = styled.button<TabBaseProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border: none;
  background: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({ variant }) => TabVariantToCss[variant]}
  ${({ color }) => TabColorToCss[color]}
`;
