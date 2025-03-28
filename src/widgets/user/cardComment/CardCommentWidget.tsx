import styled from '@emotion/styled';
import { JSX } from 'react';

import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { CardComment } from './CardComment';
import { CardCommentData } from './cardCommentTypes';

type CardCommentWidgetProps = {
  className?: string;
  data: CardCommentData[];
  widgetTitle: string;
};

function CardCommentWidget({
  className,
  data,
  widgetTitle,
}: CardCommentWidgetProps): JSX.Element {
  return (
    <StyledCardCommentWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledWrapper>
        {data.map((item) => (
          <CardComment key={item.id} {...item} />
        ))}
      </StyledWrapper>
    </StyledCardCommentWidgetWrapper>
  );
}

export { CardCommentWidget };

const StyledCardCommentWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px 8px;
`;
