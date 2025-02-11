import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { dividerDotCss } from '~/shared/ui/dividerDotCss';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { withAttrs } from '~/shared/ui/withAttrs';

type CitiesWidgetProps = {
  cities: { imageUrl: string; cityName: string; population: string }[];
  className?: string;
};

function CitiesWidget({ cities, className }: CitiesWidgetProps): JSX.Element {
  const { imageUrl, cityName, population } = cities[0];

  return (
    <StyledCitiesWidget className={className}>
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
    </StyledCitiesWidget>
  );
}

export { CitiesWidget };

const StyledCitiesWidget = styled.div`
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
