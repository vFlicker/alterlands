import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Tab } from '~/shared/ui/atoms/Tab';
import { Select } from '~/shared/ui/molecules/Select';

type ContentSectionProps = {
  className?: string;
};

const firstMenuItems = ['Feed', 'Shop', 'Partners', 'Contact us', 'Forum'];

const selectOptions = [
  { label: 'Static', value: 'static' },
  { label: 'Dynamic', value: 'dynamic' },
  { label: 'Customized', value: 'customized' },
];

const secondMenuItems = [
  'Bahrain Grand Prix',
  'Posts',
  'Charts',
  'Races',
  'Officials',
  'Rumors',
];

const selectedOptionValue = selectOptions[0].value;

function ContentSection({ className }: ContentSectionProps): JSX.Element {
  return (
    <StyledContentSection className={className}>
      <StyledFirstMenuWrapper>
        {firstMenuItems.map((text, index) => (
          <Tab
            key={text}
            color="default"
            variant="underline"
            selected={index === 0}
          >
            {text}
          </Tab>
        ))}
      </StyledFirstMenuWrapper>

      <StyledSecondMenuWrapper>
        <StyledSelect
          options={selectOptions}
          size="small"
          variant="empty"
          value={selectedOptionValue}
        />

        <div>
          {secondMenuItems.map((text) => (
            <Tab key={text} color="default" variant="default">
              {text}
            </Tab>
          ))}
        </div>
      </StyledSecondMenuWrapper>
    </StyledContentSection>
  );
}

export { ContentSection };

const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledFirstMenuWrapper = styled.div``;

const StyledSecondMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledSelect = styled(Select)`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: -9px;
    width: 1px;
    height: 24px;
    background-color: ${Color.WHITE_16};
    transform: translateY(-50%);
  }
`;
