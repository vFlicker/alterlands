import styled from '@emotion/styled';
import { JSX } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AppRoute } from '~/shared/libs/router';
import { Color } from '~/shared/theme/colors';
import { Tab } from '~/shared/ui/atoms/Tab';
import { Select } from '~/shared/ui/molecules/Select';
import { withAttrs } from '~/shared/ui/withAttrs';

type ContentSectionProps = {
  menu: {
    first: {
      title: string;
      disabled?: boolean;
      route?: AppRoute;
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
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onTabClick = (route?: AppRoute) => {
    if (route) navigate(route);
  };

  return (
    <StyledContentSection className={className}>
      <StyledFirstMenuWrapper>
        {menu.first.map(({ title, disabled, route }, index) => {
          const hasNoRoute = menu.first.every(({ route }) => !route);
          const selected = hasNoRoute ? index === 0 : pathname === route;

          return (
            <Tab
              key={title}
              color="default"
              variant="underline"
              selected={selected}
              disabled={disabled}
              onClick={() => onTabClick(route)}
            >
              {title}
            </Tab>
          );
        })}
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
    padding: 4px 15px;

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
