import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Typography } from '~/shared/ui/atoms/Typography';
import { SliderButtons } from '~/shared/ui/molecules/SliderButtons';
import { withAttrs } from '~/shared/ui/withAttrs';

import { FeaturedProductData } from './featuredProductsTypes';

type FeaturedProductProps = FeaturedProductData & {
  className?: string;
};

function FeaturedProduct({
  className,
  description,
  title,
  imageUrl,
}: FeaturedProductProps): JSX.Element {
  return (
    <StyledFeaturedProductWrapper className={className}>
      <StyledImage src={imageUrl} alt="Featured product" />
      <StyledFooter>
        <StyledTitleWrapper>
          <StyledTitle>{title}</StyledTitle>
          <SliderButtons />
        </StyledTitleWrapper>
        <StyledDescription>{description}</StyledDescription>
      </StyledFooter>
    </StyledFeaturedProductWrapper>
  );
}

export { FeaturedProduct };

const StyledFeaturedProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledImage = styled.img`
  border-radius: ${Radius.RADIUS_8};
`;

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0px 4px;
`;

const StyledTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledTitle = withAttrs({ variant: 'heading-4' }, Typography);

const StyledDescription = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_64 },
  Typography,
);
