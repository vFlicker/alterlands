import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Crowdfunding } from './Crowdfunding';
import { CrowdfundingData } from './crowdfundingTypes';

type CrowdfundingWidgetProps = {
  widgetTitle: string;
  data: CrowdfundingData[];
  className?: string;
};

function CrowdfundingWidget({
  className,
  data,
  widgetTitle,
}: CrowdfundingWidgetProps): JSX.Element {
  return (
    <StyledCrowdfundingWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <Crowdfunding data={data} />
    </StyledCrowdfundingWidgetWrapper>
  );
}

export { CrowdfundingWidget };

const StyledCrowdfundingWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;
