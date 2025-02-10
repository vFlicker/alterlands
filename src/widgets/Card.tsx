import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

type CardProps = {
  imageUrl: string;
  title: string;
  price: string;
  className?: string;
};

function Card({ imageUrl, price, title }: CardProps): JSX.Element {
  return (
    <StyledWrapper>
      <StyledImage src={imageUrl} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>{price}</StyledPrice>
      <Button color="accent" variant="filled">
        Buy
      </Button>
    </StyledWrapper>
  );
}

export { Card };

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  max-width: 156px;
  padding: 8px 8px 12px 8px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledImage = styled.img`
  width: 142px;
  height: 150px;
  border-radius: ${Radius.RADIUS_4};
`;

const StyledTitle = withAttrs({ variant: 'body-1', as: 'h2' }, Typography);

const StyledPrice = withAttrs({ variant: 'heading-4', as: 'p' }, Typography);
