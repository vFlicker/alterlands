import styled from '@emotion/styled';
import { JSX } from 'react';

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
  display: grid;
  gap: 8px;
`;

const StyledTrendList = styled.div``;
