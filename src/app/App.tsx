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
          <div className="content">
            <div>TopBar</div>
            <div>ContentSection</div>
          </div>
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
  flex: 1;
  display: flex;
`;

const StyledMain = styled.main`
  flex: 1;
  padding: 24px;
`;
