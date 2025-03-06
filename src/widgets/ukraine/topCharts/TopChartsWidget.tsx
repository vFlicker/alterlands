import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { SizeButton } from '~/shared/ui/atoms/SizeButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

import { Chart } from './Chart';
import { ChartData } from './topChartsTypes';

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
              <StyledActionButton
                size="medium"
                color="neutral"
                variant="filled"
              >
                <Icon name={`icon-${name}`} />
              </StyledActionButton>
            ))}
          </StyledActionsWrapper>
        }
      />

      <StyledContentWrapper>
        <StyledHeader>
          <StyledTitleWrapper>
            <SizeButton />
            <StyledTitle>Top Musicians</StyledTitle>
          </StyledTitleWrapper>
          <SliderButtons />
        </StyledHeader>
        <StyledChartList>
          {data.map((chart) => (
            <Chart key={chart.id} {...chart} />
          ))}
        </StyledChartList>
      </StyledContentWrapper>
    </StyledTopChartsWidgetWrapper>
  );
}

export { TopChartsWidget };

const StyledTopChartsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledActionsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledActionButton = styled(IconButton)`
  svg {
    stroke: ${Color.WHITE_42};
  }

  &:first-child {
    background-color: ${Color.WHITE_30};

    svg {
      stroke: ${Color.WHITE_98};
    }
  }
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

const StyledChartList = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_5};
`;
