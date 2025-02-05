import styled from '@emotion/styled';
import { JSX } from 'react';

import { Header } from '~/widgets/Header';
import { Sidebar } from '~/widgets/sidebar';

import { withProviders } from './providers';
import { Routing } from './Routing';

function App(): JSX.Element {
  return (
    <StyledWrapper>
      <Sidebar />
      <MainContent>
        <Header />
        <StyledMain>
          <Routing />
        </StyledMain>
      </MainContent>
    </StyledWrapper>
  );
}

export const AppWithProviders = withProviders(App);

const StyledWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: 1;
  padding: 24px;
`;
