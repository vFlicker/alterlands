import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX, MouseEvent, useState } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { Icon } from '../../atoms/Icon';
import { TypographyVariantToCss } from '../../atoms/Typography';
import { withAttrs } from '../../withAttrs';
import { OptionList } from './OptionList';
import { SelectOption } from './selectTypes';

type SelectProps = {
  options: SelectOption[];
  variant: `${SelectVariant}`;
  size: `${SelectSize}`;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
  optionSelect?: (value: string) => void;
};

const enum SelectVariant {
  OUTLINED = 'outlined',
  FILLED = 'filled',
  EMPTY = 'empty',
}

const enum SelectSize {
  MEDIUM = 'medium',
  SMALL = 'small',
}

function Select({
  className,
  variant,
  size,
  options,
  value,
  placeholder = 'Select...',
  disabled = false,
  optionSelect,
}: SelectProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');

  const handleSelectToggle = () => {
    if (!disabled) setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (
    evt: MouseEvent<HTMLDivElement>,
    value: string,
  ) => {
    evt.stopPropagation();
    setSelectedValue(value);
    setIsOpen(false);
    optionSelect?.(value);
  };

  const selectedOption = options.find((opt) => opt.value === selectedValue);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  return (
    <StyledSelectWrapper
      className={className}
      variant={variant}
      size={size}
      disabled={disabled}
      onClick={handleSelectToggle}
    >
      <StyledHeader>
        <StyledText selectedOption={!!selectedOption}>
          {displayValue}
        </StyledText>
        <StyledIcon name={isOpen ? 'icon-chevron-up' : 'icon-chevron-down'} />
      </StyledHeader>

      {isOpen && (
        <OptionList options={options} onOptionSelect={handleOptionSelect} />
      )}
    </StyledSelectWrapper>
  );
}

export { Select, SelectSize, SelectVariant };

type StyledSelectWrapperProps = Pick<
  SelectProps,
  'variant' | 'size' | 'disabled'
>;

const SelectSizeToCss = {
  [SelectSize.MEDIUM]: css`
    min-width: 240px;
    height: 40px;
    padding: 8px 16px;
  `,
  [SelectSize.SMALL]: css`
    min-width: 76px;
    height: 28px;
    padding: 4px 12px;
  `,
};

const SelectVariantToCss = {
  [SelectVariant.OUTLINED]: css`
    border: 1px solid ${Color.WHITE_16};
    border-radius: ${Radius.RADIUS_24};
  `,
  [SelectVariant.FILLED]: css`
    background-color: ${Color.WHITE_8};
  `,
  [SelectVariant.EMPTY]: css``,
};

const getSelectTextCss = (selectedOption: boolean) => {
  if (!selectedOption) {
    return css`
      color: ${Color.WHITE_64};
      ${TypographyVariantToCss['body-3']}
    `;
  }

  return css`
    color: ${Color.WHITE_98};
    ${TypographyVariantToCss['body-1']}
  `;
};

const StyledSelectWrapper = styled.div<StyledSelectWrapperProps>`
  position: relative;

  ${TypographyVariantToCss['body-3']}

  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};

  ${({ size }) => SelectSizeToCss[size]}
  ${({ variant }) => SelectVariantToCss[variant]}
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIcon = withAttrs(
  { size: 'medium' },
  styled(Icon)`
    stroke: ${Color.WHITE_64};
  `,
);

const StyledText = styled.div<{ selectedOption: boolean }>`
  ${({ selectedOption }) => getSelectTextCss(selectedOption)}
`;
