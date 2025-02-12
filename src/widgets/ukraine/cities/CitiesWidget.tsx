import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { CityData } from './citiesTypes';
import { City } from './City';

type CitiesWidgetProps = {
  widgetTitle: string;
  data: CityData[];
  className?: string;
};

function CitiesWidget({
  className,
  data,
  widgetTitle,
}: CitiesWidgetProps): JSX.Element {
  return (
    <StyledCitiesWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">More</LabelButton>}
      />

      <City {...data[0]} />
    </StyledCitiesWidgetWrapper>
  );
}

export { CitiesWidget };

const StyledCitiesWidgetWrapper = styled.div``;
