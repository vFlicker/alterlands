import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Chart } from './Chart';
import { ChartData } from './topChartTypes';

type TopChartsWidgetProps = {
  widgetTitle: string;
  data: ChartData[];
  className?: string;
};

const actionButtonsNames = ['music', 'video', 'star', 'banknote'] as const;

function TopChartsWidget({
  widgetTitle,
  data,
  className,
}: TopChartsWidgetProps): JSX.Element {
  return (
    <StyledTopChartsWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={
          <StyledActionsWrapper>
            {actionButtonsNames.map((name) => (
              <IconButton size="medium" color="neutral" variant="filled">
                <Icon name={`icon-${name}`} />
              </IconButton>
            ))}
          </StyledActionsWrapper>
        }
      />

      <StyledContentWrapper>
        <StyledHeader>
          <StyledTitleWrapper>
            <IconButton size="small" color="transparent" variant="filled">
              <Icon name="icon-full-screen" />
            </IconButton>
            <StyledTitle>Top musicians</StyledTitle>
          </StyledTitleWrapper>
          <SliderButtons />
        </StyledHeader>
        <StyledList>
          {data.map((chart) => (
            <Chart key={chart.id} {...chart} />
          ))}
        </StyledList>
      </StyledContentWrapper>
    </StyledTopChartsWidgetWrapper>
  );
}

export { TopChartsWidget };

const StyledTopChartsWidgetWrapper = styled.div``;

const StyledActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const StyledTitle = withAttrs({ variant: 'heading-5' }, Typography);

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_5};
`;
