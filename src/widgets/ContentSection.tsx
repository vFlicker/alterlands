import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Tab } from '~/shared/ui/atoms/Tab';
import { Select } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';

type ContentSectionProps = {
  menu: {
    first: {
      title: string;
      disabled?: boolean;
    }[];
    second?: string[];
  };
  className?: string;
};

const selectOptions = [
  { label: 'Static', value: 'static' },
  { label: 'Dynamic', value: 'dynamic' },
  { label: 'Customized', value: 'customized' },
];

const selectedOptionValue = selectOptions[0].value;

function ContentSection({ className, menu }: ContentSectionProps): JSX.Element {
  return (
    <StyledContentSection className={className}>
      <StyledFirstMenuWrapper>
        {menu.first.map(({ title, disabled }, index) => (
          <Tab
            key={title}
            color="default"
            variant="underline"
            selected={index === 0}
            disabled={disabled}
          >
            {title}
          </Tab>
        ))}
      </StyledFirstMenuWrapper>

      {menu.second && (
        <StyledSecondMenuWrapper>
          <StyledSelect options={selectOptions} value={selectedOptionValue} />

          <div>
            {menu.second.map((text) => (
              <Tab key={text} color="default" variant="default">
                {text}
              </Tab>
            ))}
          </div>
        </StyledSecondMenuWrapper>
      )}
    </StyledContentSection>
  );
}

export { ContentSection };

const StyledContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledFirstMenuWrapper = styled.div`
  display: flex;
  max-width: 70cqw;
  overflow-x: scroll;
`;

const StyledSecondMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StyledSelect = withAttrs(
  { size: 'small', variant: 'empty' },
  styled(Select)`
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
  `,
);
