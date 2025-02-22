import styled from '@emotion/styled';
import { JSX, MouseEvent } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';

import { TypographyVariantToCss } from '../../atoms/Typography';
import { SelectOption } from './selectTypes';

type OptionListProps = {
  options: SelectOption[];
  onOptionSelect: (evt: MouseEvent<HTMLDivElement>, value: string) => void;
};

function OptionList({ options, onOptionSelect }: OptionListProps): JSX.Element {
  return (
    <StyledOptionsList>
      {options.map((option) => (
        <StyledOptionItem
          key={option.value}
          onClick={(evt) => onOptionSelect(evt, option.value)}
        >
          {option.label}
        </StyledOptionItem>
      ))}
    </StyledOptionsList>
  );
}

export { OptionList };

const StyledOptionsList = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;

  width: 100%;
  padding: 8px;
  border: 1px solid ${Color.WHITE_12};
  border-radius: ${Radius.RADIUS_8};

  background-color: ${Color.BACKGROUND};

  z-index: 2;
`;

const StyledOptionItem = styled.div`
  padding: 4px 12px;
  border-radius: ${Radius.RADIUS_4};

  color: ${Color.WHITE_70};
  ${TypographyVariantToCss['body-3']}

  cursor: pointer;

  &:hover {
    color: ${Color.WHITE_98};
    background-color: ${Color.WHITE_12};
  }
`;
