import styled from '@emotion/styled';
import { JSX } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Card } from './Card';
import { CardData } from './cardTypes';

type CardWidgetProps = {
  widgetTitle: string;
  data: CardData[];
  className?: string;
};

function CardWidget({
  widgetTitle,
  data,
  className,
}: CardWidgetProps): JSX.Element {
  return (
    <StyledCardWidgetWrapper className={className}>
      <WidgetHeader
        title={widgetTitle}
        actions={<LabelButton color="white">See more</LabelButton>}
      />
      <StyledCardList>
        {data.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </StyledCardList>
    </StyledCardWidgetWrapper>
  );
}

export { CardWidget };

const StyledCardWidgetWrapper = styled.div``;

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;
