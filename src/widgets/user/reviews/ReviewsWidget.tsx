import styled from '@emotion/styled';
import { JSX } from 'react';

import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { widgetWrapperCss } from '~/shared/ui/css/widgetWrapperCss';
import { WidgetHeader } from '~/shared/ui/molecules/WidgetHeader';

import { Review } from './Review.tsx';
import { ReviewData } from './reviewsTypes.ts';

type ReviewsWidgetProps = {
  widgetTitle: string;
  data: ReviewData[];
  className?: string;
};

function ReviewsWidget({
  className,
  data,
  widgetTitle,
}: ReviewsWidgetProps): JSX.Element {
  return (
    <StyledReviewsWidgetWrapper className={className}>
      <WidgetHeader title={widgetTitle} />

      <StyledReviewList>
        {data.map((review) => (
          <StyledReview key={review.id} {...review} />
        ))}
      </StyledReviewList>
    </StyledReviewsWidgetWrapper>
  );
}

export { ReviewsWidget };

const StyledReviewsWidgetWrapper = styled.div`
  ${widgetWrapperCss}
`;

const StyledReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const StyledReview = styled(Review)`
  &:not(:last-child) {
    ${separatorLineCss(16)}
  }
`;
