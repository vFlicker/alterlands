import styled from '@emotion/styled';
import { JSX } from 'react';

import { mrBeastImage } from '~/shared/assets/images/user/mrBeast';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { Card } from '~/widgets/common/cards/Card';

type NewCollectionProps = {
  className?: string;
};

const cards = [
  {
    id: 1,
    imageUrl: mrBeastImage.newCollection.item1,
    title: 'KIDS BASICS - PANTHER TEE - BLUE',
    price: '45.00$',
  },
  {
    id: 2,
    imageUrl: mrBeastImage.newCollection.item2,
    title: 'KIDS GLOW IN THE DARK PANTHER HOODIE - BLACK',
    price: '55.00$',
  },
  {
    id: 3,
    imageUrl: mrBeastImage.newCollection.item3,
    title: 'KIDS BEAST GAMES HOODIE - BLACK',
    price: '55.00$',
  },
  {
    id: 4,
    imageUrl: mrBeastImage.newCollection.item4,
    title: 'BEAST ORIGINAL',
    price: '55.00$',
  },
  {
    id: 5,
    imageUrl: mrBeastImage.newCollection.item5,
    title: 'BEAST ACTIVE',
    price: '55.00$',
  },
];

function NewCollection({ className }: NewCollectionProps): JSX.Element {
  return (
    <StyledNewCollectionWrapper className={className}>
      <WidgetHeader title="New collection" />

      <StyledList>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </StyledList>
    </StyledNewCollectionWrapper>
  );
}

export { NewCollection };

const StyledNewCollectionWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledList = styled.div`
  display: flex;
  gap: 8px;
`;
