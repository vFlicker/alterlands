import styled from '@emotion/styled';
import { JSX } from 'react';

import { Gallery } from '~/widgets/user/gallery';
import { NewCollection } from '~/widgets/user/newCollection';

function StoreSection(): JSX.Element {
  return (
    <StyledStoreSectionWrapper>
      <NewCollection />
      <Gallery />
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
