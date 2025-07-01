import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { IncomeItem } from './IncomeItem';
import { IncomeData } from './incomeTypes';

type IncomeWidgetProps = {
  widgetTitle: string;
  data: IncomeData[];
  className?: string;
};

function IncomeWidget({
  className,
  data,
  widgetTitle,
}: IncomeWidgetProps): JSX.Element {
  return (
    <StyledIncomeWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <StyledSocialList>
        {data.map((income) => (
          <IncomeItem key={income.id} {...income} />
        ))}
      </StyledSocialList>
    </StyledIncomeWidgetWrapper>
  );
}

export { IncomeWidget };

const StyledIncomeWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledSocialList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 8px;
`;
