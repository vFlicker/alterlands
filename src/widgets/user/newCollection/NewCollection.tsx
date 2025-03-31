import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';
import { Card } from '~/widgets/common/cards/Card';

import { NewCollectionData } from './newCollectionTypes';

type NewCollectionProps = {
  className?: string;
  data: NewCollectionData[];
  widgetTitle: string;
};

function NewCollection({
  className,
  data,
  widgetTitle,
}: NewCollectionProps): JSX.Element {
  return (
    <StyledNewCollectionWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledList>
        {data.map((card) => (
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
