import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { Typography } from '~/shared/ui/atoms/Typography';
import { withAttrs } from '~/shared/ui/withAttrs';

const navItems = [
  { icon: 'icon-users', title: 'Friends' },
  { icon: 'icon-layout-dashboard', title: 'Workspace' },
  { icon: 'icon-vote', title: 'Votes' },
  { icon: 'icon-monitor-smartphone', title: 'Apps' },
  { icon: 'icon-wallet', title: 'Wallet' },
  { icon: 'icon-play', title: 'Ads' },
] as const;

function NavList(): JSX.Element {
  return (
    <StyledNav>
      {navItems.map(({ icon, title }) => (
        <StyledNavItem key={title}>
          <Icon name={icon} />
          <StyledText>{title}</StyledText>
        </StyledNavItem>
      ))}
    </StyledNav>
  );
}

export { NavList };

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const StyledNavItem = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 8px 12px;

  cursor: pointer;

  svg {
    stroke: ${Color.WHITE_87};
  }

  &:hover,
  &:focus,
  &:active {
    svg {
      stroke: ${Color.WHITE_98};
    }
  }
`;

const StyledText = withAttrs({ variant: 'body-3', as: 'span' }, Typography);
