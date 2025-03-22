import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Button } from '~/shared/ui/atoms/Button';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

import { CardData } from './cardsTypes';

type CardProps = CardData & {
  className?: string;
};

function Card({ className, imageUrl, price, title }: CardProps): JSX.Element {
  return (
    <StyledCardWrapper className={className}>
      <StyledImage src={imageUrl} alt={title} />
      <StyledTitle>{title}</StyledTitle>
      <StyledPrice>{price}</StyledPrice>
      <Button size="medium" color="accent" variant="filled">
        Buy
      </Button>
    </StyledCardWrapper>
  );
}

export { Card };

const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  padding: 8px 8px 12px 8px;
  border-radius: ${Radius.RADIUS_8};
  background-color: ${Color.WHITE_8};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  border-radius: ${Radius.RADIUS_4};
`;

const StyledTitle = withAttrs({ variant: 'body-1', as: 'h2' }, Typography);
const StyledPrice = withAttrs(
  { variant: 'heading-4', as: 'p' },
  styled(Typography)`
    margin-top: auto;
    margin-bottom: 4px;
  `,
);
