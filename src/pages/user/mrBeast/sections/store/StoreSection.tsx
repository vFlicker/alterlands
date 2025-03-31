import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { withAttrs } from '~/shared/ui/withAttrs';
import { CardCommentWidget } from '~/widgets/user/cardComment/CardCommentWidget';
import { Gallery } from '~/widgets/user/gallery';
import { NewCollection } from '~/widgets/user/newCollection';
import { ReviewsWidget } from '~/widgets/user/reviews';
import { TrustpilotReviewsWidget } from '~/widgets/user/trustpilotReviews';

import { StoreSectionMenu, storeSectionMenu } from './storeSectionConfig';
import { storeSectionData } from './storeSectionData';

function StoreSection(): JSX.Element {
  const [category, setCategory] = useState<StoreSectionMenu>('posts');

  return (
    <StyledStoreSectionWrapper>
      <StyledMenuList>
        {storeSectionMenu.map(({ label, value }) => (
          <StyledLabelButton
            key={value}
            active={category === value}
            onClick={() => setCategory(value)}
          >
            {label}
          </StyledLabelButton>
        ))}
      </StyledMenuList>

      {Section[category]}
    </StyledStoreSectionWrapper>
  );
}

export { StoreSection };

const StyledStoreSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const StyledMenuList = styled.div`
  margin-top: -8px;
  padding: 0 8px;
`;

const StyledLabelButton = withAttrs({ color: 'white' }, LabelButton);

const StyledReviewSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  align-items: start;
`;

const Section: Record<StoreSectionMenu, JSX.Element> = {
  happyClients: <CardCommentWidget {...storeSectionData.happyClients} />,
  posts: (
    <>
      <NewCollection />
      <Gallery />
    </>
  ),
  reviews: (
    <StyledReviewSection>
      <ReviewsWidget {...storeSectionData.reviews} />
      <TrustpilotReviewsWidget widgetTitle="Trustpilot reviews" rating={3} />
    </StyledReviewSection>
  ),
};
