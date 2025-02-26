import styled from '@emotion/styled';
import { JSX } from 'react';

import { LogWidget } from '~/widgets/user/LogWidget';
import { TopBar } from '~/widgets/user/topBar';

import { userPageData } from './userPageData';

function UserPage(): JSX.Element {
  return (
    <StyledUserPageContainer>
      <TopBar {...userPageData.header} />
      <LogWidget />
    </StyledUserPageContainer>
  );
}

export { UserPage };

const StyledUserPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: 100%;
  max-width: 952px;
  margin: 0 auto;
`;
