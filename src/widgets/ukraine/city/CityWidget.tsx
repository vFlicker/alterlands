import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { dividerDotCss } from '~/shared/ui/dividerDotCss';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

import { CityData } from './cityTypes';

type CityWidgetProps = {
  widgetTitle: string;
  data: CityData[];
  className?: string;
};

function CityWidget({
  widgetTitle,
  data,
  className,
}: CityWidgetProps): JSX.Element {
  const { imageUrl, cityName, population } = data[0];

  return (
    <StyledCityWidgetWrapper>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">More</LabelButton>}
      />

      <StyledCityWrapper className={className}>
        <StyledImage src={imageUrl} alt="city" />
        <StyledFooter>
          <StyledLeftWrapper>
            <StyledInfo>
              <StyledCityName>{cityName}</StyledCityName>
              <StyledPopulation>{population}</StyledPopulation>
            </StyledInfo>
            <SliderButtons />
          </StyledLeftWrapper>
          <Button color="accent" variant="outlined">
            Follow
          </Button>
        </StyledFooter>
      </StyledCityWrapper>
    </StyledCityWidgetWrapper>
  );
}

export { CityWidget };

const StyledCityWidgetWrapper = styled.div``;

const StyledCityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StyledImage = styled.img`
  border-radius: ${Radius.RADIUS_4};
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledInfo = styled.div`
  display: flex;
  gap: 24px;
  padding: 2px 0;

  & > div:not(:last-child) {
    position: relative;
    &::after {
      ${dividerDotCss}
    }
  }
`;

const StyledCityName = withAttrs({ variant: 'heading-5' }, Typography);

const StyledPopulation = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  Typography,
);
