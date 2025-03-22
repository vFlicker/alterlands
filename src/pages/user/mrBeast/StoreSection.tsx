import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { withAttrs } from '~/shared/ui/withAttrs';
import { CardCommentWidget } from '~/widgets/user/cardComment/CardCommentWidget';
import { Gallery } from '~/widgets/user/gallery';
import { NewCollection } from '~/widgets/user/newCollection';

type MenuItem = 'posts' | 'happyClients' | 'reviews';

const menuButtons = [
  { label: 'Posts', value: 'posts' },
  { label: 'Happy Clients', value: 'happyClients' },
  { label: 'Reviews', value: 'reviews' },
] as const;

const initialData = [
  {
    id: 1,
    date: '2023-10-01',
    viewCount: '1000',
    fullName: 'John Doe',
    image: 'image1.jpg',
    avatar: 'avatar1.jpg',
    likesCount: '100',
    messagesCount: '10',
    reposts: '5',
    comment: 'Great service!',
  },
  // Add more data as needed
];

function StoreSection(): JSX.Element {
  const [category, setCategory] = useState<MenuItem>('happyClients');

  return (
    <StyledStoreSectionWrapper>
      <StyledMenuList>
        {menuButtons.map(({ label, value }) => (
          <StyledLabelButton
            key={value}
            active={category === value}
            onClick={() => setCategory(value)}
          >
            {label}
          </StyledLabelButton>
        ))}
      </StyledMenuList>

      {category === 'posts' && (
        <>
          <NewCollection />
          <Gallery />
        </>
      )}
      {category === 'happyClients' && (
        <CardCommentWidget
          widgetTitle="Happy Clients"
          data={[...initialData]}
        />
      )}
      {category === 'reviews' && <div>Reviews</div>}
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
