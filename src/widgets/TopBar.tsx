import styled from '@emotion/styled';
import { JSX, PropsWithChildren } from 'react';

import { Color } from '~/shared/theme/colors';
import { Radius } from '~/shared/theme/radiuses';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { Input } from '~/shared/ui/atoms/Input';
import { NavigationSelect } from '~/shared/ui/molecules/NavigationSelect';
import { withAttrs } from '~/shared/ui/withAttrs';

type TopBarProps = PropsWithChildren<{
  className?: string;
}>;

function TopBar({ className, children }: TopBarProps): JSX.Element {
  return (
    <StyledTopBar className={className}>
      <StyledSelectsWrapper>
        <NavigationSelect />
        {children}
      </StyledSelectsWrapper>
      <HeaderActions>
        <StyledNotification>
          <Icon size="medium" name="icon-filter" />
        </StyledNotification>
        <StyledSearch
          placeholder="Search"
          leftIcon={<Icon name="icon-search" />}
        />
        <StyledMoneyButton>
          <Icon name="icon-circle-dollar-sign" />
        </StyledMoneyButton>
      </HeaderActions>
    </StyledTopBar>
  );
}

export { TopBar };

const StyledTopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 16px 24px;
  border-radius: ${Radius.RADIUS_8};

  background-color: ${Color.DARK};
`;

const StyledSelectsWrapper = styled.div`
  display: flex;
  gap: 16px;
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
  height: 40px;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StyledMoneyButton = withAttrs(
  {
    color: 'accent',
    variant: 'filled',
    size: 'medium',
  },
  styled(IconButton)`
    width: 40px;
    height: 40px;
    background-color: ${Color.GREEN_2};

    &:hover,
    &:focus {
      background-color: ${Color.GREEN_1};
    }

    &:active {
      background-color: ${Color.GREEN_3};
    }

    svg {
      width: 40px;
      height: 40px;
    }
  `,
);
