import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { withAttrs } from '~/shared/ui/withAttrs';
import { CardCommentWidget } from '~/widgets/user/cardComment/CardCommentWidget';
import { Gallery } from '~/widgets/user/gallery';
import { NewCollection } from '~/widgets/user/newCollection';
import { ReviewsWidget } from '~/widgets/user/reviews';

import { StoreSectionMenu, storeSectionMenu } from './storeSectionConfig';
import { storeSectionData } from './storeSectionData';

const Section: Record<StoreSectionMenu, JSX.Element> = {
  happyClients: <CardCommentWidget {...storeSectionData.happyClients} />,
  posts: (
    <>
      <NewCollection />
      <Gallery />
    </>
  ),
  reviews: (
    <div>
      <ReviewsWidget {...storeSectionData.reviews} />
    </div>
  ),
};

function StoreSection(): JSX.Element {
  const [category, setCategory] = useState<StoreSectionMenu>('reviews');

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
