import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { AlterlandsSlider } from './AlterlandsSlider';
import { SliderData } from './alterlandsSliderTypes';

type AlterlandsSliderWidgetProps = {
  widgetTitle: string;
  data: SliderData[];
  className?: string;
};

function AlterlandsSliderWidget({
  className,
  data,
  widgetTitle,
}: AlterlandsSliderWidgetProps): JSX.Element {
  return (
    <StyledAlterlandsSliderWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <AlterlandsSlider {...data[0]} />
    </StyledAlterlandsSliderWidgetWrapper>
  );
}

export { AlterlandsSliderWidget };

const StyledAlterlandsSliderWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;
