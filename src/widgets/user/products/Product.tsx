import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Typography } from '~/shared/ui/atoms/Typography';
import { separatorDotCss } from '~/shared/ui/css/separatorDotCss';
import { withAttrs } from '~/shared/ui/withAttrs';

import { ProductData } from './productsTypes';

type ProductProps = ProductData & {
  className?: string;
};

function Product({
  className,
  imageUrl,
  name,
  price,
}: ProductProps): JSX.Element {
  return (
    <StyledProductWrapper className={className}>
      <StyledImageWrapper>
        <SliderLeftButton>
          <Icon name="icon-chevron-left" />
        </SliderLeftButton>
        <StyledImage src={imageUrl} alt="city" />
        <StyledRightButton>
          <Icon name="icon-chevron-right" />
        </StyledRightButton>
      </StyledImageWrapper>
      <StyledLines>
        <StyledLine></StyledLine>
        <StyledLine></StyledLine>
        <StyledLine></StyledLine>
        <StyledLine></StyledLine>
      </StyledLines>
      <StyledFooter>
        <StyledLeftWrapper>
          <StyledInfoWrapper>
            <StyledName>{name}</StyledName>
            <StyledPrice>{price}</StyledPrice>
          </StyledInfoWrapper>
        </StyledLeftWrapper>
        <StyledShopButton>Shop in Ukraine</StyledShopButton>
      </StyledFooter>
    </StyledProductWrapper>
  );
}

export { Product };

const StyledProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledImageWrapper = styled.div`
  position: relative;

  margin-bottom: 8px;
`;

const StyledImage = styled.img`
  border-radius: ${Radius.RADIUS_4};
`;

const StyledLines = styled.div`
  display: grid;
  gap: 4px;
  grid-template-columns: repeat(4, 1fr);

  margin-bottom: 16px;
`;

const StyledLine = styled.div`
  background-color: ${Color.WHITE_16};
  height: 4px;
  border-radius: ${Radius.RADIUS_10};

  &:first-child {
    background-color: ${Color.WHITE_87};
  }
`;

const SliderButton = withAttrs(
  { color: 'neutral', variant: 'filled', size: 'medium' },
  styled(IconButton)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    width: 36px;
    height: 36px;
  `,
);

const SliderLeftButton = styled(SliderButton)`
  left: 8px;
`;

const StyledRightButton = styled(SliderButton)`
  right: 8px;
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

const StyledShopButton = withAttrs(
  { color: 'accent', variant: 'outlined', size: 'medium' },
  styled(Button)`
    padding: 8px 36px;
  `,
);

const StyledInfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 26px;
  padding: 2px 0;
`;

const StyledName = withAttrs(
  { variant: 'heading-4' },
  styled(Typography)`
    ${separatorDotCss}
  `,
);

const StyledPrice = withAttrs(
  { variant: 'heading-5', $color: Color.WHITE_70 },
  Typography,
);
