import styled from '@emotion/styled';
import { JSX } from 'react';

import { Header } from '~/widgets/Header';
import { Sidebar } from '~/widgets/sidebar';

import { withProviders } from './providers';
import { Routing } from './Routing';

function App(): JSX.Element {
  return (
    <StyledAppWrapper>
      <Header />
      <MainContent>
        <Sidebar />
        <StyledMain>
          <Routing />
        </StyledMain>
      </MainContent>
    </StyledAppWrapper>
  );
}

export const AppWithProviders = withProviders(App);

const StyledAppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
`;

const StyledMain = styled.main`
  max-width: 1640px;
  margin: 0 auto;
  padding: 24px;
  overflow-x: hidden;
`;
