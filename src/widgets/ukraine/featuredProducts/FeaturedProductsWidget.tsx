import styled from '@emotion/styled';
import { JSX } from 'react';

import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { FeaturedProduct } from './FeaturedProduct';
import { FeaturedProductData } from './featuredProductsTypes';

type FeaturedProductsWidgetProps = {
  widgetTitle: string;
  data: FeaturedProductData[];
  className?: string;
};

function FeaturedProductsWidget({
  className,
  data,
  widgetTitle,
}: FeaturedProductsWidgetProps): JSX.Element {
  return (
    <StyledFeaturedProductsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />
      <FeaturedProduct {...data[0]} />
    </StyledFeaturedProductsWidgetWrapper>
  );
}

export { FeaturedProductsWidget };

const StyledFeaturedProductsWidgetWrapper = styled.div``;
