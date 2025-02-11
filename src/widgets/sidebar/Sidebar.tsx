import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Logotype } from '~/shared/ui/atoms/Logotype';

import { Footer } from './Footer';
import { ModeList } from './Mode';
import { NavigationPanel } from './NavigationPanel';
import { NavList } from './NavList';
import { ProfileType } from './ProfileType';

function Sidebar(): JSX.Element {
  return (
    <StyledSidebarWrapper>
      <StyledLogotype />
      <NavigationPanel />
      <NavList />
      <ProfileType />
      <ModeList />
      <Footer />
    </StyledSidebarWrapper>
  );
}

export { Sidebar };

const StyledSidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 34px;
  flex-shrink: 0;

  width: 281px;
  padding: 16px 8px;
  border-right: 1px solid ${Color.WHITE_8};

  background-color: ${Color.DARK};

  & > *:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -16px;
      left: 0;

      display: block;
      width: 100%;
      height: 1px;

      background-color: ${Color.WHITE_8};
    }
  }
`;

const StyledLogotype = styled(Logotype)`
  padding: 0px 12px 1px;
`;
