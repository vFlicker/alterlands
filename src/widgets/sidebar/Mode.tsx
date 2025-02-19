import styled from '@emotion/styled';
import { JSX } from 'react';

import { Color } from '~/shared/theme/colors';
import { Icon } from '~/shared/ui/atoms/Icon';
import { IconButton } from '~/shared/ui/atoms/IconButton';
import { SideBarWidgetHeader } from '~/shared/ui/molecules/SideBarWidgetHeader';
import { withAttrs } from '~/shared/ui/withAttrs';

const navItems = [
  { icon: 'icon-education', title: 'Education' },
  { icon: 'icon-job', title: 'Job' },
  { icon: 'icon-plane', title: 'Travel' },
  { icon: 'icon-plus', title: 'Add mode' },
] as const;

function ModeList(): JSX.Element {
  return (
    <StyledModeListWrapper>
      <SideBarWidgetHeader title="Mode" onButtonClick={() => {}} />

      <StyledNavList>
        {navItems.map(({ icon, title }) => (
          <StyledButton key={title}>
            <Icon name={icon} />
          </StyledButton>
        ))}
      </StyledNavList>
    </StyledModeListWrapper>
  );
}

export { ModeList };

const StyledModeListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const StyledNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2px;
`;

const StyledButton = withAttrs(
  {
    color: 'transparent',
    variant: 'filled',
    size: 'large',
  },
  styled(IconButton)`
    svg {
      stroke: ${Color.WHITE_87};
    }

    &:hover,
    &:focus {
      svg {
        stroke: ${Color.WHITE_98};
      }
    }
  `,
);
