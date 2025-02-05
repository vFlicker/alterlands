import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Image } from '~/shared/assets/images';
import { AppRoute } from '~/shared/libs/router';
import { Color } from '~/shared/theme/colors';
import { Avatar } from '~/shared/ui/atoms/Avatar';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Input } from '~/shared/ui/atoms/Input';
import { withAttrs } from '~/shared/ui/withAttrs';

const MenuItems = [
  {
    title: 'Ukraine',
    route: AppRoute.UKRAINE,
    icon: Image.other.iconUkraine,
  },
  {
    title: 'Formula 1',
    route: AppRoute.FORMULA_1,
    icon: null,
  },
  {
    title: 'US Politics',
    route: AppRoute.US_POLITICS,
    icon: null,
  },
  {
    title: 'UI Kit',
    route: AppRoute.UI_KIT,
    icon: null,
  },
];

function Header(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <StyledHeader>
      <HeaderTags>
        {MenuItems.map(({ icon, route, title }) => (
          <HeaderTag key={route} to={route} isActive={pathname === route}>
            {icon && <img src={icon} alt={title} />} {title}
          </HeaderTag>
        ))}
      </HeaderTags>
      <HeaderActions>
        <StyledNotification>
          <Icon size="medium" name="icon-notification" />
        </StyledNotification>
        <StyledSearch
          placeholder="Search"
          leftIcon={<Icon name="icon-search" />}
        />
        <Avatar size="small" src={Image.avatar.currentUser} />
      </HeaderActions>
    </StyledHeader>
  );
}

export { Header };

const activeTag = css`
  color: ${Color.WHITE_98};
  font-weight: 500;
`;

const StyledHeader = styled.header`
  background-color: ${Color.DARK};
  padding: 24px 48px 11px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${Color.WHITE_8};
`;

const HeaderTags = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  & > div:not(:last-child) {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      right: -12px;

      display: block;
      width: 1px;
      height: 24px;

      background-color: ${Color.WHITE_16};
    }
  }
`;

const HeaderTag = styled(Link)<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;

  color: ${Color.WHITE_64};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.43;

  ${({ isActive = false }) => isActive && activeTag}
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const StyledNotification = withAttrs(
  {
    variant: 'filled',
    size: 'small',
    color: 'transparent',
  },
  styled(IconButton)`
    svg {
      stroke: ${Color.WHITE_87};
    }

    &:hover {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);

const StyledSearch = styled(Input)`
  width: 240px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
