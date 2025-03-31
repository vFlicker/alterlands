import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { withAttrs } from '~/shared/ui/withAttrs';
import { CardCommentWidget } from '~/widgets/user/cardComment/CardCommentWidget';
import { Gallery } from '~/widgets/user/gallery';
import { NewCollection } from '~/widgets/user/newCollection';
import { ReviewsWidget } from '~/widgets/user/reviews';
import { TrustpilotReviewsWidget } from '~/widgets/user/trustpilotReviews';

import { BurgerSectionMenu, burgerSectionMenu } from './burgerSectionConfig';
import { burgerSectionData } from './burgerSectionData';

function BurgerSection(): JSX.Element {
  const [category, setCategory] = useState<BurgerSectionMenu>('posts');

  return (
    <StyledBurgerSectionWrapper>
      <StyledMenuList>
        {burgerSectionMenu.map(({ label, value }) => (
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
    </StyledBurgerSectionWrapper>
  );
}

export { BurgerSection };

const StyledBurgerSectionWrapper = styled.div`
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

const Section: Record<BurgerSectionMenu, JSX.Element> = {
  happyClients: <CardCommentWidget {...burgerSectionData.happyClients} />,
  posts: (
    <>
      <NewCollection {...burgerSectionData.newCollection} />
      <Gallery {...burgerSectionData.gallery} />
    </>
  ),
  reviews: (
    <StyledReviewSection>
      <ReviewsWidget {...burgerSectionData.reviews} />
      <TrustpilotReviewsWidget widgetTitle="Trustpilot reviews" rating={4} />
    </StyledReviewSection>
  ),
};
