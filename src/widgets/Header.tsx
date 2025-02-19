import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { avatarImage } from '~/shared/assets/images/avatars';
import { commonImage } from '~/shared/assets/images/common';
import { AppRoute } from '~/shared/libs/router';
import { Color } from '~/shared/theme/colors';
import { Avatar } from '~/shared/ui/atoms/Avatar';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Input } from '~/shared/ui/atoms/Input';
import { Logotype } from '~/shared/ui/atoms/Logotype';
import { TypographyVariantToCss } from '~/shared/ui/atoms/Typography';
import { separatorLineCss } from '~/shared/ui/css/separatorLineCss';
import { withAttrs } from '~/shared/ui/withAttrs';

const MenuItems = [
  {
    title: 'Ukraine',
    route: AppRoute.UKRAINE,
    icon: commonImage.iconUkraine,
  },
  {
    title: 'Formula 1',
    route: AppRoute.F1,
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
      <StyledLogoWrapper>
        <StyledLogotype />
      </StyledLogoWrapper>
      <StyledContentWrapper>
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
          <Avatar size="small" src={avatarImage.currentUser} />
        </HeaderActions>
      </StyledContentWrapper>
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
  display: flex;
  align-items: center;
`;

const StyledLogoWrapper = styled.div`
  width: 100%;
  width: 281px;
  padding: 16px 8px;
  border-right: 1px solid ${Color.WHITE_8};
`;

const StyledLogotype = styled(Logotype)`
  padding-left: 12px;
  ${separatorLineCss(17)}
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  padding: 24px 48px 12px;
  ${separatorLineCss(0)}
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
  ${TypographyVariantToCss['body-3']}

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
