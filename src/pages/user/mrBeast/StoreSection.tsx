import styled from '@emotion/styled';
import { JSX, useState } from 'react';

import { LabelButton } from '~/shared/ui/atoms/LabelButton';
import { withAttrs } from '~/shared/ui/withAttrs';
import { Gallery } from '~/widgets/user/gallery';
import { NewCollection } from '~/widgets/user/newCollection';

type MenuItem = 'posts' | 'happyClients' | 'reviews';

const menuButtons = [
  { label: 'Posts', value: 'posts' },
  { label: 'Happy Clients', value: 'happyClients' },
  { label: 'Reviews', value: 'reviews' },
] as const;

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
      {category === 'happyClients' && <div>Happy Clients</div>}
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
