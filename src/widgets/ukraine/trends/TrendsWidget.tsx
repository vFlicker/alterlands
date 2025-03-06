import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Trend } from './Trend';
import { TrendData } from './trendsTypes';

type TrendsWidgetProps = {
  widgetTitle: string;
  data: TrendData[];
  className?: string;
};

function TrendsWidget({
  widgetTitle,
  data,
  className,
}: TrendsWidgetProps): JSX.Element {
  return (
    <StyledTrendsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledTrendList>
        {data.map((topic) => (
          <Trend key={topic.id} {...topic} />
        ))}
      </StyledTrendList>
    </StyledTrendsWidgetWrapper>
  );
}

export { TrendsWidget };

const StyledTrendsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledTrendList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
