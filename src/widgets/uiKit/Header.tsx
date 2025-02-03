import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { JSX } from 'react';

import { currentUserImage, iconUkraine } from '~/shared/assets/images';
import { Color } from '~/shared/theme/colors';
import { Avatar } from '~/shared/ui/Avatar';
import { Icon } from '~/shared/ui/Icon';
import { IconButton } from '~/shared/ui/IconButton';
import { Input } from '~/shared/ui/Input';
import { withAttrs } from '~/shared/ui/withAttrs';

function Header(): JSX.Element {
  return (
    <StyledHeader>
      <HeaderTags>
        <HeaderTag isActive>
          <img src={iconUkraine} alt="Ukraine" /> Ukraine
        </HeaderTag>
        <HeaderTag>Formula 1</HeaderTag>
        <HeaderTag>US Politics</HeaderTag>
      </HeaderTags>
      <HeaderActions>
        <StyledNotification>
          <Icon size="medium" name="icon-notification" />
        </StyledNotification>
        <StyledSearch
          placeholder="Search"
          leftIcon={<Icon name="icon-search" />}
        />
        <Avatar size="small" src={currentUserImage} />
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

const HeaderTag = styled.div<{ isActive?: boolean }>`
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
