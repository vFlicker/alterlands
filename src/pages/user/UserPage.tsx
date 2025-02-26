import styled from '@emotion/styled';
import { JSX } from 'react';

import { TopBar } from '~/widgets/user/topBar';

import { userPageData } from './userPageData';

function UserPage(): JSX.Element {
  return (
    <StyledUserPageContainer>
      <TopBar {...userPageData.header} />
    </StyledUserPageContainer>
  );
}

export { UserPage };

const StyledUserPageContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 952px;
  margin: 0 auto;
`;
