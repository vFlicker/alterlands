import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Card } from './Card';
import { CardData } from './cardsTypes';

type CardsWidgetProps = {
  widgetTitle: string;
  data: CardData[];
  className?: string;
};

function CardsWidget({
  className,
  data,
  widgetTitle,
}: CardsWidgetProps): JSX.Element {
  return (
    <StyledCardsWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">See more</LabelButton>}
      />
      <StyledCardList>
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </StyledCardList>
    </StyledCardsWidgetWrapper>
  );
}

export { CardsWidget };

const StyledCardsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;
