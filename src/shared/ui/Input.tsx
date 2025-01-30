import styled from '@emotion/styled';
import { JSX, PropsWithChildren } from 'react';

import { Color } from '../theme/colors';
import { Radius } from '../theme/radiuses';

type InputProps = PropsWithChildren<{
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
}> &
  JSX.IntrinsicElements['input'];

function Input({
  className,
  leftIcon,
  rightIcon,
  ...props
}: InputProps): JSX.Element {
  return (
    <StyledInputWrapper className={className}>
      {leftIcon && <IconBox>{leftIcon}</IconBox>}
      <StyledInput {...props} />
      {rightIcon && <IconBox>{rightIcon}</IconBox>}
    </StyledInputWrapper>
  );
}

export { Input };

const StyledInputWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 9px 16px;
  border: 1px solid ${Color.WHITE_16};
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
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  flex-grow: 1;
  color: ${Color.WHITE_98};

  font-size: 14px;
  line-height: 1.43;

  outline: none;

  &::placeholder {
    color: ${Color.WHITE_64};
  }
`;
