import styled from '@emotion/styled';
import { JSX, MouseEvent } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from '../../atoms/Typography';
import { SelectOption, SelectSize } from './selectTypes';

type OptionListProps = {
  options: SelectOption[];
  size?: `${SelectSize}`;
  selected?: SelectOption;
  onOptionSelect: (evt: MouseEvent<HTMLDivElement>, value: string) => void;
};

function OptionList({
  options,
  size,
  selected,
  onOptionSelect,
}: OptionListProps): JSX.Element {
  return (
    <StyledOptionsList size={size}>
      {options.map((option) => (
        <StyledOptionItem
          key={option.value}
          selected={selected?.value === option.value}
          onClick={(evt) => onOptionSelect(evt, option.value)}
        >
          {option.label}
        </StyledOptionItem>
      ))}
    </StyledOptionsList>
  );
}

export { OptionList };

const StyledOptionsList = styled.div<{ size?: `${SelectSize}` }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;

  width: ${({ size }) => (size === 'small' ? 'max-content' : '240px')};
  padding: 8px;
  border: 1px solid ${Color.WHITE_12};
  border-radius: ${Radius.RADIUS_8};

  background-color: ${Color.BACKGROUND};

  z-index: 2;
`;

const StyledOptionItem = styled.div<{ selected: boolean }>`
  padding: 4px 12px;
  border-radius: ${Radius.RADIUS_4};

  color: ${({ selected }) => (selected ? Color.WHITE_98 : Color.WHITE_70)};
  ${TypographyVariantToCss['body-3']}

  cursor: pointer;

  &:hover {
    color: ${Color.WHITE_98};
    background-color: ${Color.WHITE_12};
  }
`;
