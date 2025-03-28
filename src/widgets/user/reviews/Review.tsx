import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Rating } from '~/shared/ui/atoms/Rating';
import { Typography } from '~/shared/ui/atoms/Typography';
import { UserMeta } from '~/shared/ui/molecules/UserMeta';
import { withAttrs } from '~/shared/ui/withAttrs';

import { ReviewData } from './reviewsTypes';

type ReviewProps = ReviewData & {
  className?: string;
};

function Review({
  className,
  avatar,
  comment,
  date,
  fullName,
  rating,
}: ReviewProps): JSX.Element {
  return (
    <StyledReviewWrapper className={className}>
      <StyledUserMeta
        avatar={avatar}
        date={date}
        fullName={fullName}
        orientation="horizontal"
      />
      <StyledRating size="medium" value={rating} />
      <StyledComment>{comment}</StyledComment>
    </StyledReviewWrapper>
  );
}

export { Review };

const StyledReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledUserMeta = styled(UserMeta)`
  margin-bottom: 12px;
`;

const StyledRating = styled(Rating)`
  margin-bottom: 12px;
`;

const StyledComment = withAttrs(
  { variant: 'body-3', $color: Color.WHITE_70 },
  Typography,
);
