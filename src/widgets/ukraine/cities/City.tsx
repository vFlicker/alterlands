import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorDotCss } from '~/shared/ui/css/separatorDotCss';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { withAttrs } from '~/shared/ui/withAttrs';

import { CityData } from './citiesTypes';

type CityProps = CityData & {
  className?: string;
};

function City({
  className,
  cityName,
  imageUrl,
  population,
}: CityProps): JSX.Element {
  return (
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
        <Button color="accent" variant="outlined" size="medium">
          Follow
        </Button>
      </StyledFooter>
    </StyledCityWrapper>
  );
}

export { City };

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
  gap: 26px;
  padding: 2px 0;
`;

const StyledCityName = withAttrs(
  { variant: 'heading-5' },
  styled(Typography)`
    ${separatorDotCss}
  `,
);

const StyledPopulation = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  Typography,
);
