import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps, JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from './Typography';

type InputBaseProps = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  $color?: string;
};

type InputProps = ComponentProps<typeof StyledInput>;

function Input({
  className,
  leftIcon,
  rightIcon,
  $color,
  ...props
}: InputProps): JSX.Element {
  return (
    <StyledInputWrapper className={className} $color={$color}>
      {leftIcon && <IconBox>{leftIcon}</IconBox>}
      <StyledInput {...props} />
      {rightIcon && <IconBox>{rightIcon}</IconBox>}
    </StyledInputWrapper>
  );
}

export { Input };

const StyledInputWrapper = styled.div<Pick<InputBaseProps, '$color'>>`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  width: 100%;
  padding: 7px 16px;
  border-style: solid;
  border-width: 1px;
  border-radius: ${Radius.RADIUS_24};

  &:hover {
    border-color: ${Color.WHITE_30};
  }

  svg {
    stroke: ${Color.WHITE_42};
  }

  &:focus-within {
    border-color: ${Color.WHITE_64};

    svg {
      stroke: ${Color.WHITE_87};
    }
  }

  ${({ $color = Color.WHITE_16 }) => css`
    border-color: ${$color};

    svg {
      stroke: ${$color};
    }
  `}
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input<InputBaseProps>`
  flex-grow: 1;
  color: ${Color.WHITE_98};

  ${TypographyVariantToCss['body-3']}

  outline: none;

  &::placeholder {
    color: ${Color.WHITE_64};
  }
`;
