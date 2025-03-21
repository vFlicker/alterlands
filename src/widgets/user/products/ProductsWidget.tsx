import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Product } from './Product';
import { ProductData } from './productsTypes';

type ProductsWidgetProps = {
  widgetTitle: string;
  data: ProductData[];
  className?: string;
};

function ProductsWidget({
  className,
  data,
  widgetTitle,
}: ProductsWidgetProps): JSX.Element {
  return (
    <StyledProductsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <Product {...data[0]} />
    </StyledProductsWidgetWrapper>
  );
}

export { ProductsWidget };

const StyledProductsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;
